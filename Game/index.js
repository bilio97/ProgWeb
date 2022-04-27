const express = require("express");
const app = express();

app.use(function (req, res, next) {
  console.log("Requisição " + req.method + " " + req.url);
  next();
});

app.get("/", function (req, res) {
  res.send("Hello world!");
});

app.post("/", function (req, res) {
  res.send("Post");
});

app.listen(3000, function () {
  console.log("Express app iniciada na porta 3000.");
});
