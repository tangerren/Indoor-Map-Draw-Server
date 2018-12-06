"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = require("./config/config");
const restify_1 = require("./config/restify");
exports.app = restify_1.app;
const logger_1 = require("./utils/logger");
logger_1.logger.info(`连接至数据库: ${config_1.config.db}`);
restify_1.app.listen(config_1.config.port, () => {
    logger_1.logger.info(`${config_1.config.name} is running at ${restify_1.app.url}`);
});
//# sourceMappingURL=server.js.map