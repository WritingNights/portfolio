import React from "react";

class Player extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
    };

  }

  render() {
    let { player, score } = this.props;
    return (
      <aside className={player ? `${player}-player player` : 'player'}>
        <div className={this.props.side === player ? `${player}-side side` : 'side'}>{this.props.player}</div>
        <span>{score} Wins</span>
      </aside>
    );
  }
}

export default Player;