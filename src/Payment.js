import React from 'react';
import PlaceOrder from './images/PaymentPlaceOrder.gif';
import { useStateValue } from './StateProvider';
import CartItem from './CartItem';
import FlipMove from 'react-flip-move';
import './Payment.css';
function Payment() {
    const [{ basket, user }] = useStateValue();
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
    function creditCardInputFormatter(e) {
        if ((new RegExp('[0-9]').test(e.key))) {
            if (e.target.value.match(new RegExp(/[0-9]+/g)) == null) {
                return;
            }
            let CCNumber = e.target.value.match(new RegExp(/[0-9]+/g)).join('');
            if (CCNumber.length > 16) {
                CCNumber = CCNumber.slice(0, 16);
            }
            if (CCNumber.length >= 12) {
                CCNumber = CCNumber.slice(0, 4) + ' ' + CCNumber.slice(4, 8) + ' ' + CCNumber.slice(8, 12) + ' ' + CCNumber.slice(12);
            } else if (CCNumber.length >= 8) {
                CCNumber = CCNumber.slice(0, 4) + ' ' + CCNumber.slice(4, 8) + ' ' + CCNumber.slice(8);

            } else if (CCNumber.length >= 4) {
                CCNumber = CCNumber.slice(0, 4) + ' ' + CCNumber.slice(4);
            }
            e.target.value = CCNumber;
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
    function expiryFormatter(e) {
        if ((new RegExp('[0-9]').test(e.key))) {
            if (e.target.value.match(new RegExp(/[0-9]+/g)) == null) {
                return;
            }
            let expiryDate = e.target.value.match(new RegExp(/[0-9]+/g)).join('');
            if (expiryDate.length > 4) {
                expiryDate = expiryDate.slice(0, 4);
            }
            if (expiryDate.length >= 2) {
                expiryDate = expiryDate.slice(0, 2) + " / " + expiryDate.slice(2);
            }
            e.target.value = expiryDate
        }
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
    function taxAmount() {
        return new Number((basketReducer() * .0625).toFixed(2));
    }
    return (
        <div id="pageContainer">
            <img src={PlaceOrder} />
            <h1 id="paymentTitle">Review Your Order</h1>
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
                                <label className="paymentInputLabel" htmlFor='ccn'>Credit Card</label>
                                <input onKeyDown={validInput} onKeyUp={creditCardInputFormatter} id='ccn' autoComplete="cc-number" maxLength="19" minLength="13" placeholder="xxxx xxxx xxxx xxxx" />
                                <div id="ccvMonth">
                                    <div>
                                        <label htmlFor="ccv">CCV</label>
                                        <input onKeyDown={validInput} size="5" id="ccv" type="text" maxLength="5" />
                                    </div>
                                    <div>
                                        <label htmlFor="expiry">Expiry date</label>
                                        <input placeholder="MM / YY" onKeyDown={validInput} onKeyUp={expiryFormatter} size="5" id="expiry" type="text" maxLength="7" />
                                    </div>
                                </div>
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
                    <button>Place your order</button>
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
        </div>

    )
}
export default Payment