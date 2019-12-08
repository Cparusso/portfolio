import React, { Component } from 'react'
import { BrowserRouter as Router, Route, NavLink, Switch } from "react-router-dom";
// import { MdEmail } from 'react-icons/md';

class NavBar extends Component {
	state = {
		selected: "home",
 		menuOpen: false
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

		this.toggleMenu()
	}

	toggleMenu = () => {
 		this.setState((prevState) => ({
 			menuOpen: !prevState.menuOpen
 		}))
 	}


	render() {
		return (
			<div>
				<div className="mobile-hide">
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
								href="https://drive.google.com/file/d/1XvmtiSI8g1K7Ld4-eYBPXFxDur7z93B5/view"
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
						<div className="nav-menu desktop-hide" >
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
							<a href="mailto:hello@charlierusso.me" className="navbar-link" >
								contact
							</a>
						</div>
					</div>
				</div>
				<div className="desktop-hide">
					<button
						onClick={this.toggleMenu}
						className={this.state.menuOpen ? "active hamburger hamburger-cancel desktop-hide" : "hamburger hamburger-cancel desktop-hide"}
					>
						<span className="icon"></span>
					</button>
					<div className={this.state.menuOpen ? "nav-menu show-menu" : "nav-menu hide-menu"}>
						<div className="menu-col">
							<NavLink to="/" className={this.state.selected === "home" ? "selected-nav" : "navbar-link"} onClick={this.handleClick} >
								home
							</NavLink>
							<NavLink to="/projects" className={this.state.selected === "portfolio" ? "selected-nav" : "navbar-link"} onClick={this.handleClick} >
								portfolio
							</NavLink>
						</div>
						<div className="menu-col">
							<NavLink to="/about" className={this.state.selected === "about" ? "selected-nav" : "navbar-link"} onClick={this.handleClick} >
								about
							</NavLink>
							<a
								href="https://drive.google.com/file/d/18-BvMGQThoh5jobPE5phGSw-WJMzS2wJ/view"
								className="navbar-link"
								target="blank"
								onClick={this.handleClick}
								>
								resume
							</a>
						</div>
						<div className="menu-col">
							<a
								href="mailto:hello@charlierusso.me"
								className="navbar-link"
								onClick={this.handleClick}
							>
								contact
							</a>
						</div>
					</div>
				</div>
			</div>
		)
	}
}

export default NavBar

// Make the landing page lower
// make the about page lower
// center the second row on the menu
// add the hover animations to the project links

// import React, { Component } from 'react'
// import { BrowserRouter as NavLink } from "react-router-dom";
// // import { MdEmail } from 'react-icons/md';

// class NavBar extends Component {
// 	state = {
// 		selected: "home",
// 		menuOpen: false
// 	}

// 	handleClick = (e) => {
// 		if (e.target.innerText) {
// 			this.setState({
// 				selected: e.target.innerText
// 			})
// 		} else {
// 			this.setState({
// 				selected: "home"
// 			})
// 		}
// 	}

// 	toggleMenu = (e) => {
// 		this.setState((prevState) => ({
// 			menuOpen: !prevState.menuOpen
// 		}))

// 		e.target.classList.toggle('active')
// 		// e.target.classList.toggle("active")
// 	}

// 	render() {
// 		return (
// 			<div>
// 				<div className="nav-left" >
// 					<NavLink to="/" className="navbar-link" onClick={this.handleClick} >
// 						<img className={this.state.selected === "home" ? "signature-invert" : "signature"} src="signature.png" alt="signature-img" />
// 					</NavLink>
// 				</div>
// 				<div className="navbar fade-in">
// 					<div className="nav-center mobile-hide" >
// 						<NavLink to="/projects" className={this.state.selected === "portfolio" ? "selected-nav" : "navbar-link"} onClick={this.handleClick} >
// 							portfolio
// 					</NavLink>
// 						<NavLink to="/about" className={this.state.selected === "about" ? "selected-nav" : "navbar-link"} onClick={this.handleClick} >
// 							about
// 					</NavLink>
// 						<a
// 							href="https://drive.google.com/file/d/18-BvMGQThoh5jobPE5phGSw-WJMzS2wJ/view"
// 							className="navbar-link"
// 							target="blank"
// 						>
// 							resume
// 					</a>
// 					</div>
// 					<div className="mobile-hide" >
// 						<a href="mailto:hello@charlierusso.me" className="navbar-link" >
// 							contact
// 					</a>
// 					</div>
// 					<div className="nav-menu desktop-hide" >
// 						<NavLink to="/projects" className={this.state.selected === "portfolio" ? "selected-nav" : "navbar-link"} onClick={this.handleClick} >
// 							portfolio
// 					</NavLink>
// 						<NavLink to="/about" className={this.state.selected === "about" ? "selected-nav" : "navbar-link"} onClick={this.handleClick} >
// 							about
// 					</NavLink>
// 						<a
// 							href="https://drive.google.com/file/d/18-BvMGQThoh5jobPE5phGSw-WJMzS2wJ/view"
// 							className="navbar-link"
// 							target="blank"
// 						>
// 							resume
// 					</a>
// 						<a href="mailto:hello@charlierusso.me" className="navbar-link" >
// 							contact
// 					</a>
// 						<button onClick={(e) => this.toggleMenu(e)} className="hamburger hamburger-cancel desktop-hide">
// 							<span className="icon"></span>
// 						</button>
// 					</div>
// 				</div>
// 			</div>
// 		)
// 	}
// }

// export default NavBar
