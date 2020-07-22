/*
 * @Author: Hanfan Wang
 * @Date: 2020-07-20 16:01:05
 * @LastEditTime: 2020-07-21 14:01:16
 */

// /*
//  * @Author: Hanfan Wang
//  * @Date: 2020-07-20 16:01:05
//  * @LastEditTime: 2020-07-21 13:48:49
//  */

// const path = require("path");

// module.exports = {
//   entry: {
//     app: "./src/app.js",
//   },
//   output: {
//     path: path.resolve(__dirname, "build"),
//     publicPath: "/",
//     filename: "app.bundle.js",
//   },
//   module: {
//     rules: [
//       {
//         test: /\.(js)$/,
//         exclude: /node_modules/,
//         use: ["babel-loader"],
//         // loader: "babel-loader",
//         // query: {
//         //   presets: ["env"],
//         // },
//       },
//     ],
//   },
//   resolve: {
//     extensions: ["*", ".js"],
//   },
// };
const path = require("path");

module.exports = {
  entry: "./src/app.js",
  devtool: "inline-source-map",
  module: {
    rules: [
      {
        test: /\.(js)$/,
        exclude: /node_modules/,
        // use: ["babel-loader"],
        loader: "babel-loader",
        options: {
          presets: ["@babel/preset-env"], // <-- here
        },
      },
    ],
  },
  resolve: {
    extensions: ["*", ".js"],
  },
  output: {
    path: __dirname + "/build",
    publicPath: "/",
    filename: "app.bundle.js",
  },
  devServer: {
    contentBase: "./build",
  },
};
