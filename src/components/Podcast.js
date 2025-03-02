import banner from "./data/podcast-data.js";

export default function Podcast(props) {
  return (
    <section className="manager">
      <img src={banner} alt="banner" style={{width: "100%"}} />
    </section>
  );
}