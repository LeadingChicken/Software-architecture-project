'use client'
import { useEffect, useState } from "react";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useMediaQuery } from 'react-responsive';

const initialState = {
  listQuestions: [
    { 
      question: "What is the capital city of Australia?", 
      answers: ["Sydney", "Canberra", "Brisbane", "Melbourne"], 
      correctAnswer: "Canberra" 
    },
    { 
      question: "Which planet is known as the Red Planet?", 
      answers: ["Venus", "Mars", "Jupiter", "Saturn"], 
      correctAnswer: "Mars" 
    },
    { 
      question: "Who wrote the play 'Romeo and Juliet'?", 
      answers: ["Charles Dickens", "Mark Twain", "William Shakespeare", "Jane Austen"], 
      correctAnswer: "William Shakespeare" 
    },
    { 
      question: "What is the largest ocean on Earth?", 
      answers: ["Atlantic Ocean", "Arctic Ocean", "Indian Ocean", "Pacific Ocean"], 
      correctAnswer: "Pacific Ocean" 
    },
    { 
      question: "What is the boiling point of water at sea level?", 
      answers: ["100°C", "80°C", "90°C", "110°C"], 
      correctAnswer: "100°C" 
    }
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
    return () => {
      window.speechSynthesis.cancel(); // Hủy âm thanh khi component bị xóa
    };
  }, []);

  useEffect(() => {
    if (!isGameOver) {
      localStorage.setItem("quiz-game", JSON.stringify(gameState));
    }
  }, [gameState, isGameOver]);

  useEffect(() => {
      if (!isGameOver) {
          // Hủy bỏ tất cả các giọng đọc hiện tại trước khi bắt đầu đọc câu hỏi mới
          window.speechSynthesis.cancel();
          speakQuestion(gameState.listQuestions[gameState.currentQuestion].question);
      }
  }, [gameState.currentQuestion, isGameOver]);

  const speakQuestion = (text) => {
      // Tạo một Utterance mới để đọc câu hỏi
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = 'en-US'; // Đặt ngôn ngữ của TTS
      // Chỉ bắt đầu đọc nếu không có giọng đọc nào đang hoạt động
      window.speechSynthesis.speak(utterance);
  };

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
    <Card border="secondary" bg='Light' text='black'>
      <Card.Header className="d-flex justify-content-between">
        <span>Question {gameState.currentQuestion + 1}</span>
        <span>Score: {gameState.score}</span>
      </Card.Header>
      <Card.Body>
        <Card.Title>{currentQuestion.question}</Card.Title>
        <Card.Title>
          <video 
            src="/make-an-anime-avatar-for-you-using-ai_animation.mp4" 
            autoPlay 
            loop 
            muted 
            style={{ width: '100%', height: '282px' }}
          />
        </Card.Title>
        <Row className="h-100">
          {currentQuestion.answers.map((answer, index) => (
            <Col key={index} xs={12} lg={6}>
              <Button
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
