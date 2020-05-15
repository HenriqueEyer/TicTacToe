import React from 'react';
import GameCell from './GameCell';
import PropTypes from 'prop-types';
import './GameBoard.css';

class GameBoard extends React.Component {
  render() {
    return (
      <div className="game-board">
        {this.props.gameState.map(() => (
          <GameCell />
        ))}
      </div>
    );
  }
}

export default GameBoard;
