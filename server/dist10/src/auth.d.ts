/// <reference types="express" />
import { Constructor, Provider, ValueOrPromise, Getter, Setter, BindingKey } from '@loopback/core';
import { AuthenticationMetadata, AuthenticateFn, AuthenticationStrategy } from '@loopback/authentication';
import { UserProfile } from '@loopback/security';
import { AuthMetadataProvider } from '@loopback/authentication/dist/providers/auth-metadata.provider';
import { UserRepository } from './repositories';
import { Request } from '@loopback/rest';
export declare const JWT_STRATEGY_NAME = "jwt";
export declare function secured(type?: SecuredType, // more on this below
strategy?: string, options?: object): MethodDecorator;
export declare enum SecuredType {
    IS_AUTHENTICATED = 0,
    PERMIT_ALL = 1,
    DENY_ALL = 2
}
export interface MyAuthenticationMetadata extends AuthenticationMetadata {
    type: SecuredType;
}
export declare class MyAuthMetadataProvider extends AuthMetadataProvider {
    protected _controllerClass: Constructor<{}>;
    protected _methodName: string;
    constructor(_controllerClass: Constructor<{}>, _methodName: string);
    value(): MyAuthenticationMetadata | undefined;
}
export declare const JWT_SECRET = "05756d410434b076d3b368d9e0df004c";
export interface Credentials {
    email: string;
    password: string;
}
export declare namespace MyAuthBindings {
    const STRATEGY: BindingKey<AuthenticationStrategy | undefined>;
}
export declare class MyAuthAuthenticationStrategyProvider implements Provider<AuthenticationStrategy | undefined> {
    private metadata;
    private userRepository;
    constructor(metadata: MyAuthenticationMetadata, userRepository: UserRepository);
    value(): ValueOrPromise<AuthenticationStrategy | undefined>;
    verifyToken(payload: Credentials, done: (err: Error | null, user?: UserProfile | false, info?: Object) => void): Promise<void>;
}
export declare class MyAuthActionProvider implements Provider<AuthenticateFn> {
    readonly getStrategy: Getter<AuthenticationStrategy>;
    readonly setCurrentUser: Setter<UserProfile>;
    readonly getMetadata: Getter<MyAuthenticationMetadata>;
    constructor(getStrategy: Getter<AuthenticationStrategy>, setCurrentUser: Setter<UserProfile>, getMetadata: Getter<MyAuthenticationMetadata>);
    value(): AuthenticateFn;
    action(request: Request): Promise<UserProfile | undefined>;
}
