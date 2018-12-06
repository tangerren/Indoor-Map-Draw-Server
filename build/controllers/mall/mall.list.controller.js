"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const logger_1 = require("../../utils/logger");
const Mall = require("../../model/mall.model");
function getList(req, res, next) {
    Mall.default.getAll().then(malls => {
        res.json(200, '获取数据Mall成功' + malls.toString());
        logger_1.logger.info('getMall by id success');
    }).catch(err => {
        res.json(200, '获取数据Mall失败' + err.message);
        logger_1.logger.info('getMall by id failed:' + err);
    });
    return next();
}
exports.getList = getList;
//# sourceMappingURL=mall.list.controller.js.map