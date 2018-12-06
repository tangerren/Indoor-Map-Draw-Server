import * as restify from 'restify';
import * as controller from '../controllers/test.controller';
 
export default (api: restify.Server) => {
	// curl http://localhost:5000/versioned
	// curl -s -H 'accept-version: ~1' localhost:5000/versioned
	api.get('/versioned', restify.plugins.conditionalHandler([
		{ version: '1.2.0', handler: controller.testV1 },
		{ version: ['2.0.0', '2.1.0', '2.2.0'], handler: controller.testV2 }
	]));
};
