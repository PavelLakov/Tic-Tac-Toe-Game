export default function Player({
  playerX,
  playerO,
  setPlayerX,
  setPlayerO,
  locked,
}) {
  return (
    <div className="playersWrap">
      {/* Player X container */}
      <div className="playerCard">
        <h3 className="playerTitle">Player X</h3>
        <input
          className="playerInput"
          type="text"
          value={playerX}
          onChange={(e) => setPlayerX(e.target.value)}
          placeholder="Nickname for X"
          disabled={locked}
        />
      </div>

      {/* Player O container */}
      <div className="playerCard">
        <h3 className="playerTitle">Player O</h3>
        <input
          className="playerInput"
          type="text"
          value={playerO}
          onChange={(e) => setPlayerO(e.target.value)}
          placeholder="Nickname for O"
          disabled={locked}
        />
      </div>
    </div>
  );
}