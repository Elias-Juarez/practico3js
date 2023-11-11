const gradosCelsius = parseFloat(
  prompt("ingrese un número para calcular los grados celsius a Fahrenheit")
);
let fahrenheit = 0;

function gradosFahrenheit(celsius) {
  fahrenheit = (celsius * 9/5) + 32;
  alert(`${celsius} grados celsius es igual a ${fahrenheit} grados fahrenheit`);
}

gradosFahrenheit(gradosCelsius);