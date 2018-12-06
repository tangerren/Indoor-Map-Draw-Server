import * as restify from 'restify';
import { logger } from '../../utils/logger';

function logout(req: restify.Request, res: restify.Response, next: restify.Next) {
  logger.info('logout');
  res.json(200, '退出成功');
  return next();
}

export { logout }
