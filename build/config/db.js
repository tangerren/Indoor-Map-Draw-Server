"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Sequelize = require("sequelize");
const path_1 = require("path");
const sq = new Sequelize('db', null, null, {
    dialect: 'sqlite',
    storage: path_1.resolve(__dirname, '../../db/indoor_map.db')
});
exports.default = sq;
//# sourceMappingURL=db.js.map