const path = require('path')
const webpack = require('webpack');

module.exports = {
  entry: './app.jsx',
  output: {
    path: path.join(__dirname, './build'),
    publicPath: './build',
    filename: 'bundle.js'
  },
  node: {
    console: true,
    fs: 'empty',
    net: 'empty',
    tls: 'empty'
  },
  module: {
    loaders: [
      {
        test: /jsx?/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react']
        }
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        loaders: ['style-loader', 'css-loader', 'sass-loader']
      }
    ]
  }
}

console.log(__dirname)
