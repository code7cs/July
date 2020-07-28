/*
 * @Author: Hanfan Wang
 * @Date: 2020-07-28 10:44:28
 * @LastEditTime: 2020-07-28 11:19:50
 */
const mongoose = require("mongoose");

mongoose.Promise = global.Promise;

// conenct to db before running tests
before(function (done) {
  // connect to mongodb
  mongoose.connect("mongodb://localhost/mongoosedb");

  mongoose.connection
    .once("open", function () {
      console.log("Connection has been made");
      done();
    })
    .on("error", function (error) {
      console.log("Connect error: " + error);
    });
});

// Drop the characters collections before each test
