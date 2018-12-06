import * as restify from 'restify';
import { logger } from '../../utils/logger';
var formidable = require('formidable');
var path = require('path');
var fs = require('fs');


// 获取信息列表
function uploadImage(req, res, next) {
	try {
		for (var key in req.files) {
			if (req.files.hasOwnProperty(key)) {
				//fs.renameSync(req.files[key].path, `${__dirname}/../../uploads/${req.files[key].name}`);
				//fs.unlink(req.files[key].path);
				var readStream = fs.createReadStream(req.files[key].path);
				var ext = req.files[key].type.substring(6);
				var writeStream = fs.createWriteStream(`${__dirname}/../../uploads/${key}.${ext}`);
				readStream.pipe(writeStream);
				readStream.on('end', function () {
					fs.unlinkSync(req.files[key].path);
				});
			}
		}
		logger.info('上传文件成功');
		res.send(202, { message: '上传文件成功' });
	} catch (err) {
		logger.info('上传文件失败：' + err.message);
		res.send(202, { message: '上传文件失败：' + err.message });
	}
	return next();
}


export { uploadImage }
