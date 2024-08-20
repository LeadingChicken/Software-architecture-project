'use client';
import { useEffect, useState } from "react";

const initialState = {
  board: Array(9).fill(null),
  xIsNext: true,
  winner: null,
};

const calculateWinner = (board) => {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      return board[a];
    }
  }

  return null;
};

const TicTacToe = () => {
  const [gameState, setGameState] = useState(initialState);

  useEffect(() => {
    const savedGame = localStorage.getItem("tic-tac-toe");
    if (savedGame) {
      const parsedGame = JSON.parse(savedGame);
      if (JSON.stringify(parsedGame) !== JSON.stringify(initialState)) {
        setGameState(parsedGame);
      }
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("tic-tac-toe", JSON.stringify(gameState));
  }, [gameState]);

  const handleClick = (index) => {
    const boardCopy = [...gameState.board];

    if (boardCopy[index] || gameState.winner) return;

    boardCopy[index] = gameState.xIsNext ? "X" : "O";
    const winner = calculateWinner(boardCopy);

    setGameState({
      board: boardCopy,
      xIsNext: !gameState.xIsNext,
      winner: winner,
    });

    if (winner) {
      localStorage.setItem("tic-tac-toe", JSON.stringify(initialState));
    }
  };

  const handleRestart = () => {
    setGameState(initialState);
  };

  const renderSquare = (index) => {
    return (
      <button key={index} onClick={() => handleClick(index)} style={squareStyle}>
        {gameState.board[index]}
      </button>
    );
  };

  const squareStyle = {
    width: "60px",
    height: "60px",
    fontSize: "24px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    margin: "4px",
    border: "1px solid #000",
    backgroundColor: "#fff",
    cursor: "pointer",
  };

  const boardStyle = {
    display: "flex",
    flexWrap: "wrap",
    width: "204px",
    margin: "20px auto",
    justifyContent: "center",
  };

  return (
    <div>
      <h2>Tic-Tac-Toe</h2>
      <div style={boardStyle}>
        {Array.from({ length: 9 }).map((_, index) => renderSquare(index))}
      </div>
      {gameState.winner ? (
        <div>
          <p>Winner: {gameState.winner}</p>
          <button onClick={handleRestart}>Restart</button>
        </div>
      ) : (
        <p>Next Player: {gameState.xIsNext ? "X" : "O"}</p>
      )}
    </div>
  );
};

export default TicTacToe;
