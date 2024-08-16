// components/Question.js

import { useState, useEffect } from 'react';

const Question = ({ question, options, correctAnswer, onAnswer, selectedAnswer }) => {
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    // Khởi tạo selected từ selectedAnswer nếu có
    setSelected(selectedAnswer || null);
  }, [selectedAnswer]);

  const handleSelect = (option) => {
    if (selected === null) { // Chỉ cho phép chọn khi chưa có đáp án nào được chọn
      setSelected(option);
      onAnswer(option === correctAnswer, option);
    }
  };

  return (
    <div>
      <h2>{question}</h2>
      <ul>
        {options.map((option, index) => (
          <li key={index}>
            <button
              style={{
                backgroundColor: selected === option ? 'lightblue' : 'white',
              }}
              onClick={() => handleSelect(option)}
              disabled={selected !== null} // Nút chỉ bị vô hiệu hóa sau khi đã chọn một đáp án
            >
              {option}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Question;
