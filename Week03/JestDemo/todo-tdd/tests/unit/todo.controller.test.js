/*
 * @Author: Hanfan Wang
 * @Date: 2020-07-31 10:45:56
 * @LastEditTime: 2020-07-31 10:50:36
 */
const TodoController = require("../../controllers/todo.controller");
describe("TodoController.createTodo", () => {
  it("should have a createTodo function", () => {
    expect(typeof TodoController.createTodo).toBe("function");
  });
});
