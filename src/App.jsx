import { useMemo, useState } from "react";
import Board from "./components/Board";
import PlayersBar from "./components/PlayersBar";
import "./App.css";

const WIN_LINES = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8], // rows
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8], // cols
  [0, 4, 8],
  [2, 4, 6], // diagonals
];

function getWinner(board) {
  for (const [a, b, c] of WIN_LINES) {
    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      return board[a]; // "X" or "O"
    }
  }
  return null;
}

function App() {
  const [playerX, setPlayerX] = useState("");
  const [playerO, setPlayerO] = useState("");

  const [board, setBoard] = useState(Array(9).fill(null));
  const [currentTurn, setCurrentTurn] = useState("X");
  const [hasStarted, setHasStarted] = useState(false);

  const winner = useMemo(() => getWinner(board), [board]);
  const isDraw = useMemo(
    () => !winner && board.every((c) => c !== null),
    [board, winner]
  );

  const gameOver = Boolean(winner) || isDraw;

  function handleCellClick(index) {
    if (gameOver) return;
    if (board[index] !== null) return;

    setHasStarted(true);

    setBoard((prev) => {
      const next = [...prev];
      next[index] = currentTurn;
      return next;
    });

    setCurrentTurn((prev) => (prev === "X" ? "O" : "X"));
  }

  function resetGame() {
    setBoard(Array(9).fill(null));
    setCurrentTurn("X");
    setHasStarted(false);
  }

  const xName = playerX?.trim() || "Player X";
  const oName = playerO?.trim() || "Player O";

  return (
    <div className="App">
      {/* Winner Popup */}
      <div className={`winner ${gameOver ? "" : "shrink"}`}>
        <div className="winner-text">
          {winner && (
            <>
              Winner:{" "}
              <span style={{ fontWeight: 900 }}>
                {winner === "X" ? xName : oName}
              </span>
            </>
          )}
          {isDraw && <>Draw 🤝</>}
        </div>

        <button onClick={resetGame}>Play again</button>
      </div>

      {/* NEW: Clean 2-column layout */}
      <div className="layout">
        {/* LEFT PANEL */}
        <div className="leftPanel">
          {/* Fancy Name Inputs */}
          <div className="nameInput">
            <div className="nameCard">
              <div className="nameCardHeader">
                <span className="chip">X</span>
                <span className="title">Player X</span>
              </div>

              <input
                className="nameField"
                placeholder="Enter name (X)"
                value={playerX}
                disabled={hasStarted}
                onChange={(e) => setPlayerX(e.target.value)}
              />

              <small className="hint">
                {hasStarted ? "Locked after start" : "Editable before start"}
              </small>
            </div>

            <div className="nameCard">
              <div className="nameCardHeader">
                <span className="chip">O</span>
                <span className="title">Player O</span>
              </div>

              <input
                className="nameField"
                placeholder="Enter name (O)"
                value={playerO}
                disabled={hasStarted}
                onChange={(e) => setPlayerO(e.target.value)}
              />

              <small className="hint">
                {hasStarted ? "Locked after start" : "Editable before start"}
              </small>
            </div>
          </div>

          <PlayersBar
            playerX={playerX}
            playerO={playerO}
            currentTurn={currentTurn}
          />
        </div>

        {/* RIGHT PANEL */}
        <div className="rightPanel">
          <Board
            board={board}
            onCellClick={handleCellClick}
            disabled={gameOver}
          />

          <button onClick={resetGame} className="resetBtn">
            Reset
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;