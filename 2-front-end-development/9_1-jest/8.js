// Teste se uma função foi definida 
const assert = require('assert');

function thereIs() {}

// implemente seus testes aqui
assert.deepEqual(typeof(thereIs), 'function', 'The function was not defined')