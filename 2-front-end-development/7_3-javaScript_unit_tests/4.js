// A função myRemove(arr, item) recebe um array arr e retorna uma cópia desse array sem o elemento item caso ele exista no array 
const assert = require('assert');

function myRemove(arr, item) {
  let newArr = [];
  for (let i = 0; i < arr.length; i += 1) {
    if (item !== arr[i]) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}

// implemente seus testes aqui
  // Verifique se a chamada myRemove([1, 2, 3, 4], 3) retorna o array esperado
    assert.deepEqual(myRemove([1, 2, 3, 4], 3), [1, 2, 4], 'The result should be [1, 2, 4]');

  // Verifique se a chamada myRemove([1, 2, 3, 4], 3) não retorna o array [1, 2, 3, 4]
    assert.notDeepEqual(myRemove([1, 2, 3, 4], 3), [1, 2, 3, 4], 'The result should not be [1, 2, 3, 4]');

  // Verifique se o array passado por parâmetro não sofreu alterações
    assert.deepEqual(myRemove([1, 2, 3, 4], 5), [1, 2, 3, 4], 'The array used as parameter should not be modified');

  // Verifique se a chamada myRemove([1, 2, 3, 4], 5) retorna o array esperado
    assert.deepEqual(myRemove([1, 2, 3, 4], 5), [1, 2, 3, 4], 'The result should be [1, 2, 3, 4]');