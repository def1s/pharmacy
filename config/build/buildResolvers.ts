import { type ResolveOptions } from 'webpack';
import { buildOptions } from './type/config';

export function buildResolvers (options: buildOptions): ResolveOptions {
	return {
		extensions: ['.tsx', '.ts', '.js'], // расширения, при импорте которых не указываем расширение
		preferAbsolute: true,
		modules: [options.paths.src, 'node_modules'],
		mainFiles: ['index'],
		alias: {}
	};
}
