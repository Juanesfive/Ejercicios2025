// Escribir una funcion llamada calcularImpuestos que reciba dos
//  argumentos numericos:edad e ingresos. Si edad es igual o mayor
// a 18 y los ingresos son iguales o mayores a 1000 debe retornar ingresos
// * 40%. De lo contrario retornar 0.


let edad = parseInt(prompt("Ingrese la edad"));

let ingresos = parseFloat(prompt("Ingrese los ingresos"));

function calcularImpuestos(edad, ingresos) {

  if (edad >= 18 && ingresos >= 1000) {

    return ingresos * 0.4;

    
    
  } 

  return 0;


  
}



console.log(calcularImpuestos(edad, ingresos));
 

