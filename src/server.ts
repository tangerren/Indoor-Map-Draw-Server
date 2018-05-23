
import * as restify from "restify";
import { config } from './config/env';
import { app } from './config/restify';
import { logger } from './utils/logger';

logger.info(`Connected to database: ${config.db}`);

app.listen(config.port, () => {
	logger.info(`${config.name} is running at ${app.url}`);
});

export { app }; 