const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');
const loader = require('sass-loader');

module.exports = {
    mode: 'production',
    entry: {
        filename: path.resolve(__dirname, 'src/index.js'),
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name][contenthash].js',
        assetModuleFilename: '[name][ext]',
        clean: true,
    },
    devServer: {
        port: 9000,
        compress: true,
        hot: true,
        static: {
            directory: path.join(__dirname, 'dist')
        },
    },
    module: {
        rules: [{
            test: /\.scss$/,
            use: ['style-loader', 'css-loader', 'sass-loader'],
        }, ],
    },
    plugins: [
        new htmlWebpackPlugin({
            filename: 'index.html',
            template: 'src/index.html',
        }),
        new htmlWebpackPlugin({
            filename: 'about.html',
            template: 'src/about.html',
        }),
    ]
}