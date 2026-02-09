[![Live Demo](https://img.shields.io/badge/Live-Demo-brightgreen)](https://pavel-tic-tac-toe-game-react.netlify.app/)

# 🎮 Tic-Tac-Toe Game (React)

A modern, responsive **Tic-Tac-Toe** game built with **React** and **CSS**, featuring a polished UI, player name setup, turn tracking, winner detection, and reset functionality.

This project focuses on **clean state management**, **component separation**, and **UI/UX clarity**, making it suitable both as a learning project and as a portfolio piece.

🔗 Live Demo: https://pavel-tic-tac-toe-game-react.netlify.app/

## ✨ Features

- 🎲 Classic 3×3 Tic-Tac-Toe gameplay
- 👤 Custom player names (X and O)
- 🔒 Name inputs lock automatically once the game starts
- 🔄 Turn indicator (Player X / Player O)
- 🏆 Automatic winner detection
- 🤝 Draw detection
- 🔁 Reset & Play Again functionality
- 📱 Responsive, centered layout
- 🎨 Modern dark UI with glassmorphism cards
- 🧠 Clean React state logic (no external libraries)

---

## 🧩 How the Game Works

1. Players enter their names (optional)
2. Player **X** always starts
3. Players take turns clicking on empty cells
4. The game checks for:
   - A **winning line** (row, column, diagonal)
   - Or a **draw** (board full, no winner)
5. When the game ends:
   - A popup shows the winner (or draw)
   - The board is disabled
6. Press **Play Again** or **Reset** to restart

---

## 🗂️ Project Structure

```
src/
│
├── components/
│   ├── Board.jsx        # Game board (3×3 grid)
│   ├── Board.css        # Board layout, grid lines, scaling
│   ├── PlayersBar.jsx  # Current player / turn indicator
│   ├── PlayersBar.css  # Styling for PlayersBar
│
├── App.jsx              # Main app logic & state
├── App.css              # Global layout, UI cards, buttons
├── main.jsx             # React entry point
```

---

## 🧠 Core Logic Explained

### Game State

- `board` → Holds the state of all 9 cells
- `currentTurn` → Tracks whose turn it is
- `hasStarted` → Locks name inputs after first move

### Winner Detection

The game checks all possible winning combinations (rows, columns, diagonals) after each move.

### Reset Logic

Resets the board, turn state, and unlocks player name inputs.

---

## 🎨 UI & CSS Decisions

- **Aspect-ratio based board** to keep the grid square
- **Glassmorphism cards** for player setup
- **Central layout** for consistent UX
- **Reusable button styles** for visual consistency

---

## 🚀 How to Run Locally

### 1️⃣ Clone the repository

```bash
git clone https://github.com/your-username/tic-tac-toe-game.git
```

### 2️⃣ Install dependencies

```bash
npm install
```

### 3️⃣ Start the development server

```bash
npm run dev
```

Open your browser at:

```
http://localhost:5173
```

---

## 🛠️ Technologies Used

- React (Hooks API)
- JavaScript (ES6+)
- CSS3
- Vite
- HTML5

---

## 📌 Possible Future Improvements

- Score tracking
- Highlight winning line
- AI opponent
- Sound effects
- Mobile-first enhancements

---

## 👤 Author

**Pavel Lakov**  
Frontend / Full-Stack Developer

---

## 📄 License

This project is open-source and free to use for learning and portfolio purposes.
