import { useState } from "react";
import "./App.css";
import GameBoard from "./GameBoard";
import { PlayerState, Slot } from "./types";

const CLEAR_BOARD = Array(9).fill(null);

const App = () => {
  const [currPlayer, setCurrPlayer] = useState<PlayerState>(PlayerState.X);
  const [winnerTitle, setWinnerTitle] = useState<String>("");
  const [boardCells, setBoardCells] = useState<Slot[]>(CLEAR_BOARD);

  const switchPlayer = () => {
    setCurrPlayer((prev) =>
      prev === PlayerState.X ? PlayerState.O : PlayerState.X
    );
  };

  const resetBoard = () => {
    setBoardCells(CLEAR_BOARD);
    setWinnerTitle("");
  };

  return (
    <div className="container">
      <h1 className="title">X Mix Drix</h1>
      <h2>{winnerTitle ? winnerTitle : `It's ${currPlayer} turn`}</h2>

      <GameBoard
        currPlayer={currPlayer}
        switchPlayer={switchPlayer}
        setWinnerTitle={setWinnerTitle}
        boardCells={boardCells}
        setBoardCells={winnerTitle ? () => "" : setBoardCells}
      />

      {winnerTitle && (
        <button onClick={() => resetBoard()} className="resetBtn">
          Play Again
        </button>
      )}
    </div>
  );
};

export default App;
