//Faça um programa que retorne o maior de três números. Defina no começo do programa três variáveis com os valores que serão comparados.

let a = 1;
let b = 1;
let c = 2;

if (a==b==c){
    console.log("Os 3 números são iguais")
}
else if (a>=b && a>=c) {
    console.log(a);
    return a;
} else if (b>=a && b>=c) {
    console.log(b);
    return b;
} else {
    console.log(c);
    return c;
}