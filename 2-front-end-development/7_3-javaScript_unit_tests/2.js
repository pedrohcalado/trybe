const assert = require('assert');

function myIndexOf(arr, item) {
  let searchedIndex = -1;
  for (let i = 0; i < arr.length; i += 1) {
    if (item === arr[i]) {
      searchedIndex = i;
    }
  }
  return searchedIndex;
}

// implemente seus testes aqui
//A função myIndexOf(arr, item) recebe um array arr, um item e retorna o índice do item ou -1 caso o item não pertença ao array arr
  // Teste se a chamada myIndexOf([1, 2, 3, 4], 3) retorna o valor esperado
    assert.deepEqual(myIndexOf([1, 2, 3, 4], 3), 2, 'The index of the item 3 in the arr is 2');

  // Teste se a chamada myIndexOf([1, 2, 3, 4], 5) retorna o valor esperado
  assert.deepEqual(myIndexOf([1, 2, 3, 4], 5), -1, 'The item 5 is not in the arr, the result should be -1');