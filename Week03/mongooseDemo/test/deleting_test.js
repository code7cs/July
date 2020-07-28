/*
 * @Author: Hanfan Wang
 * @Date: 2020-07-28 18:09:08
 * @LastEditTime: 2020-07-28 18:09:20
 */
// const mocha = require('mocha')
// const assert = require('assert')
// const MarioChar = require('../models/mariochar')

// //test suits--collection of related tests
// describe('Deleting Records', function() {

//     var char;
//     //Create Tests
//     beforeEach(function(done){
//         char= new MarioChar({
//             name:'Mario'
//         });

//         char.save().then(function(){
//             assert(char.isNew === false)
//             done();
//         });
//     });

//     it('Delete one record from the database', function(done){
//         MarioChar.findOneAndRemove({name:"Mario"}).then(function(){
//             MarioChar.findOne({name:'Mario'}).then(function(result){
//                 assert(result === null)
//                 done();
//             })
//         })
//     })
// });
