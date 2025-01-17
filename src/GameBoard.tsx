import { useState } from "react";
import Cell from "./Cell";
import { PlayerState, Slot } from "./types";
import "./GameBoard.css";

type GameBoardProps = {
  currPlayer: PlayerState;
  switchPlayer: () => void;
  setIsWin: React.Dispatch<React.SetStateAction<boolean>>;
};

const GameBoard = ({ currPlayer, switchPlayer }: GameBoardProps) => {
  const [slots, setSlots] = useState<Slot[]>(Array(9).fill(null));

  const handleCellClick = (index: number) => {
    setSlots((prev) => {
      const newSlots = [...prev];
      newSlots[index] = currPlayer;

      return newSlots;
    });

    if (!checkWinning()) switchPlayer();
  };

  const checkWinning = (): boolean => {
    // implement function
    return false;
  };

  return (
    <div className="boardLayout">
      {slots.map((x, i) => (
        <Cell handleCellClick={handleCellClick} value={x} index={i} key={i} />
      ))}
    </div>
  );
};

export default GameBoard;
