import React from 'react';
import {render, cleanup, fireEvent} from '@testing-library/react';
import TicTacToe from './TicTacToe';

afterEach(cleanup);

describe("Comportamento de cada casa", () => {
  test('Ao clicar em um casa deve adicionar o símbolo apenas naquele lugar', () => {
    const {getByTestId, getAllByAltText, queryByAltText} = render(<TicTacToe />);

    // Aqui está simulando o clique em uma casa, mas não basta apenas testar o clique em uma casa, precisa testar em outras.
    fireEvent.click(getByTestId('cell_0'));
    expect(getAllByAltText('X')).toHaveLength(1);
    expect(queryByAltText('O')).toBeNull();

  });

  test("O simbolo precisa ser trocado ao clicar em uma casa para a outra, 'X' para 'O', começando com o 'X'", () => {
    // Observe as query deixadas, elas podem ser necessárias para testar a aplicação,
    // caso tenha duvida em qual a sua função, procure por ela na documentação do RTL.
    const {getByTestId, getByAltText, getAllByAltText, queryByTestId} = render(
      <TicTacToe />,
    );

  });

  test("Se clicar em uma casa já preenchida, o simbolo deve continuar o mesmo", () => {
    const {getByTestId, getByAltText, queryByAltText} = render(<TicTacToe />);

  });

  test("O simbolo das casas precisam ser mantidas, quando outra casa for clicada", () => {
    const {getByTestId, getByAltText, getAllByAltText} = render(<TicTacToe />);

  });

  test("O simbolo não pode ser mudado se a casa for clicada duas vezes seguidas.", () => {
    const {getByTestId, getByAltText, queryByAltText} = render(<TicTacToe />);

  });
});
