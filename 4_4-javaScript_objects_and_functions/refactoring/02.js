//Faça um programa que retorne o maior de dois números. Defina no começo do programa duas variáveis com os valores que serão comparados.

function higher(a,b) {
  if (a>b){
    console.log(a);
  }
  else if (a<b) {
      console.log(b);
  }
  else {
      console.log ("Os números são iguais");
  }
}

higher(5,4);
