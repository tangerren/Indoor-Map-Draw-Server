import db from '../config/db';
import * as Sequelize from 'sequelize';


const Sys_User = db.define<any, IUser>('user', {
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
		timestamps: false, // 关闭时间戳
		freezeTableName: true // 模型名字与表名相同
	});


interface IUser {
	id: number,
	username: string,
	email: string,
	password: string
}

export default {
	async createUser(user: IUser) {
		return Sys_User.create({
			id: user.id,
			username: user.username,
			email: user.email,
			password: user.password
		});
	},

	getOne: Sys_User.findById,

}

export { Sys_User } 