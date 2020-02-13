import React from 'react'
import { FaLinkedin, FaGithubSquare, FaMedium } from 'react-icons/fa'

const Footer = (props) => {
	return (
		<div className="footer-container fade-in mobile-hide">
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
	)
}

export default Footer
