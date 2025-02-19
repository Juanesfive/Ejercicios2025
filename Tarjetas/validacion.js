

export function validarNumeroTarjeta(numero) {
    let tarjeta = numero.toString();
  
    if (!/^\d+$/.test(tarjeta)) {
      return { valido: false, mensaje: "Error: Solo se permiten números positivos." };
    }
  
    if (tarjeta.length > 16) {
      return { valido: false, mensaje: "Error: La tarjeta no puede tener más de 16 dígitos." };
    }
  
    return { valido: true, tarjeta };
  }
  