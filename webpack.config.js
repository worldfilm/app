'use strict';
const webpack = require("webpack");
const mqpacker = require("css-mqpacker");
const precss = require('precss');
const autoprefixer = require('autoprefixer');
module.exports = {
  context: __dirname + "/src",
  entry: {
    app: ['babel-polyfill', "./app.js"]
  },
  output: {
    path: __dirname + '/bundle',
    filename: 'app.js',
    publicPath: "/assets",
  },
  devServer: {
    contentBase: __dirname + "/",
    host: '192.168.254.100',
    port: 9000,
    compress: true
  },
  module: {
    rules: [{
      test: /\.js$/,
      use: [{
        loader: 'babel-loader'
      }],
      exclude: /node_modules/
    }, {
      test: /\.css$/,
      use: [{
        loader: "style-loader"
      }, {
        loader: "css-loader"
      }],
      exclude: /node_modules/
    }, {
      test: /\.scss$/,
      use: [{
        loader: "style-loader"
      }, {
        loader: "css-loader"
      }, {
        loader: "postcss-loader",
        options: {
          plugins: [precss(), autoprefixer(), mqpacker()]
        }
      }, {
        loader: "sass-loader"
      }],
      exclude: /node_modules/
    }, {
      test: /\.(eot|woff|woff2|ttf)([\\?]?.*)$/,
      use: [{
        loader: "file-loader"
      }, ],
      exclude: /node_modules/
    }]
  },
};
