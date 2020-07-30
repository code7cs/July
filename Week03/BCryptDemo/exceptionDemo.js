/*
 * @Author: Hanfan Wang
 * @Date: 2020-07-30 11:02:35
 * @LastEditTime: 2020-07-30 11:02:51
 */
var fs = require("fs");
var file = "dataa.txt";

fs.exists(file, function (exists) {
  if (exists) {
    fs.stat(file, function (err, stat) {
      if (stat.isFile()) {
        fs.readFile(file, "utf-8", function (err, data) {
          if (err) {
            // console.log(err)
            // console.log("DONE if")
            throw err;
          } else {
            console.log(data);
            // console.log("DONE else")
          }
        });
      }
    });
  }
});
console.log("DONE");
