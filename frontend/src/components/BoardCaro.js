import React from 'react';
import styles from '../styles/BoardCaro.module.css';
import Cell from './Cell';

const Board = ({ board, onCellClick }) => (
  <div className={styles.board}>
    {board.map((cell, index) => (
      <Cell key={index} value={cell} onClick={() => onCellClick(index)} />
    ))}
  </div>
);

export default Board;
