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
const Mall = db_1.default.define('MALL', {
    id: {
        type: Sequelize.INTEGER,
        field: 'ID',
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: Sequelize.STRING,
        field: 'NAME',
    },
    address: {
        type: Sequelize.STRING,
        field: 'ADDRESS',
    },
    startFloor: {
        type: Sequelize.INTEGER,
        field: 'FLOOR_START',
    },
    endFloor: {
        type: Sequelize.INTEGER,
        field: 'FLOOR_END',
    },
    floors: {
        type: Sequelize.INTEGER,
        field: 'FLOOR_NUM',
    },
    pName: {
        type: Sequelize.STRING,
        field: 'OWNER_NAME',
    },
    pTel: {
        type: Sequelize.STRING,
        field: 'OWNER_PHONE',
    },
    creator: {
        type: Sequelize.STRING,
        field: 'CREATOR',
    },
    date: {
        type: Sequelize.DATE,
        field: 'CREATE_DATE',
    },
}, {
    timestamps: false,
    freezeTableName: true // 模型名字与表名相同
});
exports.default = {
    // 添加数据
    createUser(mall) {
        return __awaiter(this, void 0, void 0, function* () {
            return Mall.create({
                id: mall.id,
                name: mall.name,
                address: mall.address,
                startFloor: mall.startFloor,
                endFloor: mall.endFloor,
                floors: mall.floors,
                pName: mall.pName,
                pTel: mall.pTel,
                creator: mall.creator,
                date: mall.date
            });
        });
    },
    getOne(parm) {
        return __awaiter(this, void 0, void 0, function* () {
            return Mall.findOne(parm);
        });
    },
    getAll() {
        return __awaiter(this, void 0, void 0, function* () {
            return Mall.findAll();
        });
    }
};
//# sourceMappingURL=mall.model.1.js.map