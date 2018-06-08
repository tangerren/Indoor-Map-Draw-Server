"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const logger_1 = require("../../utils/logger");
const Mall = require("../../model/mall.model");
// 获取信息
function getInfo(req, res, next) {
    Mall.default.getOne({ id: req.params.mallId }).then((rsbd) => {
        logger_1.logger.info('getMall by id success');
        res.json(200, rsbd.dataValues);
    }).catch((err) => {
        logger_1.logger.info('getMall by id failed');
        res.json(200, '获取数据Mall失败');
    });
    return next();
}
exports.getInfo = getInfo;
// 设置信息
function setInfo(req, res, next) {
    Mall.default.createUser({
        name: "嘉华大厦",
        date: "2018-05-27",
        creator: "王丽",
        address: "博古街36号",
        id: Math.ceil(Math.random() * Math.random() * 1000).toString(),
        startFloor: 0,
        endFloor: 0,
        floors: 0,
        pName: "王丽",
        pTel: "15320283736"
    }).then((mes) => {
        logger_1.logger.info('add mall success');
        res.json(200, mes);
    }).catch((e) => {
        logger_1.logger.error({ "add mallfailed,ERROR SYNCING WITH DB": e });
        res.json(200, '添加数据Mall失败');
    });
    return next();
}
exports.setInfo = setInfo;
//# sourceMappingURL=mall.info.controller.js.map