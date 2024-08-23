'use client'
import { useEffect, useState } from 'react';

const initialCards = [
  'A', 'B', 'C', 'D',
  'E', 'F', 'G', 'H',
  'A', 'B', 'C', 'D',
  'E', 'F', 'G', 'H',
];

function shuffleArray(array) {
  return array.sort(() => Math.random() - 0.5);
}

export default function MemoryGame() {
  const [cards, setCards] = useState([]);
  const [flippedCards, setFlippedCards] = useState([]);
  const [matchedCards, setMatchedCards] = useState([]);
  const [moveCount, setMoveCount] = useState(0);
  const [isGameStarted, setIsGameStarted] = useState(false); // Thêm biến để kiểm tra trò chơi đã bắt đầu

  useEffect(() => {
    const savedState = localStorage.getItem('memoryGameState');
    if (savedState) {
      const { cards, matchedCards, moveCount } = JSON.parse(savedState);
      setCards(cards);
      setMatchedCards(matchedCards);
      setMoveCount(moveCount);
      setIsGameStarted(true); // Đánh dấu rằng trò chơi đã bắt đầu
    } else {
      setCards(shuffleArray([...initialCards]));
    }
  }, []);

  useEffect(() => {
    if (isGameStarted) { // Chỉ lưu trạng thái khi trò chơi đã bắt đầu
      localStorage.setItem(
        'memoryGameState',
        JSON.stringify({ cards, matchedCards, moveCount })
      );
    }
  }, [cards, matchedCards, moveCount, isGameStarted]);

  useEffect(() => {
    if (isGameStarted && matchedCards.length === cards.length) {
      alert('Bạn đã hoàn thành trò chơi!');
      resetGame();
    }
  }, [matchedCards, isGameStarted]);

  const handleCardClick = (index) => {
    if (
      flippedCards.length === 2 ||
      flippedCards.includes(index) ||
      matchedCards.includes(index)
    ) {
      return;
    }

    setFlippedCards((prev) => [...prev, index]);

    if (flippedCards.length === 1) {
      const firstIndex = flippedCards[0];
      const secondIndex = index;

      if (cards[firstIndex] === cards[secondIndex]) {
        setMatchedCards((prev) => [...prev, firstIndex, secondIndex]);
      }

      setMoveCount((prev) => prev + 1);

      setTimeout(() => {
        setFlippedCards([]);
      }, 1000);
    }

    setIsGameStarted(true); // Đánh dấu trò chơi bắt đầu khi có một lượt lật thẻ đầu tiên
  };

  const resetGame = () => {
    const shuffledCards = shuffleArray([...initialCards]);
    setCards(shuffledCards);
    setFlippedCards([]);
    setMatchedCards([]);
    setMoveCount(0);
    setIsGameStarted(false); // Đặt lại trạng thái trò chơi
    localStorage.removeItem('memoryGameState');
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <h1>Memory Game</h1>
      <p>Moves: {moveCount}</p>
      <p>Correct Pairs: {matchedCards.length / 2}</p> {/* Hiển thị số cặp thẻ đúng */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 100px)', gap: '10px' }}>
        {cards.map((card, index) => (
          <div
            key={index}
            style={{
              width: '100px',
              height: '100px',
              backgroundColor:
                flippedCards.includes(index) || matchedCards.includes(index)
                  ? 'lightblue'
                  : 'gray',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              fontSize: '24px',
              cursor: 'pointer',
            }}
            onClick={() => handleCardClick(index)}
          >
            {(flippedCards.includes(index) || matchedCards.includes(index)) && card}
          </div>
        ))}
      </div>
      <button onClick={resetGame} style={{ marginTop: '20px' }}>
        Reset Game
      </button>
    </div>
  );
}
