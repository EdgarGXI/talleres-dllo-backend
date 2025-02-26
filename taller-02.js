function findMax(lista) {
  let mayor = lista[0];
  for (let indice = 1; indice < lista.length; indice++) {
    if (lista[indice] > mayor) {
      mayor = lista[indice];
    }
  }
  return mayor;
}

function includes(lista, valor) {
  for (let posicion = 0; posicion < lista.length; posicion++) {
    if (lista[posicion] === valor) {
      return true;
    }
  }
  return false;
}

function sum(numeros) {
  let total = 0;
  for (let i = 0; i < numeros.length; i++) {
    total += numeros[i];
  }
  return total;
}


function missingNumbers(array) {
  let min = array[0];
  let max = array[0];

  for (let i = 1; i < array.length; i++) {
    if (array[i] < min) {
      min = array[i];
    }
    if (array[i] > max) {
      max = array[i];
    }
  }

  let missingNumbers = [];

  for (let i = min + 1; i < max; i++) {
    let found = false;
    for (let j = 0; j < array.length; j++) {
      if (array[j] === i) {
        found = true;
        break;
      }
    }
    if (!found) {
      missingNumbers.push(i);
    }
  }

  return missingNumbers;
}


