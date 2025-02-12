// Escribir una funcion llamada imprimirArreglo
// que reciba un arreglo e imprima cada elemento
// en una linea a parte:

const arreglo = ["Carro", "Moto", "Camioneta"];
function imprimirArreglo(arreglo) {
  for (let i = 0; i <= arreglo.length; i++) {
    console.log(arreglo[i]);
  }
}

console.log(imprimirArreglo(arreglo));
