import { useState } from "react";
import "./App.css";
import GameBoard from "./GameBoard";
import { PlayerState } from "./types";

const App = () => {
  const [currPlayer, setCurrPlayer] = useState<PlayerState>(PlayerState.X);
  const [isWin, setIsWin] = useState<boolean>(false);

  const switchPlayer = () => {
    setCurrPlayer((prev) =>
      prev === PlayerState.X ? PlayerState.O : PlayerState.X
    );
  };

  return (
    <div className="container">
      <h1 className="title">X Mix Drix</h1>
      <h2>{isWin ? `${currPlayer} Won!` : `It's ${currPlayer} turn`}</h2>

      <GameBoard
        currPlayer={currPlayer}
        switchPlayer={switchPlayer}
        setIsWin={setIsWin}
      />

      {isWin && <button className="resetBtn">Play Again</button>}
    </div>
  );
};

export default App;
