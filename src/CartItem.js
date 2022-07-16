import React, { forwardRef } from 'react';
import './CartItem.css';
import CurrencyFormat from 'react-currency-format';
import { useStateValue } from './StateProvider';
const CartItem = forwardRef( ({keyID, id,image,title,price}, ref) => {
  const [{}, dispatch] = useStateValue();
  const removeFromBasket = () => {
    dispatch(
      {
        type: 'REMOVE_FROM_BASKET',
        keyID: keyID
      }
    )
  };

  return (
    
    <div ref={ref} className = 'cartItem'>
      <div className='imgContainer'><img alt = {title}src = {image}></img></div>
      <h1 className='cartItemTitle'>{title}</h1>
      <CurrencyFormat renderText = { (value) => (
         <div className="cartItemPrice"> <div>{value}</div> <button onClick= {removeFromBasket}>Remove Item</button></div>
      )
      }
      value = {price}
      decimalScale = {2}
      displayType = 'text'
      thousandSeparator = 'true'
      prefix = '$'
       />
    </div>
  );
}
)

export default CartItem