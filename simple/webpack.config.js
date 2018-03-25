const path = require('path');
var webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin')

// 在根目录下执行命令 ../node_modules/.bin/webpack
module.exports = {
	entry: {
		app: "./app.js"
	},
	output: {
		path: path.resolve(__dirname, "dist"),
		filename: "[name].js"
	},
	module: {
		rules: [
			{test: /\.css$/, use: ['style-loader', 'css-loader']},
			{
				test: /\.js$/,
				exclude: /(node_modules|bower_components)/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['env']
					}
				}
			}
		]
	},
	plugins: [
		new HtmlWebpackPlugin()
	]
}