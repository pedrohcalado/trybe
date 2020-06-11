//Escreva um programa que defina três números em variáveis no seu começo e retorne true se uma das três for par. Caso contrário, ele retorna false.

function oneEven(a,b,c) {
  if (a%2==0 || b%2==0 || c%2==0){
    console.log(true);
} else {
    console.log(false);
}
}

oneEven(1,2,3);
oneEven(1,5,7);
