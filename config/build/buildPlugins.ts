import HtmlWebpackPlugin from 'html-webpack-plugin';
import webpack from 'webpack';
import { type buildOptions } from './type/config';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';

export function buildPlugins ({ paths }: buildOptions): webpack.WebpackPluginInstance[] {
	return [
		new HtmlWebpackPlugin({
			template: paths.html // откуда берем основу для html файла
		}),
		new webpack.ProgressPlugin(),
		new MiniCssExtractPlugin({
			filename: 'css/[name].[contenthash:8].css',
			chunkFilename: 'css/[name].[contenthash:8].css'
		})
	];
}
