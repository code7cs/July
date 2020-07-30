/*
 * @Author: Hanfan Wang
 * @Date: 2020-07-30 09:54:28
 * @LastEditTime: 2020-07-30 10:57:57
 */

var fs = require("fs");
var http = require("http");

var myWriteStream = fs.createWriteStream(__dirname + "/writeMe.txt");

// myReadStream.on("data", function (chunk) {
//   console.log("NEW CHUNK RECEIVED:");
//   //   console.log(chunk.toString());
//   myWriteStream.write(chunk);
// });

var server = http.createServer(function (req, res) {
  console.log(req.url);
  console.log("Request was made: " + req.url);
  res.writeHead(200, { "Content-Type": "text/html" });
  var myReadStream = fs.createReadStream(__dirname + "/index.html", "utf8");
  myReadStream.pipe(res);
  //   res.send("<h2>Hello</h2>");
});

server.listen(3000, "127.0.0.1");
console.log("Server listening on port 3000");
