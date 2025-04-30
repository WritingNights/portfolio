import { Link } from "react-router-dom";
import camera from "./icons/Camera Outline.png";

export default function Websites(props) {
  const { websites } = props;

  const team = [];
  const games = websites.filter(obj => obj.game);
  const old = websites.filter(obj => !obj.game);

  return (
    <section id="websites" className="manager">
      <header className="websitesHead">
        <img src={camera} alt="polaroid outline" className="websiteHero"/>
        <article>
          <span>I'm not much of a photographer,</span>
          <span>but my snapshots are quite good.</span>
        </article>
      </header>
      <section className="teamSect">
        <h2>Team Projects</h2>
        <article className="webSectArt">
          {team.map((obj, i) => {
            return (i)
          })}
          <h3>In progress...</h3>
        </article>
      </section>
      <section className="gameSect">
        <h2>Games</h2>
        <article className="webSectArt">
          {games.map((obj, i) => {
            return (<Link to={`/websites/game/${obj.title}`} state={{ obj: obj, link: 'websites' }} key={i} className="websiteCard" tabIndex="0">
              {obj.thumbnail ? <img src={obj.thumbnail} alt={`${obj.title} thumbnail`} className="thumb" /> : ''}
              <h3>{obj.title}</h3>
            </Link>)
          })}
        </article>
      </section>
      <section className="oldSect">
        <h2>Personal Projects</h2>
        <article className="webSectArt">
          {old.map((obj, i) => {
            return (<Link to={`/websites/${obj.title}`} state={{ obj: obj, link: 'websites' }} key={i} className="websiteCard" tabIndex="0">
              {obj.title}
              {obj.thumbnail ? <img src={obj.thumbnail} alt={`${obj.title} thumbnail`} className="thumb" /> : ''}
            </Link>)
          })}
        </article>
      </section>
    </section>
  );
}