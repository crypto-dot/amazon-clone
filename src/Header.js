import React from 'react'
import './Header.css'
import AmazonLogo from './images/AmazonLogo2.png';
import locationImg from './images/LogoLocation.png';
import cart from './images/cart.png';
import { Link } from 'react-router-dom';
import { useStateValue } from './StateProvider';
import { auth } from './firebase';

function leftNav() {
    return (
        <div className='navLeft'>
            <Link to='/'>
                <div className='headerHomeButton'>  <img alt="Amazon logo" width='100px' src={AmazonLogo} /> </div>
            </Link>
            <div className='headerLocationButton'> <img alt="location icon" width='18px' height='18px' src={locationImg} /> <div> <div> <h1>Hello</h1> </div>
                <h2>Select your address</h2> </div>
            </div>
        </div>
    );
}

function searchBar() {
    return (
        <div className='navMiddle'>
            <form>
                <input type='text' name='search'></input> <input type='submit' value=''></input>
            </form>
        </div>
    );
}

function rightNav() {
    const [{ basket, user }] = useStateValue();

    const headerUserText = () => {
        if (user) {
            return (
                <div onClick={userAuthentication} className='headerButtonAdjusted'>  <div> <div> <h1>Hello, {user.email}</h1> </div>
                    <h2>Sign Out</h2> </div> </div>
            );
        }
        return (<div className='headerButton'>  <div> <div> <h1>Hello, Guest Sign in</h1> </div>
            <h2>Accounts &amp; lists <span className='caret'></span> </h2> </div> </div>);
    };

    const userAuthentication = () => {
        if (user) {
            auth.signOut();
        }
    }

    return (
        <div className='navRight'>
            <Link to={!user && "/login"}>
                {headerUserText()}
            </Link>
            <div className='headerButton'> <div> <div> <h1>Returns</h1> </div>
                <h2>&amp; Orders</h2> </div>
            </div>

            <Link to="/checkout">
                <div className='headerButton cartButton'>
                    <div className='cartWrapper'>
                        <span className='cartCount'>{basket.length}</span>
                        <img alt="cart icon" height='30px' src={cart} />
                    </div>
                    <h2>Cart</h2>
                </div>
            </Link>
        </div>
    );
}

function Header(props) {
    return (
        <header>
            {leftNav()} {searchBar()} {rightNav()}
        </header>
    )
}

export default Header