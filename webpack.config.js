'use strict';

var path = require('path');

const webpack = require('webpack');
var tplName = process.env.TPL_NAME;
var tplPath = './'+ tplName +'/';

module.exports = {
	entry: path.resolve(__dirname, tplPath + 'js/main.ts'),
	output: {
		path: path.resolve(__dirname, tplPath + 'src/js'),
		filename: 'main.js'
	},
	watch: true,
	module: {
		loaders: [
			{
				test: /\.ts$/,
				loader: 'ts-loader'
			}
		]
	},

	resolve: {
		extensions: ['', '.ts']
	}
}