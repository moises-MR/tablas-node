const { creadorTablas } = require("./helpers/creado_tablas");
const yargs = require("./config/yargs");

console.clear();

const { valor1, valor2, listar } = yargs;

creadorTablas(valor1, valor2, listar)
  .then((msg) => console.log(msg))
  .catch((err) => console.log(err));
