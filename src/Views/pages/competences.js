import React from 'react';

const Competences = () => {
    return (
        <div id="skills" className="pages full-width full-height padding-sections">
            <div className="hard-skills">
                <h2 className="fl full-width">Skills</h2>
                <ul>
                    <li><div className="reactjs background-image"></div>reactjs & react native</li>
                    <li><div className="nodejs background-image"></div>node js</li>
                    <li><div className="html-css-js"></div>html / css / js</li>
                    <li><div className="c background-image"></div>c</li>
                    <li><div className="cplusplus background-image"></div>c++</li>
                    <li><div className="unity background-image"></div>unity (c#)</li>
                    <li><div className="python background-image"></div>python</li>
                </ul>
            </div>
            <div className="soft-skills">
                <h2 className="fl full-width">Soft skills</h2>
                <ul>
                    <li><div className="photoshop background-image"></div>photoshop</li>
                    <li><div className="anglais background-image"></div>anglais 720 toic</li>
                    <li><div className="permis background-image"></div>permis de conduire</li>
                </ul>
            </div>
        </div>
    );
}

export default Competences;