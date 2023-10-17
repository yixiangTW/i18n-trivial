const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const mode = process.env.MODE || 'production';

module.exports = {
  entry: path.join(__dirname, '../app/index.tsx'),
  output: {
    path: path.join(__dirname, '../dist'),
    filename: 'index.js',
  },
  resolve: {
    extensions: ['.js', '.jsx', '.tsx', '.ts'],
  },
  devServer: {
    static: './dist',
    client: {
      overlay: {
        warnings: false,
      },
    },
  },
  mode,
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'demo',
      template: 'public/index.html',
    }),
  ],
};
