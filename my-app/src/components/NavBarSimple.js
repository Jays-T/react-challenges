import React, { Component } from "react";
import css from './css/NavBarSimple.module.css';

class NavBarSimple extends Component {
    constructor(props) {
        super(props);
        this.state = {
            message: "Hello, guest!",
            buttonText: "Log In"
        };
        // for larger applications binding event to this is better for performance
        // this.handleClick = this.handleClick.bind(this)
    }

    handleClick() {
        this.setState((prevState) => {
            return {
                message: prevState.message === `Hello, guest!` ? `Welcome back, user!`: `Hello, guest!`,
                buttonText: prevState.buttonText === `Log In` ? `Log Out` : `Log In`
            }
        }, () => {
            console.log('current state: ', this.state.message)
        })
        console.log('previous state: ', this.state.message)
    }

    render() {
        return (
            <div className = {css.NavBar}>
                <h1>My Gallery</h1>
                <span className="margin-right">{this.state.message}</span>
                <button onClick={() => this.handleClick()}>{this.state.buttonText}</button>
                {/* below reference to binding event to 'this' in constructor */}
                {/* <button onClick={this.handleClick}>{this.state.buttonText}</button> */}
            </div>
        )
    }
}

export default NavBarSimple;