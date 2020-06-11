//Crie uma função que receba um array de inteiros e retorne o índice do menor valor

function returnLowerIndex(array) {
  let lower = array[0];
  for (i in array) {
    (array[i] < array[0]) ? lower = array[i] : lower;
  }
  console.log("O index do menor valor do array é: " + array.indexOf(lower));
}

returnLowerIndex([2, 4, 6, 7, 10, 0, -3]);
