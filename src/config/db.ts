import * as Sequelize from 'sequelize';
import { resolve } from 'path';

const db = new Sequelize('db', null, null, {
	dialect: 'sqlite',
	storage: resolve(__dirname, '../../db/indoor_map.db')
});

db.authenticate().then(() => {
	console.log(new Date().toLocaleString() + ' 数据库连接成功');
}).catch(err => {
	console.error(new Date().toLocaleString() + ' 数据库连接失败，原因：', err);
});
export default db;