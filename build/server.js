"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const env_1 = require("./config/env");
const restify_1 = require("./config/restify");
exports.app = restify_1.app;
const logger_1 = require("./utils/logger");
logger_1.logger.info(`Connected to database: ${env_1.config.db}`);
restify_1.app.listen(env_1.config.port, () => {
    logger_1.logger.info(`${env_1.config.name} is running at ${restify_1.app.url}`);
});
//# sourceMappingURL=server.js.map