"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const logger_1 = require("../../utils/logger");
function logout(req, res, next) {
    logger_1.logger.info('logout');
    res.json(200, '退出成功');
    return next();
}
exports.logout = logout;
//# sourceMappingURL=logout.controller.js.map