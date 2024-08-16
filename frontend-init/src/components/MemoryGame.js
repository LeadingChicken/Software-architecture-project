'use client';
import React, { useState, useEffect } from 'react';
import Board from './BoardMemory';
import styles from '../styles/MemoryGame.module.css';
import { shuffle } from '../utils/shuffle';

const MemoryGame = () => {
  const initialCards = Array.from({ length: 8 }, (_, i) => i % 4).flat();
  const [cards, setCards] = useState(shuffle([...initialCards, ...initialCards]));
  const [flippedIndices, setFlippedIndices] = useState([]);
  const [matchedIndices, setMatchedIndices] = useState([]);
  const [gameOver, setGameOver] = useState(false); // Trạng thái chiến thắng

  useEffect(() => {
    if (matchedIndices.length === cards.length) {
      setGameOver(true); // Đặt trạng thái chiến thắng khi tất cả các thẻ đã được khớp
    }
  }, [matchedIndices, cards.length]);

  const handleClick = (index) => {
    if (flippedIndices.length === 2 || matchedIndices.includes(index) || gameOver) return;

    const newFlippedIndices = [...flippedIndices, index];
    setFlippedIndices(newFlippedIndices);

    if (newFlippedIndices.length === 2) {
      const [first, second] = newFlippedIndices;
      if (cards[first] === cards[second]) {
        setMatchedIndices([...matchedIndices, first, second]);
      }
      setTimeout(() => setFlippedIndices([]), 1000);
    }
  };

  const resetGame = () => {
    setCards(shuffle([...initialCards, ...initialCards]));
    setFlippedIndices([]);
    setMatchedIndices([]);
    setGameOver(false); // Reset trạng thái chiến thắng khi khởi động lại trò chơi
  };

  return (
    <div className={styles.game}>
      <Board
        cards={cards}
        flippedIndices={flippedIndices}
        matchedIndices={matchedIndices}
        onCardClick={handleClick}
      />
      {gameOver && <div className={styles.winMessage}>You win!</div>}
      <button className={styles.resetButton} onClick={resetGame}>Reset Game</button>
    </div>
  );
};

export default MemoryGame;
