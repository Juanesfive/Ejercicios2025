

export function identificarTipoTarjeta(numero) {
    let tarjeta = numero.toString();
  
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
  