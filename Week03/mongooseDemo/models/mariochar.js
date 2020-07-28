/*
 * @Author: Hanfan Wang
 * @Date: 2020-07-28 10:50:12
 * @LastEditTime: 2020-07-28 10:54:14
 */
const mongoose = require("mongoose");

const Schema = mongoose.Schema;

// Create Schema and Model
const MarioCharSchema = new Schema({
  name: String,
  weight: Number,
});

const MarioChar = mongoose.model("mariochar", MarioCharSchema);
module.exports = MarioChar;
