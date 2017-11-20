var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: '/views/app.jsx',
  output: { path: __dirname, filename: 'views/bundle.js' },
  module: {
    loaders: [
      {
        test: /.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  },
};
