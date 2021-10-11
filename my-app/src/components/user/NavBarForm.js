import React from 'react'

function NavBarForm(props) {
    return (
        <div>
            {props.isLoggedIn ? (
                    <div>
                        <form>
                            <label for="username">Username: </label>
                            <input name="username" placeholder="username" id="username" type="text" required></input>
                            <label for="password">Password: </label>
                            <input name="password" placeholder="password" id="password" type="password" required></input>
                        <button onClick={props.handleSignInOut}>Submit</button>
                        </form>
                    </div>
                ) : (
                    <div>
                        <button onClick={props.handleSignInOut}>Login</button>
                    </div>
                )}
        </div>
    )
}

export default NavBarForm
