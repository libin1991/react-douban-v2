var webpack = require('webpack');

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
}

// webpackConfig.babel.plugins.push(['import', { libraryName: 'antd-mobile', style: 'css' }]);
