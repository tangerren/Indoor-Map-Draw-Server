import * as restify from 'restify';
import { logger } from '../utils/logger';

function base(req: restify.Request, res: restify.Response, next: restify.Next) {
	logger.info('根目录');
	res.json(200, 'Welcome World！');
	return next();
}

export { base }
