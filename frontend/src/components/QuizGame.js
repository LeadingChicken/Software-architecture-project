'use client'
import { useEffect, useState } from "react";

const initialState = {
  listQuestions: [
    { question: "What is the capital of France?", answers: ["Paris", "Berlin", "Madrid"], correctAnswer: "Paris" },
    { question: "What is 2 + 2?", answers: ["3", "4", "5"], correctAnswer: "4" },
    { question: "What is 2 + 5?", answers: ["3", "7", "5"], correctAnswer: "7" },
    { question: "What is 2 + 6?", answers: ["8", "7", "5"], correctAnswer: "8" },
  ],
  currentQuestion: 0,
  score: 0,
  totalCorrectAnswer: 0,
};

const QuizGame = () => {
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
        <button onClick={handleRestart}>Play Again</button>
      </div>
    );
  }

  const currentQuestion = gameState.listQuestions[gameState.currentQuestion];
  return (
    <div>
      <h2>Question {gameState.currentQuestion + 1}</h2>
      <p>{currentQuestion.question}</p>
      <div>
        {currentQuestion.answers.map((answer, index) => (
          <button key={index} onClick={() => handleAnswer(answer)}>
            {answer}
          </button>
        ))}
      </div>
      <p>Score: {gameState.score}</p>
      <p>Total Correct Answers: {gameState.totalCorrectAnswer}</p>
    </div>
  );
};

export default QuizGame;
