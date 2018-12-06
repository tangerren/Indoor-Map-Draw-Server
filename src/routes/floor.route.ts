import * as restify from 'restify';
import { getInfo, setInfo, uploadImage } from '../controllers/floor'

export default (api: restify.Server) => {
	api.get('/floor/getInfo/:floorId', getInfo)
	api.get('/floor/setInfo', setInfo)
	api.post('/floor/uploadImage', uploadImage)
	api.opts('/floor/uploadImage', uploadImage)
};