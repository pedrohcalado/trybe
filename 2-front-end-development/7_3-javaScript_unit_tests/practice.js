const assert = require('assert');

// function division(x, y) {
//   return x / y;
// }

// const expected = division(9, 3);

// assert.equal(expected, 4, 'Mensagem customizada do erro');

// -------------------

const obj1 = {
  name: 'Pedro',
  age: 28,
  dogName: 'Stellinha'
}

const obj2 = {
  name: 'Luana',
  age: 27,
  dogName: 'Stella'
}

assert.deepEqual(obj1.dogName, obj2.dogName, 'These objects values are different');

// --------------------

const assert = require('assert');

function division(x, y) {
  if (y === 0) throw new Error('parameter y must not be 0');
  return x / y;
}

division(10, 0);

assert.equal(division(10, 2), 5); // OK
assert.throws(() => { division(10, 0); }, /^Error: parameter y must not be 0$/); // OK
