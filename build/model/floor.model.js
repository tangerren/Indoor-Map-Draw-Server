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
const Floor = db_1.default.define('Floor', {
    id: {
        type: Sequelize.STRING,
        field: 'ID',
        primaryKey: true,
        autoIncrement: true
    },
    mall_id: {
        type: Sequelize.STRING,
        field: 'MALL_ID',
    },
    floor_num: {
        type: Sequelize.INTEGER,
        field: 'FLOOR_NUM',
    },
    geojson: {
        type: Sequelize.STRING,
        field: 'GEO_JSON',
    },
    picture: {
        type: Sequelize.BLOB,
        field: 'PICTURE',
    }
}, {
    timestamps: false,
    freezeTableName: true // 模型名字与表名相同
});
exports.default = {
    // 添加数据
    create(floor) {
        return __awaiter(this, void 0, void 0, function* () {
            return Floor.create({
                id: floor.id,
                mall_id: floor.mall_id,
                floor_num: floor.floor_num,
                geojson: floor.geojson,
                picture: floor.picture
            });
        });
    },
    getOne(parm) {
        return __awaiter(this, void 0, void 0, function* () {
            return Floor.findOne({ "where": parm });
        });
    },
    getAll() {
        return __awaiter(this, void 0, void 0, function* () {
            return Floor.findAll();
        });
    }
};
//# sourceMappingURL=floor.model.js.map