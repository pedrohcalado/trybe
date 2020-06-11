// Faça o teste de uma função que compara dois números e retorna true se o primeiro for maior que o segundo e false caso contrário.

const assert = require('assert');

function isAbove(num1, num2) {
  return num1 > num2;
}

// implemente seus testes aqui
assert.deepStrictEqual(typeof(isAbove), 'function')
assert.deepStrictEqual(isAbove(2, 1), true);
assert.deepStrictEqual(isAbove(1, 2), false);
assert.deepStrictEqual(isAbove(1, 1), false);
assert.deepStrictEqual(isAbove(-1, -21), true);
assert.deepStrictEqual(isAbove(0.2, 0.1), true);
assert.deepStrictEqual(isAbove('-1', -21), false, 'The parameters should be numbers');
assert.deepStrictEqual(isAbove('abc', -21), false);
assert.deepStrictEqual(isAbove('abc', 'a'), false, 'The parameters should be numbers');


