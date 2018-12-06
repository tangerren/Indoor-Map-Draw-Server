import * as restify from 'restify';
import { logger } from '../../utils/logger';
import * as Floor from '../../model/floor.model';


// 获取信息列表
function getFloorByMall(req: restify.Request, res: restify.Response, next: restify.Next) {
	Floor.default.getOne({ mall_id: req.params.mallId }).then((rsbd) => {
		logger.info('get Floor by mall_id success');
		res.json(200, rsbd.dataValues);
	}).catch((err) => {
		logger.info('get Floor by mall_id failed');
		res.json(200, '获取数据Floor失败：' + err.message);
	});
	return next();
}


export { getFloorByMall }
