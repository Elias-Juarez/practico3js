const numero = parseInt(prompt("ingrese un número"));

function multiplicar(valor) {
  document.write(`<table><tbody>`);
  for (i = 1; i <= 10; i++) {
    document.write(`<tr>
      <td>${valor} * ${i}</td>
      <td>${valor * i}</td>
      </tr>`);
  }
  document.write(`</table></tbody>`);
}

multiplicar(numero);
