//Crie uma função que receba um array de inteiros e retorne o índice do maior valor

function returnHigherIndex(array) {
  let higher = array[0];
  for (i in array) {
    (array[i] > array[0]) ? higher = array[i] : higher;
  }
  console.log("O index do maior valor do array é: " + array.indexOf(higher));
}

returnHigherIndex([2, 3, 6, 7, 10, 1]);
