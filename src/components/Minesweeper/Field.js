import React from "react";

import Position from "./Position";

const Field = props => {
  const winH = Math.floor(window.innerHeight - 200);
  const winW = Math.floor(window.innerWidth - 100);

  const { board, height, width } = props.state;

  const hDiff = winH / height;
  const wDiff = winW / width;

  const size = wDiff > 25 && wDiff < hDiff ? `${wDiff}` : hDiff > 25 ? `${hDiff}` : `25`;

  const field = board ? board.map((obj, i) => {
    return <div className="fieldRow" style={{gridTemplateColumns: `repeat(${width}, ${size}px`}} key={i}>{obj.map((point, j) => {
      return <Position i={i} j={j} position={props.position} info={board[i][j]} choose={props.choose} size={size} updateArea={props.updateArea} updatePosition={props.updatePosition} flag={props.flag} tool={props.tool} key={j} />
    })}</div>
  }) : null;
  return (<section id="playField" style={{gridTemplateRows: `repeat(${height}, ${size})`}}>
    {field}
    <div className="cover" style={props.playing ? {zIndex: -1} : {zIndex: 3}}/>
  </section>);
}

export default Field;