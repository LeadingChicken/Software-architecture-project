'use client'
import { useEffect, useState } from 'react';
import { Card, Button, Container, Row, Col } from 'react-bootstrap';
import "@/styles/BoardMemory.module.css"
const questionMark = "https://media.istockphoto.com/id/1162198273/vector/question-mark-icon-flat-vector-illustration-design.jpg?s=612x612&w=0&k=20&c=MJbd8bw2iewJRd8sEkHxyGMgY3__j9MKA8cXvIvLT9E=";

const initialCards = [
  'https://e7.pngegg.com/pngimages/476/159/png-clipart-pokemon-pikachu-pikachu-pokemon-games-pokemon-thumbnail.png', 
  'https://images.saymedia-content.com/.image/t_share/MTc0NDYwMzYxMTg4NzE0MTE4/cutest_pokemon_20.png', 
  'https://assets.pokemon.com/assets/cms2/img/pokedex/full//144.png', 
  'https://media.tenor.com/8Vo82I74B38AAAAe/cute-pokemon.png',
  'https://images.immediate.co.uk/production/volatile/sites/3/2023/01/162-8af4a44-e1674041901273.png', 
  'https://pm1.aminoapps.com/6331/cb425086fb520f3070de5b33eea6d543e7b45bdf_hq.jpg', 
  'https://fiverr-res.cloudinary.com/images/q_auto,f_auto/gigs/201368308/original/830f24001368edb85b4f5b69f237bd3b7863f43f/draw-cute-pokemon-in-my-style.jpg', 
  'https://cdn.openart.ai/uploads/image_o_Uf7y_x_1700849661108_raw.jpg',
];

function doubleArray(array) {
  return [...array, ...array];
}

function shuffleArray(array) {
  return array.sort(() => Math.random() - 0.5);
}

export default function MemoryGame() {
  const [cards, setCards] = useState([]);
  const [flippedCards, setFlippedCards] = useState([]);
  const [matchedCards, setMatchedCards] = useState([]);
  const [moveCount, setMoveCount] = useState(0);
  const [isGameStarted, setIsGameStarted] = useState(false);

  useEffect(() => {
    const savedState = localStorage.getItem('memoryGameState');
    if (savedState) {
      const { cards, matchedCards, moveCount } = JSON.parse(savedState);
      setCards(cards);
      setMatchedCards(matchedCards);
      setMoveCount(moveCount);
      setIsGameStarted(true);
    } else {
      const doubledCards = doubleArray(initialCards);
      setCards(shuffleArray(doubledCards));
    }
  }, []);

  useEffect(() => {
    if (isGameStarted) {
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
      }, 500);
    }

    setIsGameStarted(true);
  };

  const resetGame = () => {
    const shuffledCards = shuffleArray(doubleArray(initialCards));
    setCards(shuffledCards);
    setFlippedCards([]);
    setMatchedCards([]);
    setMoveCount(0);
    setIsGameStarted(false);
    localStorage.removeItem('memoryGameState');
  };

  return (
<Container className="text-center px-auto">

  <Card style={{ maxWidth: "400px" }} className='mx-auto my-auto'>
    <Card.Header>
      <h1>Memory Game</h1>
      <p>Moves: {moveCount}</p>
      <p>Correct Pairs: {matchedCards.length / 2}</p>
    </Card.Header>
    <Card.Body>
      <Row xs={4} className="g-3 mx-auto" >
        {cards.map((card, index) => (
          <Col key={index}>
            <div className="ratio ratio-1x1"> {/* Giữ tỷ lệ 1:1 */}
              <Card
                className="h-100"
                onClick={() => handleCardClick(index)}
                style={{ cursor: 'pointer' }}
              >
                {(flippedCards.includes(index) || matchedCards.includes(index)) ? (
                  <Card.Img 
                    variant="top" 
                    src={card} 
                    className="h-100" 
                    style={{ objectFit: 'cover', borderRadius: '0.5rem' }} // Đảm bảo giữ góc tròn
                  />
                ) : (
                  <Card.Img 
                    variant="top" 
                    src={questionMark} 
                    className="h-100" 
                    style={{ objectFit: 'cover', borderRadius: '0.5rem' }} // Đảm bảo giữ góc tròn
                  />
                )}
              </Card>
            </div>
          </Col>
        ))}
      </Row>
      <Button onClick={resetGame} className="mt-3 w-100">
        <span>Reset Game</span>
      </Button>
    </Card.Body>
  </Card>
</Container>



  );
}
