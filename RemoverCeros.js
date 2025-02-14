// Escribir una funcion llamada removerCeros que reciba un arreglo
// de numeros y retorne un nuevo arreglo excluyendo los ceros(0).

numeros = [5, 6, 0, 8, 7, 0, 7];

function removerCeros(numeros) {
  resultado = [];

  for (i = 0; i < numeros.length; i++){

    if (numeros[i] != 0) {

      resultado.push(numeros[i])
      
    }
    
  } return resultado;
  
  
}

console.log(removerCeros(numeros));


