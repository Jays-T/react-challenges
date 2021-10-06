import React, { Component } from 'react'
import UserMessage from './user/UserMessage'
import UserData from './user/UserData'

export class NestingComponents extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             isLoaded: false,
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
            <div>
                <UserData isLoaded={this.state.isLoaded} />
                <UserMessage 
                    isLoggedIn={this.state.isLoggedIn}
                    handleSignInOut={this.handleSignInOut}
                />
            </div>
        )
    }
}

export default NestingComponents
