const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { WebpackPluginServe } = require('webpack-plugin-serve')
const Dotenv = require('dotenv-webpack')

const dotenv = require('dotenv')
dotenv.config({ path: "./cfg/.env" });

module.exports = {
  mode: process.env.NODE_ENV,
  // entry: [path.resolve(__dirname, '../src/index.ts')       , 'webpack-plugin-serve/client'],
  entry: ['./src/index.ts'       , 'webpack-plugin-serve/client'],
  output: {
    path: path.resolve(__dirname, '../dist'), 
    filename: 'bundle.js',
  },
  resolve: {
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

    ],
  },
  plugins: [
    new HtmlWebpackPlugin({      
      template: './src/index.html',
      favicon: './assets/images/favicon.ico'
    }),
    new WebpackPluginServe({    
      port: parseInt(process.env.PORT, 10),
      static: './dist',
      liveReload: true,
      waitForBuild: true,
      open: false,
    }),
    new Dotenv({      path: './cfg/.env' }),
  ],  
}




//todo
      // { test: /\.(png|svg|jpg|jpeg|gif|ico|webmanifest|xml)$/,
      //   use: [
      //     {
      //       loader: 'file-loader',
      //       options: {
      //         name: '[name].[hash].[ext]',
      //         outputPath: 'assets/images/icons/',
      //       },
      //     },
      //   ],}