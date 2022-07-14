import React from 'react';
import amazonLogoSignIn from './images/amazonLogoSignIn.png'
import {Link} from 'react-router-dom';
import './Login.css';
function Login() {
    return (
        <div id='login'>
            <div id="loginContainer">
            <Link to='/'> <img alt="Amazon Logo" src={amazonLogoSignIn}/> </Link>
            <form>
                <fieldset id="loginFieldSet">
                <h1>Sign-In</h1>
                <label for="email"><strong>Email:</strong></label>
                <input type="email" name="email" id="email"/>
                <label for="password"><strong>Password:</strong></label>
                <input type="password" name="password" id="password"/>
                <input type="submit" value="Continue" />
                <p>By continuing, you agree to Amazon's <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">Conditions of Use</a> and <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"> Privacy Notice.</a></p>
                </fieldset>
            </form>
            <div id= "lowerHalf">
            <div id="divider">
            <p id="newUserText">New to Amazon?</p>
            </div>
            <button id="createAccount">Create your Amazon Account</button>
            </div>
            <footer>
                <p>© Crypto-dot</p>
            </footer>

            </div>
        </div>
    )
}

export default Login;