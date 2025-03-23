import { Link } from "react-router-dom";

export default function Websites(props) {
  const { websites } = props;

  return (
    <section id="websites" className="manager">
      {websites.map((obj, i) => {
        return (<Link to={obj.game ? `/websites/game/${obj.title}` : `/websites/${obj.title}`} key={i} className="websiteCard" >
          {obj.title}
          {obj.thumbnail ? <img src={obj.thumbnail} alt={`${obj.title} thumbnail`} className="thumb" /> : ''}
        </Link>)
      })}
    </section>
  );
}