const path = require('path');
const devConfig = require('./webpack.config.js');

const prodConfig = devConfig;

prodConfig.output = {
  path: path.resolve(__dirname, 'dist'),
  filename: 'bundle.js'
};

module.exports = prodConfig;
