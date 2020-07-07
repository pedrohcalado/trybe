// Ainda com a mesma função do primeiro exercício, utilizando o mock, crie uma nova implementação que receba três parâmetros e retorne sua multiplicação. Após fazer os devidos testes para ela, resete sua implementação e crie uma nova, que receba um parâmetro e retorne seu dobro. Faça os testes necessários.

const functions = require('./functions');

test('testing a lot of stuff', () => {
  functions.randomNumber = jest.spyOn(functions, 'randomNumber').mockImplementation((a, b, c) => a * b * c);

  functions.randomNumber();
  expect(functions.randomNumber).toHaveBeenCalled();
  expect(functions.randomNumber).toHaveBeenCalledTimes(1);
  expect(functions.randomNumber(1, 2, 3)).toBe(6);
  expect(functions.randomNumber).toHaveBeenCalledTimes(2);

  functions.randomNumber.mockReset();
  functions.randomNumber = jest.spyOn(functions, 'randomNumber').mockImplementation(a => a * 2);
  functions.randomNumber();
  expect(functions.randomNumber).toHaveBeenCalled();
  expect(functions.randomNumber).toHaveBeenCalledTimes(1);
  expect(functions.randomNumber(5)).toBe(10);
  expect(functions.randomNumber).toHaveBeenCalledTimes(2);
})