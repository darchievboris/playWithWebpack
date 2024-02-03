import webpack from "webpack";
import 'webpack-dev-server';
import {buildLoaders} from "./buildLoaders";
import {buildPlugins} from "./buildPlugins";
import {buildResolvers} from "./buildResolvers";
import {buildDevServer} from "./buildDevServer";
import {BuildOptions} from "./types/types";

export function buildWebpack(options:BuildOptions): webpack.Configuration {
    const isDev = options.mode==="development"
    return {
        mode: options.mode ?? "development",
        entry: options.paths.entry,
        output: {
            path: options.paths.output,
            filename: '[name].[contenthash].js',
            clean: true,

        },
        plugins:buildPlugins(options),
        module: {
            rules: buildLoaders(options)
        },
        resolve:buildResolvers(),
        devtool: isDev && "inline-source-map",
        devServer: isDev ? buildDevServer(options) : undefined,
    }
}