import * as restify from 'restify';
import { getInfo, setInfo, getList } from '../controllers/mall'

export default (api: restify.Server) => {
	api.get('/mall/getInfo/:mallId', getInfo)
	api.get('/mall/setInfo', setInfo)
	api.get('/mall/getList', getList)
};