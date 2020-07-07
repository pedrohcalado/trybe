// Utilizando as mesmas funções do exercício anterior, repita a implementação para a primeira função. Após repetir a implementação, restaure a implementação original e crie os testes necessários para validar.

const functions = require('./functions04');

test('testing toUpper', () => {
  functions.toUpper = jest.spyOn(functions, 'toUpper').mockImplementation(str => str.toLowerCase());

  expect(functions.toUpper('ABC')).toEqual('abc');

  functions.toUpper.mockRestore();
  functions.toUpper = jest.spyOn(functions, 'toUpper');
  expect(functions.toUpper('abc')).toMatch('ABC');
  expect(functions.toUpper).toHaveBeenCalledTimes(1);
  expect(functions.toUpper).toHaveBeenLastCalledWith('abc');
})
