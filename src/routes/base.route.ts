import * as restify from 'restify';
import * as controller from '../controllers/base.controller';

export default (api: restify.Server) => {
	api.get('/', controller.base);
};