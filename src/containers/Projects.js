import React from 'react'
// import Project from '../components/Project.js'
import Footer from '../components/Footer.js'
import Flickity from 'react-flickity-component'

function Projects() {

    const flickityOptions = {
        initialIndex: 0,
        autoPlay: 15000,
        prevNextButtons: false,
    }

    return (
        <div className="fade-in projects">
            <Flickity
                className={'carousel'} // default ''
                elementType={'div'} // default 'div'
                options={flickityOptions} // takes flickity options {}
                disableImagesLoaded={false} // default false
                reloadOnUpdate // default false
                static // default false
        >
            <div className="project-section" >
                <div>
                    <h1 className="project-title">Blog Timer</h1>
                    <p>
                        Blog Timer is a simple timer app built using react.
                        Unlike most timers I've used, this timer displays
                        the updating time up in the title of the tab so that
                        you can have the timer running in the background
                        while you are presenting something and see how much
                        time you have left without having to switch tabs.
                    </p>
                    <div className="project-links">
                        <a href="http://blogtimer.herokuapp.com/" target="blank">Hosted Site</a>
                        <div>|</div>
                        <a href="https://github.com/Cparusso/Blog-Timer" target="blank">Frontend Repo</a>
                    </div>
                </div>
                <div className="project-demo">
                    <img src="blog-timer.gif" alt="blog timer project demo gif"/>
                </div>
            </div>
            <div className="project-section">
                <div>
                    <h1 className="project-title">Headcount</h1>
                    <p>
                        Headcount would act as a platform for non-profits and
                        other small organizations to promote their
                        volunteer led events. A user can sign up,
                        view local upcoming events that need volunteers,
                        and commit to making a difference.
                    </p>
                    <div className="project-links">
                        <a href="https://github.com/Cparusso/headcount-react-frontend" target="blank">Frontend Repo</a>
                        <div>|</div>
                        <a href="https://github.com/Cparusso/Headcount" target="blank">Backend Repo</a>
                    </div>
                </div>
                <div className="project-demo">
                    <img src="headcount.gif" alt="headcount project demo gif"/>
                </div>
            </div>
            <div className="project-section" >
                <div>
                    <h1 className="project-title">Parsed</h1>
                    <p>
                        Parsed is a data visualization tool that can
                        help non-developers parse through JSON
                        api data more easily. Simply enter a URL to a JSON api,
                        select your endpoints and let Parsed do the rest.
                    </p>
                    <div className="project-links">
                        <a href="https://parsed-app.herokuapp.com/" target="blank">Hosted Site</a>
                        <div>|</div>
                        <a href="https://github.com/Cparusso/parsed" target="blank">Frontend Repo</a>
                    </div>
                </div>
                <div className="project-demo">
                    <img src="parsed.gif" alt="parsed project demo gif"/>
                </div>
            </div>
            </Flickity>
            <Footer />
        </div>
    )
}

export default Projects
