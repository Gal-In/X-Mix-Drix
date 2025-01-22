import Cell from "./Cell";
import { PlayerState, Slot } from "./types";
import "./GameBoard.css";

type GameBoardProps = {
  currPlayer: PlayerState;
  switchPlayer: () => void;
  setWinnerTitle: React.Dispatch<React.SetStateAction<String>>;
  boardCells: Slot[];
  setBoardCells: React.Dispatch<React.SetStateAction<Slot[]>>;
};

const GameBoard = ({
  currPlayer,
  switchPlayer,
  setWinnerTitle,
  boardCells,
  setBoardCells,
}: GameBoardProps) => {
  const handleCellClick = (index: number) => {
    const newBoardCells = [...boardCells];
    newBoardCells[index] = currPlayer;

    setBoardCells(newBoardCells);

    if (checkGameEnd(newBoardCells))
      setWinnerTitle(checkGameEnd(newBoardCells));
    else switchPlayer();
  };

  const checkWinner = (cells: Slot[]): String => {
    const winningCombinations = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let [a, b, c] of winningCombinations) {
      if (cells[a] && cells[a] === cells[b] && cells[a] === cells[c]) {
        return cells[a];
      }
    }

    return "";
  };

  const isDraw = (board: Slot[]): boolean => {
    return board.every((cell) => cell !== null);
  };

  const checkGameEnd = (cells: Slot[]): String => {
    const winner = checkWinner(cells);
    if (winner) {
      return `${winner} wins!`;
    }
    if (isDraw(cells)) {
      return "It's a draw!";
    }
    return "";
  };

  return (
    <div className="boardLayout">
      {boardCells.map((x, i) => (
        <Cell handleCellClick={handleCellClick} value={x} index={i} key={i} />
      ))}
    </div>
  );
};

export default GameBoard;
