import * as restify from 'restify';
import * as controller from '../controllers/reg.controller';

export default (api: restify.Server) => {
  api.get('/reg', controller.regUser);
};