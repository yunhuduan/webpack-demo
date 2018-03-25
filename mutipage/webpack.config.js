const path = require('path');
var webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
	entry: {
		app: "./app.js",
		app1: "./app1.js",
		app2: "./app2.js"
	},
	output: {
		path: path.resolve(__dirname, "dist"),
		filename: "[name]-[hash].js",
		chunkFilename: "chunk.[chunkhash].js",
		publicPath: "/"
	},
	plugins: [
		new webpack.optimize.CommonsChunkPlugin({
			name: 'manifest',
			minChunks: 2
		}),
		new HtmlWebpackPlugin({
			filename:  path.resolve(__dirname, 'dist/index.html'),
			template: 'index.html',
			inject: true,
			minify: {
				removeComments: true,
				collapseWhitespace: true,
				removeAttributeQuotes: true
				// more options:
				// https://github.com/kangax/html-minifier#options-quick-reference
			},
			hash: true,
			chunk:['manifest','app'],
			// necessary to consistently work with multiple chunks via CommonsChunkPlugin
			//chunksSortMode: 'dependency'
		}),
		new HtmlWebpackPlugin({
			filename:  path.resolve(__dirname, 'dist/index1.html'),
			template: 'index1.html',
			inject: true,
			minify: {
				removeComments: true,
				collapseWhitespace: true,
				removeAttributeQuotes: true
				// more options:
				// https://github.com/kangax/html-minifier#options-quick-reference
			},
			hash: true,
			chunk: ['app1'],
			// necessary to consistently work with multiple chunks via CommonsChunkPlugin
			chunksSortMode: 'dependency'
		}),
		new HtmlWebpackPlugin({
			filename:  path.resolve(__dirname, 'dist/index2.html'),
			template: 'index2.html',
			inject: true,
			minify: {
				removeComments: true,
				collapseWhitespace: true,
				removeAttributeQuotes: true
				// more options:
				// https://github.com/kangax/html-minifier#options-quick-reference
			},
			hash: true,
			chunk: ['app2'],
			// necessary to consistently work with multiple chunks via CommonsChunkPlugin
			chunksSortMode: 'dependency'
		})
	],
}