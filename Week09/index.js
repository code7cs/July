// var a = 7;
// function foo() {
//   this.a = 13;
//   bar();
// }
// function bar() {
//   console.log(this.a);
// }
// foo();

// https://redux.js.org/tutorials/essentials/part-1-overview-concepts

// Refactor and optimize the following:
let arr = ["apple", "orange", "banana"];

for (i = 0; i < arr.length; i++) {
  var rx = new RegExp("^a*b+", "g");
  console.log(arr[i].match(rx));
}

// Explain why the value of foo.count is never incremented.
function foo(num) {
  console.log("foo: " + num);
  this.count++;
}

foo.count = 0;
var i;
for (i = 0; i < 10; i++) {
  if (i > 5) {
    foo(i);
  }
}
// foo: 6
// foo: 7
// foo: 8
// foo: 9
console.log(foo.count); // Still 0!
