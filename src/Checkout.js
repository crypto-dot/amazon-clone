import React from 'react'
import StoreCard from './images/store-card.jpg';
import './Checkout.css';
import Subtotal from './Subtotal';
import { useStateValue } from './StateProvider';
import CartItem from './CartItem';
import FlipMove from 'react-flip-move';
import {useNavigate} from 'react-router-dom';

function Checkout() {
  const navigate = useNavigate();
  const [{basket, user}, dispatch] = useStateValue();
  const getHeaderText = () => {
    if(user) {
      return `${user.email},`;
    } 
    return 'Guest,'; 
  }
  let basketSorted = basket.sort(sortAsc);
  function sortAsc(basketItemA, basketItemB) {
      if(basketItemA.price < basketItemB.price) {
        return 1;
      } else if (basketItemA.price > basketItemB.price) {
        return -1;
      } return 0;
  };
  return (
    <div className= 'checkout'>
		<div className= 'checkoutLeft'>
            <div className='ad'><img alt="Store card ad" src={StoreCard}></img><p>Pay <span className='redAdText'>$46.50/month for 6 months</span> <strong>0% interest</strong> <small>(plus S&amp;H and text)</small> when you choose equal monthly payments at checkout</p></div>
            <div className='shoppingCart'>
                <div className="headerTitle">
                  <h1>Hello {getHeaderText()}</h1>
                  <h1>Your Shopping Cart</h1>
                  <h4> <span>Price </span></h4>
                </div>
                <div id="items">
                {basketSorted.map(basketItem => (
                  <FlipMove>
                  <CartItem
                  key = {new Date().getTime()}
                  keyID = {basketItem.keyID}
                  id = {basketItem.id}
                  title = {basketItem.title}
                  price = {basketItem.price}
                  image = {basketItem.image}
                  />
                  </FlipMove>
                ))}
                </div>
                <Subtotal/>
            </div>
        </div>
        <div className='checkoutRight'>
            <div className = "proceedToCheckout">
                <h1><Subtotal/></h1>
                <div className='giftOption'><input type='checkbox'></input><p>This order contains a gift</p></div>
                <button onClick={e=> navigate('/payment')} className='checkoutButton'>Proceed To Checkout</button>
            </div>
        </div>
    </div>
  )
}

export default Checkout
