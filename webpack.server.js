const path = require('path');
const nodeExternals = require('webpack-node-externals');
const CompressionPlugin = require('compression-webpack-plugin');

module.exports = {
  mode: 'production',
  entry: './server-Postgres/index.js',
  target: 'node',
  externals: [nodeExternals()],
  output: {
    path: path.resolve('client/server'),
    filename: 'index.js'
  },
  plugins: [new CompressionPlugin()],
  module: {
    rules: [
      {
        test : /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader : 'babel-loader'
      },
      {
        test: /\.css$/,
        use: [
          {
             loader: 'style-loader',
          },
          {
             loader: 'css-loader',
             options: {
                modules: {
                  localIdentName: '[local]___[hash:base64:5]'
                }
             }
          }
        ],
       }
    ]
  }
};