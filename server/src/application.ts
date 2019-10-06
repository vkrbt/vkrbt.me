import {BootMixin} from '@loopback/boot';
import {ApplicationConfig} from '@loopback/core';
import {RepositoryMixin} from '@loopback/repository';
import {RestApplication} from '@loopback/rest';
import {RestExplorerBindings, RestExplorerComponent} from '@loopback/rest-explorer';
import {ServiceMixin} from '@loopback/service-proxy';
import {AuthenticationComponent} from '@loopback/authentication';
import {MySequence} from './sequence';
import { AuthenticationBindings } from '@loopback/authentication';
import { MyAuthMetadataProvider, MyAuthActionProvider, MyAuthBindings, MyAuthAuthenticationStrategyProvider } from './auth';

export class BlogApplication extends BootMixin(
  ServiceMixin(RepositoryMixin(RestApplication)),
) {
  constructor(options: ApplicationConfig = {}) {
    super(options);

    // Set up the custom sequence
    this.sequence(MySequence);

    this.bind(RestExplorerBindings.CONFIG).to({
      path: '/explorer',
    });
    this.component(RestExplorerComponent);

    this.component(AuthenticationComponent);
    this.bind(AuthenticationBindings.METADATA).toProvider(MyAuthMetadataProvider);
    this.bind(MyAuthBindings.STRATEGY).toProvider(MyAuthAuthenticationStrategyProvider);
    this.bind(AuthenticationBindings.AUTH_ACTION).toProvider(MyAuthActionProvider);

    this.projectRoot = __dirname;
    // Customize @loopback/boot Booter Conventions here
    this.bootOptions = {
      controllers: {
        // Customize ControllerBooter Conventions here
        dirs: ['controllers'],
        extensions: ['.controller.js'],
        nested: true,
      },
    };
  }
}
