/*
Escreva um programa que se inicie com dois valores em duas variáveis diferentes: o custo de um produto e seu valor de venda. A partir dos valores, calcule quanto de lucro (valor de venda descontado o custo do produto) a empresa terá ao vender mil desses produtos.

Atente que, sobre o custo do produto, incide um imposto de 20%.

Seu programa também deve emitir uma mensagem de erro e encerrar caso algum dos seus valores de entrada seja menor que zero.
*/

function profit(custo,valorDeVenda,numeroDeProdutos) {
  let lucro = valorDeVenda - (custo*1.2);
  if (custo<0 || valorDeVenda<0){
      console.log("Não é permitido o uso de valores negativos em custo e valor de venda");
  }else {
      console.log(lucro*numeroDeProdutos);
  }
}

profit(15,30,1000);



