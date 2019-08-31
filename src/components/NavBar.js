import React, { Component } from 'react'
import { BrowserRouter as Router, Route, NavLink, Switch } from "react-router-dom";

class NavBar extends Component {

  render() {
    return (
      <div className="navbar">
				<NavLink
					to="/"
					className="navbar-link"
				>
					home.
				</NavLink>
				<NavLink
					to="/about"
					className="navbar-link"
				>
					about.
				</NavLink>
				<NavLink
					to="/projects"
					className="navbar-link"
				>
					projects.
				</NavLink>
			</div> 
    )
  }
}

export default NavBar