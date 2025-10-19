# 🎲 Numbers Game

A 3×3 numbers game built with **React, Vite, TypeScript, and CSS**. Players choose a starting number (1–6), roll numbers, hold tiles, and try to match all tiles to the chosen number to win. Click a number to hold it (turns green), press **Roll** to randomize unheld numbers, track your roll count, and use **Reset** to start over. Before the first roll, tiles show a 🎲 placeholder. Fully responsive and mobile-friendly with smooth hover and active animations.

## How to Play
1. Choose **one starting number** from 1–6.  
2. Click **Roll** to randomize all tiles that are not yet held.  
3. Click on a number to **hold it** if it matches your chosen number (turns green).  
4. Continue rolling until **all numbers match the chosen number**.  
5. Track the number of rolls it took.  
6. Use **Reset** to start a new game at any time.  
7. When all numbers are held, the **WinnerPage** is displayed.

## Features
- 3×3 grid of numbers (like dice tiles)  
- 🎲 placeholder before the first roll  
- Click a number to hold (green)  
- **Roll** button randomizes unheld numbers  
- Roll count displayed  
- **Reset** button to restart  
- WinnerPage shows when all numbers held  
- Fully responsive design for all devices  
- Smooth hover and active animations

## Technologies
- **React** for UI  
- **Vite** for fast development  
- **TypeScript** for type safety  
- **CSS Modules** for scoped and responsive styling

## Installation
1. Clone repository: `git clone https://github.com/npetdev/numbers-game.git`  
2. Navigate: `cd numbers-game`  
3. Install dependencies: `npm install`  
4. Start dev server: `npm run dev`  
5. Open browser at `http://localhost:5173`

## Build
`npm run build` produces production-ready files in the `dist` folder.

## License
MIT License
