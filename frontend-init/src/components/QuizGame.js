// components/QuizGame.js

"use client";

import { useState, useEffect } from 'react';
import Question from './Question';

const fetchQuestions = [
  {
    question: 'What is the capital of France?',
    options: ['Berlin', 'Madrid', 'Paris', 'Rome'],
    correctAnswer: 'Paris',
  },
  {
    question: 'Who wrote "Hamlet"?',
    options: ['William Shakespeare', 'Charles Dickens', 'Mark Twain', 'J.K. Rowling'],
    correctAnswer: 'William Shakespeare',
  },
];

export default function QuizGame() {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);
    const [answers, setAnswers] = useState([]);
    const [questions,setListQuestions]=useState(fetchQuestions)    
  useEffect(() => {
    const questions= localStorage.getItem()
    const savedQuestionIndex = localStorage.getItem('currentQuestion');
    const savedScore = localStorage.getItem('score');
    const savedAnswers = localStorage.getItem('answers');

    if (savedQuestionIndex !== null) {
      setCurrentQuestion(Number(savedQuestionIndex));
    }

    if (savedScore !== null) {
      setScore(Number(savedScore));
    }

    if (savedAnswers !== null) {
      setAnswers(JSON.parse(savedAnswers));
    }
  }, []);

  // Lưu dữ liệu vào localStorage khi có thay đổi
  useEffect(() => {
    localStorage.setItem('currentQuestion', currentQuestion);
    localStorage.setItem('score', score);
    localStorage.setItem('answers', JSON.stringify(answers));
  }, [currentQuestion, score, answers]);

  const handleAnswer = (isCorrect, selectedAnswer) => {
    if (isCorrect) {
      setScore(score + 1);
    }

    // Cập nhật danh sách đáp án đã chọn
    const updatedAnswers = [...answers];
    updatedAnswers[currentQuestion] = selectedAnswer;
    setAnswers(updatedAnswers);

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      alert(`Game over! Your score is ${score + (isCorrect ? 1 : 0)} out of ${questions.length}`);
      // Reset trạng thái trò chơi
      setCurrentQuestion(0);
      setScore(0);
      setAnswers([]);
      // Xóa dữ liệu khi game kết thúc
      localStorage.removeItem('currentQuestion');
      localStorage.removeItem('score');
      localStorage.removeItem('answers');
    }
  };

  return (
    <div>
      <h1>Question Game</h1>
      <Question
        question={questions[currentQuestion].question}
        options={questions[currentQuestion].options}
        correctAnswer={questions[currentQuestion].correctAnswer}
        selectedAnswer={answers[currentQuestion]} // Truyền đáp án đã chọn vào
        onAnswer={(isCorrect, selectedAnswer) => handleAnswer(isCorrect, selectedAnswer)}
      />
    </div>
  );
}
