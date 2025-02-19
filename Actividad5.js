// Escribir una funcion llamada fizzBuzz que reciba y retorne un string de acuerdo
// a lo siguiente:

// "fizz" si el número es multiplo de 3.
// "buzz" si el numero es múltiplo de 5
// "fizzbuzz" si el número es multiplo tanto de 3 como de 5
// si no cumple ninguna de las condiciones anteriores debe retornar el mismo número.


let num;

function fizzBuzz(num) {
  if (num % 3 == 0) {

    if (num % 5 == 0) {
      return "fizzbuzz";
    }   
    
    return "fizz";

  } else if (num % 5 == 0)
    return "buzz";

  else {
    return (num);
  }
  
} 

  
console.log(fizzBuzz(parseInt(prompt("Ingrese un numero"))));

  
