/*
 * @Author: Hanfan Wang
 * @Date: 2020-07-31 11:38:32
 * @LastEditTime: 2020-07-31 12:06:28
 */
const request = require("supertest");
const endpointUrl = "/todos/";
const app = require("../../app");
const newTodo = require("../mock-data/new-todo.json");
describe(endpointUrl, () => {
  it("POST" + endpointUrl, async () => {
    const response = await request(app).post(endpointUrl).send(newTodo);
    expect(response.statusCode).toBe(201);
    expect(response.body.title).toBe(newTodo.title);
    expect(response.body.done).toBe(newTodo.done);
  });
});
