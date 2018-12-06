"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const db_1 = require("../config/db");
const Sequelize = require("sequelize");
const Sys_User = db_1.default.define('user', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    username: {
        type: Sequelize.STRING,
    },
    email: {
        type: Sequelize.STRING
    },
    password: {
        type: Sequelize.STRING
    }
}, {
    timestamps: false,
    freezeTableName: true // 模型名字与表名相同
});
exports.Sys_User = Sys_User;
exports.default = {
    createUser(user) {
        return __awaiter(this, void 0, void 0, function* () {
            return Sys_User.create({
                id: user.id,
                username: user.username,
                email: user.email,
                password: user.password
            });
        });
    },
    getOne: Sys_User.findById,
};
//# sourceMappingURL=sys.user.model.js.map