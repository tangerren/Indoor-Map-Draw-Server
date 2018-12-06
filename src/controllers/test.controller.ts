import * as restify from 'restify';
import { logger } from '../utils/logger';

function testV1(req: restify.Request, res: restify.Response, next: restify.Next) {
	logger.info('testV1');
	res.json(200, '测试接口版本功能，返回指定的版本V1');
	return next();
}

function testV2(req: restify.Request, res: restify.Response, next: restify.Next) {
	logger.info('testV2');
	res.json(200, '测试接口版本功能，默认请求最新的版本V2');
	return next();
}

export { testV1, testV2 }
