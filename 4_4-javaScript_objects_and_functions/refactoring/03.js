//Faça um programa que retorne o maior de três números. Defina no começo do programa três variáveis com os valores que serão comparados.

let a = 1;
let b = 1;
let c = 2;

function higher(a,b,c) {
  if (a==b==c){
      console.log("Os 3 números são iguais")
  }
  else if (a>=b && a>=c) {
      return a;
  } else if (b>=a && b>=c) {
      return b;
  } else {
      return c;
  }
}

let maior = higher(1,2,3);
console.log(maior);
