/*
 * @Author: Hanfan Wang
 * @Date: 2020-07-31 10:38:25
 * @LastEditTime: 2020-07-31 10:42:45
 */
const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.json("Hello World!!");
});

app.listen(3000, () => {
  console.log("Server is running on PORT 3000");
});
