// Mocking functions
function randomNumber() {
  return Math.floor(Math.random() * 100)
}

function isDivisible(number) {
  return (randomNumber() % number) === 0
}

test('test if randomNumber is called when isDivisible is called', () => {
  randomNumber = jest.fn();

  isDivisible();
  expect(randomNumber).toHaveBeenCalled();
});

test('return true when randomNumber returns even number', () => {
  randomNumber = jest.fn().mockReturnValue(4);
  expect(isDivisible(2)).toBeTruthy();
})

test('nested mocks', () => {
  randomNumber = jest.fn().mockReturnValue(12).mockReturnValueOnce(3).mockReturnValueOnce(5);

  expect(isDivisible(2)).toBeFalsy();
  expect(isDivisible(2)).toBeFalsy();
  expect(isDivisible(2)).toBeTruthy();
  expect(isDivisible(2)).toBeTruthy();
});

// Mocking modules

const math = require('./math');
jest.mock("./math");

test("#somar", () => {
  // Aqui testamos se função foi chamada, quantas vezes foi chamada, quais parâmetros foram usados e qual seu retorno

  // math.somar.mockImplementation((a, b) => a + b);
  math.somar(1, 2);

  expect(math.somar).toHaveBeenCalled();
  expect(math.somar).toHaveBeenCalledTimes(1);
  expect(math.somar).toHaveBeenCalledWith(1, 2);
  expect(math.somar(1, 2)).toBe(3);
});