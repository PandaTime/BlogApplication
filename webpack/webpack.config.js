'use strict';

const ExtractTextPlugin = require('extract-text-webpack-plugin'),
    HtmlWebpackPlugin = require('html-webpack-plugin'),
    BrowserSyncPlugin = require('browser-sync-webpack-plugin'),
    BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

// loading server
//require('./server');

module.exports = function(env){
    let pluginsList = [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            css: [ "src/main.css" ],
            template: 'index.html'
        }),
        new ExtractTextPlugin('/[name].css'),
        new BrowserSyncPlugin({
            // browse to http://localhost:3000/ during development,
            // ./public directory is being served
            proxy: 'http://localhost:8080/'
        })
    ]
    if(env.analyze){
        pluginsList.push(new BundleAnalyzerPlugin());
    }
    return({
        entry: './src/main.js',
        output: {
            path: './../public',
            filename: "/js/[name].js",
            publicPath: ''
        },
        devtool: !env.production ? 'eval' : 'source-map',
        // see details here https://webpack.github.io/docs/webpack-dev-server.html#api
        // see details http://webpack.github.io/docs/configuration.html#devtool
        module: {
            loaders: [
                {test: /\.js$/, loader: 'babel-loader', exclude: [/node_modules/]},
                {test: /\.(scss|sass)$/, loader:  ExtractTextPlugin.extract({fallbackLoader: "style-loader", loader:'css-loader!sass-loader'})},
                {test: /\.css$/, loader:  ExtractTextPlugin.extract({fallbackLoader: "style-loader", loader:'css-loader!sass-loader'})},
                {test: /\.html$/,loader: 'raw-loader'},
                {test: /\.(svg|woff|woff2)?(\?v=\d+.\d+.\d+)?$/, loader: 'url-loader?limit=8192&name=./[hash].[ext]'},
                {test: /\.(eot|ttf)$/, loader: 'file-loader'},
                {test: /\.jpg$/, loader: 'url-loader?limit=10000&mimetype=image/jpg'},
                {test: /\.jpeg$/, loader: 'url-loader?limit=10000&mimetype=image/jpeg'},
                {test: /\.png$/, loader: 'url-loader?limit=10000&mimetype=image/png'}
            ]
        },
        plugins: pluginsList
    });
};