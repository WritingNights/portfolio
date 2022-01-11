import React from "react";

export default function About(props) {
    return (
        <section id="about" className={`${props.mode}about anchor`}>
            <div className="container">
                <span id="resume"><a href="./danielResume.docx" download style={props.mode === 'dark-' ? {color: 'white'} : {}}>Resume</a></span>
                <article className="aboutArt">
                    {/* coding card */}
                    <input type="radio" id="trigger1" name="slider"/>
                    <label htmlFor="trigger1"></label>
                    <div className="slide codingCard">
                        <code>
                            &lt;<span className="blue">head</span>&gt;
                            <br/>
                            &nbsp;&nbsp;Hello, World!
                            <br/>
                            &lt;/<span className="blue">head</span>&gt;
                            <br/>
                            &lt;<span className="blue">body</span>&gt;
                            <br/>
                            &nbsp;&nbsp;&lt;<span className="blue">h1</span>&gt;
                            <br/>
                            &nbsp;&nbsp;&nbsp;&nbsp;I am a web developer!
                            <br/>
                            &nbsp;&nbsp;&lt;/<span className="blue">h1</span>&gt;
                            <br/>
                            &lt;/<span className="blue">body</span>&gt;
                        </code>
                    </div>
                    {/* main card */}
                    <input type="radio" id="trigger2" name="slider" defaultChecked autoFocus/>
                    <label htmlFor="trigger2"></label>
                    <div className="slide mainCard">
                        <span id="im">I'm</span><span id="cursName">Daniel Jones</span>
                    </div>
                    {/* writing card */}
                    <input type="radio" id="trigger3" name="slider"/>
                    <label htmlFor="trigger3"></label>
                    <div className="slide writingCard">
                        <header className="writeHead">Fantasy Writer</header>
                        <p>I'm also a fantasy writer enamured in the creation of new worlds and fantastical creatures.</p>
                        <p>Because of this, I pay attention to the development of smaller details. I'm dedicated to the completion of large tasks like this.</p>
                        <p>The prospect of learning new things (or thinking them up) makes the whole process worth it.</p>
                    </div>
                </article>
            </div>
        </section>
    );
}