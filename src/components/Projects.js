import React from "react";

export default function Projects(props) {
    return (<section id="projects" className="anchor">
        <div>
            <Book pageNum={props.pageNum} projects={props.projects} />
            <div id="controls">
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" onClick={() => props.changePage('minus')} id="page-back" className="bi bi-arrow-left-circle-fill" viewBox="0 0 16 16">
                    <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0zm3.5 7.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5z"/>
                </svg>
                {props.pageNum === 0 ? <span>Front cover</span> : props.pageNum === props.projects.length + 1 ? <span>Back cover</span> : <span>Page {props.pageNum}</span>}
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" onClick={() => props.changePage('plus')} id="page-forward" className="bi bi-arrow-right-circle-fill" viewBox="0 0 16 16">
                    <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z"/>
                </svg>
            </div>
        </div>
    </section>);
}

function Book(props) {
    const projectMap = props.projects.map((obj, i, array) => {
        let style;
        if (props.pageNum > i + 1) {
            style = {
                transform: 'rotateY(-180deg)',
                zIndex: array.length
            };
        } else {
            style = {
                zIndex: array.length - i
            };
        }
        const backface = {backfaceVisibility: 'hidden', WebkitBackfaceVisibility: 'hidden'};
        return (<div className="pro-content" style={style} key={i}>
            <div style={backface}>{array[i].title}</div>
            <img style={backface} src={array[i].image} title={array[i].title} alt={array[i].title}/>
            <div style={backface} className="pro-links">
                {array[i].youtubeLink ? <a href={array[i].youtubeLink} target="_blank" rel="noreferrer">
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-youtube" viewBox="0 0 16 16">
                        <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.007 2.007 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31.4 31.4 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.007 2.007 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A99.788 99.788 0 0 1 7.858 2h.193zM6.4 5.209v4.818l4.157-2.408L6.4 5.209z"/>
                    </svg>
                </a> : ''}
                {array[i].gitLink ? <a href={array[i].gitLink} target="_blank" rel="noreferrer">
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-github" viewBox="0 0 16 16">
                        <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
                    </svg>
                </a> : ''}
            </div>
        </div>);
    });
    let cover;
    const length = props.projects.length;
    if (props.pageNum > 0) {
        cover = {transform: 'rotateY(-180deg)', zIndex: length};
    } else {
        cover = {zIndex: length + 1};
    }
    return (<div id="pro-book">
        <div id="front-cover" style={cover}>
            <header id="pro-head">Projects of a Web Developing Author</header>
            <div id="byMe">by Daniel Jones</div>
        </div>
        {projectMap}
        <div id="back-cover"></div>
    </div>);
}