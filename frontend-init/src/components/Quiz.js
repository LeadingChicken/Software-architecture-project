import { useState } from 'react';

const Question = ({ question, options, correctAnswer, onAnswer }) => {
  const [selected, setSelected] = useState(null);

  const handleSelect = (option) => {
    setSelected(option);
    onAnswer(option === correctAnswer);
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
