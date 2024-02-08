export type buildMode = 'production' | 'development';

export interface buildEnv {
    port: number;
    mode: buildMode;
}

export interface buildPaths {
    entry: string;
    build: string;
    html: string;
}

export interface buildOptions {
    mode: buildMode;
    paths: buildPaths;
    isDev: boolean;
    port: number;
}