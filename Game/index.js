import express from "express";
import router from "./app/router/routes";
import { engine } from "express-handlebars";
import sass from 'node-sass-middleware';
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

app.engine("handlebars", engine());
app.set("view engine", "handlebars");
app.set("views", "./app/views");
app.engine(
  "handlebars",
  engine({
    helpers: "./app/views/helpers/helpers",
    layoutsDir: "./app/views/layouts",
    defaultLayout: "main",
  })
);

app.use(sass({
  src: `${__dirname}/public/scss`,
  dest: `${__dirname}/public/css`,
  outputStyle: 'compressed',
  prefix: '/css',
}));

//Disponibilizando arquivos estáticos
app.use("/img", express.static(__dirname + "/public/img"));
app.use('/css', express.static(__dirname + "/public/css"));
app.use('/webfonts', express.static(__dirname + "/node_modules/@fortawesome/fontawesome-free/webfonts"));

app.use('/js', [
  express.static(__dirname + '/node_modules/bootstrap/dist/js/'),
  express.static(__dirname + '/node_modules/@popperjs/core/dist/umd'),
  express.static(__dirname + '/public/js')
]);

app.use(express.urlencoded({ extended: false }));
app.use(router);

app.listen(3000, function () {
  console.log("Aplicação iniciada em  http://localhost:3000");
});
