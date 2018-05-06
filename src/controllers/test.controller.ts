import * as restify from 'restify';
import { logger } from '../utils/logger';

function testV1(req: restify.Request, res: restify.Response, next: restify.Next) {
	logger.info('testV1');
	res.json(200, 'Welcome testV1');
	return next();
}

function testV2(req: restify.Request, res: restify.Response, next: restify.Next) {
	logger.info('testV2');
	res.json(200, 'Welcome testV2');
	return next();
}

export { testV1, testV2 }
