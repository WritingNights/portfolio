import { Link } from "react-router-dom";

import graphics from "./data/graphics-data.js";

export default function Graphics(props) {
  return (
    <section id="graphics" className="manager">
      {graphics.map((obj, i) => {
        return (<Link to={`/graphics/${obj.title}`} className="graphicsCard" state={{ obj: obj, link: 'graphics' }} key={i} tabIndex="0">
          <section className="thumbCont">
            {obj.thumbnail ? <img src={obj.thumbnail} alt={`${obj.title} thumbnail`} className="graphicThumb" /> : ''}
            <div className="shadow" />
          </section>
          <h1 className="graphicLinkTitle">{obj.title}</h1>
        </Link>)
      })}
    </section>
  );
}