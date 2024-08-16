import React from 'react';
import styles from '../styles/BoardMemory.module.css';
import Card from './Card';

const Board = ({ cards = [], flippedIndices = [], matchedIndices = [], onCardClick }) => (
  <div className={styles.board}>
    {cards.map((card, index) => (
      <Card
        key={index}
        index={index}
        value={card}
        isFlipped={flippedIndices.includes(index) || matchedIndices.includes(index)}
        onClick={onCardClick}
      />
    ))}
  </div>
);

export default Board;
