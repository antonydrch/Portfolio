import React, { useEffect } from 'react';

import Competences from './pages/competences';
import Experiences from './pages/experiences';
import About from './pages/about';
import Projets from './pages/projects';
import Formation from './pages/formations';
import Main from './pages/main';

const Home = (props) => {
    useEffect(() => {
        let width = document.getElementById("content").clientWidth;

        document.getElementById("content").style.left = (width * (props.index - 1) * -1).toString() + "px";
    })

    const changeHeader = () =>{
        if (window.innerWidth <= 1024)
            return
        if (document.getElementById("background").scrollTop > 0)
            document.getElementById("header").classList.add("is-not-top");
        else
            document.getElementById("header").classList.remove("is-not-top");
    }

    return (
        <div id="background" onScroll={changeHeader} className="full-width">
            <div id="content" className="full-width full-height">
                <Main/>
                <Competences/>
                <Experiences/>
                <Formation/>
                <Projets/>
                <About/>
            </div>
        </div>
    );
}

export default Home;