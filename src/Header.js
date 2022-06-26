import React from 'react'
import './Header.css'
import AmazonLogo from './images/AmazonLogo2.png';
import locationImg from './images/LogoLocation.png';
import cart from './images/cart.png';
function leftNav () {
    return (
        <div className = 'navLeft'>
        <div className= 'headerHomeButton'>  <img width = '100px'src = {AmazonLogo} /> </div>
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
    return (
<div className = 'navRight'>
<div className = 'headerButton'>  <div> <div> <h1>Hello, sign in</h1> </div>
<h2>Accounts &amp; lists <span className= 'caret'></span> </h2> </div>
</div>
<div className = 'headerButton'> <div> <div> <h1>Returns</h1> </div>
     <h2>&amp; Orders</h2> </div>
     </div>
<div className = 'headerButton'> 
    <img height = '30px' src= {cart} />
    <h2>Cart</h2>
    </div> 

</div>
    );
}


function Header() {
  return (
      <header>
          {leftNav()} {searchBar()} {rightNav()}
      </header>
  )
}

export default Header