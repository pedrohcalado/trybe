//Crie uma função que receba um array de inteiros e retorne o inteiro que mais se repete.

function mostFrequentInteger(array) {
  //criando objeto com valores únicos de arrey
  let unicValues = {};
  for (i in array) {
    if (unicValues[array[i]] == undefined) {
      unicValues[array[i]] = 0;
    }
  }
  console.log("Objeto com valores únicos do array: ");
  console.log(unicValues);
  console.log("------------------------------------");

  //criando contador para contar quantas vezes cada elemento do objeto aparecem no array
  let counter = 0;
  for (n in unicValues) {
    for (j in array) {
      if (n == array[j]) {
        counter += 1;
      }
      unicValues[n] = counter;
    }
    counter = 0;
  }
  console.log("Objeto com a contagem de cada elemento único: ");
  console.log(unicValues);
  console.log("------------------------------------");

  //verificando a key que aparece mais vezes
  let numberOfTimes = 0;
  let mostFrequent;
  for (k in unicValues) {
    if (unicValues[k] > numberOfTimes) {
      numberOfTimes = unicValues[k];
      mostFrequent = k;
    }
  }
  console.log(`O inteiro que se mais se repete no array é o ${mostFrequent}, aparecendo ${numberOfTimes} vezes.`);
}

mostFrequentInteger([2, 3, 2, 5, 8, 2, 3]);
