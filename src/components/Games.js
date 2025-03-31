import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

import Minesweeper from "./Minesweeper.js";

function Game(props) {
  const location = useLocation();
  const { obj, link } = location.state;

  const games = props.websites.filter(
    obj => obj.game
  );
  return (
    <section id="template" className="manager">
      <div className="gameNav">
        <Link to={`/${link === 'Home' ? '' : link}`} className="back">
          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" id="page-back" className="bi bi-arrow-left-circle-fill" viewBox="0 0 16 16">
            <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0zm3.5 7.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5z"/>
          </svg>
        </Link>
        {games.map((obj, i) => {
          return (obj.title !== window.location.pathname.split('/')[3] ? <Link to={`/websites/game/${obj.title}`} className="gameLink" state={{ obj: obj, link: 'websites' }} key={i}>
            {obj.title}
          </Link> : <span className="gameLink" key={i}>
            <img src={obj.icon} alt="thumbnail" style={{ width: "1rem" }} />&nbsp;{obj.title}
          </span>);
        })}
      </div>
      {obj.title === "Minesweeper" ? <Minesweeper /> : 'Tic-Tac-Toe'}
    </section>
  );
}

export default Game;