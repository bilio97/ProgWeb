import express from "express";
import router from "./app/router/routes";
import { engine } from "express-handlebars";
import sass from 'node-sass-middleware';
import path from "path";
import { fileURLToPath } from "url";
import cookieParser from "cookie-parser";
import csurf from "csurf";
import { v4 as uuidv4 } from "uuid";
import session from "express-session";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

app.engine(
  "handlebars",
  engine({
    helpers: require(`${__dirname}/app/views/helpers/helpers`),
    layoutsDir: "./app/views/layouts",
    defaultLayout: "main",
    runtimeOptions: {
      allowProtoPropertiesByDefault: true,
      allowProtoMethodsByDefault: true,
    },
  }));


app.use(express.urlencoded({ extended: false }));
app.set("view engine", "handlebars");
app.set("views", "./app/views");

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
  express.static(__dirname + '/public/js'),
  express.static(__dirname + '/node_modules/bootstrap/dist/js/'),
  express.static(__dirname + '/node_modules/@popperjs/core/dist/umd')
]);

app.use(cookieParser());
app.use(csurf({ cookie: true }));

app.get("/uuid", (req, res) => {
  res.send(uuidv4());
});

app.use(session({
  genid: (req) => {
    return uuidv4()
  },
  secret: 'Hi9Cf#mk98',
  resave: false,
  saveUninitialized: true
}))

app.get("/session", (req, res) => {
  if (!('qtdItensCarrinho' in req.session)) {
    req.session.qtdItensCarrinho = 0;
    res.send("Usuario sem carrinho. Inicializando carrinho de compra")
  } else {
    req.session.qtdItensCarrinho++;
    res.send('Qtd itens no carrinho: ' + req.session.qtdItensCarrinho);
  }

})

app.use(router);

app.listen(3000, function () {
  console.log("Aplicação iniciada em  http://localhost:3000");
});
