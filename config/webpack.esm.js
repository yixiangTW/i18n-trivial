const path = require('path');
const config = require('./webpack.umd.js')
module.exports = {
  ...config,
  output: {
    path: path.join(__dirname, '../lib'),
    filename: 'index.esm.js',
    library: {
      type: 'module',
    },
  },
  experiments: {
    outputModule: true,
  },
}
