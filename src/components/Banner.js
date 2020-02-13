import React from 'react'
import { FaLinkedin, FaGithubSquare, FaMedium } from 'react-icons/fa';

const Banner = () => {
	return (
		<div className="banner-container" >
			<div style={{display: 'flex', flexDirection: 'column'}} className="banner">
				<div
					className="slow-fade-in"
					>
					<h1 className="big-name">
						charlie.
					</h1>
				</div>
				<div className="landing-icons slow-fade-in" >
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
			<img className="mobile-hide picture-of-me fade-in" src="jusme.png" alt="charlie-img"/>
		</div>
	)
}

export default Banner
