"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const logger_1 = require("../utils/logger");
function login(req, res, next) {
    logger_1.logger.info('login');
    res.json(200, 'login');
    return next();
}
exports.login = login;
//# sourceMappingURL=login.controller.js.map