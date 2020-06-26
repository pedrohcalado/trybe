const testArrayElements = () => {
  return new Promise ((resolve, reject) => {
    const sum = sumOfSquaredArrayElements(createRandomArrayWith10Elements());
    if (sum < 8000) {
      resolve(sum);
    } else {
      reject(`A soma é ${sum}.
É mais de oito mil! Essa promise deve estar quebrada!`);
    }
  });
}

const randomNumbersFrom1to50 = () => Math.floor(Math.random() * 50);

const createRandomArrayWith10Elements = () => {
  const arr = [];
  for (let i = 0; i < 10 ; i += 1) arr.push(randomNumbersFrom1to50());
  return arr;
}

const sumOfSquaredArrayElements = (arr) => {
  arr.forEach((n, i) => arr[i] = n * n);
  const sum = arr.reduce((acc, num) => acc + num, 0);
  return sum;
}

const divideBy234510 = (number) => {
  const numbersOfDifision = [2, 3, 5, 10];
  return numbersOfDifision.map(n => number / n)
}

const sumArrayElements = (arr) => {
  return arr.reduce((acc, num) => acc + num);
}

async function doTheJob() {
  try {
    const testArrayElementsResponse = await testArrayElements()
    console.log(`A soma dos elementos do array de 10 elementos criado é ${testArrayElementsResponse}`)
    const divideBy234510Response = await divideBy234510(testArrayElementsResponse)
    console.log(`O array da soma dividido por 2, 3, 4, 5 e 10 é ${divideBy234510Response}`)
    const sumArrayElementsResponse = await sumArrayElements(divideBy234510Response)
    console.log(`A soma dos elementos deste último array é ${sumArrayElementsResponse}`)
  }
  catch(e) {
    console.log(e)
  }
}

doTheJob();