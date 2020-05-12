import React from 'react';
import {render, cleanup, fireEvent} from '@testing-library/react';
import TicTacToe from './TicTacToe';

afterEach(cleanup);

describe("Configuração inicial do jogo", () => {
  test('Verificar se foi renderizada nove casas', () => {
    const {getByTestId} = render(<TicTacToe />);

    for (let i = 0; i <= 8; i++) {
      expect(getByTestId(`cell_${i}`)).toBeDefined();
    }
  });

  test('Começar com todos os espaços em branco.', () => {
    const {queryByAltText} = render(<TicTacToe />);
    expect(queryByAltText('X')).toBeNull();
    expect(queryByAltText('O')).toBeNull();
  });

  test("Começar sem a frase 'Fim de jogo'", () => {
    const {queryByText} = render(<TicTacToe />);

    expect(queryByText('Fim de Jogo')).toBeNull();
  });
});

describe("Comportamento de cada casa", () => {
  test('Ao clicar em um casa deve adicionar o símbolo apenas naquele lugar', () => {
    const {getByTestId, getAllByAltText, queryByAltText} = render(<TicTacToe />);

    fireEvent.click(getByTestId('cell_0'));
    expect(getAllByAltText('X')).toHaveLength(1);
    expect(queryByAltText('O')).toBeNull();

    fireEvent.click(getByTestId('cell_1'));
    expect(getAllByAltText('X')).toHaveLength(1);
    expect(getAllByAltText('O')).toHaveLength(1);

    fireEvent.click(getByTestId('cell_2'));
    expect(getAllByAltText('X')).toHaveLength(2);
    expect(getAllByAltText('O')).toHaveLength(1);
  });

  test("O simbolo precisa ser trocado ao clicar em uma casa para a outra, 'X' para 'O', começando com o 'X'", () => {
    const {getByTestId, getByAltText, getAllByAltText, queryByTestId} = render(
      <TicTacToe />,
    );

    fireEvent.click(getByTestId('cell_0'));
    expect(getByAltText('X')).toBeDefined();

    fireEvent.click(getByTestId('cell_1'));
    expect(getByAltText('O')).toBeDefined();

    fireEvent.click(getByTestId('cell_2'));
    expect(queryByTestId('cell_2_image')).toBeDefined();
    expect(getAllByAltText('X')).toHaveLength(2);
  });

  test("Se clicar em uma casa já preenchida, o simbolo deve continuar o mesmo", () => {
    const {getByTestId, getByAltText, queryByAltText} = render(<TicTacToe />);

    fireEvent.click(getByTestId('cell_0'));
    expect(getByAltText('X')).toBeDefined();

    fireEvent.click(getByTestId('cell_0'));
    fireEvent.click(getByTestId('cell_2'));
    expect(queryByAltText('O')).not.toBeNull();
  });

  test("O simbolo das casas precisam ser mantidas, quando outra casa for clicada", () => {
    const {getByTestId, getByAltText, getAllByAltText} = render(<TicTacToe />);

    fireEvent.click(getByTestId('cell_0'));
    const cellZeroImage = getByTestId('cell_0_image');
    expect(cellZeroImage).toEqual(getByAltText('X'));

    fireEvent.click(getByTestId('cell_1'));
    const cellOneImage = getByTestId('cell_1_image');
    expect(cellZeroImage).toEqual(getByAltText('X'));
    expect(cellOneImage).toEqual(getByAltText('O'));

    fireEvent.click(getByTestId('cell_2'));
    const cellTwoImage = getByTestId('cell_2_image');
    expect(cellZeroImage).toEqual(getAllByAltText('X')[0]);
    expect(cellOneImage).toEqual(getByAltText('O'));
    expect(cellTwoImage).toEqual(getAllByAltText('X')[1]);
  });

  test("O simbolo não pode ser mudado se a casa for clicada duas vezes", () => {
    const {getByTestId, getByAltText, queryByAltText} = render(<TicTacToe />);

    fireEvent.click(getByTestId('cell_0'));
    const cellZeroImage = getByTestId('cell_0_image');
    expect(cellZeroImage).toEqual(getByAltText('X'));

    fireEvent.click(getByTestId('cell_0'));
    expect(cellZeroImage).toEqual(queryByAltText('X'));
  });
});

const winnerSymbols = ['X', 'O'];

winnerSymbols.map(winnerSymbol => {
  describe(`Condições de vitória para o Jogador ${winnerSymbol}`, () => {
    const getStartOfAnotherLine = cellId => {
      if (cellId >= 0 && cellId <= 2) return 3;
      else if (cellId >= 3 && cellId <= 5) return 6;
      return 0;
    };

    const firstCellsOfLines = [0, 3, 6];
    firstCellsOfLines.map(cellId => {
      test(`Alcançar a vitória ao colocar o mesmo simbolo em todas as casas da linha a partir da casa ${cellId}`, () => {
        const opponentsLine = getStartOfAnotherLine(cellId);
        const {getByTestId, queryByText} = render(<TicTacToe />);

        if (winnerSymbol === 'O') {
          const cellNotRelatedToVictory = getStartOfAnotherLine(opponentsLine);
          fireEvent.click(getByTestId(`cell_${cellNotRelatedToVictory}`));
        }

        fireEvent.click(getByTestId(`cell_${cellId}`));
        fireEvent.click(getByTestId(`cell_${opponentsLine}`));
        fireEvent.click(getByTestId(`cell_${cellId + 1}`));
        fireEvent.click(getByTestId(`cell_${opponentsLine + 1}`));
        fireEvent.click(getByTestId(`cell_${cellId + 2}`));
        expect(queryByText('Fim de Jogo')).not.toBeNull();
      });

      return undefined;
    });

    const getStartOfAnotherColumn = cellId => {
      if (cellId === 0 || cellId === 3 || cellId === 6) return 1;
      else if (cellId === 1 || cellId === 4 || cellId === 7) return 2;
      return 0;
    };

    const firstCellsOfColumns = [0, 1, 2];
    firstCellsOfColumns.map(cellId => {
      test(`Alcançar a vitória ao colocar o mesmo simbolo em todas as casas da coluna ${cellId}`, () => {
        const opponentsColumn = getStartOfAnotherColumn(cellId);
        const {getByTestId, queryByText} = render(<TicTacToe />);

        if (winnerSymbol === 'O') {
          const cellNotRelatedToVictory = getStartOfAnotherColumn(opponentsColumn);
          fireEvent.click(getByTestId(`cell_${cellNotRelatedToVictory}`));
        }

        fireEvent.click(getByTestId(`cell_${cellId}`));
        fireEvent.click(getByTestId(`cell_${opponentsColumn}`));
        fireEvent.click(getByTestId(`cell_${cellId + 3}`));
        fireEvent.click(getByTestId(`cell_${opponentsColumn + 3}`));
        fireEvent.click(getByTestId(`cell_${cellId + 6}`));
        expect(queryByText('Fim de Jogo')).not.toBeNull();
      });

      return undefined;
    });

    test('Alcançar a vitória ao colocar o mesmo simbolo na diagonal esquerda para direita (primeira,quinta,nona casa)', () => {
      const {getByTestId, queryByText} = render(<TicTacToe />);

      if (winnerSymbol === 'O') fireEvent.click(getByTestId('cell_5'));
      fireEvent.click(getByTestId('cell_0'));
      fireEvent.click(getByTestId('cell_2'));
      fireEvent.click(getByTestId('cell_4'));
      fireEvent.click(getByTestId('cell_3'));
      fireEvent.click(getByTestId('cell_8'));
      expect(queryByText('Fim de Jogo')).not.toBeNull();
    });

    test('Alcançar a vitória ao colocar o mesmo simbolo na diagonal direita para esquerda (terceira,quinta,sétima casa)', () => {
      const {getByTestId, queryByText} = render(<TicTacToe />);

      if (winnerSymbol === 'O') fireEvent.click(getByTestId('cell_8'));
      fireEvent.click(getByTestId('cell_2'));
      fireEvent.click(getByTestId('cell_0'));
      fireEvent.click(getByTestId('cell_4'));
      fireEvent.click(getByTestId('cell_3'));
      fireEvent.click(getByTestId('cell_6'));
      expect(queryByText('Fim de Jogo')).not.toBeNull();
    });
  });
  return undefined;
});
