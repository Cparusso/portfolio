import React from 'react'
import Project from '../components/Project.js'
import { FaLinkedin, FaGithubSquare, FaMedium } from 'react-icons/fa'

function Projects() {
    return (
        <div>
            <div>
                <Project />
                <Project />
                <Project />
            </div>
            <div
                className="fade-in"
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
    )
}

export default Projects
