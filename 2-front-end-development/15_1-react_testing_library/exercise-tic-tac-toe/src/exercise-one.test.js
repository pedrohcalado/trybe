import React from 'react';
import { render, cleanup, getAllByTestId } from '@testing-library/react';
import TicTacToe from './TicTacToe';
import App from './App';

afterEach(cleanup);

describe("Configuração inicial do jogo", () => {
  test('Verificar se foi renderizada nove casas', () => {
    const { getAllByTestId } = render(<App />)
    const cells = getAllByTestId(/cell_/i);
    expect(cells.length).toBe(9);
  });

  test('Começar com todos os espaços em branco.', () => {
    // const { getAllByTestId } = render(<App />);
    // const cells = getAllByTestId(/cell_/i);
    // cells.forEach(cell =>
    //   // console.log(cell)
    //     // expect(cell.value).toEqual(0)
    //   )
  });

  test("Começar sem a frase 'Fim de jogo'", () => {
    const { queryByText } = render(<App />)
    const endOfGame = queryByText('Fim de jogo')
    expect(endOfGame).toBe(null);
  });
});
