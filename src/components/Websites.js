import { Link } from "react-router-dom";
import camera from "./icons/Camera Outline.png";

import websites from "./data/projects-data";
import teams from "./data/team-data";

export default function Websites(props) {
  const games = websites.filter(obj => obj.game);
  const personal = websites.filter(obj => obj.personal);

  console.log(teams);

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
          {teams.map((obj, i) => {
            return (<article className={teams.length % 3 === 0 ? 'aThird webCard' : teams.length % 2 === 0 || (i + 2 >= teams.length && teams.length % 3 === 2) ? 'aHalf webCard' : teams.length === 1 || (i + 1 === teams.length && teams.length % 3 === 1) ? 'aWhole webCard' : 'webCard'} key={i}>
              <a href="" target="_blank" className="websiteCard" tabIndex="0">
                <img src={obj.image} alt={obj.title + ' icon'} className="teamIcon"/>
                <h3>{obj.title}</h3>
              </a>
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
      <section className="gameSect">
        <h2>Games</h2>
        <article className="webSectArt">
          {games.map((obj, i) => {
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
                {obj.thumbnail ? <img src={obj.thumbnail} alt={`${obj.title} thumbnail`} className="webThumb" /> : ''}
                {obj.title}
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