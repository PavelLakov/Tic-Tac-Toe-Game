import "./Board.css";

const Board = ({ board, onCellClick, disabled }) => {
  return (
    <div className="board">
      {board.map((cell, i) => (
        <div
          key={i}
          className={`input input${i + 1} ${disabled ? "disabled" : ""}`}
          onClick={() => onCellClick(i)}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") onCellClick(i);
          }}
        >
          {cell}
        </div>
      ))}
    </div>
  );
};

export default Board;
