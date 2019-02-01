const serverless = require('serverless-http');
const express = require('express');
const app = express();

const usersRouter = require('./routes/users');


app.use("/users", usersRouter);

app.get('/', function (req, res) {
  res.send('Hello World!')
})

module.exports.handler = serverless(app);