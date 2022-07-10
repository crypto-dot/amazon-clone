import React from 'react'
import StoreCard from './images/store-card.jpg';
import './Checkout.css';

function Checkout() {
  return (
    <div className= 'checkout'>
		<div className= 'checkoutLeft'>
            <div className='ad'><img src={StoreCard}></img><p>Pay <span className='redAdText'>$46.50/month for 6 months</span> <strong>0% interest</strong> <small>(plus S&amp;H and text)</small> when you choose equal monthly payments at checkout</p></div>
            <div className='shoppingCart'>
                <div class="headerTitle">
                  <h1>Shopping Cart</h1>
                  <div>Price</div>
                </div>
                <div className='cartItems'>
                </div>
                <div><div class="subtotal">Subtotal (0 item): <strong>$0</strong></div></div>
            </div>
        </div>
        <div className='checkoutRight'>
            <div className = "proceedToCheckout">
                <h1>No Items selected</h1>
                <div className='giftOption'><input type='checkbox'></input><p>This order contains a gift</p></div>
                <button className='checkoutButton'>Proceed To Checkout</button>
            </div>
        </div>
    </div>
  )
}

export default Checkout
