
import * as restify from "restify";

export let server = restify.createServer();

server.use(restify.plugins.acceptParser(server.acceptable));
server.use(restify.plugins.queryParser());
server.use(restify.plugins.bodyParser());

server.get('/', (req, res, next) => {
	res.send(req.params);
	next();
});

server.listen(3000, () => {
	console.log('%s listening at %s', server.name, server.url);
});

console.log('Server running on port 3000');
