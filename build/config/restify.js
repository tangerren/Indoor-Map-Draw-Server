"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs = require("fs");
const restify = require("restify");
const path = require("path");
const env_1 = require("./env");
const logger_1 = require("../utils/logger");
// get path to route handlers
const pathToRoutes = path.join(env_1.config.root, '/routes');
// create Restify server with the configured name
const app = restify.createServer({ name: env_1.config.name });
exports.app = app;
// parse the body of the request into req.params
app.use(restify.plugins.bodyParser());
// user-defined middleware
app.use((req, res, next) => {
    // Set permissive CORS header - this allows this server to be used only as
    // an API server in conjunction with something like webpack-dev-server.
    res.setHeader('Access-Control-Allow-Origin', '*');
    // disable caching so we'll always get the latest data
    res.setHeader('Cache-Control', 'no-cache');
    // log the request method and url
    logger_1.logger.info(`${req.method} ${req.url}`);
    // log the request body
    logger_1.logger.info(`Params: ${JSON.stringify(req.params)}`);
    return next();
});
// add route handlers
fs.readdir(pathToRoutes, (err, files) => {
    if (err) {
        throw new Error(err);
    }
    else {
        files
            .filter((file) => path.extname(file) === '.js')
            .forEach((file) => {
            const route = require(path.join(pathToRoutes, file));
            route.default(app);
        });
    }
});
//# sourceMappingURL=restify.js.map