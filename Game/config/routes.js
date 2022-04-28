import morgan from "morgan";
import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const router = express.Router();
import mainController from "../app/controllers/main.js";

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

router.get("/", mainController.index);
router.get("/sobre", mainController.sobre);

router.get("/professores", function (req, res) {
  const profes = [
    { nome: "David Fernandes", sala: 1238 },
    { nome: "Horácio Fernandes", sala: 1233 },
    { nome: "Edleno Moura", sala: 1236 },
    { nome: "Elaine Harada", sala: 1231 },
  ];
  res.render("index", { professores: profes, layout: false });
});

//Get com parâmetros
router.get("/bemvindo/:nome", function (req, res) {
  res.end(`Seja bem vindo ${req.params.nome}`);
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
