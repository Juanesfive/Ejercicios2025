// Numero de aes(letra "a")

// Escribir una funcion llamada numero Aes que reciba un string y retorne el numero

// de veces que aparece la letra "a"

let palabra = (prompt("Ingrese un palabra"));

function numeroAes(palabra) {
  let veces = palabra.match(/aA/.gi).length;
    return veces;
  
}

console.log(numeroAes(palabra));




