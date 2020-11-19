const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const VueLoaderPlugin  = require('vue-loader/lib/plugin')

module.exports = {
    entry: './src/main.js',
    output: {
      filename: 'main.js',
      path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                include: path.resolve(__dirname, 'src'),
                use: 'babel-loader'
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.vue$/,
                use: 'vue-loader'
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: "index.html",
            chunks: ["main"],
            template: path.resolve(__dirname, "./src/templates/index.html")
        }),
        new VueLoaderPlugin()
    ],
    devServer: {
        port: 9000
    }
}