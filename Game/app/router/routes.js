import morgan from "morgan";
import express from "express";

const router = express.Router();
import mainController from "../controllers/main.js";
import areaController from "../controllers/area.js";
import cursoController from "../controllers/curso.js";
import req from "express/lib/request";

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
router.get("/curso/update/:id", cursoController.update);
router.post("/curso/update/:id", cursoController.update);
router.get("/curso/:id", cursoController.read);
router.delete("/curso/:id", cursoController.remove);

router.get("/cookie", (req, res) => {
  if (!('usuario' in req.cookies)) {
    res.cookie('usuario', '1234'); //{ maxAge: 6000 }
    res.send("Usuario nao identificado, criando cookie agora");
  } else {
    res.send(`Usuario identificado. ID ${req.cookies['usuario']}`);

  }
});

router.get("/apagar-cookie", (req, res) => {
  res.clearCookie('usuario');
  res.send('Cookie-apagado');
});

// router.get("/uuid", (req, res) => {
//   res.send(v4());
// });

//Get com parâmetros
router.get("/bemvindo/:nome", function (req, res) {
  res.end(`Seja bem vindo ${req.params.nome}`);
});


export default router;
