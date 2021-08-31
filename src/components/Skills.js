import React from "react";

export default function Skills(props) {
    const skillMap = props.skills.map((object, i, array) => {
        const conf = array[i].confidence;
        const red = {backgroundColor: '#ff7d7d', background: 'linear-gradient(to right bottom, rgba(255, 125, 125, 0.7), rgba(255, 125, 125, 0.3))'};
        const orange = {backgroundColor: '#ffd77d', background: 'linear-gradient(to right bottom, rgba(255, 215, 125, 0.7), rgba(255, 215, 125, 0.3))'}
        const yellow = {backgroundColor: '#d7ff7d', background: 'linear-gradient(to right bottom, rgba(215, 255, 125, 0.7), rgba(215, 255, 125, 0.3))'};
        const green = {backgroundColor: '#7dff7d', background: 'linear-gradient(to right bottom, rgba(125, 255, 125, 0.7), rgba(125, 255, 125, 0.3))'};

        return(<div className="skillSquare" key={i}>
            <div className="outer" style={conf === 4 ? green : conf === 3 ? yellow : conf === 2 ? orange : conf === 1 ? red : {}}>
                <img src={array[i].image} alt={array[i].skill} />
            </div>
        </div>);
    });
    return (
        <section id="skills" className="anchor">
            <header id="skill-head" className="head-font">Tech Used:</header>
            <article id="skill-content" className="start content row">
                {skillMap}
            </article>
        </section>
    );
}