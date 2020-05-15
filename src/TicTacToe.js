import React from 'react';
import GameBoard from './GameBoard';

class TicTacToe extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activePlayer: 1,
      gameBoard: [0, 0, 0, 0, 0, 0, 0, 0, 0],
    };
  }

  // Antes de criar, pegue os teste que criou e os adicione aqui,
  // lembre que pode realizar o merge com a master de cada um
  // e atualizar essa branch com ela. Ou pode realizar a mão
  // copiar e colar.

  // Adicione nesse arquivo a lógica para identificar
  // quando que o jogo foi terminado, necessário passar
  // nós teste do arquivo exercise-3.test.js;

  // Analise bem como que os teste são realizados 
  // para criar o que se pede.
   
  // No final mude o nome do arquivo solutionsTest.js
  // para solutions.test.js e verifique se todos os testes passam.
  // Esse é o gabarito dos testes, então apenas olhe ele no final
  // dos exercícios!

  render() {
    return <GameBoard gameState={this.state.gameBoard} />;
  }
}

export default TicTacToe;
