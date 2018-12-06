import { config } from './config/config';
import { app } from './config/restify';
import { logger } from './utils/logger';

logger.info(`连接至数据库: ${config.db}`);

app.listen(config.port, () => {
	logger.info(`${config.name} is running at ${app.url}`);
});

export { app }; 