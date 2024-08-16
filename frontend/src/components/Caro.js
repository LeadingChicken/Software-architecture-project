'use client';
import React, { useState } from 'react';
import Board from './BoardCaro'
import styles from '../styles/Caro.module.css';
import { calculateWinner } from '../utils/GameLogic';

const Caro = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(true);

  const handleClick = (index) => {
    const newBoard = board.slice();
    if (calculateWinner(board) || newBoard[index]) return;
    newBoard[index] = isXNext ? 'X' : 'O';
    setBoard(newBoard);
    setIsXNext(!isXNext);
  };

  const winner = calculateWinner(board);
  const status = winner ? `Winner: ${winner}` : `Next player: ${isXNext ? 'X' : 'O'}`;

  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setIsXNext(true);
  };

  return (
    <div className={styles.game}>
      <div className={styles.status}>{status}</div>
      <Board board={board} onCellClick={handleClick} />
      <button className={styles.resetButton} onClick={resetGame}>Reset Game</button>
    </div>
  );
};

export default Caro;
