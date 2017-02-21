var webpack = require('webpack');
var uglifyJsPlugin = webpack.optimize.UglifyJsPlugin;
var commonsPlugin =
  new webpack.optimize.CommonsChunkPlugin('common.js'); // 引入插件
module.exports = {
  entry: './public/src/entry/index.jsx',
  output: {
    path: './public/build',
    filename: 'build.js',
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modeles/,
        loader: 'babel-loader'
      },
      {
        test: /\.css$/,
        loader: 'style!css'
      },
      {
        test: /\.scss$/,
        loader: 'style!css!sass'
      },
      {
        test: /\.(png|jpg|gif)$/,
        loader: 'url-loader?limit=819200'
      },
      {
        test: /\.(woff|svg|eot|ttf)\??.*$/,
        loader: 'url-loader'
      }
    ]
  },
  plugin: [
    new uglifyJsPlugin({
      compress: {
        warnings: true
      }
    }),
    commonsPlugin
  ]
};
