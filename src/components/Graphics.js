import crooked from "./data/graphics-data.js";

export default function Graphics(props) {
  return (
    <section className="manager">
      <img src={crooked} alt="crooked" style={{width: "100%"}} />
    </section>
  );
}