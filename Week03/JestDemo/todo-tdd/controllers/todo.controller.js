/*
 * @Author: Hanfan Wang
 * @Date: 2020-07-31 10:46:28
 * @LastEditTime: 2020-07-31 11:07:59
 */
const TodoModel = require("../model/todo.model");

exports.createTodo = () => {
  TodoModel.create();
};
