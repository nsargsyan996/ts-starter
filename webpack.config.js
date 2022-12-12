/* eslint-disable @typescript-eslint/no-var-requires */
const path = require("path");
const { DefinePlugin } = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const TerserWebpackPlugin = require("terser-webpack-plugin");
const ReactRefreshWebpackPlugin = require("@pmmmwh/react-refresh-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");

const here = (dir) => (dir ? path.resolve(process.cwd(), dir) : process.cwd());

const dirs = {
    src: "./src/app",
    dist: "./build",
};

module.exports = function (env, args = {}) {
    const { mode = "development" } = args;
    const isProduction = mode === "production";

    return {
        context: here(),
        target: "web",
        mode: "development",
        devtool: isProduction ? "source-map" : "inline-cheap-module-source-map",
        entry: here(dirs.src),
        resolve: {
            extensions: [".tsx", ".ts", ".js"],
            alias: {
                "app-design": here("./src/app-design"),
                common: here("./src/common"),
            },
        },
        output: {
            path: here(dirs.dist),
            filename: `js/[name]${isProduction ? ".[contenthash]" : ""}.js`,
            chunkFilename: `js/[name]${isProduction ? ".[chunkhash]" : ""}.js`,
            sourceMapFilename: "[file].map",
        },
        module: {
            rules: [
                {
                    test: /\.(ts|js)x?$/,
                    exclude: /node_modules/,
                    use: [
                        {
                            loader: "babel-loader",
                        },
                    ],
                },
                {
                    test: /\.(png|svg|jpg|jpeg|gif)$/i,
                    type: "asset/resource",
                },
            ],
        },
        plugins: [
            new CopyPlugin({
                patterns: [
                    {
                        from: `${dirs.src}/assets/img`,
                        to: "./img",
                    },
                ],
            }),
            new HtmlWebpackPlugin({
                template: here(`${dirs.src}/static/index.html`),
                cache: true,
                scriptLoading: "defer",
                minify: isProduction && {
                    minifyCSS: true,
                    minifyJS: true,
                    collapseWhitespace: true,
                    removeComments: true,
                    removeRedundantAttributes: true,
                    removeScriptTypeAttributes: true,
                    removeStyleLinkTypeAttributes: true,
                    useShortDoctype: true,
                },
            }),
            !isProduction && new ReactRefreshWebpackPlugin(),
            new DefinePlugin({
                "process.env.NODE_ENV": JSON.stringify(mode),
            }),
        ].filter(Boolean),
        optimization: {
            minimize: isProduction,
            splitChunks: {
                chunks: "all",
                minSize: 0,
                maxInitialRequests: 20,
                maxAsyncRequests: 20,
                cacheGroups: {
                    vendors: {
                        test: /[\\/]node_modules[\\/]/,
                        name(module, chunks, cacheGroupKey) {
                            const packageName = module.context.match(/[\\/]node_modules[\\/](.*?)([\\/]|$)/)[1];
                            return `${cacheGroupKey}.${packageName.replace("@", "")}`;
                        },
                    },
                    common: {
                        minChunks: 2,
                        priority: -10,
                    },
                },
            },
            minimizer: [
                new TerserWebpackPlugin({
                    terserOptions: {
                        compress: {
                            comparisons: false,
                        },
                        mangle: {
                            safari10: true,
                        },
                        output: {
                            comments: false,
                            ascii_only: true,
                        },
                        warnings: false,
                    },
                }),
            ],
        },
        performance: {
            hints: isProduction && "warning",
            maxEntrypointSize: Infinity,
            maxAssetSize: 0.25 * 10 ** 6, // 0.25mb
        },
        stats: {
            cachedAssets: false,
            children: false,
            modules: false,
            entrypoints: false,
            errorDetails: true,
            excludeAssets: /\.(jpe?g|png|webp|gif|svg|ico|cur|eot|ttf|woff|woff2|map|DS_Store|LICENSE)$/i, // hiding images, fonts
        },
        devServer: {
            port: 8080,
            hot: true,
            open: true,
            historyApiFallback: true,
            compress: true,
            client: {
                overlay: true,
            },
        },
    };
};
