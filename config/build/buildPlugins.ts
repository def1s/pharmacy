import HtmlWebpackPlugin from "html-webpack-plugin";
import path from "path";
import webpack from "webpack";
import {buildOptions} from "./type/config";

export function buildPlugins({paths}: buildOptions): webpack.WebpackPluginInstance[] {
    return [
        new HtmlWebpackPlugin({
            template: paths.html // откуда берем основу для html файла
        }),
        new webpack.ProgressPlugin(),
    ];
}