/*
 * @Author: Hanfan Wang
 * @Date: 2020-07-29 09:30:53
 * @LastEditTime: 2020-07-29 10:19:27
 */
const express = require("express");
const jwt = require("jsonwebtoken");

const app = express();

app.get("/api", (req, res) => {
  res.json({
    message: "Welcome to the API",
  });
});

app.post("/api/posts", verifyToken, (req, res) => {
  jwt.verify(req.token, "secretkey", (err, authData) => {
    if (err) {
      res.sendStatus(403);
    } else {
      res.json({
        message: "Post Created...",
        authData,
      });
    }
  });
});

app.post("/api/login", (req, res) => {
  // Mock User
  const user = {
    id: 1,
    username: "John",
    email: "john@gmail.com",
  };

  jwt.sign(
    { user: user },
    "secretkey",
    { expiresIn: "3600s" },
    (err, token) => {
      res.json({
        token,
      });
    }
  );
});

// format of header
// authorization : Bearer <token>

// Verify Token
function verifyToken(req, res, next) {
  // get auth header value
  const bearerHeader = req.headers["authorization"];

  // check if bearer is undefined
  if (typeof bearerHeader !== "undefined") {
    // Split
    const bearer = bearerHeader.split(" ");
    // get the token array
    const bearerToken = bearer[1];
    // set the token
    req.token = bearerToken;
    // next middleware
    next();
  } else {
    res.sendStatus(403);
  }
}

app.listen(5000, () => {
  console.log("Server started at 5000");
});
