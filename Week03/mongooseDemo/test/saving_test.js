/*
 * @Author: Hanfan Wang
 * @Date: 2020-07-28 11:04:17
 * @LastEditTime: 2020-07-28 11:09:13
 */
const mocha = require("mocha");
const assert = require("assert");
const MarioChar = require("../models/mariochar");

// test suits -- collection of related tests
describe("Saving Records", function () {
  // Create Tests
  it("Save a record to the database", function (done) {
    var char = new MarioChar({
      name: "Mario",
    });

    char.save().then(function () {
      assert(char.isNew === false);
      done();
    });
  });
});
