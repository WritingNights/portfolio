import { Link } from "react-router-dom";
import camera from "./icons/Camera Outline.png";

export default function Websites(props) {
  const { websites } = props;

  const team = [];
  const games = websites.filter(obj => obj.game);
  const personal = websites.filter(obj => obj.personal);

  return (
    <section id="websites" className="manager">
      <header className="websitesHead">
        <img src={camera} alt="polaroid outline" className="websiteHero"/>
        <article>
          <span>Check out my website snapshots</span>
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
            console.log(games.length, i);
            return (<article className={games.length % 3 === 0 ? 'aThird webCard' : games.length % 2 === 0 || (i + 2 >= games.length && games.length % 3 === 2) ? 'aHalf webCard' : games.length === 1 || (i + 1 === games.length && games.length % 3 === 1) ? 'aWhole webCard' : 'webCard'} key={i}>
              <Link to={`/websites/game/${obj.title}`} state={{ obj: obj, link: 'websites' }} className="websiteCard" tabIndex="0">
                {obj.thumbnail ? <img src={obj.thumbnail} alt={`${obj.title} thumbnail`} className="thumb" /> : ''}
                <h3>{obj.title}</h3>
              </Link>
              <section>
                {obj.description.map((line, j) => {
                  return (<span className="webCardWhite" key={j}>
                    {line}
                  </span>)
                })}
              </section>
            </article>)
          })}
        </article>
      </section>
      <section className="oldSect">
        <h2>Personal Projects</h2>
        <article className="webSectArt">
          {personal.map((obj, i) => {
            return (<article  className={personal.length % 3 === 0 ? 'aThird webCard' : personal.length % 2 === 0 || (i + 2 >= personal.length && personal.length % 3 === 2) ? 'aHalf webCard' : personal.length === 1 || (i + 1 === personal.length && personal.length % 3 === 1) ? 'aWhole webCard' : 'webCard'} key={i}>
              <Link to={`/websites/${obj.title}`} state={{ obj: obj, link: 'websites' }} key={i} className="websiteCard" tabIndex="0">
                {obj.title}
                {obj.thumbnail ? <img src={obj.thumbnail} alt={`${obj.title} thumbnail`} className="thumb" /> : ''}
              </Link>
              <section>
                {obj.description.map((line, j) => {
                  return (<span className="webCardBlack" key={j}>
                    {line}
                  </span>)
                })}
              </section>
            </article>)
          })}
        </article>
      </section>
    </section>
  );
}