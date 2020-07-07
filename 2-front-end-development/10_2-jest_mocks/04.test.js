// Dentro de um mesmo arquivo, crie três funções. A primeira deve receber uma string e retorná-la em caixa alta. A segunda deve também receber uma string e retornar só a primeira letra. A terceira deve receber duas strings e concatená-las. Faça o mock do arquivo. Faça uma nova implementação para a primeira função, mas agora ela deve retornar a string em caixa baixa. Para a segunda função, uma nova implementação deve retornar a última letra de uma string. A terceira deve receber três strings e concatená-las.

const functions = require('./functions04');
jest.mock('./functions04');

test('new implementation', () => {
  functions.toUpper.mockImplementation(str => str.toLowerCase());
  functions.firstLetter.mockImplementation(str => str.charAt(str.length - 1));
  functions.concStrings.mockImplementation((str1, str2, str3) => str1 + str2 + str3);

expect(functions.toUpper('OLAR')).toEqual('olar');
expect(functions.firstLetter('abcde')).toEqual('e');
expect(functions.concStrings('a', 'b', 'c')).toEqual('abc')
});
