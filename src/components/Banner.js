import React, { Component } from 'react'
import { BrowserRouter as Router, Route, NavLink, Switch } from "react-router-dom";

class Banner extends Component {
  state={
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
      <div 
        className="banner"
      >
        { this.state.mouseOver
					? <div onMouseLeave={() => this.handleMouseLeave()} className="banner-content">
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
          : <h1
              onMouseEnter={() => this.handleMouseEnter()}
            >
              charlie.
            </h1>
        }
        <hr className="banner-underline" />
      </div>
    )
  }
}

export default Banner