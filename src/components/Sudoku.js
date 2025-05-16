import React from "react";
import './Sudoku/Sudoku.css';
import gsap from "gsap";

//import Game from "./Sudoku/Game";
//import Highscores from "./Sudoku/Highscore";
//import Guide from "./Sudoku/Guide";

class Sudoku extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      highscores: [],
    };

    /*this.newScore = this.newScore.bind(this);
    this.ascendSort = this.ascendSort.bind(this);*/

    this.handleKeyPress = this.handleKeyPress.bind(this);
  }

  /*newScore(score) {
    const { highscores } = this.state;
    let board = [...highscores]
    board.unshift(score);
    let temp = this.ascendSort(board);
    if (temp.length > 10) {
      temp.shift();
    }
    this.setState({highscores: temp});
  }*/

  /*ascendSort(arr) {
    let temp = [...arr];
    for (let i = 0; i < temp.length - 1; i++) {
      let min = temp[i];
      let ind = i;
      for (let j = i + 1; j < temp.length; j++) {
        if (arr[j].score < min.score) {
          min = temp[j];
          ind = j;
        }
      }
      temp[ind] = temp[i];
      temp[i] = min;
    }
    return temp;
  }*/

  handleKeyPress(e) {
    if (e.keyCode === 72) {
      this.toggleTab();
    }
    if (e.keyCode === 37 || e.keyCode === 38 || e.keyCode === 39 || e.keyCode === 40 || e.keyCode === 32) {
      e.preventDefault();
    }
  }

  componentDidMount() {
    const tl = gsap.timeline();
    tl.fromTo('#coverScreen',
      { display: 'flex', opacity: 1 },
      { display: 'flex', opacity: 0, delay: 2, duration: 1, onComplete: () => this.setState({ cover: false }) });
    document.addEventListener('keydown', this.handleKeyPress);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyPress);
  }

  render() {
    return (<main id="sudokuMain">
      {/*<Game newScore={this.newScore} />
      {/*<Highscores highscores={this.state.highscores} showTab={this.state.showTab} toggleTab={this.toggleTab} />
      <Guide />*/}
    </main>);
  }
};

export default Sudoku;