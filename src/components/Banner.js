import React, { Component } from 'react'
import { BrowserRouter as Router, Route, NavLink, Switch } from "react-router-dom";
// import { FaLinkedinIn, FaGithub, FaMediumM } from 'react-icons/fa'; // These have no squares around them
import { FaLinkedin, FaGithubSquare, FaMedium } from 'react-icons/fa';

class Banner extends Component {
	state = {
		mouseOver: false
	}

	handleMouseEnter = () => {
		this.setState({
			mouseOver: true
		})
	}

	handleMouseLeave = () => {
		this.setState({
			mouseOver: false
		})
	}

	render() {
		return (
			<div className="banner-container" >
				<div 
					onMouseEnter={() => this.handleMouseEnter()}
					onMouseLeave={() => this.handleMouseLeave()}
					style={{ opacity: this.state.mouseOver ? 0 : 1, display: this.state.mouseOver ? 'none' : 'flex' }}
					className="banner"
				>
					<h1 >
						charlie.
					</h1>
				</div>
				<div
					onMouseEnter={() => this.handleMouseEnter()}
					onMouseLeave={() => this.handleMouseLeave()}
					style={{ opacity: this.state.mouseOver ? 1 : 0, display: this.state.mouseOver ? 'flex' : 'none' }}
					className="banner"
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
				<img className="picture-of-me" src="jusme.png"/>
			</div>
		)
	}
}

export default Banner