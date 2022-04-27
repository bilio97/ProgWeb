import morgan from "morgan";
import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const router = express.Router();

//LOGS
const logger = morgan;

router.use(function (req, res, next) {
  console.log("Requisição " + req.method + " " + req.url);
  next();
});

router.use(logger("short"));

//Disponibilizando arquivos
router.use("/game", express.static(__dirname + "/../skifree"));
router.use("/img", express.static(__dirname + "/../public/img"));

router.get("/", function (req, res) {
  res.send("Hello world!");
});

router.get("/professores", function (req, res) {
  const profes = [
    { nome: "David Fernandes", sala: 1238 },
    { nome: "Horácio Fernandes", sala: 1233 },
    { nome: "Edleno Moura", sala: 1236 },
    { nome: "Elaine Harada", sala: 1231 },
  ];
  res.render("index", { professores: profes, layout: false });
});

router.get("/about", function (req, res) {
  res.render("about", { layout: false });
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

export default router;
