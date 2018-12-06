import * as restify from 'restify';
import { logger } from '../../utils/logger';
import * as Mall from '../../model/mall.model';


function getList(req: restify.Request, res: restify.Response, next: restify.Next) {

	Mall.default.getAll().then(malls => {
		res.json(200, '获取数据Mall成功' + malls.toString());
		logger.info('getMall by id success');
	}).catch(err => {
		res.json(200, '获取数据Mall失败' + err.message);
		logger.info('getMall by id failed:' + err);
	});

	return next();
}



export { getList }
