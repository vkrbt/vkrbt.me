"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const boot_1 = require("@loopback/boot");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const rest_explorer_1 = require("@loopback/rest-explorer");
const service_proxy_1 = require("@loopback/service-proxy");
const sequence_1 = require("./sequence");
const authentication_1 = require("@loopback/authentication");
const auth_1 = require("./auth");
class BlogApplication extends boot_1.BootMixin(service_proxy_1.ServiceMixin(repository_1.RepositoryMixin(rest_1.RestApplication))) {
    constructor(options = {}) {
        super(options);
        // Set up the custom sequence
        this.sequence(sequence_1.MySequence);
        this.bind(rest_explorer_1.RestExplorerBindings.CONFIG).to({
            path: '/explorer',
        });
        this.component(rest_explorer_1.RestExplorerComponent);
        // this.component(AuthenticationComponent);
        this.bind(authentication_1.AuthenticationBindings.METADATA).toProvider(auth_1.MyAuthMetadataProvider);
        this.bind(auth_1.MyAuthBindings.STRATEGY).toProvider(auth_1.MyAuthAuthenticationStrategyProvider);
        this.bind(authentication_1.AuthenticationBindings.AUTH_ACTION).toProvider(auth_1.MyAuthActionProvider);
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
exports.BlogApplication = BlogApplication;
//# sourceMappingURL=application.js.map