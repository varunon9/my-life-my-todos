var mode = process.env.NODE_ENV || 'development';
var webpack = require('webpack');

var SOURCE_PATH = __dirname + '/react';

module.exports = {
  context: __dirname,
  devtool: (mode === 'development') ? 'inline-source-map' : false,
  mode: mode,
  entry: './react/index.js',
  output: {
    path: __dirname,
    filename: 'bundle.js'
  },
  module: {
    rules: [{
      test: /\.jsx?$/,
      loader: 'babel-loader',
      exclude: /(node_modules|bower_components)/,
      query: {
        presets: ['es2015', 'react'],
        plugins: ['react-html-attrs', 'transform-class-properties', 'transform-decorators-legacy']
      },
      include: SOURCE_PATH
    },
    {
      test:/\.(s*)css$/,
      loaders: ['style-loader','css-loader', 'sass-loader']
    },
    {
      test: /\.(png|woff|woff2|eot|ttf|svg|gif|jpg)$/,
      loader: 'url-loader?limit=100000'
    }]
  }
};