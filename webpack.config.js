/**
 * Created by zh on 2018/1/13.
 */
var babelpolyfill = require("babel-polyfill");
module.exports = {
  entry: ['babel-polyfill', __dirname + '/demo09-async/async.js'],
  output: {
    path: __dirname + '/demo09-async',
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: './demo09-async/',
    inline: true
  },
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader'
      }
    }]
  }
};
