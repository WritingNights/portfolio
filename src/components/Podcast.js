import banner from "./data/podcast-data.js";

export default function Podcast(props) {
  return (
    <section id="Podcast" className={`${props.collapsed ? 'no-' : ''}manager`}>
      <img src={banner} alt="banner" style={{width: "100%"}} />
    </section>
  );
}