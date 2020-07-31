/*
 * @Author: Hanfan Wang
 * @Date: 2020-07-31 10:46:28
 * @LastEditTime: 2020-07-31 12:05:48
 */
const TodoModel = require("../model/todo.model");

exports.createTodo = (req, res, next) => {
  const createdModel = TodoModel.create(req.body);
  res.status(201).json(createdModel);
};
