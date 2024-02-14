import { buildLoaders } from './buildLoaders';
import { buildResolvers } from './buildResolvers';
import { buildPlugins } from './buildPlugins';
import { type buildOptions } from './type/config';
import type webpack from 'webpack';
import { buildDevServer } from './buildDevServer';

export function buildWebpackConfig (options: buildOptions): webpack.Configuration {
	const { mode, paths } = options;

	return {
		mode, // если в прод, то идет оптимизация кода
		entry: paths.entry, // что мы компилим в билд (входной файл)
		module: {
			rules: buildLoaders(options)
		},
		resolve: buildResolvers(options),
		output: { // что получаем на выходе
			filename: '[name].[contenthash].js',
			path: paths.build,
			clean: true,
			publicPath: '/' // фиксит проблему с вложенными маршрутами
		},
		plugins: buildPlugins(options),
		devtool: 'inline-source-map', // карта кода для стека вызовов при ошибке
		devServer: buildDevServer(options)
	};
}
