import React from 'react'
import { FaLinkedin, FaGithubSquare, FaMedium } from 'react-icons/fa';

function About() {
    return (
        <div>
            <div className="banner-container" >
                <div className="banner-about" >
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
                <img className="picture-of-menobeard" src="menobeard.png" />
            </div>
            <div
                style={{
                        width: "100vw",
                        textAlign: "center",
                        marginTop: "-7vh",
                        zIndex: "1000",
                    }}
                >
                <a className="react-icon-svg" href="https://www.linkedin.com/in/charlieprusso/" target="blank" >
                    <FaLinkedin />
                </a>
                <a className="react-icon-svg" href="https://www.github.com/cparusso/" target="blank" >
                    <FaGithubSquare />
                </a>
                <a className="react-icon-svg" href="https://medium.com/@cparusso" target="blank" >
                    <FaMedium />
                </a>
            </div>
        </div>
    );
}

export default About
