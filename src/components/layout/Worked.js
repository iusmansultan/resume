import React, { useState } from 'react'

const Worked = () => {
    return (
        <div className="worked">
            <div className="worked-col-1">
                <h2>Where I’ve Worked</h2>
                <hr style={{ width: '35%', marginLeft: '10px', color: '#27e278' }} />
            </div>
            <Companies />
        </div>
    )
}

const Companies = () => {
    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
        setToggleState(index);
    };

    return (
        <div className="container">
            <div className="bloc-tabs">
                <button
                    className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
                    onClick={() => toggleTab(1)}
                >
                    StackOne
                </button>
                <button
                    className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
                    onClick={() => toggleTab(2)}
                >
                    Ast
                </button>
                <button
                    className={toggleState === 3 ? "tabs active-tabs" : "tabs"}
                    onClick={() => toggleTab(3)}
                >
                    Select.pk
                </button>
                <button
                    className={toggleState === 4 ? "tabs active-tabs" : "tabs"}
                    onClick={() => toggleTab(4)}
                >
                    Accounting Estate
                </button>
            </div>

            <div className="content-tabs">
                <div
                    className={toggleState === 1 ? "content  active-content" : "content"}
                >
                    <h2>Mern Stack Developer</h2>
                    <small>Feb 2021 - <b style={{ color: '#27e278' }}>Present</b></small>
                    <hr />
                    <ul>
                        <li>Write modern, performant, maintainable code for a diverse array of client and internal projects</li>
                        <li>Work with a variety of different languages, platforms, frameworks, and content management systems such as JavaScript, TypeScript, Gatsby, React, Craft, WordPress, Prismic, and Netlify</li>
                        <li>Communicate with multi-disciplinary teams of engineers, designers, producers, and clients on a daily basis</li>
                    </ul>
                </div>

                <div
                    className={toggleState === 2 ? "content  active-content" : "content"}
                >
                    <h2>WordPress Developer + UI/UX designer</h2>
                    <small>August 2020 - <b style={{ color: '#27e278' }}>Present</b></small>
                    <hr />
                    <ul>
                        <li>Developed and shipped highly interactive web applications for Apple Music using Ember.js</li>
                        <li>Architected and implemented the front-end of Apple Music's embeddable web player widget, which lets users log in and listen to full songs in the browser</li>
                        <li>Contributed extensively to MusicKit.js, a JavaScript framework that allows developers to add an Apple Music player to their web apps</li>
                    </ul>
                </div>

                <div
                    className={toggleState === 3 ? "content  active-content" : "content"}
                >
                    <h2>Graphic Designer</h2>
                    <small>Jun 2018 - Feb 2020</small>
                    <hr />
                    <ul>
                        <li>Write modern, performant, maintainable code for a diverse array of client and internal projects</li>
                        <li>Work with a variety of different languages, platforms, frameworks, and content management systems such as JavaScript, TypeScript, Gatsby, React, Craft, WordPress, Prismic, and Netlify</li>
                        <li>Communicate with multi-disciplinary teams of engineers, designers, producers, and clients on a daily basis</li>
                    </ul>
                </div>

                <div
                    className={toggleState === 4 ? "content  active-content" : "content"}
                >
                    <h2>Graphic Designer</h2>
                    <small>March 2020 - August 2020</small>
                    <hr />
                    <ul>
                        <li>Write modern, performant, maintainable code for a diverse array of client and internal projects</li>
                        <li>Work with a variety of different languages, platforms, frameworks, and content management systems such as JavaScript, TypeScript, Gatsby, React, Craft, WordPress, Prismic, and Netlify</li>
                        <li>Communicate with multi-disciplinary teams of engineers, designers, producers, and clients on a daily basis</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
export default Worked
