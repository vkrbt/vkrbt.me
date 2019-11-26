const webpack = require('webpack');
const path = require('path');
const config = require('sapper/config/webpack.js');
const pkg = require('./package.json');
const svelteOptions = require('./svelte.config');

const mode = process.env.NODE_ENV;
const dev = mode === 'development';

const alias = {svelte: path.resolve('node_modules', 'svelte')};
const extensions = ['.mjs', '.js', '.json', '.svelte', '.html'];
const mainFields = ['svelte', 'module', 'browser', 'main'];
const modules = [path.join(__dirname, 'src'), 'node_modules'];

function getCommonRules({isDevMode, isServer}) {
    let rules = [{
        test: /\.(png|jpe?g|gif)$/i,
        use: [
            {
                loader: 'file-loader',
                options: {
                    // fixes different paths while SSR
                    name: isServer ? 'client/images/[name].[ext]' : 'images/[name].[ext]',
                },
            },
        ],
    }];

    if (!isDevMode) {
        rules.push({
            test: /\.(jpg|png|gif|svg)$/,
            loader: 'image-webpack-loader',
            enforce: 'pre',
        });
    }

    return rules;
}

module.exports = {
    client: {
        entry: config.client.entry(),
        output: config.client.output(),
        resolve: {
            alias,
            extensions,
            mainFields,
            modules,
        },
        module: {
            rules: [
                ...getCommonRules({
                    isDevMode: dev,
                    isServer: false,
                }),
                {
                    test: /\.(svelte|html)$/,
                    use: {
                        loader: 'svelte-loader',
                        options: {
                            dev,
                            hydratable: true,
                            hotReload: false,
                            ...svelteOptions,
                        },
                    },
                },
            ],
        },
        mode,
        plugins: [
            // dev && new webpack.HotModuleReplacementPlugin(),
            new webpack.DefinePlugin({
                'process.browser': true,
                'process.env.NODE_ENV': JSON.stringify(mode),
            }),
        ].filter(Boolean),
        devtool: dev && 'inline-source-map',
    },

    server: {
        entry: config.server.entry(),
        output: config.server.output(),
        target: 'node',
        resolve: {
            alias,
            extensions,
            mainFields,
            modules,
        },
        externals: Object.keys(pkg.dependencies).concat('encoding'),
        module: {
            rules: [
                ...getCommonRules({
                    isDevMode: dev,
                    isServer: true,
                }),
                {
                    test: /\.(svelte|html)$/,
                    use: {
                        loader: 'svelte-loader',
                        options: {
                            css: false,
                            generate: 'ssr',
                            dev,
                            ...svelteOptions,
                        },
                    },
                },
            ],
        },
        mode: process.env.NODE_ENV,
        performance: {
            hints: 'warning',
        },
    },

    serviceworker: {
        entry: config.serviceworker.entry(),
        output: config.serviceworker.output(),
        mode: process.env.NODE_ENV,
    },
};
