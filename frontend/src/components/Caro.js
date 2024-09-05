"use client";
import { useEffect, useState } from "react";
import styleCaro from "@/styles/BoardCaro.module.css";

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
      <button
        key={index}
        onClick={() => handleClick(index)}
        className={`${styleCaro.square} ${
          gameState.board[index] === "X" ? styleCaro.X : ""
        } ${gameState.board[index] === "O" ? styleCaro.O : ""} ${
          [0, 1, 2].includes(index) ? styleCaro.first_row : ""
        } ${[3, 4, 5].includes(index) ? styleCaro.second_row : ""} ${
          [6, 7, 8].includes(index) ? styleCaro.third_row : ""
        } ${[0, 3, 6].includes(index) ? styleCaro.first_col : ""} ${
          [1, 4, 7].includes(index) ? styleCaro.second_col : ""
        } ${[2, 5, 8].includes(index) ? styleCaro.third_col : ""} ${
          index === 4 ? styleCaro.center : ""
        }`}
      >
        {gameState.board[index]}
      </button>
    );
  };

  return (
    <div>
      <div className={`${styleCaro.body} text-center`}>
        <div className={`${styleCaro.player}`}>
          <div className={`${styleCaro.player} ${styleCaro.playerOne}`}>
            <p
              className={
                gameState.xIsNext
                  ? styleCaro.activePlayer
                  : styleCaro.waitingPlayer
              }
            >
              PLAYER 1
              <span>
                <p>X</p>
              </span>
            </p>
          </div>
        </div>
        <div className={styleCaro.board}>
          {Array.from({ length: 9 }).map((_, index) => renderSquare(index))}
        </div>
        <div className={`${styleCaro.player}`}>
          <div className={`${styleCaro.player} ${styleCaro.playerTwo}`}>
            <p
              className={
                !gameState.xIsNext
                  ? styleCaro.activePlayer
                  : styleCaro.waitingPlayer
              }
            >
              PLAYER 2
              <span>
                <p>O</p>
              </span>
            </p>
          </div>
        </div>
      </div>
      <div>
        {gameState.winner ? (
          <div>
            <p>Winner: {gameState.winner}</p>

            <button
              className={styleCaro.restartContainer}
              onClick={handleRestart}
            >
              RESTART
            </button>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default TicTacToe;
