// 1 - A função sum(a, b) retorna a soma do parâmetro a com o b

function sum(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('parameters must be numbers');
  }

  return a + b;
}

// 2 - A função myIndexOf(arr, item) recebe um array arr, um item e retorna o índice do item ou -1 caso o item não pertença ao array arr

function myIndexOf(arr, item) {
  let searchedIndex = -1;
  for (let i = 0; i < arr.length; i += 1) {
    if (item === arr[i]) {
      searchedIndex = i;
    }
  }
  return searchedIndex;
}

// 3 - A função mySum(arr) recebe um array arr e retorna a soma de seus elementos

function mySum(arr) {
  let result = 0;
  for (let item in arr) {
    result += arr[item];
  }
  return result;
}

// 4 - A função myRemove(arr, item) recebe um array arr e retorna uma cópia desse array sem o elemento item caso ele exista no array 

function myRemove(arr, item) {
  let newArr = [];
  for (let i = 0; i < arr.length; i += 1) {
    if (item !== arr[i]) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}

// 5 - A função myRemoveWithoutCopy(arr, item) recebe um array arr e retorna o próprio array sem o elemento item caso ele exista no array

function myRemoveWithoutCopy(arr, item) {
  for (let i = 0, len = arr.length; i < len; i += 1) {
    if (arr[i] === item) {
      arr.splice(i, 1);
      i -= 1;
      len -= 1;
    }
  }

  return arr;
}

// 6 - A função myFizzBuzz(num) recebe um número num e retorna "fizzbuzz" se o número for divisível por 3 e 5, retorna "fizz" se for divisível apenas por 3, retorna "buzz" se divisível apenas por 5, retorna o próprio número caso não seja divísivel por 3 ou 5 e retorna false caso num não seja um número

function myFizzBuzz(num) {
  if (typeof num !== 'number') return false;
  if (num % 3 === 0 && num % 5 === 0) return 'fizzbuzz';
  if (num % 3 === 0) return 'fizz';
  if (num % 5 === 0) return 'buzz';
  return num;
}

// 7 - Teste se uma variável foi definida

const thereIsV = '';

// 8 - Teste se uma função foi definida 

function thereIsF() {}

// 10 - Compare dois objetos (JSON) para verificar se são idênticos ou não

const obj1 = {
  title: 'My Title',
  description: 'My Description',
};

const obj2 = {
  description: 'My Description',
  title: 'My Title',
};

const obj3 = {
  title: 'My Different Title',
  description: 'My Description',
};

// 11 - Faça o teste de uma função que compara dois números e retorna true se o primeiro for maior que o segundo e false caso contrário.

function isAbove(num1, num2) {
  return num1 > num2;
}

// bonus1 - 

function getChange(payable, paid) {
  const coins = [200, 100, 50, 20, 10, 5, 2, 1];
  const change = [];
  const { length } = coins;
  let remaining = paid - payable;
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

// exporta as funções
module.exports = {
  sum,
  myIndexOf,
  mySum,
  myRemove,
  myRemoveWithoutCopy,
  myFizzBuzz,
  thereIsF,
  thereIsV,
  obj1,
  obj2,
  obj3,
  isAbove,
  getChange
}