import React from 'react';
import './XO/XO.css';
import Board from "./XO/Board.js";
import Player from "./XO/Player.js";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // tic-tac-toe board
      board: [['','',''],['','',''],['','','']],
      // start player
      start: 'X',
      // current player
      turn: 'X',
      // has anyone won?
      won: false,
      // who won?
      wins: '',
      // X
      x: 0,
      // O
      o: 0
    };
    // bind functions
    this.choice = this.choice.bind(this);
    this.restart = this.restart.bind(this);
    this.checkWin = this.checkWin.bind(this);
    this.tally = this.tally.bind(this);
    this.newRound = this.newRound.bind(this);
  }
  // changes value at specific position of board
  choice(i, j) {
    // state variables
    const { board, turn, won } = this.state;
    // as long as position has not been played and no one has won...
    if (board[i][j] === '' && !won) {
      // update specific board position in array
      board[i][j] = turn;
      // set state for new board and swap turn
      this.setState({
        board: board,
        turn: turn === "X" ? 'O' : 'X'
      });
      // check for a winner
      this.checkWin(turn);
    }
  }
  // restarts the board to initial values
  restart() {
    let { start, won, turn } = this.state;
    this.setState({
      board: [['','',''],['','',''],['','','']],
      turn: won ? turn : start,
      won: false,
      wins: ''
    });
  }

  newRound() {
    let { turn } = this.state;
    this.restart();
    this.setState({
      start: turn
    });
  }
  // checks to see if player has won
  checkWin(play) {
    // state variable
    const { board } = this.state;
    // loop through board layers
    for (let i = 0; i < board.length; i++) {
      // if there is a row or column that matches the current play...
      if (
        (board[i][0] === play && board[i][1] === play && board[i][2] === play)
        || (board[0][i] === play && board[1][i] === play && board[2][i] === play)
      ) {
        // update the state to display who won
        this.setState({
          won: true,
          wins: play
        });
        this.tally(play);
        break;
      }
      // if a diagonal matches the current play...
      if (
        (board[0][0] === play && board[1][1] === play && board[2][2] === play)
        || (board[0][2] === play && board[1][1] === play && board[2][0] === play)
      ) {
        // update the state to display who won
        this.setState({
          won: true,
          wins: play
        });
        this.tally(play);
        break;
      }
    }
  }
  tally(play) {
    let { x, o, start} = this.state;
    this.setState({
      x: play === 'X' ? ++x : x,
      o: play === 'O' ? ++o : o,
      start: start === 'X' ? 'O' : 'X'
    });
  }
  render() {
    // state variable
    const { board, wins, x, o } = this.state;
    // make style constant if there is a winner
    const winStyle = wins === "X" ? {zIndex: 1, backgroundColor: 'rgba(255, 0, 0, .6)'} : wins === "O" ? {zIndex: 1, backgroundColor: 'rgba(0, 0, 255, .6)'} : {zIndex: -1} ;
    return (<div id="XO">
      <Player player={'X'} score={x} side={this.state.turn} win={wins ? wins : ''} />
      <Player player={'O'} score={o} side={this.state.turn} win={wins ? wins : ''} />
      {/* container to hold board and absolute positioned winner element */}
      <div className="mainBoard" style={{position: 'relative'}}>
        {/* board component with board state and choice function as props */}
        <Board board={board} choice={this.choice} />
        {/* winner element shows up when there is a winner and has restart onclick */}
        <div style={winStyle} id="winner" onClick={this.restart}>{wins} WINS</div>
      </div>
      {/* restart button */}
      <button onClick={this.newRound} className="restart">Restart</button>
    </div>);
  }
}

export default App;