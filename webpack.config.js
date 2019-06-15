const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: ["babel-loader"],
        exclude: path.join(__dirname, 'node_modules')
      },
      {
        test: /\.s?css$/,
        use: ["style-loader", "css-loader", "resolve-url-loader", "sass-loader"]
      },
      {
        test: /\.(jpeg|png|gif|svg|ttf|woff|woff2|eot)/,
        use: ["file-loader"]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "index.html"
    })
  ],
  entry: {
    app: path.join(__dirname, "src", "index.js")
  },
  output: {
    path: path.join(__dirname, "dist")
  }
}