let dado1 = 0;
let dado2 = 0;
let suma = [];
let aparicion2 = [];
let aparicion3 = [];
let aparicion4 = [];
let aparicion5 = [];
let aparicion6 = [];
let aparicion7 = [];
let aparicion8 = [];
let aparicion9 = [];
let aparicion10 = [];
let aparicion11 = [];
let aparicion12 = [];

function tiradaDados() {
  return Math.round(Math.random() * (6 - 1) + 1);
}

for (i = 1; i <= 50; i++) {
  dado1 = tiradaDados();
  dado2 = tiradaDados();
  suma = dado1 + dado2;

  if (suma === 2) {
    aparicion2.push(2);
  } else if (suma === 3) {
    aparicion3.push(3);
  } else if (suma === 4) {
    aparicion4.push(4);
  } else if (suma === 5) {
    aparicion5.push(5);
  } else if (suma === 6) {
    aparicion6.push(6);
  } else if (suma === 7) {
    aparicion7.push(7);
  } else if (suma === 8) {
    aparicion8.push(8);
  } else if (suma === 9) {
    aparicion9.push(9);
  } else if (suma === 10) {
    aparicion10.push(10);
  } else if (suma === 11) {
    aparicion11.push(11);
  } else {
    aparicion12.push(12);
  }
}

document.write(`<table>
<thead>
    <tr>
        <th class="tituloDados">Suma</th>
        <th class="tituloDados">Apariciones</th>
    </tr>
</thead>
<tbody>
    <tr>
        <td>2</td>
        <td>${aparicion2.length}</td>
    </tr>
    <tr>
        <td>3</td>
        <td>${aparicion3.length}</td>
    </tr>
    <tr>
        <td>4</td>
        <td>${aparicion4.length}</td>
    </tr>
    <tr>
        <td>5</td>
        <td>${aparicion5.length}</td>
    </tr>
    <tr>
        <td>6</td>
        <td>${aparicion6.length}</td>
    </tr>
    <tr>
        <td>7</td>
        <td>${aparicion7.length}</td>
    </tr>
    <tr>
        <td>8</td>
        <td>${aparicion8.length}</td>
    </tr>
    <tr>
        <td>9</td>
        <td>${aparicion9.length}</td>
    </tr>
    <tr>
        <td>10</td>
        <td>${aparicion10.length}</td>
    </tr>
    <tr>
        <td>11</td>
        <td>${aparicion11.length}</td>
    </tr>
    <tr>
        <td>12</td>
        <td>${aparicion12.length}</td>
    </tr>
</tbody>
</table>`);
