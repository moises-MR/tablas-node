const yargs = require("yargs")
  .option("v1", {
    alias: "valor1",
    type: "number",
    demandOption: true,
    describe:
      "El --v1 ó --valor1 es el valor principal del numero de tablas de multiplicar ",
  })
  .option("v2", {
    alias: "valor2",
    type: "number",
    demandOption: true,
    describe:
      "El --v2 ó --valor2 es el valor secundario del final  de tablas de multiplicar  Ejemplo: de la tabla del 1 a la del 10 ",
  })
  .option("l", {
    alias: "listar",
    type: "boolean",
    default: false,
  })
  .check((yargs, options) => {
    if (isNaN(yargs.v1 && yargs.v2)) {
      throw "Los valores tiene que ser un numeros";
    }
    return true;
  }).argv;

module.exports = yargs;
