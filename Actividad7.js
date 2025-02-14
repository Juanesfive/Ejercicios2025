// Escribir una funcion llamada contraseñaValida que recibaun string y retorne
// true si el string es igual a "2Fj(jjbFsuj" o eoZiugBf&g9
// De lo contrario debe retornar false.

const Validarcontraseña = validar => {
  if (validar === "2Fj(jjbFsuj" || validar === "eoZiugBf&g9")
    return true;
  
  return false;

}

console.log(Validarcontraseña(prompt("Ingresa la contraseña")));
