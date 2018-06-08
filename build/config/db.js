"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Sequelize = require("sequelize");
const path_1 = require("path");
const db = new Sequelize('db', null, null, {
    dialect: 'sqlite',
    storage: path_1.resolve(__dirname, '../../db/indoor_map.db')
});
db.authenticate().then(() => {
    console.log(new Date().toLocaleString() + ' 数据库连接成功');
}).catch(err => {
    console.error(new Date().toLocaleString() + ' 数据库连接失败，原因：', err);
});
exports.default = db;
//# sourceMappingURL=db.js.map