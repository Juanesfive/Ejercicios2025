// Escribe una funcion llamada likes que reciba un numero y retorne un string utilizando el formato de k para miles y M para millones

// Por Ejemplo:

// 1400 se convierte en 1k
// 64.567 se convierte en 34K
// 7.456.345 se convierte en 7M.
// si el numero es menor a 1000 se debe devolver el mismo numero como un string.

let numero = parseInt(prompt("¿cuantos likes tiene?"));

const likes = numero => {
  if (numero < 1000) {
    console.log(`${numero}`)
  }
  else if (numero < 1000000) {
    console.log(`${Math.round(numero / 1000).toFixed(0)}K`)
  }
  else {
    console.log(`${Math.round(numero / 1000000).toFixed(0)}M`)
  }
}

likes(numero);
