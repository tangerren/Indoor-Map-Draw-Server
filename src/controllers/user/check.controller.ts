import * as restify from 'restify';
import { logger } from '../../utils/logger';

function login(req: restify.Request, res: restify.Response, next: restify.Next) {
  logger.info('login');
  res.json(200, 'login');
  return next();
}

// 检测是否在线
function check() {

}


export { login }
