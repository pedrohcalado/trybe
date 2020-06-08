// Crie uma função que receba um número e retorne seu fatorial.
const factorial = (n) => (n > 0) ? (n * factorial(n-1)) : 1;

console.log(factorial(3));

