const numero = parseFloat(prompt("ingrese un número"));

function numParOImpar(numero) {
  if (Number.isInteger(numero)) {
    if (numero % 2 === 0) {
      alert(`El ${numero} es par`);
    } else {
      alert(`El ${numero} es impar`);
    }
  } else {
    alert(`El ${numero} es un número invalido`);
  }
}

numParOImpar(numero);
