"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const restify = require("restify");
exports.server = restify.createServer();
exports.server.use(restify.plugins.acceptParser(exports.server.acceptable));
exports.server.use(restify.plugins.queryParser());
exports.server.use(restify.plugins.bodyParser());
exports.server.get('/', (req, res, next) => {
    res.send(req.params);
    next();
});
exports.server.listen(3000, () => {
    console.log('%s listening at %s', exports.server.name, exports.server.url);
});
console.log('Server running on port 3000');
//# sourceMappingURL=server.js.map