import React, { Component } from 'react'
import { BrowserRouter as Router, Route, NavLink, Switch } from "react-router-dom";

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
					<h1>
						<a className="navbar-link" href="https://www.linkedin.com/in/charlieprusso/" target="blank" >linkedin.</a>
					</h1>
					<h1>
						<a className="navbar-link" href="https://www.github.com/cparusso/" target="blank" >github.</a>
					</h1>
					<h1>
						<a className="navbar-link" href="https://medium.com/@cparusso" target="blank" >medium.</a>
					</h1>
				</div>
			</div>
		)
	}
}

export default Banner