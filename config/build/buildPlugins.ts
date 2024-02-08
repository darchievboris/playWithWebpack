import HtmlWebpackPlugin from "html-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import webpack, {Configuration} from "webpack";
import {BuildOptions} from "./types/types";
import {BundleAnalyzerPlugin} from "webpack-bundle-analyzer";
import ForkTsCheckerWebpackPlugin from "fork-ts-checker-webpack-plugin";
import ReactRefreshWebpackPlugin from "@pmmmwh/react-refresh-webpack-plugin"
import * as punycode from "punycode";



export function buildPlugins(options: BuildOptions): Configuration['plugins'] {


    const plugins: Configuration['plugins'] = [
        new HtmlWebpackPlugin({template: options.paths.html}),
        new webpack.DefinePlugin({
            __PLATFORM__:JSON.stringify(options.platform)

        }),
    ]

    if (options.mode === "development") {
        plugins.push(new webpack.ProgressPlugin)
        /* Выносит провкрку типов в отдельный процесс: не нагружая сборку */
        plugins.push(new ForkTsCheckerWebpackPlugin())
        plugins.push(new ReactRefreshWebpackPlugin())
    }

    if (options.mode === "production") {
        plugins.push(new MiniCssExtractPlugin({
            filename: 'css/[name].[contenthash:8].css',
            chunkFilename: 'css/[name].[contenthash:8].css'
        }))
    }
    if(options.analyzer){
        plugins.push(new BundleAnalyzerPlugin())
    }
    return plugins
}