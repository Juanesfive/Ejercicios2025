// Genera un patron de asteriscos en forma de piramide
let espaciado = "                   ";
let alto = parseInt(prompt("ingrese la altura de la piramide"));

const piramide = (alto) => {
  console.log(typeof alto);
  for (let i = 2; i <= alto; i++) {
    for (let j = 2; j <= i * 2; j++) {
      console.log();

      astericos = "*";
    }
    astericos = "       ";
  }
};

console.log(alto);
piramide(alto);
