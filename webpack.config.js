const path = require('path');

module.exports = {
  mode: 'production',
  entry: {
    index: './index.js',
  },
  output: {
    path: path.resolve(process.cwd(), 'dist'),
    filename: '[name].js'
  },
  module: {
    rules: [{
      test: /\.js$/,
      use: ['babel-loader'],
      exclude: /(node_modules)/
    }]
  }
}