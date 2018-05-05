"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const path = require("path");
const env = process.env.NODE_ENV || 'development';
const debug = process.env.DEBUG || false;
// default settings are for dev environment
const config = {
    name: 'ClassPortal API',
    env: env,
    debug: debug,
    root: path.join(__dirname, '/..'),
    port: 5000,
    db: 'mongodb://localhost:27017/dev',
    github: {
        clientID: process.env.GITHUB_CLIENTID,
        clientSecret: process.env.GITHUB_SECRET,
        callbackURL: ''
    },
};
exports.config = config;
// settings for test environment
// *IMPORTANT* do not set test db to production db, as the tests will overwrite it.
if (env === 'test') {
    config.db = 'mongodb://localhost:27017/test';
}
// settings for test environment
if (env === 'production') {
    config.port = 5005;
    config.db = 'mongodb://localhost:27017/prod';
    config.debug = false;
}
//# sourceMappingURL=env.js.map