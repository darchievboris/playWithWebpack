import HtmlWebpackPlugin from "html-webpack-plugin";
import path from "path";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import webpack, {Configuration} from "webpack";
import {BuildOptions} from "./types/types";

export function buildPlugins(options: BuildOptions): Configuration['plugins'] {

    const plugins: Configuration['plugins'] = [
        new HtmlWebpackPlugin({template: options.paths.html})
    ]

    if (options.mode === "development") {
        plugins.push(new webpack.ProgressPlugin)
    }

    if (options.mode === "production") {
        plugins.push(new MiniCssExtractPlugin({
            filename: 'css/[name].[contenthash:8].css',
            chunkFilename: 'css/[name].[contenthash:8].css'
        }))
    }
    return plugins
}