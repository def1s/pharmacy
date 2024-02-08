import {buildOptions} from "./type/config";
import {Configuration as DevServerConfigurations} from "webpack-dev-server";

export function buildDevServer(options: buildOptions): DevServerConfigurations {
    return {
        port: options.port,
        open: true, //автоматически открывает в браузере страницу с приложением
    }
}