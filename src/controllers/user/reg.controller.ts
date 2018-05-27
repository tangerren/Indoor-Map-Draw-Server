
import * as restify from 'restify';
import { logger } from '../../utils/logger';
import db from '../../config/db';
import { Sys_User } from '../../model/sys.user.model';

function regUser(req: restify.Request, res: restify.Response, next: restify.Next) {
	
	db.sync().then(function () {
		Sys_User.create({
			username: "Mark Benson",
			email: "112@qq.com",
			password: "555-534-2342"
		});
		logger.info('reg success');
		res.json(200, '注册成功！');

	}).catch(function (e) {
		res.json(200, '注册失败！');
		logger.error({ "ERROR SYNCING WITH DB": e });
	});

	return next();
}

export { regUser }



