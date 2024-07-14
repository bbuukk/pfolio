import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import { WebpackPluginServe } from 'webpack-plugin-serve';
import Dotenv from 'dotenv-webpack';

import dotenv from 'dotenv'
dotenv.config({ path: "./cfg/.env" });

const __dirname = path.dirname(new URL(import.meta.url).pathname);
console.log(__dirname)

export default {
  mode: process.env.NODE_ENV,
  entry: ['./src/index.ts', 'webpack-plugin-serve/client'],
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: 'bundle.js',
  },
  resolve: {    
    modules: [path.resolve(__dirname, '../.'), 'node_modules'],
    extensions: ['.tsx', '.ts', '.js'],
  },  
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: [
          {
            loader: 'ts-loader',
            options: {
              configFile: path.resolve(__dirname, './tsconfig.json'),
            },
          },
        ],
        exclude: /node_modules/,
      },
      { test: /\.js$/, use: 'swc-loader', exclude: /node_modules/ },
      { test: /\.css$/, use: ['style-loader', 'css-loader'] },
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              outputPath: 'fonts/', 
            },
          },
        ],
      },
      // {
      //   test: /\.(png|svg|jpg|jpeg|gif|ico|webmanifest|xml)$/,
      //   type: 'asset/resource',
      //   generator: {
      //     filename: 'assets/images/icons/[name].[hash][ext]',
      //   },
      // },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      favicon: './assets/images/favicon.ico',
    }),
    new WebpackPluginServe({
      port: parseInt(process.env.PORT, 10),
      static: './dist',
      liveReload: true,
      waitForBuild: true,
      open: false,
    }),
    new Dotenv({ path: './cfg/.env' }),
  ],
};

