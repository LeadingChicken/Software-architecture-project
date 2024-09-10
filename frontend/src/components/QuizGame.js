'use client'
import { useEffect, useState } from "react";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useMediaQuery } from 'react-responsive';
const initialState = {
  
  listQuestions: [
    { question: "What is the capital of France?", answers: ["Paris", "Berlin", "Madrid", "New York"], correctAnswer: "Paris" },
    { question: "What is 2 + 2?", answers: ["3", "4", "5", "6"], correctAnswer: "4" },
    { question: "What is 2 + 5?", answers: ["3", "7", "5", "6"], correctAnswer: "7" },
    { question: "What is 2 + 6?", answers: ["8", "7", "5", "6"], correctAnswer: "8" },
  ],
  currentQuestion: 0,
  score: 0,
  totalCorrectAnswer: 0,
};

const QuizGame = () => {
  const isMdAndDown = useMediaQuery({ maxWidth: 991 });
  const [gameState, setGameState] = useState(initialState);
  const [isGameOver, setIsGameOver] = useState(false);

  useEffect(() => {
    const savedGame = localStorage.getItem("quiz-game");
    if (savedGame) {
      const parsedGame = JSON.parse(savedGame);
      if (JSON.stringify(parsedGame) !== JSON.stringify(initialState)) {
        setGameState(parsedGame);
      }
    }
  }, []);

  useEffect(() => {
    if (!isGameOver) {
      localStorage.setItem("quiz-game", JSON.stringify(gameState));
    }
  }, [gameState, isGameOver]);

  const handleAnswer = (answer) => {
    const isCorrect = answer === gameState.listQuestions[gameState.currentQuestion].correctAnswer;
    const newScore = isCorrect ? gameState.score + 1 : gameState.score;
    const newTotalCorrectAnswer = isCorrect ? gameState.totalCorrectAnswer + 1 : gameState.totalCorrectAnswer;
    const nextQuestion = gameState.currentQuestion + 1;

    if (nextQuestion < gameState.listQuestions.length) {
      setGameState({
        ...gameState,
        currentQuestion: nextQuestion,
        score: newScore,
        totalCorrectAnswer: newTotalCorrectAnswer,
      });
    } else {
      // Gán lại localStorage về giá trị mặc định
      localStorage.setItem("quiz-game", JSON.stringify(initialState));
      setGameState({
        ...initialState,
        score: newScore,
        totalCorrectAnswer: newTotalCorrectAnswer,
      });
      setIsGameOver(true);
    }
  };

  const handleRestart = () => {
    setGameState(initialState);
    setIsGameOver(false);
  };

  if (isGameOver) {
    return (
      <div>
        <h2>Game Over</h2>
        <p>Your score: {gameState.score}</p>
        <p>Total Correct Answers: {gameState.totalCorrectAnswer}</p>
        <Button onClick={handleRestart}>Play Again</Button>
      </div>
    );
  }

  const currentQuestion = gameState.listQuestions[gameState.currentQuestion];
  const buttonVariants = ["primary", "success", "warning", "danger"];
  return (
    <Card 
        border="secondary"
        bg='Light'
        text='black'
    >
        <Card.Header className="d-flex justify-content-between">
            <span>Question {gameState.currentQuestion + 1}</span>  
            <span>Score: {gameState.score}</span>
        </Card.Header>
        <Card.Body>
        <Card.Title>{currentQuestion.question}</Card.Title>
            <Row className="h-100">
                {currentQuestion.answers.map((answer, index) => (
                    <Col xs={12} lg={6}>
                        <Button 
                            key={index} 
                            onClick={() => handleAnswer(answer)} 
                            className="w-100 mt-2"
                            variant={buttonVariants[index % buttonVariants.length]} 
                        >
                        {answer}
                        </Button>
                    </Col>
                ))}
            </Row>
            <Card.Text className="mt-2">Total Correct Answers: {gameState.totalCorrectAnswer}</Card.Text>
        </Card.Body>
        
    </Card>
  );
};

export default QuizGame;
