import { Link, useLocation } from "react-router-dom";
import lives from "./data/live-data.js";

function Template(props) {
  const location = useLocation();
  const { obj, link } = location.state || {};
  const Live = lives.filter(x => x.title === obj.title)[0]?.live
  if (Live) {
    return (
      <Live />
    );
  } else {
    return (
      <section id="template" className="manager">
        <div className="tempContainer">
          <div className="templateOverlay">
            <Link to={`/${link === 'Home' ? '' : link}`} className="back" tabIndex="0">
              <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="black" id="page-back" className="bi bi-arrow-left-circle-fill" viewBox="0 0 16 16">
                <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0zm3.5 7.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5z"/>
              </svg>
            </Link>
            <h1>{obj?.title}</h1>
          </div>
          <img src={obj?.image} alt="" className="tempImg" />
        </div>
      </section>
    );
  }
}

export default Template;