import "./HeroProjectStyle.css";

import React, { Component } from 'react'

class HeroProject extends Component {
    render() {
        return (
            <div className="hero-project-img">
                <div className="heading">
                    <h1 className="heading-txt">{this.props.heading}</h1>
                    <p>{this.props.text}</p>
                </div>
            </div>
        )
    }
}

export default HeroProject