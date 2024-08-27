import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const initialstate = [
  ['R', 'N', 'B', 'Q', 'K', 'B', 'N', 'R'],
  ['P', 'P', 'P', 'P', 'P', 'P', 'P', 'P'],
  ['', '', '', '', '', '', '', ''],
  ['', '', '', '', '', '', '', ''],
  ['', '', '', '', '', '', '', ''],
  ['', '', '', '', '', '', '', ''],
  ['p', 'p', 'p', 'p', 'p', 'p', 'p', 'p'],
  ['r', 'n', 'b', 'q', 'k', 'b', 'n', 'r']
];

const chesscoins = {
  R: '\u2656',
  N: '\u2658',
  B: '\u2657',
  Q: '\u2655',
  K: '\u2654',
  P: '\u2659',
  r: '\u265C',
  n: '\u265E',
  b: '\u265D',
  q: '\u265B',
  k: '\u265A',
  p: '\u265F',
};

const ChessBoard = () => {
  const [board, setBoard] = useState(initialstate);

  const renderSquare = (piece, row, col) => {
    const White = (row + col) % 2 === 0;
    const chesscoin = chesscoins[piece];

    return (
      <div key={`${row}-${col}`} className={`square ${White ? 'white' : 'black'}`}> {chesscoin}</div>
    );
  };

  return (
    <div class='b1'>
      <h2>Chess Board</h2>
      <div className="chessboard">
      {board.map((row, rowIndex) =>
        row.map((piece, colIndex) =>
          renderSquare(piece, rowIndex, colIndex)
        )
      )}
    </div>
    </div>
  );
};

ReactDOM.render(<ChessBoard/>,document.getElementById('root'));