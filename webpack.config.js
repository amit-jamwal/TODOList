var webpack = require('webpack');
var path = require('path');

var BUILD_DIR = path.resolve(__dirname, 'src/client/public');

var APP_DIR = path.resolve(__dirname, 'src/client/app');
console.log(__dirname,   APP_DIR + '/index.jsx')
module.export	 = {
	entry: 'src/client/app/index.jsx',
	output: {
		path: 'src/client/public',
		filename: 'bundle.js'
	},
	devtool: "source-map"
};


