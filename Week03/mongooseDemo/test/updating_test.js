/*
 * @Author: Hanfan Wang
 * @Date: 2020-07-28 18:07:56
 * @LastEditTime: 2020-07-28 19:26:13
 */

// /*
//  * @Author: Hanfan Wang
//  * @Date: 2020-07-28 18:07:56
//  * @LastEditTime: 2020-07-28 18:08:10
//  */
// const mocha = require("mocha");
// const assert = require("assert");
// const MarioChar = require("../models/mariochar");

// //test suits--collection of related tests
// describe("Updating Records", function () {
//   var char;
//   //Create Tests
//   beforeEach(function (done) {
//     char = new MarioChar({
//       name: "Mario",
//     });

//     char.save().then(function () {
//       assert(char.isNew === false);
//       done();
//     });
//   });

//   it("Update one record in the database", function (done) {
//     MarioChar.findOneAndUpdate({ name: "Mario" }, { name: "Luigi" }).then(
//       function () {
//         MarioChar.findOne({ _id: char._id }).then(function (result) {
//           assert(result.name === "Luigi");
//           done();
//         });
//       }
//     );
//   });
// });
