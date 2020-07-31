/*
 * @Author: Hanfan Wang
 * @Date: 2020-07-31 10:45:56
 * @LastEditTime: 2020-07-31 11:06:40
 */
const TodoController = require("../../controllers/todo.controller");
const TodoModel = require("../../model/todo.model");

TodoModel.create = jest.fn();

describe("TodoController.createTodo", () => {
  it("should have a createTodo function", () => {
    expect(typeof TodoController.createTodo).toBe("function");
  });

  it("should call TodoModel.create", () => {
    TodoController.createTodo();

    expect(TodoModel.create).toBeCalled();
  });
});
