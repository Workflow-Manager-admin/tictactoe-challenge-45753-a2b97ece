import React, { useState } from "react";
import "./TicTacToe.css";

// PUBLIC_INTERFACE
function TicTacToe() {
  /**
   * This component renders the main container for the TicTacToe Challenge.
   * Features:
   *  - Two-player mode (X and O)
   *  - Game reset button
   *  - Win/draw detection and announcement
   *  - Centered 3x3 clickable grid
   *  - Light theme with given color palette
   */

  const EMPTY_BOARD = Array(9).fill(null);
  const [board, setBoard] = useState(EMPTY_BOARD);
  const [isXNext, setIsXNext] = useState(true);
  const [winner, setWinner] = useState(null);
  const [isDraw, setIsDraw] = useState(false);

  // PUBLIC_INTERFACE
  function handleClick(idx) {
    // No move if cell is filled or game ended
    if (board[idx] || winner) return;
    const nextBoard = board.slice();
    nextBoard[idx] = isXNext ? "X" : "O";
    setBoard(nextBoard);

    const gotWinner = calculateWinner(nextBoard);
    if (gotWinner) {
      setWinner(gotWinner);
      setIsDraw(false);
    } else if (nextBoard.every((v) => v)) {
      setIsDraw(true);
      setWinner(null);
    } else {
      setIsXNext(!isXNext);
    }
  }

  // PUBLIC_INTERFACE
  function handleReset() {
    setBoard(EMPTY_BOARD);
    setIsXNext(true);
    setWinner(null);
    setIsDraw(false);
  }

  // PUBLIC_INTERFACE
  function getStatus() {
    if (winner) {
      return `Winner: ${winner}`;
    } else if (isDraw) {
      return "Draw!";
    } else {
      return `Current turn: ${isXNext ? "X" : "O"}`;
    }
  }

  // PUBLIC_INTERFACE
  function calculateWinner(squares) {
    const lines = [
      [0,1,2], [3,4,5], [6,7,8],  // rows
      [0,3,6], [1,4,7], [2,5,8],  // columns
      [0,4,8], [2,4,6]            // diagonals
    ];
    for (let [a, b, c] of lines) {
      if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[b] === squares[c]
      ) {
        return squares[a];
      }
    }
    return null;
  }

  return (
    <div className="tictactoe-main">
      <div className="ttt-message">{winner || isDraw ? getStatus() : ""}</div>
      <div className="ttt-header">{!winner && !isDraw && getStatus()}</div>
      <div className="ttt-board">
        {board.map((cell, idx) => (
          <button
            key={idx}
            className={`ttt-cell${cell ? " filled" : ""}`}
            onClick={() => handleClick(idx)}
            disabled={!!cell || !!winner}
            aria-label={`cell-${idx}`}
          >
            {cell}
          </button>
        ))}
      </div>
      <button className="ttt-reset-btn" onClick={handleReset}>
        Reset Game
      </button>
    </div>
  );
}

export default TicTacToe;

