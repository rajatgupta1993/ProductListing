
const webpack = require("webpack");
const { resolve } = require("path");
module.exports = {
    context: resolve('src'),
    entry: {
        app: ['babel-polyfill', './index.js'],
    },

   devtool: 'source-map',

    output: {
        path: resolve(__dirname, 'public'),
        filename: 'bundle.js',
    },

    devServer: {
        inline: true,
        port: 8080,
        historyApiFallback: true,
    },

    plugins: [],

    resolve: {
        extensions: ['.js', '.jsx'],
    },

    module: {
        rules: [
            {
                test: [/\.js$/, /\.jsx$/],
                loaders: 'babel-loader',
                exclude: /node_modules/,
                options: {
                    presets: ['es2015', 'react']
                },
            },
            {
                test: /\.css$/,
                loader: "style-loader!css-loader"
            },

            {
                test: /\.(jpg|png|gif|svg)$/,
                loader: "file-loader"
            },

            // {
            //     enforce: 'pre',
            //     test: [/\.js$/, /\.jsx$/],
            //     exclude: /node_modules/,
            //     loader: "eslint-loader",
            //     exclude: /(node_modules)/,

            // },
        ],
    },
};
