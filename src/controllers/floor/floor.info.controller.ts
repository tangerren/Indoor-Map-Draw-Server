import * as restify from 'restify';
import { logger } from '../../utils/logger';
import * as floor from '../../model/floor.model';


// 获取信息
function getInfo(req: restify.Request, res: restify.Response, next: restify.Next) {
	floor.default.getOne({ id: req.params.floorId }).then((rsbd) => {
		logger.info('get Floor by id success');
		res.json(200, rsbd.dataValues);
	}).catch((err) => {
		logger.info('get Floor by id failed');
		res.json(200, '获取数据Floor失败');
	});
	return next();
}

// 设置信息
function setInfo(req: restify.Request, res: restify.Response, next: restify.Next) {
	floor.default.create({
		id: "嘉华大厦",
		mall_id: "2018-05-27",
		floor_num: Math.ceil(Math.random() * 10),
		geojson: "博古街36号",
		picture: Math.ceil(Math.random() * Math.random() * 1000).toString()
	}).then((mes) => {
		logger.info('add floor success');
		res.json(200, mes);
	}).catch((e) => {
		logger.error({ "add floor failed,ERROR SYNCING WITH DB": e });
		res.json(200, '添加数据Floor失败');
	});
	return next();
}

export { getInfo, setInfo }
