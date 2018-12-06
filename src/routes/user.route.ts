import * as restify from 'restify';
import { login, logout, regUser } from '../controllers/user'

export default (api: restify.Server) => {
  // curl http://localhost:5000/login
  api.get('/login', login);
  // curl http://localhost:5000/logout
  api.get('/logout', logout);
  // curl http://localhost:5000/reg
  api.get('/reg', regUser);
};