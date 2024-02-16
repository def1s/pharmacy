import { type buildOptions } from './type/config';
import { type Configuration as DevServerConfigurations } from 'webpack-dev-server';

export function buildDevServer (options: buildOptions): DevServerConfigurations {
	return {
		port: options.port,
		open: true, // автоматически открывает в браузере страницу с приложением
		historyApiFallback: true,
		proxy: {
			'/api': 'http://localhost:6060', // проксирование запросов от фронтенда к бекенду
			'/auth': 'http://localhost:6060'
		}
	};
}
