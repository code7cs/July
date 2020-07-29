/*
 * @Author: Hanfan Wang
 * @Date: 2020-07-28 10:59:10
 * @LastEditTime: 2020-07-28 19:26:38
 */

const mocha = require("mocha");
const assert = require("assert");

// test suits -- collection of related tests
describe("Some demo test", function () {
  it("adds two number together", function () {
    assert(2 + 3 === 5);
  });
});
