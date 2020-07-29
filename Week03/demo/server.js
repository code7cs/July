/*
 * @Author: Hanfan Wang
 * @Date: 2020-07-29 10:29:36
 * @LastEditTime: 2020-07-29 10:33:17
 */
var express = require("express");
var app = express();

app.get("/", function (req, res) {
  res.send("Hello World from Server.js");
});
app.listen(3000);
console.log("Server is running on port 3000");
