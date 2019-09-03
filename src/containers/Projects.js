import React from 'react'
import Project from '../components/Project.js'
import Footer from '../components/Footer.js'
import Flickity from 'react-flickity-component'

import { FaLinkedin, FaGithubSquare, FaMedium } from 'react-icons/fa'

function Projects() {

    const flickityOptions = {
        initialIndex: 0,
        autoPlay: true,
    }

    return (
        <div>
            <Flickity
                className={'carousel'} // default ''
                elementType={'div'} // default 'div'
                options={flickityOptions} // takes flickity options {}
                disableImagesLoaded={false} // default false
                reloadOnUpdate // default false
                static // default false
        >
                <div style={{display: "flex", width: "50vw"}}>
                    <p>
                        I'm a full-stack software engineer based in New York City with a 
                        drive to learn and share new technologies and ideas.
                        I'm a full-stack software engineer based in New York City with a 
                        drive to learn and share new technologies and ideas.
                    </p>
                    <img src="mebab.png" />
                </div>
                <div style={{ display: "flex", width: "50vw" }}>
                    <p>
                        I'm a full-stack software engineer based in New York City with a
                        drive to learn and share new technologies and ideas.
                        I'm a full-stack software engineer based in New York City with a
                        drive to learn and share new technologies and ideas.
                    </p>
                    <img src="mebab.png" />
                </div>
                <div style={{ display: "flex", width: "50vw" }}>
                    <p>
                        I'm a full-stack software engineer based in New York City with a
                        drive to learn and share new technologies and ideas.
                        I'm a full-stack software engineer based in New York City with a
                        drive to learn and share new technologies and ideas.
                    </p>
                    <img src="mebab.png" />
                </div>
            </Flickity>
            <Footer />
        </div>
    )
}

export default Projects
