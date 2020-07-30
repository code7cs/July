/*
 * @Author: Hanfan Wang
 * @Date: 2020-07-30 09:51:27
 * @LastEditTime: 2020-07-30 10:04:42
 */
var counter = function (arr) {
  return "There are " + arr.length + " elements in this array";
};

// console.log(counter(["apple", "mango", "grapes"]));

var adder = function (a, b) {
  return `The sum of 2 numbers is ${a + b}`;
};

var pi = 3.14;

module.exports = { counter, adder, pi };
