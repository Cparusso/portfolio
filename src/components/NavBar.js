import React, { Component } from 'react'
import { BrowserRouter as Router, Route, NavLink, Switch } from "react-router-dom";
// import { MdEmail } from 'react-icons/md';

class NavBar extends Component {
	state = {
		selected: "home",
	}

	handleClick = (e) => {
		if (e.target.innerText) {
			this.setState({
				selected: e.target.innerText
			})
		} else {
			this.setState({
				selected: "home"
			})
		}
	}

  render() {
    return (
      <div className="navbar fade-in">
				<div className="nav-left" >
					<NavLink to="/" className="navbar-link" onClick={ this.handleClick } >
						<img className={this.state.selected === "home" ? "signature-invert" : "signature"} src="signature.png" />
					</NavLink>
				</div>
				<div className="nav-center" >
					<NavLink to="/projects" className={this.state.selected === "portfolio" ? "selected-nav" : "navbar-link"} onClick={this.handleClick} >
						portfolio
					</NavLink>
					<NavLink to="/about" className={this.state.selected === "about" ? "selected-nav" : "navbar-link"} onClick={this.handleClick} >
						about
					</NavLink>
					<a 
						href="https://drive.google.com/file/d/18-BvMGQThoh5jobPE5phGSw-WJMzS2wJ/view"
						className="navbar-link"
						target="blank"
					>
						resume
					</a>
				</div>
				<div className="nav-right" >
					<a href="mailto:hello@charlierusso.me" className="navbar-link" >
						contact
					</a>
				</div>
			</div>
    )
  }
}

export default NavBar