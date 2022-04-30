import morgan from "morgan";
import express from "express";

const router = express.Router();
import mainController from "../controllers/main.js";
import areaController from "../controllers/area.js";
import cursoController from "../controllers/curso.js";

//LOGS
const logger = morgan;

router.use(function (req, res, next) {
  console.log("Requisição " + req.method + " " + req.url);
  next();
});

router.use(logger("combined"));

//Main controller
router.get("/", mainController.index);
router.get("/about", mainController.sobre);
router.get("/ui", mainController.ui);
router.get("/game", mainController.game);

//Area controller
router.get("/area", areaController.index);

//Curso controller
router.get("/curso", cursoController.index);
router.get("/curso/create", cursoController.create);
router.post("/curso/create", cursoController.create);
router.get("/curso/:id", cursoController.read);

//Get com parâmetros
router.get("/bemvindo/:nome", function (req, res) {
  res.end(`Seja bem vindo ${req.params.nome}`);
});


export default router;
