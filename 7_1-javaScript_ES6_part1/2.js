// Crie uma função que receba uma frase e retorne qual a maior palavra.

const largestWord = phrase => {
  let arr = phrase.split(' ');
  let largest = arr[0];
  for (i in arr) {
    (arr[i] > arr[0]) ? largest = arr[i] : largest;
  }
  return (largest);
}

console.log(largestWord('Antônio foi no banheiro e não sabemos o que aconteceu'));

