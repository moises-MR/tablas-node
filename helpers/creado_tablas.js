const fs = require("fs");
require("colors");

const creadorTablas = async (num1, num2, listar) => {
  try {
    for (let index = num1; index <= num2; index++) {
      let salida = "";

      for (let i = 1; i <= 10; i++) {
        salida += `${index} x ${i} = ${index * i}\n`;
      }

      fs.writeFileSync(`./salida/tabla_del_${index}.txt`, salida);

      if (listar) {
        console.log(
          `Tabla del ${index} \n Archivo creado !!`.brightMagenta.bgWhite
            .strikethrough.underline
        );
      }
    }
  } catch (error) {
    throw error;
  }

  if (!listar) {
    console.log(
      "Archivo Creado..".brightMagenta.bgWhite.strikethrough.underline
    );
  }
};

// exportando funcion

module.exports = {
  creadorTablas,
};
