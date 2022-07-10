import React from 'react'
import './Header.css'
import AmazonLogo from './images/AmazonLogo2.png';
import locationImg from './images/LogoLocation.png';
import cart from './images/cart.png';
import {Link} from 'react-router-dom';
import { useStateValue } from './StateProvider';
function leftNav () {
    return (
        <div className = 'navLeft'>
        <Link to = '/'>
            <div className= 'headerHomeButton'>  <img width = '100px'src = {AmazonLogo} /> </div>
        </Link>
     <div className = 'headerLocationButton'> <img width = '18px' height = '18px' src= {locationImg} /> <div> <div> <h1>Hello</h1> </div>
     <h2>Select your address</h2> </div>
     </div>
     </div>
    );
}

function searchBar () { 
    return (
<div className = 'navMiddle'>
<form>
    <input type='text' name = 'search'></input> <input type='submit' value= ''></input>
</form>
</div>
    );
}

function rightNav () {
    const [{basket},dispatch] = useStateValue();
    return (
<div className = 'navRight'>
<div className = 'headerButton'>  <div> <div> <h1>Hello, sign in</h1> </div>
<h2>Accounts &amp; lists <span className= 'caret'></span> </h2> </div>
</div>
<div className = 'headerButton'> <div> <div> <h1>Returns</h1> </div>
     <h2>&amp; Orders</h2> </div>
     </div>

    <Link to="/checkout">
        <div className = 'headerButton cartButton'>
            <div className = 'cartWrapper'>
            <span className= 'cartCount'>{basket.length}</span>
                <img height = '30px' src= {cart} />
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