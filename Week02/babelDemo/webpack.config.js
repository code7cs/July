/*
 * @Author: Hanfan Wang
 * @Date: 2020-07-20 16:01:05
 * @LastEditTime: 2020-07-20 16:17:43
 */

const path = require("path");

module.exports = {
  entry: {
    app: "./src/app.js",
  },
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "app.bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.js?$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        query: {
          presets: ["env"],
        },
      },
    ],
  },
};
