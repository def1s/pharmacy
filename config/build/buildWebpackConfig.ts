import path from "path";
import {buildLoaders} from "./buildLoaders";
import {buildResolvers} from "./buildResolvers";
import {buildPlugins} from "./buildPlugins";
import {buildOptions} from "./type/config";
import webpack from "webpack";
import {buildDevServer} from "./buildDevServer";

export function buildWebpackConfig(options: buildOptions): webpack.Configuration {
    const {mode, paths} = options;

    return {
        mode: mode, // если в прод, то идет оптимизация кода
        entry: paths.entry, // что мы компилим в билд (входной файл)
        module: {
            rules: buildLoaders()
        },
        resolve: buildResolvers(),
        output: { // что получаем на выходе
            filename: "[name].[contenthash].js",
            path: paths.build,
            clean: true
        },
        plugins: buildPlugins(options),
        devtool: "inline-source-map", //карта кода для стека вызовов при ошибке
        devServer: buildDevServer(options)
    };
}