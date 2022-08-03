import React, { useEffect, useState } from 'react';
import PlaceOrder from './images/PaymentPlaceOrder.gif';
import { useStateValue } from './StateProvider';
import CartItem from './CartItem';
import FlipMove from 'react-flip-move';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { useNavigate } from 'react-router';
import axios from './axios';
import './Payment.css';
import { db } from './firebase';
function Payment() {
    const [{ basket, user }] = useStateValue();

    const navigate = useNavigate();

    const stripe = useStripe();
    const elements = useElements();

    const [orders, setOrders] = useState([]);
    const [error, setError] = useState(null);
    const [disabled, setDisabled] = useState(true);
    const [succeeded, setSucceeded] = useState(false);
    const [processing, setProcessing] = useState("");
    const [clientSecret, setClientSecret] = useState(true);

    useEffect(() => {
        (async () => {
            const response = await axios(
                {
                    method: "POST",
                    url: `/payments/create?total=${getBasketTotal() * 100}`
                });
            setClientSecret(response.data.clientSecret);
        })();
    }, [basket]);

    function getHeader() {
        if (user) {
            return (
                <span>{user.email}</span>
            )
        } else {
            return (
                <input minLength="3" type="email" placeholder="Enter your email" />
            )
        }
    }
    function validInput(e) {
        if (!(new RegExp('[0-9]').test(e.key)) && e.key !== "Backspace" && e.key !== "ArrowRight" && e.key !== "ArrowLeft") {
            console.log(e.key);
            e.preventDefault();
        }
    }
    function phoneNumberInputFormatter(e) {
        if ((new RegExp('[0-9]').test(e.key))) {
            if (e.target.value.match(new RegExp(/[0-9]+/g)) == null) {
                return;
            }
            let phoneNumber = e.target.value.match(new RegExp(/[0-9]+/g)).join('');
            if (phoneNumber.length > 10) {
                phoneNumber = phoneNumber.slice(0, 10);
            }
            if (phoneNumber.length >= 6) {
                phoneNumber = '(' + phoneNumber.slice(0, 3) + ')-' + phoneNumber.slice(3, 6) + '-' + phoneNumber.slice(6);
            } else if (phoneNumber.length >= 3) {
                phoneNumber = '(' + phoneNumber.slice(0, 3) + ')-' + phoneNumber.slice(3);
            } else if (phoneNumber.length >= 1) {
                phoneNumber = `(` + phoneNumber;
            }
            e.target.value = phoneNumber;
        }
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        setProcessing(true);

        const payload = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: elements.getElement(CardElement)
            }
        }).then(({ paymentIntent }) => {
            db.collection('users')
                .doc(user.uid)
                .collection('orders')
                .doc(paymentIntent.id)
                .set(
                    {
                        basket: basket,
                        amount: paymentIntent.amount,
                        created: paymentIntent.created
                    }
                );
            setSucceeded(true);
            setError(null);
            setProcessing(false);
            navigate('/orders', { replace: true });
        })
    }
    const handleChange = e => {
        setDisabled(e.empty);
        setError(e.error ? e.error.message : '');
    }
    const getBasketTotal = () => {
        return (new Number(basketReducer() * .0625) + new Number(basketReducer()) + new Number(basket.length * 1.25)).toFixed(2);
    }
    let basketSorted = basket.sort(sortAsc);
    function sortAsc(basketItemA, basketItemB) {
        if (basketItemA.price < basketItemB.price) {
            return 1;
        } else if (basketItemA.price > basketItemB.price) {
            return -1;
        } return 0;
    };
    function basketReducer() {
        return basket.reduce((prevVal, basketObj) => prevVal + basketObj.price, 0);
    }
    return (
        <div id="pageContainer">
            <img src={PlaceOrder} />
            <h1 id="paymentTitle">Review Your Order</h1>
            {error && <div className="errorHandling">{error}</div>}
            <div className="orderContainer">
                <div className="orderLeft">
                    <div className='billingInfo'>
                        <div className='billingInfoLeft'>
                            <h2>Shipping address <a href='https://www.youtube.com/watch?v=dQw4w9WgXcQ'>Change</a></h2>
                            <p>{getHeader()}</p>
                            <p>525 Vernet St</p>
                            <p>Richardson, TX, 75080-3432</p>
                            <p>United States</p>
                            <div> <label className="paymentInputLabel" htmlFor="paymentPhoneNumber"> Phone: </label><input id="paymentPhoneNumber" onKeyDown={validInput} onKeyUp={phoneNumberInputFormatter} placeholder="(xxx)-xxx-xxxx" type='tel' maxLength="14" /></div>
                            <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">Add delivery Instructions</a>
                            <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">Ship to multiple addresses</a>
                        </div>
                        <div className="paymentMethod">
                            <div>
                                <h2>Payment method</h2>
                                <form id="paymentForm" onSubmit={handleSubmit}>
                                    <CardElement onChange={handleChange} />
                                </form>
                            </div>
                            <div id="billingAddress">
                                <h2>Billing address <a href='https://www.youtube.com/watch?v=dQw4w9WgXcQ'>Change</a></h2>
                                <p>{getHeader()}</p>
                                <p>525 Vernet St</p>
                                <p>Richardson, TX, 75080-3432</p>
                                <p>United States</p>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="orderRight">
                    <button disabled={processing || disabled || succeeded || basket.length === 0} form="paymentForm" type="submit"> {processing ? "Processing" : "Place your order"}</button>
                    <p>By placing your order you agree to Amazon's privacy notice and conditions of uses</p>
                    <h4>Order summary</h4>
                    <div className='orderSummary'>
                        <div><span>Items ({basket.length}):</span> <span>${basketReducer().toFixed(2)}</span> </div>
                        <div className="shippingAndHandling"><span>Shipping &amp; handling:</span> <span>${(basket.length * 1.25).toFixed(2)}</span> </div>
                        <div><span>Total before tax:</span> <span>${basketReducer().toFixed(2)}</span></div>
                        <div className='taxToBeCollected'><span>Estimated tax to be collected:</span> <span>${(basketReducer() * .0625).toFixed(2)}</span></div>
                        <div className="orderTotalContainer"><h1 className='orderTotal'>Order Total:</h1><h1>${(new Number(basketReducer() * .0625) + new Number(basketReducer()) + new Number(basket.length * 1.25)).toFixed(2)}</h1></div>
                    </div>
                </div>
                <div id="itemsForPurchase">{basketSorted.map(basketItem =>
                    <FlipMove>
                        <CartItem
                            key={new Date().getTime()}
                            keyID={basketItem.keyID}
                            id={basketItem.id}
                            title={basketItem.title}
                            price={basketItem.price}
                            image={basketItem.image}
                        />
                    </FlipMove>
                )}</div>
            </div>
        </div >

    )
}
export default Payment