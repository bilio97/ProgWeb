const express = require("express");
const router = express.Router();

const logger = require("morgan");

router.use(logger("short"));

router.use(function (req, res, next) {
  console.log("Requisição " + req.method + " " + req.url);
  next();
});

router.use("/img", [express.static(`${__dirname}/../public/img`)]);
// http://localhost:3000/img/sova.jpg

router.use("/game", [express.static(`${__dirname}/../skifree`)]);

router.get("/", function (req, res) {
  res.send("Hello world!");
});

//Get com parâmetros
router.get("/bemvindo/:nome", function (req, res) {
  res.end(`Seja bem vindo ${req.params.nome}`);
});

//Pagina About
router.get("/about", function (req, res) {
  res.end("Bem-vindo à página sobre!");
});

//Post
router.post("/", function (req, res) {
  res.send("Post");
});

router.use(function (req, res) {
  res.statusCode = 404;
  res.end("404!");
});

module.exports = router;
