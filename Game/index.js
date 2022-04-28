import express from "express";
import router from "./config/routes.js";
import { engine } from "express-handlebars";

const app = express();

app.engine("handlebars", engine());
app.set("view engine", "handlebars");
app.set("views", "./app/views");
app.engine(
  "handlebars",
  engine({
    layoutsDir: "./app/views/layouts",
    defaultLayout: "layout1",
  })
);

app.use(router);

app.listen(3000, function () {
  console.log("Express app iniciada na porta 3000.");
});
