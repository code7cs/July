var a = 7;
function foo() {
  this.a = 13;
  bar();
}
function bar() {
  console.log(this.a);
}
foo();
