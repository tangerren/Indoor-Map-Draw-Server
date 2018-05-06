import * as path from 'path';

interface ConfigSettings {
  root: string;
  name: string;
  port: number;
  env: string;
  db: string;
  debug: string | boolean;
  github: {
    clientID: string;
    clientSecret: string;
    callbackURL: string;
  };
}

const env: string = process.env.NODE_ENV || 'dev';
const debug: string | boolean = process.env.DEBUG || false;

// default settings are for dev environment
const config: ConfigSettings = {
  name: 'ClassPortal API',
  env: env,
  debug: debug,
  root: path.join(__dirname, '/..'),
  port: 5000,
  db: '../../db/indoor_map_dev.db',
  github: {
    clientID: process.env.GITHUB_CLIENTID,
    clientSecret: process.env.GITHUB_SECRET,
    callbackURL: ''
  },
};

// settings for test environment
// *IMPORTANT* do not set test db to production db, as the tests will overwrite it.
if (env === 'test') {
  config.db = '../../db/indoor_map_test.db';
}

// settings for prod environment
if (env === 'production') {
  config.port = 5005;
  config.db = '../../db/indoor_map.db';
  config.debug = false;
}

export { config };
