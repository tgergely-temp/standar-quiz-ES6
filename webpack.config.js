const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');

module.exports = {
  context: path.resolve('./app'),
  entry: ['./js/index.js', './scss/styles.scss'],
  output: {
    path: path.resolve('./dist/'),
    filename: 'js/index.js',
    publicPath: './'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        loader: 'css-loader',
      },{
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'sass-loader'],
        }),
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [{
          loader: 'babel-loader',
          options: {
            presets: ['es2015']
          }
        }]
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          'file-loader'
        ]
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: [
          'file-loader'
        ]
      }
    ]
  },
  plugins: [
    // new CleanWebpackPlugin([
    //   'dist'
    // ]),
    new HtmlWebpackPlugin({
      title: 'Standard Quiz',
      template: './index.html',
      inject: true
    }),
    new BrowserSyncPlugin({
      server: {
        baseDir: ['dist']
      },
      port: 3000,
      host: 'localhost',
      open: false
    }),
    new ExtractTextPlugin({ // define where to save the file
      filename: 'css/[name].css',
      allChunks: true,
    }),
    new CopyWebpackPlugin([{
      from: './imgs/**/*',
      to: './'
    }])
  ]
};
