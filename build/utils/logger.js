"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const bunyan = require("bunyan");
const stream = require("stream");
const config_1 = require("../config/config");
const infoStream = new stream.Writable();
infoStream.writable = true;
infoStream.write = (info) => {
    console.log(JSON.parse(info).msg);
    return true;
};
let now = new Date().toLocaleDateString();
let settings = {
    name: config_1.config.env,
    streams: [{ level: 'error', path: './log/error-' + now + '.log' }]
};
if (config_1.config.env === 'dev') {
    settings.streams.push({ level: 'info', stream: infoStream });
}
if (config_1.config.debug) {
    settings.streams.push({ level: 'trace', stream: infoStream });
    settings.streams.push({ level: 'debug', path: './log/debug-' + now + '.log' });
}
const logger = bunyan.createLogger(settings);
exports.logger = logger;
console.log(`Logger setting: ${settings.name}`);
//# sourceMappingURL=logger.js.map