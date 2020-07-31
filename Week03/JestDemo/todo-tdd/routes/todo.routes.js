/*
 * @Author: Hanfan Wang
 * @Date: 2020-07-31 11:50:29
 * @LastEditTime: 2020-07-31 11:52:46
 */
const express = require("express");
const router = express.Router();
const todoController = require("../controllers/todo.controller");

router.post("/", todoController.createTodo);

module.exports = router;
