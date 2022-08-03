import React, { useState } from 'react';
import amazonLogoSignIn from './images/amazonLogoSignIn.png'
import { Link, useNavigate } from 'react-router-dom';
import './Login.css';
import { auth } from './firebase';
function Login() {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const signIn = (e) => {
        e.preventDefault();
        auth.signInWithEmailAndPassword(email, password)
            .then(auth => {
                navigate('/');
            })
            .catch(error => alert(error.message));
    }
    const register = (e) => {
        auth.createUserWithEmailAndPassword(
            email, password
        ).then((authObj) => {
            console.log(authObj);
            if (authObj) {
                navigate('/');
            }
        }).catch(error => alert(error.message));
    }

    return (
        <div id='login'>
            <div id="loginContainer">
                <Link to='/'> <img alt="Amazon Logo" src={amazonLogoSignIn} /> </Link>
                <form>
                    <fieldset id="loginFieldSet">
                        <h1>Sign-In</h1>
                        <label htmlFor="email"><strong>Email:</strong></label>
                        <input type="email" value={email} onChange={e => setEmail(e.target.value)} name="email" id="email" />
                        <label htmlFor="password"><strong>Password:</strong></label>
                        <input type="password" value={password} onChange={e => setPassword(e.target.value)} name="password" id="password" />
                        <input onClick={signIn} type="submit" value="Continue" />
                        <p>By continuing, you agree to Amazon's <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">Conditions of Use</a> and <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"> Privacy Notice.</a></p>
                    </fieldset>
                </form>
                <div id="lowerHalf">
                    <div id="divider">
                        <p id="newUserText">New to Amazon?</p>
                    </div>
                    <button onClick={register} id="createAccount">Create your Amazon Account</button>
                </div>
                <footer>
                    <p>© Crypto-dot</p>
                </footer>

            </div>
        </div>
    )
}

export default Login;