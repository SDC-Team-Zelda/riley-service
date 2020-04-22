const merge = require('webpack-merge');
const config = require('./webpack.config.js');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');


module.exports = merge(config, {
  mode: 'production',
  plugins: [new CleanWebpackPlugin(), new CompressionPlugin()]
});