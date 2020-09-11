function removeItem(str) {
  let arr = str.split("");
  return arr.splice(5, 1);
}
console.log(removeItem("hellohello"));

function f() {
  return function () {
    console.log("a");
  };
}
