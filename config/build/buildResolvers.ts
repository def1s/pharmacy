import { ResolveOptions } from "webpack";

export function buildResolvers(): ResolveOptions {
    return {
        extensions: ['.tsx', '.ts', '.js'], // расширения, при импорте которых не указываем расширение
    };
}