const promise = new Promise ((resolve, reject) => {
  // cria funcao que gera numeros randomicos
  const randomNumbersFrom1to50 = () => Math.floor(Math.random() * 50);
  const arr = [];
  // insere 10 elementos no array
  for (let i = 0; i < 10 ; i += 1) arr.push(randomNumbersFrom1to50());
  // eleva cada elemento do array ao quadrado
  arr.forEach((n, i) => arr[i] = n * n);
  // soma os elementos do array
  const sum = arr.reduce((acc, num) => acc + num, 0);
  console.log(sum);
  // cria condições de sucesso e erro da promise
  if (sum < 8000) {
    resolve(sum);
  } else {
    reject();
  }
});

promise
  .then((sum) => {
    const numbersOfDifision = [2, 3, 5, 10];
    const arrayOfDivision = numbersOfDifision.map(n => sum / n)
    console.log(arrayOfDivision);
    return arrayOfDivision;
  })
  .then((ret) => {
    const sumOfDivision = ret.reduce((acc, num) => acc + num);
    console.log(sumOfDivision);
  })
  .catch(() => console.log('É mais de oito mil! Essa promise deve estar quebrada!'))