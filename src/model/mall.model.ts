import db from '../config/db';
import * as Sequelize from 'sequelize';


const Mall = db.define<any, IMall>('MALL', {
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
		timestamps: false, // 关闭时间戳
		freezeTableName: true // 模型名字与表名相同
	});


interface IMall {
	name: string,
	date: string,
	creator: string,
	address: string,
	id: string,
	startFloor: number,
	endFloor: number,
	floors: number,
	pName: string,
	pTel: string
}

export default {
	// 添加数据
	async createUser(mall: IMall) {
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
	},
	async getOne(parm) {
		return Mall.findOne(parm)
	},
	async getAll() {
		return Mall.findAll()
	}
}