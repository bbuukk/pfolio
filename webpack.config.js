const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { WebpackPluginServe } = require('webpack-plugin-serve')
const Dotenv = require('dotenv-webpack')

const dotenv = require('dotenv')
dotenv.config()

module.exports = {
  mode: process.env.NODE_ENV,
  entry: ['./src/index.ts', 'webpack-plugin-serve/client'],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      { test: /\.js$/, use: 'swc-loader', exclude: /node_modules/ },
      { test: /\.css$/, use: ['style-loader', 'css-loader'] },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html',
    }),
    new WebpackPluginServe({
      port: parseInt(process.env.PORT, 10) || 8080,
      static: './dist',
      liveReload: true,
      waitForBuild: true,
      open: true,
    }),
    new Dotenv(),
  ],
  watch: true,  
}
