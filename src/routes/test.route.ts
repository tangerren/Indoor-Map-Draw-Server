import * as restify from 'restify';
import * as controller from '../controllers/test.controller';
 
export default (api: restify.Server) => {
	api.get('/versioned', restify.plugins.conditionalHandler([
		{ version: '1.2.0', handler: controller.testV1 },
		{ version: ['2.0.0', '2.1.0', '2.2.0'], handler: controller.testV2 }
	]));
};
