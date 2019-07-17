var webpack = require('webpack');
module.exports = {
  devtool: 'inline-source-map',
  entry: {
    app: './client/client.js'
  },
  output: {
    path: require("path").resolve("./dist"),
    filename: 'bundle.js',
    publicPath: '/'
  },
  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin()
  ],
  module: {
    rules: [{
      test: /\.m?js$/,
      enforce: 'pre',
      exclude: /node_modules/,
      use: [{
        loader: 'babel-loader',
        query: {
          presets: ['@babel/react', '@babel/env']
        }
      }]
    }]
  }
}