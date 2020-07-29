/*
 * @Author: Hanfan Wang
 * @Date: 2020-07-29 10:29:36
 * @LastEditTime: 2020-07-29 12:35:36
 */

// express web server

var express = require("express");
var mongojs = require("mongojs");
var db = mongojs("contactlist", ["contactlist"]);

var bodyParser = require("body-parser");

var app = express();
app.use(bodyParser.json());

// app.get("/", function (req, res) {
//   res.send("Hello World from Server.js");
// });

app.use(express.static(__dirname + "/public"));

app.get("/contactlist", function (req, res) {
  console.log("I received a GET request");

  db.contactlist.find(function (err, docs) {
    // console.log(docs);
    res.json(docs);
  });
});

app.post("/contactlist", function (req, res) {
  console.log(req.body);
  db.contactlist.insert(req.body, function (err, doc) {
    res.json(doc);
  });
});

app.delete("/contactlist/:id", function (req, res) {
  var id = req.params.id;
  db.contactlist.remove({ _id: mongojs.ObjectId(id) }, function (err, doc) {
    res.json(doc);
  });
});

app.get("/contactlist/:id", function (req, res) {
  var id = req.params.id;
  db.contactlist.findOne({ _id: mongojs.ObjectId(id) }, function (err, doc) {
    res.json(doc);
  });
});

app.put("/contactlist/:id", function (req, res) {
  var id = req.params.id;
  db.contactlist.findAndModify(
    {
      query: { _id: mongojs.ObjectId(id) },
      update: {
        $set: {
          name: req.body.name,
          email: req.body.email,
          number: req.body.number,
        },
      },
      new: true,
    },
    function (err, doc) {
      res.json(doc);
    }
  );
});
app.listen(3000);
console.log("Server is running on port 3000");
