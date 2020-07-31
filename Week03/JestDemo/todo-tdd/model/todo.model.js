/*
 * @Author: Hanfan Wang
 * @Date: 2020-07-31 10:57:19
 * @LastEditTime: 2020-07-31 11:00:37
 */
const mongoose = require("mongoose");

const TodoSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  done: {
    type: Boolean,
    required: true,
  },
});

const TodoModel = mongoose.model("Todo", TodoSchema);

module.exports = TodoModel;
