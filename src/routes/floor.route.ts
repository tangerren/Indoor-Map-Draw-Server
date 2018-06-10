import * as restify from 'restify';
import { getInfo, setInfo } from '../controllers/floor'

export default (api: restify.Server) => {
	api.get('/floor/getInfo/:floorId', getInfo)
	api.get('/floor/setInfo', setInfo)
};