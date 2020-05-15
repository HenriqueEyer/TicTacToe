import React from 'react';
import PropTypes from 'prop-types';
import './GameCell.css';
import xImage from './x.png';
import oImage from './o.svg';

class GameCell extends React.Component {
  render() {
    const { id } = this.props;
    return (
      <div data-testid={`cell_${id}`} className="game-cell" />
    );
  }
}

export default GameCell;
