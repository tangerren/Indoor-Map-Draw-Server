
import * as restify from "restify";
// import { config } from './config/env';
// import { app } from './config/restify';
// import { logger } from './utils/logger';

// logger.info(`Connected to database: ${config.db}`);

// app.listen(config.port, () => {
// 	logger.info(`${config.name} is running at ${app.url}`);
// });

// export { app };



function respond(req, res, next) {
	res.send('hello ' + req.params.name);
	next();
}

var server = restify.createServer();
server.get('/hello/:name', respond);
server.head('/hello/:name', respond);

server.listen(5000, function () {
	console.log('%s listening at %s', server.name, server.url);
});