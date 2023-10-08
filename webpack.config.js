const path = require('path');

const mode = process.env.MODE || 'production'
const devtool = mode === 'production' ? false : 'inline-source-map'
module.exports = {
  entry: path.join(__dirname, './src/index.ts'),
  output: {
    path: path.join(__dirname, 'lib'),
    filename: 'index.js',
    libraryTarget: 'umd',
    clean: true
  },
  resolve: {
    extensions: ['.js', '.jsx', '.tsx', '.ts']
  },
  mode,
  externals: {
    react: 'react',
    'react-dom': 'react-dom'
  },
  devtool,
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  }
}
