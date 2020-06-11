const assert = require('assert')

// Começe a praticar TDD fazendo uma função que valida que um array de números não possui múltiplos de 3, 5, 7 e 11 
const arr = [];

const validate = (arr) => {
  for (let i = 0; i < arr.length; i += 1) {
    if (arr[i] % 3 === 0) {
      throw new Error('There should not be any numbers multiple of 3')
    }
  }
}

assert.throw(() => validate([3]), Error);

// Agora, revivendo exercícios passados do curso, faça com TDD uma função que recebe um número natural n e retorna todos os números primos de 0 a esse número.

