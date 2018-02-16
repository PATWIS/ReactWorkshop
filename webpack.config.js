const HtmlWebpackPlugin = require('html-webpack-plugin'); //installed via npm
const webpack = require('webpack'); //to access built-in plugins
const { resolve } = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = function () {
  let dev = true;
  return {
    entry: {
      app: './src/app.jsx',
      vendors: ['react', 'react-dom']
    },
    output: {
      path: resolve(__dirname, 'dist'),
      publicPath: dev ? '/dist/' : '',
      filename: '[name].js'
    },

    module: {
      rules: [
        {
          test: /\.jsx?$/,
          exclude: /(node_modules)/,
          use: [{
            loader: 'babel-loader',
            options: {
              presets: ['react', 'es2015']
            }
          },
            'eslint-loader'
          ]
        },
        {
          test: /\.scss$/,
          use: ExtractTextPlugin.extract({
            fallback: "style-loader",
            use: "css-loader!sass-loader"
          })
        },
        {
          test: /\.html$/,
          use: 'raw-loader',
          exclude: resolve(__dirname, './index.html')
        },
        {
          test: /\.(png|jpg|gif|svg|ttf|woff|ico)$/,
          use: [{
            loader: 'url-loader',
            options: {
              limit: 1000,
              name: '[name].[ext]'
            }
          }]
        }
      ]
    },
    plugins: [
      new webpack.optimize.UglifyJsPlugin(),
      new ExtractTextPlugin("styles.css"),
      new HtmlWebpackPlugin({
        template: 'src/index.html'
      }),
      new webpack.ProvidePlugin({
        React: 'react',
        ReactDom: 'react-dom'
      }),
      new webpack.optimize.CommonsChunkPlugin({
        name: 'vendors'
      }),
    ],

    devServer: {
      contentBase: resolve(__dirname, 'src/'),
      compress: true,
      // https: true,
      port: 44305,
      // inline: false
    }
  }
};

