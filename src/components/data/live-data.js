import XO from "../XO.js";
import Minesweeper from "../Minesweeper.js";
import Sudoku from "../Sudoku.js";

import Network from "../Network.js";

const lives = [
    {
      title: 'Currency (CS50x final)',
      live: null
    },
    {
      title: 'Search',
      live: null
    },
    {
      title: 'Wiki',
      live: null
    },
    {
      title: 'Commerce',
      live: null
    },
    {
      title: 'Mail',
      live: null
    },
    {
      title: 'Network',
      live: Network
    },
    {
      title: 'Universal: World Builder',
      live: null
    },
    {
      title: 'Tic-Tac-Toe',
      game: XO
    },
    {
      title: 'Amazon Prime Sign-up Clone',
      live: null
    },
    {
      title: 'MERN-Stack Blog',
      live: null
    },
    {
      title: 'Minesweeper',
      game: Minesweeper
    },
    {
      title: 'Sudoku',
      game: Sudoku
    }
  ];

export default lives;