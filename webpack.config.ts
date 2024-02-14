import path from 'path';
import type webpack from 'webpack';
import { buildWebpackConfig } from './config/build/buildWebpackConfig';
import { type buildEnv, type buildPaths } from './config/build/type/config';

// при использовании env мы экспортируем не конфиг, а функцию
export default (env: buildEnv) => { // в качестве входа - env
	const paths: buildPaths = {
		entry: path.resolve(__dirname, 'src', 'index.tsx'),
		html: path.resolve(__dirname, 'public', 'index.html'),
		build: path.resolve(__dirname, 'build'),
		src: path.resolve(__dirname, 'src')
	};

	const mode = env.mode || 'development';
	const isDev = mode === 'development';
	const PORT = env.port || 3000;

	const config: webpack.Configuration = buildWebpackConfig({
		mode,
		paths,
		isDev,
		port: PORT
	});

	return config;
};
