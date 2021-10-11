import React, { Component } from 'react';
import NavBarForm from './user/NavBarForm';
import UserData from './user/UserData';
import css from './css/NavBarForm.module.css';

export class NavBar extends Component {
    constructor(props) {
        super(props)

        this.state = {
            isLoggedIn: false
        }
    }

    handleSignInOut = () => {
        this.setState(prevState => {
            return {
                isLoggedIn: prevState.isLoggedIn === true ? false : true
            }
        })
        console.log(this);
    };

    render() {
        return (
            <div className={css.NavBar}>
                <h1>My Gallery</h1>

                <NavBarForm 
                    isLoggedIn={this.state.isLoggedIn}
                    handleSignInOut={this.handleSignInOut}
                />
            </div>
        )
    }
}

export default NavBar

