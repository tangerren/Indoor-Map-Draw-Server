import * as Sequelize from 'sequelize';
import { resolve } from 'path';

const sq = new Sequelize('db', null, null, {
	dialect: 'sqlite',
	storage: resolve(__dirname, '../../db/indoor_map.db')
});

export default sq;