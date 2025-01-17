import { PlayerState, Slot } from "./types";
import "./Cell.css";

type CellProps = {
  value: Slot;
  index: number;
  handleCellClick: (index: number) => void;
};

const getCellStyle = (index: number, value: Slot) => {
  let str = "";

  if (index % 3 === 0) str += " removeLeftBorder";

  if (index < 3) str += " removeTopBorder";

  if (index % 3 === 2) str += " removeRightBorder";

  if (index >= 6) str += " removeBottomBorder";

  if (!value) str += " cellPointer";

  return str;
};

const Cell = ({ index, value, handleCellClick }: CellProps) => {
  const imageSource = value === PlayerState.X ? "/x.png" : "/o.png";

  return (
    <div
      key={index}
      className={`cellWrapper ${getCellStyle(index, value)}`}
      onClick={() => !value && handleCellClick(index)}
    >
      {value ? <img src={imageSource} className="imageSize" /> : ""}
    </div>
  );
};

export default Cell;
