//  Escribir una funcion llamada sumarArreglo que reciba tres argumentos:
//  un arreglo de números, La posicion inicial y la posición final.
//  La función debe retornar La suma de todos Los números dentro del rango
//  (La posición inicial y la posicion final, incluyendolas).

//  Nota: puedes asumir que la posicion inicial va a ser menor o igual
//  a la posición final, y que estan dentro de los limites del arreglo

let a = parseInt(prompt(" ingresa el numero inicial"));
let b = parseInt(prompt(" ingresa el numero final"));
let c = [1, 2, 5, 48, 7, 1, 24, 8, 9, 1, 2, 5];

const sumarArreglo = (a, b, c) => {
  let suma = 0;
  if (a < c.length && b > a && a > 0) {

    for (let i = a; i <= b; ++i) {

      suma = suma += c[i]

    }
    return suma;

  } else {

    throw new Error("los rangos superan el limite del arreglo");

  }

}

let resultado = sumarArreglo(a, b, c);
console.log(resultado);
