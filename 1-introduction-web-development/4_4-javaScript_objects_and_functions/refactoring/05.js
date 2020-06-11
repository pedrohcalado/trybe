//Faça um programa que defina três variáveis com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false caso contrário.

//Para os ângulos serem de um triângulo válido, a soma dos três deve ser 180 graus. Caso os ângulos estejam inválidos, o programa deve retornar uma mensagem de erro.

function isTriangle(a,b,c) {
  if (a+b+c === 180) {
    return true;
  } else {
    return false;
  }
}

let notTriangle = isTriangle(43,56,32);
let triangle = isTriangle(120,30,30);

console.log(notTriangle);
console.log(triangle);



