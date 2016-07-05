const webpack = require('webpack');

const debug = process.env.NODE_ENV !== 'production';

module.exports = {
  entry: './js/scripts.js',
  output: {
    path: `${__dirname}/js`,
    filename: 'scripts.min.js'
  },
  plugins: debug ? [] : [
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin({mangle: false, sourcemap: false})
  ]
};
