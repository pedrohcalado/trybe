const promise = new Promise ((resolve, reject) => {
  
  const randomNumbersFrom1to50 = () => Math.floor(Math.random() * 50);
  const arr = [];
  
  for (let i = 0; i < 10 ; i += 1) arr.push(randomNumbersFrom1to50());
  arr.forEach((n, i) => arr[i] = n * n);
  
  const sum = arr.reduce((acc, num) => acc + num, 0);
  console.log(sum);

  if (sum < 8000) {
    resolve('Deu bom');
  } else {
    reject('Deu ruim');
  }
});

promise
  .then((message) => console.log(message))
  .catch((message) => console.log(message))