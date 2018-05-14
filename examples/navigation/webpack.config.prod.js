const path = require("path");
const webpack = require("webpack");
const merge = require("webpack-merge");
const baseConfig = require("./webpack.config.base");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = merge(baseConfig, {
  mode: "production",
  output: {
    filename: "[name].[id].[chunkhash].js",
    chunkFilename: "[name].[chunkhash].bundle.js",
    path: path.resolve(__dirname, "dist")
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
            options: {
              minimize: true
            }
          },
          {
            loader: "postcss-loader"
          },
          {
            loader: "sass-loader"
          },
          {
            loader: "sass-resources-loader",
            options: {
              resources: [
                "./src/base/scss/_variables.scss",
                "./src/base/scss/_extend.scss",
                "./src/base/scss/_base.scss"
              ]
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      "process.env.NODE_ENV": JSON.stringify("production")
    }),
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: "[name].[contenthash].css",
      chunkFilename: "[name].[id].[contenthash].css"
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "index.html"),
      title: "Production"
    })
  ],
  optimization: {
    minimize: true,
    splitChunks: {
      cacheGroups: {
        commons: {
          test: /[\\/]node_modules[\\/]/,
          name: "vendors",
          chunks: "all",
          reuseExistingChunk: true
        }
      }
    },
    runtimeChunk: {
      name: "runtime"
    }
  }
});
