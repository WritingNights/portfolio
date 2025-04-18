import moment from "moment";

import banner from "./Podcast/Banner.png";

import podcastFrame from "./data/podcast-data.js";

export default function Podcast(props) {
  const source = podcastFrame[moment().date() - 1 % podcastFrame.length]/*.src*/;

  return (
    <section id="podcast" className="manager">
      <div style={{ backgroundImage: `url(${banner})`}} className="podcastBanner">
        <iframe style={{margin: "1rem", borderRadius: "12px"}} title="Novelist Journey Chapter 1" src={`https://open.spotify.com/embed/episode/${source}?utm_source=generator`} width="50%" height="342" frameBorder="0" allowFullScreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
      </div>
    </section>
  );
}