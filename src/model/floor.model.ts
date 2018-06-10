import db from '../config/db';
import * as Sequelize from 'sequelize';


const Floor = db.define<any, IFloor>('MALL', {
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
		timestamps: false, // 关闭时间戳
		freezeTableName: true // 模型名字与表名相同
	});


interface IFloor {
	id: string,
	mall_id: string,
	floor_num: number,
	geojson: string,
	picture: string
}

export default {
	// 添加数据
	async create(floor: IFloor) {
		return Floor.create({
			id: floor.id,
			mall_id: floor.mall_id,
			floor_num: floor.floor_num,
			geojson: floor.geojson,
			picture: floor.picture
		});
	},
	async getOne(parm) {
		return Floor.findOne(parm)
	},
	async getAll() {
		return Floor.findAll()
	}
}