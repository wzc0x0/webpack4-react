const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  mode:'development',
  entry: {
    app: './src/index.js'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
    publicPath: '/',
  },
  resolve: {
    extensions: ['.jsx','.js','.json'],
    alias: {
      '@': path.resolve(__dirname,'./src')
    }
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      }
    ]
  },
  devtool: 'cheap-module-source-map',
  plugins: [
    new HtmlWebpackPlugin(
      {
        template:'./src/index.html',
        filename: './index.html',
      }
    ),
    new webpack.HotModuleReplacementPlugin()
  ],
  devServer: {
    clientLogLevel: 'warning',
    hot: true,
    compress: true,
    host: 'localhost',
    port: 3000,
    open: true,
    overlay: {
      warnings: false,
      errors: true
    },
    publicPath:'/',
    proxy: {},
    quiet: false, // necessary for FriendlyErrorsPlugin
    watchOptions: {
      poll: false
    }
  }
};
