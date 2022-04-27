const express = require("express");
const router = require("./config/routes");

const app = express();
app.use(router);

app.listen(3000, function () {
  console.log("Express app iniciada na porta 3000.");
});
