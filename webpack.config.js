'use strict';

const path = require('path');

const webConfig = {
  entry: path.resolve(__dirname, 'src', 'index.js'),
  target: 'web',
  mode: 'production',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'polf.min.js'
  }
};

module.exports = webConfig;
