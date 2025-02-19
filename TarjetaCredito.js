// 1.
//  Diseñar un programa que permita validar el tipo de tarjeta de crédito que
// registra el operador, para ello debemos tener en cuenta que las diferentes
// tarjetas tienen diferentes nomenclaturas:
// American Express: 15 dígitos y empieza por(34 – 37)
// Diners Club: tiene 14 dígitos y empieza por(300 – 305 o 36 - 38)
// Discover: tiene 16 dígitos y empieza por(6011)
// Mastercard: tiene 16 dígitos y empieza por(51 – 55)
// Visa: tiene: 16 dígitos y empieza por(4)
// El programa solo se debe permitir el ingreso de enteros positivos y máximo
// 16 caracteres, si el operador ingresa un carácter no permitido se debe
// mostrar por pantalla el error y solicitar nuevamente el número de su tarjeta
// de crédito.
// Para este ejercicio se solicita trabajar con módulos, expresiones regulares y
// condicionales.Si está permitido solicitar al operador el tipo de su tarjeta de
// crédito.

function validarTarjeta(numero) {
  let tarjeta = numero.toString(); 

  if (!/^\d+$/.test(tarjeta)) { 
    return "Error: Solo se permiten números positivos.";
  }

  if (tarjeta.length > 16) { 
    return "Error: La tarjeta no puede tener más de 16 dígitos.";
  }


  if (tarjeta.length === 15 && /^3[47]/.test(tarjeta)) {
    return "American Express";
  } else if (tarjeta.length === 14 && (/^3(00|01|02|03|04|05)|^36|^38/.test(tarjeta))) {
    return "Diners Club";
  } else if (tarjeta.length === 16 && /^6011/.test(tarjeta)) {
    return "Discover";
  } else if (tarjeta.length === 16 && /^5[1-5]/.test(tarjeta)) {
    return "Mastercard";
  } else if ((tarjeta.length === 13 || tarjeta.length === 16) && /^4/.test(tarjeta)) {
    return "Visa";
  } else {
    return "Tipo de tarjeta desconocido";
  }
}

console.log(validarTarjeta(prompt("Ingresa tu tarjeta ")));

