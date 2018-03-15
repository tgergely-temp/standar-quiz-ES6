const path = require('path');
const devConfig = require('./webpack.config.js');
const webpack = require('webpack');

const prodConfig = devConfig;

prodConfig.output = {
  path: path.resolve(__dirname, 'dist'),
  filename: 'bundle.js'
};

prodConfig.plugins = [
  ...prodConfig.plugins,
  new webpack.DefinePlugin({
    'process.env': {
      'STATICPATH': JSON.stringify('./'),
    },
  }),
];

module.exports = prodConfig;
