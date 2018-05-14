const path = require("path");
const CleanWebpackPlugin = require("clean-webpack-plugin");

module.exports = {
  entry: "./index.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
    publicPath: "/"
  },
  target: "web",
  module: {
    rules: [
      { test: /\.jsx$/, exclude: /node_modules/, loader: "babel-loader" },
      { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" },
      { test: /\.css$/, use: ["style-loader", "css-loader"] }
    ]
  },
  plugins: [new CleanWebpackPlugin(path.resolve(__dirname, "dist"))],
  resolve: {
    extensions: [".js", ".jsx", ".scss"]
  }
};
