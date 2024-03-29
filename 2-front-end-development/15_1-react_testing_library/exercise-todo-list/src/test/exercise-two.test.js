import React from 'react';
import { render, fireEvent, cleanup } from '@testing-library/react';
import App from '../App';
import Item from '../Item';

afterEach(cleanup);

describe('Teste do campo de input', () => {
  test('Testando a adição de vários itens a aplicação', () => {
    const listTodo = ['Realizar CR', 'Ler Post no Medium', 'Beber água']; // Use esse array como base para realizar os testes.
    const { getByLabelText, getByText } = render(<App />) // Caso precise de uma nova query adicione no object destructuring
    const input = getByLabelText(/tarefa:/i);
    const btn = getByText(/adicionar/i);
    listTodo.forEach((toDo) => {
      fireEvent.click(input);
      fireEvent.change(input, { target: { value: toDo }})
      fireEvent.click(btn);
    })
    listTodo.forEach(toDo => {
      expect(getByText(toDo)).toBeInTheDocument();
    });
  });
});

describe('Teste do componente Item', () => {
  test('Ao receber uma string como prop ela precisa aparecer na tela', () => {
    const stringTest = "testando";
    const { getByText } = render(<Item content={stringTest} />);
    expect(getByText(stringTest)).toBeInTheDocument();
    
  })
})
