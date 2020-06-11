// Imagine que você vai construir uma máquina de venda automática (como essas que vendem refrigerante). A máquina aceita moedas e calcula a diferença do valor total que deve ser pago e o valor recebido da pessoa que compra. Essa máquina possui um conjunto de moedas. Você deve implementar a seguinte lógica: dado o valor do troco, a máquina retorna uma lista com as moedas que ela devolverá para a pessoa.

// Requisitos
  //Como uma pessoa que compra em máquinas automáticas, eu gostaria de selecionar um item, depositar o pagamento e receber o item e o troco.

// Critérios de aceite
  // Uma chamada bem-sucedida de uma função getChange deve retornar uma lista com o valor das moedas que serão devolvidas à pessoa
  // Essa lista deve estar no formato decrescente de valor
  // É permitida a repetição do valor de moedas, por exemplo, [200, 100, 50, 20, 10, 2, 2]
  // Um erro com a mensagem paid value is not enough deve ser lançado se o valor pago for menor que o valor da compra

/*
As moedas serão representadas pelos valores 200, 100, 50, 20, 10, 5, 2 e 1. Abaixo, existe uma lista de correspondência com os valores em reais (R$)

200 (R$2)
100 (R$1)
50 (R$0,50)
20 (R$0,20)
10 (R$0,10)
5 (R$0,05)
2 (R$0,02)
1 (R$0,01)
A quantidade de cada moeda é infinita, imagine que isso é uma simplificação do problema.
*/

function getChange(payable, paid) {
  const coins = [200, 100, 50, 20, 10, 5, 2, 1];
  const change = [];
  const { length } = coins;
  let remaining = paid - payable;

  // escreva seu código aqui...
  if (remaining < 0) {
    throw new Error('paid value is not enough');
  } else {
    for (let i = 0; i < coins.length; i += 1) {
      while (remaining >= coins[i]) {
        change.push(coins[i]);
        remaining -= coins[i];
      }
    }
    return change;
  }
}

// testes unitários
const assert = require('assert');

let result = getChange(1, 1); // no change/coins just an empty array
let expected = [];
assert.deepEqual(result, expected);

result = getChange(215, 300); // expect an array containing [50, 20, 10, 5]
expected = [50, 20, 10, 5];
assert.deepEqual(result, expected);

result = getChange(486, 600); // expect an array containing [100, 10, 2, 2]
expected = [100, 10, 2, 2];
assert.deepEqual(result, expected);

result = getChange(12, 400); // expect an array containing [200, 100, 50, 20, 10, 5, 2, 1]
expected = [200, 100, 50, 20, 10, 5, 2, 1];
assert.deepEqual(result, expected);

assert.throws(() => { getChange(100, 10); }, /^Error: paid value is not enough$/);

