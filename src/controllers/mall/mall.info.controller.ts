import * as restify from 'restify';
import { logger } from '../../utils/logger';
import * as Mall from '../../model/mall.model';


// 获取信息
function getInfo(req: restify.Request, res: restify.Response, next: restify.Next) {
	Mall.default.getOne({ id: req.params.mallId }).then((rsbd) => {
		logger.info('getMall by id success');
		res.json(200, rsbd.dataValues);
	}).catch((err) => {
		logger.info('getMall by id failed');
		res.json(200, '获取数据Mall失败');
	});
	return next();
}

// 设置信息
function setInfo(req: restify.Request, res: restify.Response, next: restify.Next) {
	Mall.default.createUser({
		name: "嘉华大厦",
		date: "2018-05-27",
		creator: "王丽",
		address: "博古街36号",
		id: Math.ceil(Math.random() * Math.random() * 1000).toString(),
		startFloor: 0,
		endFloor: 0,
		floors: 0,
		pName: "王丽",
		pTel: "15320283736"
	}).then((mes) => {
		logger.info('add mall success');
		res.json(200, mes);
	}).catch((e) => {
		logger.error({ "add mallfailed,ERROR SYNCING WITH DB": e });
		res.json(200, '添加数据Mall失败');
	});
	return next();
}

export { getInfo, setInfo }
