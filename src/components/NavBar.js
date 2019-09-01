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
					<NavLink to="/about" className="navbar-link" >
						resume.
					</NavLink>
				</div>
				<div className="nav-right" >
					<NavLink to="/projects" className="navbar-link" >
						contact.
					</NavLink>
				</div>
			</div>
    )
  }
}

export default NavBar