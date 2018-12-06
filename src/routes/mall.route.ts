import * as restify from 'restify';
import { getInfo, setInfo, getList } from '../controllers/mall'
import { getFloorByMall } from '../controllers/floor'

export default (api: restify.Server) => {
	// curl http://localhost:5000/mall/setInfo
	api.get('/mall/setInfo', setInfo)
	// curl http://localhost:5000/mall/getInfo/1
	api.get('/mall/getInfo/:mallId', getInfo)
	// curl http://localhost:5000/mall/getList
	api.get('/mall/getList', getList)
	// curl http://localhost:5000/mall/getFloors/1
	api.get('/mall/getFloors/:mallId', getFloorByMall)
};