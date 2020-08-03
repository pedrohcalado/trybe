import React from 'react';
import { render, fireEvent, cleanup, waitForDomChange, getByText } from '@testing-library/react';
import App from '../App';

afterEach(cleanup);

// arquivo App.test.js pode servir de exemplo
describe('Teste da aplicação, testando o botão e sua funcionalidade', () => {
  test('Verificando se o botão está na tela e se o ele contém o texto "Adicionar"', () => {
    const { getByText } = render(<App />);
    const btn = getByText('Adicionar');
    expect(btn).toBeInTheDocument();
    expect(btn.value).toBe('Adicionar');
  });

  test(`Ao clicar no botão, é necessário adicionar o que o usuário digitou à lista`, () => {
    // Use os fireEvent, para simular a digitação do usuário e o clique.

    const TO_DO = 'limpar a casa';

    const { getByLabelText, queryByText } = render(<App />);
    const inputToDo = getByLabelText(/tarefa:/i);
    const btn = queryByText(/adicionar/i);

    fireEvent.click(inputToDo)
    fireEvent.change(inputToDo, { target: { value: TO_DO } });
    fireEvent.click(btn);
    
    expect(queryByText(TO_DO)).toBeInTheDocument();
    
  });
});
