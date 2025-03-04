import crooked from "./data/graphics-data.js";

export default function Graphics(props) {
  return (
    <section id="Graphics" className={`${props.collapsed ? 'no-' : ''}manager`}>
      <img src={crooked} alt="crooked" style={{width: "100%"}} />
    </section>
  );
}