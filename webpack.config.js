const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin')
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: {
    main: './js/app.js',
    notice : './js/notice.js',
    popup: './js/popup.js'
  },
  output: {
    filename: '[name].js',
    // path: path.resolve(__dirname, './dist'),
    clean: true
  },
  module: {
    rules: [
      {
        test: /\.s?css$/,
        use: [
          // 순서 중요!
          //'style-loader',
          MiniCssExtractPlugin.loader,
          { loader: "css-loader", options: { url: false } },
          'sass-loader'
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title : '전주동물원',
      hash : true,
      filename : 'index.html',
      excludeChunks : ['notice', 'popup'],
      chunks: ['main'],
      template: './index.html'
  }),
  new HtmlWebpackPlugin({
      title : '동물원소식',
      hash : true,
      filename : 'notice.html',
      chunks : ['notice'],
      template: './src/notice.html'
  }),
  new HtmlWebpackPlugin({
      title : '전주동물원 팝업',
      hash : true,
      filename : 'popup.html',
      chunks : ['popup'],
      template: './src/popup.html'
  }),
    new CopyPlugin({
      patterns: [
        { from: 'static' },
        // { from: 'src' }
      ]
    }),
    new MiniCssExtractPlugin(),
  ],
  devServer: {
    host: 'localhost',
    port: 8080,
    hot: true
  }
}