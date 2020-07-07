// Crie uma função que gere um número aleatório entre 0 e 100. Você irá criar também os testes para essa função. Utilizando o mock, defina o retorno padrão como 10. Teste se a função foi chamada, qual seu retorno e quantas vezes foi chamada.

const functions = require('./functions')

test('testing the function mocking with 10', () => {
  functions.randomNumber = jest.fn().mockReturnValue(10);
  
  functions.randomNumber();
  expect(functions.randomNumber).toHaveBeenCalled();
  expect(functions.randomNumber).toHaveBeenCalledTimes(1);
  expect(functions.randomNumber()).toBe(10);
  expect(functions.randomNumber).toHaveBeenCalledTimes(2);
});
