// Com a mesma função do exercício anterior, utilizando o mock, crie uma nova implementação, que deve receber dois parâmetros e retornar a divisão do primeiro pelo segundo. Essa implementação deve ocorrer uma única vez. Faça os testes necessários.

const functions = require('./functions');

test('test the division', () => {
  functions.randomNumber = jest.fn().mockImplementation((a, b) => a / b);

  functions.randomNumber();
  expect(functions.randomNumber).toHaveBeenCalled();
  expect(functions.randomNumber).toHaveBeenCalledTimes(1);
  expect(functions.randomNumber(4, 2)).toBe(2);
  expect(functions.randomNumber).toHaveBeenCalledTimes(2);
})
