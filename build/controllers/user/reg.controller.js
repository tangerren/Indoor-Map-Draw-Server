"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const logger_1 = require("../../utils/logger");
const db_1 = require("../../config/db");
const sys_user_model_1 = require("../../model/sys.user.model");
function regUser(req, res, next) {
    db_1.default.sync().then(function () {
        sys_user_model_1.Sys_User.create({
            id: 1,
            username: "Mark Benson",
            email: "112@qq.com",
            password: "555-534-2342"
        });
        logger_1.logger.info('reg success');
        res.json(200, '注册成功！');
    }).catch(function (e) {
        res.json(200, '注册失败！');
        logger_1.logger.error({ "ERROR SYNCING WITH DB": e });
    });
    return next();
}
exports.regUser = regUser;
//# sourceMappingURL=reg.controller.js.map