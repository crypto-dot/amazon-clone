import React from 'react'
import './Order.css'
import moment from 'moment'
import CartItem from './CartItem'
import CurrencyFormat from 'react-currency-format'
function Order({ order }) {
    return (
        <div className="order">
            <div className="date_id">
                <p>{moment.unix(order.data.created).format("MMMM Do YYYY, h:mma")}</p>
                <p className="order_id">
                    <small><span className="order_id_header"> ORDER ID: </span> {order.id}</small>
                </p>
            </div>
            {order.data.basket.map(item => (
                <CartItem
                    id={new Date().getTime()}
                    title={item.title}
                    price={item.price}
                    image={item.image}
                    hideButton
                />
            ))}
            <CurrencyFormat
                renderText={(value) => (
                    <h3 className="order_total">Order Total: {value}</h3>
                )}
                decimalScale={2}
                value={order.data.amount / 100}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"$"}



            />
        </div>
    )
}

export default Order