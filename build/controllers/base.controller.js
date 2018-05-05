"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const logger_1 = require("../utils/logger");
function base(req, res, next) {
    logger_1.logger.info('根目录');
    res.json(200, 'Welcome World！');
    return next();
}
exports.base = base;
//# sourceMappingURL=base.controller.js.map