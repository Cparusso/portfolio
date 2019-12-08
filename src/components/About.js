import React from 'react'
import Footer from './Footer.js'

function About() {
    return (
        <div>
            <div className="banner-container" >
                <div className="banner-about fade-in" >
                    <h1 className="about-header" >Hi, I'm Charlie.</h1>
                    <p>
                        I'm a full-stack software engineer
                        based in New York City. I graduated from Flatiron School in
                        December of 2018 and have been working there in an instructional
                        role since then.
                    </p>
                    <p>
                        I've worked directly with over 100 students, to learn how to debug their code, 
                        overcome code challenges, and collaborate with other developers on creative
                        and inventive projects.
                    </p>
                </div>
                <img className="mobile-hide picture-of-menobeard fade-in" src="menobeard.png" alt="charlie-crossed-arms-img"/>
            </div>
            <Footer />
        </div>
    );
}

export default About
