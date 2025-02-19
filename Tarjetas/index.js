// index.js
import { validarNumeroTarjeta } from "./validacion.js";
import { identificarTipoTarjeta } from "./tarjeta.js";

const numero = prompt("Ingresa tu número de tarjeta:");

const resultadoValidacion = validarNumeroTarjeta(numero);

if (!resultadoValidacion.valido) {
  console.log(resultadoValidacion.mensaje);
} else {
  const tipoTarjeta = identificarTipoTarjeta(resultadoValidacion.tarjeta);
  console.log(`El tipo de tarjeta es: ${tipoTarjeta}`);
}
