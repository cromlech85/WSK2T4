var HTMLWebpackPlugin = require('html-webpack-plugin');
var HTMLWebpackPluginConfig = new HTMLWebpackPlugin({
    template: __dirname + '/app/index.html',
    filename: 'index.html',
    inject: 'body'
});
module.exports = {
    entry: './app/main.js',
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: '/node_modules/',
                loader: 'babel'
            }
        ]
    },
    output: {
        filename: 'bundle.js',
        path: './app'
    },
    plugins: [HTMLWebpackPluginConfig],
    devServer: {
        inline: true,
        contentBase: './app',
        port: 8100
    }
};