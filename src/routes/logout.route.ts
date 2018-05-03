import * as restify from 'restify';
import { logout } from '../controllers/logout.controller';

export default (api: restify.Server) => {
  api.get('/logout', logout);
};
