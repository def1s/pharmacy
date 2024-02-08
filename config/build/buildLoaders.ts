import webpack from "webpack";

export function buildLoaders(): webpack.RuleSetRule[] {
    return [ // конфигурируются лоадеры для загрузки расширений в проект
        {
            test: /\.tsx?$/,
            use: 'ts-loader',
            exclude: /node_modules/,
        },
    ];
}