const ladoA = parseFloat(
  prompt("Ingrese el primer valor de un lado del rectángulo")
);
const ladoB = parseFloat(
  prompt("Ingrese el segundo valor del lado de un rectángulo")
);
let p = 0;

function perimetro(a , b) {
  p = 2 * (a + b);
  alert(`El perimetro del rectángulo es ${p}`)
}

perimetro(ladoA, ladoB)


