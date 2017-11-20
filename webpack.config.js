var webpack = require('webpack');
var path = require('path');
module.exports = {
  devtool: 'eval',
  entry: './views/app.jsx',
  output: {
    filename: __dirname + '/views/bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.jsx$/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react']
        },
        exclude: __dirname +'/node_modules'
      }
    ]
  },
  externals: {
    "React": "React"
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({compressor: {warnings: false}})
  ],
  resolve: {
    extensions: ['','.js','.jsx']
  }
}
