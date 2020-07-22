<!--
 * @Author: Hanfan Wang
 * @Date: 2020-07-21 22:13:45
 * @LastEditTime: 2020-07-21 22:50:23
-->

### Q: How many ways you can create an Object in JavaScript

1. Object Literals:

`let obj = {}`
`let person = {`
  `name: "FullStackTutorials",`
  `getName: function() {`
    `return this.name;`
  `}`
`};`

2. Object Constructor

`let person = new Object();`
`person.name = "FullStackTutorials",`
`person.getName = function(){`
 ` return this.name ; `
`};`

3. Object.create Method

`let person = Object.create(null);
codesource
let data = {
  name: "FullStackTutorials",
  getName: function() {
    return this.name;
  }
};
let person = Object.create(data);`

4. using Function

`function Person(name){
  this.name = name
  this.getName = function(){
    return this.name
  }
}`

5. using Class
ES6 introduced the class keyword to create classes in JavaScript.
`class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  getInfo() {
    console.log(this.name + " Age : " + this.age);
  }
}
let perObj = new Person("Full Stack Tutorials", 25);`

### Q: What does "use strict" do in javascript

- The use strict literal is entered at the top of a JavaScript program or at the top of a function and it helps you write safer JavaScript code by throwing an error if a global variable is created by mistake.

### Q: How would you check if a number is an integer in js

- A very simply way to check if a number is a decimal or integer is to see if there is a remainder left when you divide by 1.

### Q: How would you add your own method to the Array object so the following code would work

`var arr = [1, 2, 3, 4, 5];`
`var avg = arr.average();`
`console.log(avg);`

Answer: see `assignment_04.js` file
