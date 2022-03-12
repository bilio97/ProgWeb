import express from "express";
import { engine } from "express-handlebars";
import router from "./router/router";
const app = express();

app.engine('handlebars', engine({
    helpers: {require: `${__dirname}/views/helpers/helpers`},
    layoutsDir: `${__dirname}/views/layouts`,
}));
app.set('view engine','handlebars');
app.set('views', `${__dirname}/views`),

app.get('/', (req, res) => {
    res.send("hello world");
})

app.use(router);

app.listen(4000, () => {
    console.log("listening on port 4000");
})