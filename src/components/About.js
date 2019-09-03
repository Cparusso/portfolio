import React from 'react'
import Footer from './Footer.js'

function About() {
    return (
        <div>
            <div className="banner-container" >
                <div className="banner-about fade-in" >
                    <p>
                        Hi, I'm Charlie.
                    </p>
                    <p>
                        I'm a full-stack software engineer based in New York City with a 
                        drive to learn and share new technologies and ideas.
                        I'm a full-stack software engineer based in New York City with a 
                        drive to learn and share new technologies and ideas. 
                        I'm a full-stack software engineer based in New York City with a 
                        drive to learn and share new technologies and ideas.
                    </p>
                    <p>
                        I'm a full-stack software engineer based in New York City with a 
                        drive to learn and share new technologies and ideas.
                    </p>
                </div>
                <img className="picture-of-menobeard fade-in" src="menobeard.png" />
            </div>
            <Footer />
        </div>
    );
}

export default About
