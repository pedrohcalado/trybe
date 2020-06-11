//Crie uma função que receba um número inteiro N e retorne o somatório de todos os números de 1 até N

function sumUp(N) {
  //percorre todos os números até chegar em N (incluindo N) e soma cada número
  let sum = 0;
  for (let i = 1; i <= N; i+=1) {
    sum += i;
  }
  return sum;
}

console.log(sumUp(5));
