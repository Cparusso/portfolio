import React from 'react'
import Footer from './Footer.js'

const About = () => {
    return (
        <div>
            <div className="banner-container" >
                <div className="banner-about fade-in" >
                    <h1 className="about-header" >Hi, I'm Charlie.</h1>
                    <p>
                        I'm a full-stack software engineer based in New York City. I graduated from Flatiron School in December of 2018 and have been working in an instructional role since.
                    </p>
                    <p>
                        I've worked directly with over 100 students, teaching them how to debug their code, overcome code challenges, and collaborate with other developers on creative and inventive projects with Javascript, React, Redux, Ruby, Rails and React Native.
                    </p>
                </div>
                <img className="mobile-hide picture-of-menobeard fade-in" src="menobeard.png" alt="charlie-crossed-arms-img"/>
            </div>
            <Footer />
        </div>
    );
}

export default About
