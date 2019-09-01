import React, { Component } from 'react'
import { BrowserRouter as Router, Route, NavLink, Switch } from "react-router-dom";

class NavBar extends Component {

  render() {
    return (
      <div className="navbar">
				<div className="nav-left" >
					<NavLink to="/" className="navbar-link" >
						home.
					</NavLink>
				</div>
				<div className="nav-center" >
					<NavLink to="/projects" className="navbar-link" >
						portfolio.
					</NavLink>
					<NavLink to="/about" className="navbar-link" >
						about.
					</NavLink>
				<a 
					href="https://drive.google.com/file/d/18-BvMGQThoh5jobPE5phGSw-WJMzS2wJ/view"
					className="navbar-link"
					target="blank"
				>
					resume.
				</a>
				</div>
				<div className="nav-right" >
					<a href="mailto:hello@charlierusso.me" className="navbar-link" >contact.</a>
				</div>
			</div>
    )
  }
}

export default NavBar