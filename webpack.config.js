const isDev = 'development';

const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
// const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: isDev ? 'development' : 'production',
  devtool: isDev ? 'source-map' : 'none',
  // watch: isDev,

  entry: ['./src/index.js', './src/sass/style.scss'],
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
    // assetModuleFilename: 'images/[hash][ext][query]',
  },

  module: {
    rules: [
      {
        test: /\.js$/i,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
      {
        test: /\.scss$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
      },
      {
        test: /\.(png|jpg|svg)$/i,
        type: 'asset/resource',
      },
      // {
      //   test: /\.html$/,
      //   loader: 'html-loader',
      // },
    ],
  },

  plugins: [
    new CleanWebpackPlugin(),
    // new HtmlWebpackPlugin({
    //   template: 'index.html',
    // }),
    new MiniCssExtractPlugin({
      filename: 'style.css',
    }),
  ],
};
