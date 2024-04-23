document
  .getElementById('numerosForm')
  .addEventListener('submit', function (event) {
    event.preventDefault();

    //Obtener los númeross
    var num1 = parseFloat(document.getElementById('num1').value);
    var num2 = parseFloat(document.getElementById('num2').value);
    var num3 = parseFloat(document.getElementById('num3').value);

    // Identificar el número mayor, el número del centro y el número menor
    var mayor, centro, menor;

    // Encontrar el mayor
    mayor = Math.max(num1, num2, num3);
    // Encontrar el menor
    menor = Math.min(num1, num2, num3);
    // El número del centro es el que queda
    centro = num1 + num2 + num3 - mayor - menor;

    // Imprimir los números ordenados de mayor a menor
    var resultado =
      'Ordenados de mayor a menor: ' +
      mayor +
      ', ' +
      centro +
      ', ' +
      menor +
      '<br>';

    // Imprimir los números ordenados de menor a mayor
    resultado +=
      'Ordenados de menor a mayor: ' +
      menor +
      ', ' +
      centro +
      ', ' +
      mayor +
      '<br>';

    // Identificar si los números son iguales
    if (num1 === num2 && num1 === num3) {
      resultado += 'Los números ingresados son iguales.';
    }
    document.getElementById('resultado').innerHTML = resultado;
  });
