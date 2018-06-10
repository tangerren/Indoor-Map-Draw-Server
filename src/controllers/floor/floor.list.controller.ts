import * as restify from 'restify';
import { logger } from '../../utils/logger';
import * as floor from '../../model/floor.model';


// 获取信息列表
function getFloors(req: restify.Request, res: restify.Response, next: restify.Next) {
	floor.default.getOne({ mall_id: req.params.mallId }).then((rsbd) => {
		logger.info('get Floor by mall_id success');
		res.json(200, rsbd.dataValues);
	}).catch((err) => {
		logger.info('get Floor by mall_id failed');
		res.json(200, '获取数据Floor失败');
	});
	return next();
}


export { getFloors }
