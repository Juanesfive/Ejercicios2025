// Escribir una función llamada multiplicar arreglo
// que reciba un arreglo de numeros y retorne la
// multiplicacion de todos los elementos

let iniciar = 1;

let arreglo = [5,3,4,7,6];

function llamadaArreglo(arreglo) {
  for (let i = 0; i < arreglo.lenght; i++){
    if (arreglo[i] != 0) {
      iniciar = (arreglo[i] * iniciar);
      
    }
  } return iniciar;


}

