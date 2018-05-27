import * as restify from 'restify';
import { login, logout, regUser } from '../controllers/user'

export default (api: restify.Server) => {
  api.get('/login', login);
  api.get('/logout', logout);
  api.get('/reg', regUser);
};