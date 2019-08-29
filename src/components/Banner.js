import React, { Component } from 'react'

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
            <div
                className="banner"
            >
                {this.state.mouseOver
                    ? <h1 href="https://www.linkedin.com/in/charlieprusso/" onMouseLeave={() => this.handleMouseLeave()}>linkedin</h1>
                    : <h1 onMouseEnter={() => this.handleMouseEnter()}>charlie.</h1>
                }
                <hr className="bannerUnderline" style={{ width: '200px' }} />
            </div>
        )
    }
}

export default Banner