import React from 'react'
import Project from '../components/Project.js'
import Footer from '../components/Footer.js'

import { FaLinkedin, FaGithubSquare, FaMedium } from 'react-icons/fa'

function Projects() {
    return (
        <div>
            <div>
                <Project />
                <Project />
                <Project />
            </div>
            <Footer />
        </div>
    )
}

export default Projects
