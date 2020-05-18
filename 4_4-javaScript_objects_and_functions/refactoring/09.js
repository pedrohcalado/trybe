//Escreva um programa que defina três números em variáveis no seu começo e retorne true se uma das três for ímpar. Caso contrário, ele retorna false.

function oneOdd(a,b,c) {
  if (a%2!=0 || b%2!=0 || c%2!=0){
    console.log(true);
} else {
    console.log(false);
}
}

oneOdd(1,2,3);
oneOdd(2,2,2);
