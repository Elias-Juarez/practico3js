const texto = prompt("ingrese un texto");

function mayusculaOMisnuscula(texto) {
  if (texto === texto.toUpperCase()) {
    alert("El texto ingresado esta formado por mayúsculas");
  } else if (texto === texto.toLowerCase()) {
    alert("El texto ingresado esta formado por minúsculas");
  } else {
    alert("El texto ingresado esta formado por mayúsculas y minúsculas");
  }
}

mayusculaOMisnuscula(texto);
