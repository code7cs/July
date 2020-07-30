/*
 * @Author: Hanfan Wang
 * @Date: 2020-07-30 11:19:14
 * @LastEditTime: 2020-07-30 11:19:15
 */
// get the reference of EventEmitter class of events module
var events = require("events");

//create an object of EventEmitter class by using above reference
var em = new events.EventEmitter();

//Subscribe for FirstEvent
em.on("FirstEvent", function (data) {
  console.log("First subscriber: " + data);
});

// Raising FirstEvent
em.emit("FirstEvent", "This is my first Node.js event emitter example.");
