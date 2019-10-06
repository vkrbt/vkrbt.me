import {
    MethodDecoratorFactory,
    inject,
    CoreBindings,
    Constructor,
    MetadataInspector,
    Provider,
    ValueOrPromise,
    Getter,
    Setter,
    BindingKey,
} from '@loopback/core';
import {
    AUTHENTICATION_METADATA_KEY,
    AuthenticationMetadata,
    AuthenticationBindings,
    AuthenticateFn,
    AuthenticationStrategy,
} from '@loopback/authentication';
import { UserProfile, securityId } from '@loopback/security';
import { StrategyAdapter } from '@loopback/authentication-passport';
import { AuthMetadataProvider } from '@loopback/authentication/dist/providers/auth-metadata.provider';
import { repository } from '@loopback/repository';
import { Request } from '@loopback/rest';
import { Strategy as JwtStrategy, ExtractJwt } from 'passport-jwt';
import {pbkdf2} from 'crypto';
import { UserRepository } from './repositories';

export const JWT_STRATEGY_NAME = 'jwt';
export const SALT_ITERATIONS = 10000;

export function hashString(password: string, salt: string): Promise<string> {
    return new Promise((resolve, reject) => {
        pbkdf2(password, salt, SALT_ITERATIONS, 64, 'sha512', (err, derivedKey) => {
            if (err) {
                return reject(err);
            };

            resolve(derivedKey.toString('hex'));
        });
    });
}

export function saltPassword(password: string, salt: string): Promise<string> {
    return hashString(password, salt);
}

// the decorator function, every required param has its own default
// so we can supply empty param when calling this decorartor.
// we will use 'secured' to match Spring Security annotation.
export function secured(
    type: SecuredType = SecuredType.IS_AUTHENTICATED, // more on this below
    strategy: string = 'jwt',
    options?: object,
) {
    // we will use a custom interface. more on this below
    return MethodDecoratorFactory.createDecorator<MyAuthenticationMetadata>(AUTHENTICATION_METADATA_KEY, {
        type,
        strategy,
        options,
    });
}

// enum for available secured type,
export enum SecuredType {
    IS_AUTHENTICATED, // any authenticated user
    PERMIT_ALL, // bypass security check, permit everyone
    DENY_ALL, // you shall not pass!
}

// extended interface of the default AuthenticationMetadata which only has `strategy` and `options`
export interface MyAuthenticationMetadata extends AuthenticationMetadata {
    type: SecuredType;
}

// metadata provider for `MyAuthenticationMetadata`. Will supply method's metadata when injected
export class MyAuthMetadataProvider extends AuthMetadataProvider {
    constructor(
        @inject(CoreBindings.CONTROLLER_CLASS, { optional: true }) protected _controllerClass: Constructor<{}>,
        @inject(CoreBindings.CONTROLLER_METHOD_NAME, { optional: true }) protected _methodName: string,
    ) {
        super(_controllerClass, _methodName);
    }

    value(): MyAuthenticationMetadata | undefined {
        if (!this._controllerClass || !this._methodName) return;
        return MetadataInspector.getMethodMetadata<MyAuthenticationMetadata>(
            AUTHENTICATION_METADATA_KEY,
            this._controllerClass.prototype,
            this._methodName,
        );
    }
}

export const JWT_SECRET = '05756d410434b076d3b368d9e0df004c';

// the required interface to filter login payload
export interface Credentials {
    email: string;
    password: string;
}

// implement custom namespace bindings
export namespace MyAuthBindings {
    export const STRATEGY = BindingKey.create<AuthenticationStrategy | undefined>('authentication.strategy');
}

// the strategy provider will parse the specifed strategy, and act accordingly
export class MyAuthAuthenticationStrategyProvider implements Provider<AuthenticationStrategy | undefined> {
    constructor(
        @inject(AuthenticationBindings.METADATA) private metadata: MyAuthenticationMetadata,
        @repository(UserRepository) private userRepository: UserRepository,
    ) { }

    value(): ValueOrPromise<AuthenticationStrategy | undefined> {
        if (!this.metadata) return;

        const { strategy } = this.metadata;
        if (strategy === JWT_STRATEGY_NAME) {
            const jwtStrategy = new JwtStrategy(
                {
                    secretOrKey: JWT_SECRET,
                    jwtFromRequest: ExtractJwt.fromExtractors([
                        ExtractJwt.fromAuthHeaderAsBearerToken(),
                    ]),
                },
                (payload, done) => this.verifyToken(payload, done),
            );

            // we will use Loopback's  StrategyAdapter so we can leverage passport's strategy
            // and also we don't have to implement a new strategy adapter.
            return new StrategyAdapter(jwtStrategy, JWT_STRATEGY_NAME);
        }
    }

    // verify JWT token and decryot the payload.
    // Then search user from database with id equals to payload's username.
    async verifyToken(
        payload: Credentials,
        done: (err: Error | null, user?: UserProfile | false, info?: Object) => void,
    ) {
        try {
            const { email } = payload;
            const user = await this.userRepository.findOne({ where: {email}});
            if (!user) {
                return done(null, false);
            }

            done(null, { name: email, email: user.email, [securityId]: email });
        } catch (err) {
            if (err.name === 'UnauthorizedError') done(null, false);
            done(err, false);
        }
    }
}

// the entry point for authentication.
export class MyAuthActionProvider implements Provider<AuthenticateFn> {
    constructor(
        @inject.getter(MyAuthBindings.STRATEGY) readonly getStrategy: Getter<AuthenticationStrategy>,
        @inject.setter(AuthenticationBindings.CURRENT_USER) readonly setCurrentUser: Setter<UserProfile>,
        @inject.getter(AuthenticationBindings.METADATA) readonly getMetadata: Getter<MyAuthenticationMetadata>,
    ) { }

    value(): AuthenticateFn {
        return request => this.action(request);
    }

    async action(request: Request): Promise<UserProfile | undefined> {
        const metadata = await this.getMetadata();
        if (metadata && metadata.type === SecuredType.PERMIT_ALL) return;

        const strategy = await this.getStrategy();
        if (!strategy) return;

        const user = await strategy.authenticate(request);
        if (!user) return;

        this.setCurrentUser(user);
        return user;
    }
}
