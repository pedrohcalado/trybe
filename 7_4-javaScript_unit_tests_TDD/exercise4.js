const assert = require('assert');
// escreva a função findTheNeedle para passar nos testes abaixo:
const findTheNeedle = (arr, word) => {
  for (i in arr) {
    if (arr[i]===word) return parseInt(i);
  }
  if (!arr.includes(word)) return -1;
};
//
let words = ['house', 'train', 'slide', 'needle', 'book'];
let expected = 3;
let output = findTheNeedle(words, 'needle');
assert.strictEqual(output, expected);

words = ['plant', 'shelf', 'arrow', 'bird'];
expected = 0;
output = findTheNeedle(words, 'plant');
assert.strictEqual(output, expected);

words = ['plant', 'shelf', 'arrow', 'bird'];
expected = -1;
output = findTheNeedle(words, 'plat');
assert.strictEqual(output, expected);
