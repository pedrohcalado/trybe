const removeVowels = (word) => {
  
  if (typeof(word) !== 'string') {
    return 'The parameter should be a string'
  } else {
    const characters = word.split('');
    const results = [];
    let countVowels = 0;
    for (let i = 0; i < characters.length; i += 1) {
      if (
        characters[i] === 'a' ||
        characters[i] === 'o' ||
        characters[i] === 'i' ||
        characters[i] === 'e' ||
        characters[i] === 'u'
      ) {
        countVowels += 1;
        results.push(`${countVowels}`);
      } else {
        results.push(characters[i]);
      }
    }
    return results.join('');
  }
};


const parameter = 'Dayane';
const result = 'D1y2n3';
/*
  Use a variável parameter como parâmetro da função acima, escreva testes
  para verificar se a mesma está retornando a como se vê na variável result
  e, caso não esteja, altere o código para que ele passe nos testes.
  Lembre-se: testes pequenos e numerosos! Escreva um por vez e vá corrigindo
  a função aos poucos:
*/

const assert = require('assert');

assert.deepEqual(typeof(removeVowels), 'function');
assert.deepEqual(removeVowels('a'), '1');
assert.deepEqual(removeVowels('aa'), '12');
assert.deepEqual(removeVowels('aeiou'), '12345');
assert.deepEqual(removeVowels(parameter), result);
assert.deepEqual(removeVowels('abc'), '1bc');
assert.deepEqual(removeVowels(123),'The parameter should be a string');
