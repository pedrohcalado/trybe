/*Faça cinco programas, um para cada operação aritmética básica. Seu programa deve ter duas variáveis, a e b, definidas no começo com os valores que serão operados. Faça programas para:

Adição
Subtracão
Multiplicação
Divisão
Módulo
*/

function operations(a,b) {
  let soma = a + b;
let sub = a - b;
let mult = a * b;
let div = a / b;
let mod = a % b;

console.log("A soma é: " + soma);
console.log("A subtração é: " + sub);
console.log("A multiplicação é: " + mult);
console.log("A divisão é: " + div);
console.log("O módulo é: " + mod);
}

operations(4,3);

