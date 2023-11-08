let ciudad = [];
let ciudades = [];

do {
  ciudad = prompt("ingrese ciudades");
  ciudades.push(" " + ciudad);
} while (confirm("Quiere seguir agregando ciudades?"));

document.write(`${ciudades} <br>`);

document.write(
  `El arreglo de ciudades tiene ${ciudades.length} elementos <br>`
);
document.write(`<ul>
<li>Elemento 1er posición: ${ciudades[0]}</li>
<li>Elemento 3er posición: ${ciudades[2]}</li>
<li>Elemento última posición: ${ciudades[ciudades.length - 1]}</li>
</ul>`);

ciudades.push("Paris");
ciudades.splice(1, 0, "Barcelona");
document.write(`<ul>
<li>Elemento última posición: ${ciudades[ciudades.length - 1]}</li>
<li>Elemento segunda posición: ${ciudades[1]}</li>
</ul>`);

document.write(`<h1>Arreglo de ciudades</h1>`);
document.write(`<ul>`);
for (let i = 0; i < ciudades.length; i++) {
  document.write(`<li>Elemento: ${ciudades[i]}</li>`);
}
document.write(`</ul>`);
