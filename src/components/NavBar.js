import React, { useState } from 'react'
import { NavLink } from "react-router-dom";

const NavBar = () => {
	const [selected, setSelected] = useState("home")
	const [menuOpen, setMenuOpen] = useState(false)

	const handleClick = (e) => {
		if (e.target.innerText) {
			setSelected(e.target.innerText)
		} else {
			setSelected("home")
		}

		toggleMenu()
	}

	const toggleMenu = () => {
		setMenuOpen(!menuOpen)
 	}

	return (
		<div>
			<div className="mobile-hide">
				<div className="navbar fade-in">
					<div className="nav-left" >
						<NavLink to="/" className="navbar-link" onClick={ handleClick } >
							<img className={selected === "home" ? "signature-invert" : "signature"} src="signature.png" alt="Charlie Russo - signature"/>
						</NavLink>
					</div>
					<div className="nav-center" >
						<NavLink to="/projects" className={selected === "portfolio" ? "selected-nav" : "navbar-link"} onClick={ handleClick } >
							portfolio
						</NavLink>
						<NavLink to="/about" className={selected === "about" ? "selected-nav" : "navbar-link"} onClick={ handleClick } >
							about
						</NavLink>
						<a
							href="https://drive.google.com/file/d/1XvmtiSI8g1K7Ld4-eYBPXFxDur7z93B5/view?usp=sharing"
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
						<NavLink to="/projects" className={selected === "portfolio" ? "selected-nav" : "navbar-link"} onClick={ handleClick } >
							portfolio
						</NavLink>
						<NavLink to="/about" className={selected === "about" ? "selected-nav" : "navbar-link"} onClick={ handleClick } >
							about
						</NavLink>
						<a
							href="https://drive.google.com/file/d/1XvmtiSI8g1K7Ld4-eYBPXFxDur7z93B5/view?usp=sharing"
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
					onClick={ toggleMenu }
					className={menuOpen ? "active hamburger hamburger-cancel desktop-hide" : "hamburger hamburger-cancel desktop-hide"}
				>
					<span className="icon"></span>
				</button>
				<div className={menuOpen ? "nav-menu show-menu" : "nav-menu hide-menu"}>
					<div className="menu-col">
						<NavLink to="/" className={selected === "home" ? "selected-nav" : "navbar-link"} onClick={handleClick} >
							home
						</NavLink>
						<NavLink to="/projects" className={selected === "portfolio" ? "selected-nav" : "navbar-link"} onClick={ handleClick } >
							portfolio
						</NavLink>
					</div>
					<div className="menu-col">
						<NavLink to="/about" className={selected === "about" ? "selected-nav" : "navbar-link"} onClick={ handleClick } >
							about
						</NavLink>
						<a
							href="https://drive.google.com/file/d/1XvmtiSI8g1K7Ld4-eYBPXFxDur7z93B5/view?usp=sharing"
							className="navbar-link"
							target="blank"
							onClick={ handleClick }
							>
							resume
						</a>
					</div>
					<div className="menu-col">
						<a
							href="mailto:hello@charlierusso.me"
							className="navbar-link"
							onClick={ handleClick }
						>
							contact
						</a>
					</div>
				</div>
			</div>
		</div>
	)
}

export default NavBar
