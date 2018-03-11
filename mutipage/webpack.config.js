const path = require('path');
var webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
	entry: {
		app: "./src/app.js",
		app1: "./src/app1.js",
		app2: "./src/app2.js"/*,
		vendor:"./src/lib/com.js"*/
	},
	output: {
		path: path.resolve(__dirname, "dist"),
		filename: "[name].js",
		chunkFilename: "[chunkhash].js",
		publicPath: "/"
	},
	plugins: [
		new webpack.optimize.CommonsChunkPlugin({
			name: 'vendor'
		}),
		new webpack.optimize.CommonsChunkPlugin({
			name: 'common',
			minChunks: 2,
			chunks: ['app','app1']
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
			chunk:'app',
			// necessary to consistently work with multiple chunks via CommonsChunkPlugin
			chunksSortMode: 'dependency'
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
			chunk:'app1',
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
			chunk:'app2',
			// necessary to consistently work with multiple chunks via CommonsChunkPlugin
			chunksSortMode: 'dependency'
		})
	],
}