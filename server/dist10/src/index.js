"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const application_1 = require("./application");
exports.BlogApplication = application_1.BlogApplication;
async function main(options = {}) {
    const app = new application_1.BlogApplication(options);
    await app.boot();
    await app.start();
    const url = app.restServer.url;
    console.log(`Server is running at ${url}`);
    return app;
}
exports.main = main;
//# sourceMappingURL=index.js.map