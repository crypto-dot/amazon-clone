import React from 'react';
import CurrencyFormat from 'react-currency-format';
import { useStateValue } from './StateProvider';
function Subtotal() {
    const [{basket}, dispatch] = useStateValue();
    function totalBasketPrice() {
        const [{basket}, dispatch] = useStateValue();
        return basket.reduce((prevVal , objVal) => prevVal + objVal.price, 0);
    }

  return (

    <CurrencyFormat 
    renderText= { (value) =>
    (
    <div><div class="subtotal">Subtotal ( {basket.length} item(s) ):  <strong>{value}</strong></div></div>
    )
    }
    decimalScale = {2}
    value = {totalBasketPrice()}
    displayType = {'text'}
    thousandSeparator = {true}
    prefix = {'$'}
    />
  )
}

export default Subtotal