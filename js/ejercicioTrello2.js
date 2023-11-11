const numeros = [];

function numPares(numeros) {
  for (i = 1; i <= 10; i++) {
    numeros.push(parseInt(prompt("ingrese 10 números")));
  }
  const pares = numeros.filter((numero) => numero % 2 === 0);
  alert(`Los números pares son ${pares}`);
}

numPares(numeros);