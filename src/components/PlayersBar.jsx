import "./PlayersBar.css";

export default function PlayersBar({ playerX, playerO, currentTurn = "X" }) {
  const xName = playerX?.trim() || "Player X";
  const oName = playerO?.trim() || "Player O";

  return (
    <div className="playersBar">
      {/* Player X */}
      <div className={`playerPill ${currentTurn === "X" ? "active" : ""}`}>
        <span className="badge">X</span>
        <div className="playerText">
          <div className="name">{xName}</div>
          {currentTurn === "X" && <div className="sub">Your turn</div>}
        </div>
      </div>

      {/* Player O */}
      <div className={`playerPill ${currentTurn === "O" ? "active" : ""}`}>
        <span className="badge">O</span>
        <div className="playerText">
          <div className="name">{oName}</div>
          {currentTurn === "O" && <div className="sub">Your turn</div>}
        </div>
      </div>
    </div>
  );
}