const path = require('path');

module.exports = {
  entry: path.join(__dirname, './src/index.ts'),
  output: {
    path: path.join(__dirname, 'lib'),
    filename: 'index.esm.js',
    library: {
      type: 'module',
    },
  },
  resolve: {
    extensions: ['.js', '.jsx', '.tsx', '.ts']
  },
  mode: 'development',
  externals: {
    react: 'react',
    'react-dom': 'react-dom'
  },
  devtool: 'inline-source-map',
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
  },
  experiments: {
    outputModule: true, // 启用 ESM 模块输出
  },
}
