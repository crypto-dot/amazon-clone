import React from 'react';
import PlaceOrder from './images/PaymentPlaceOrder.gif';
import './Payment.css';
function Payment() {
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
            } else if (phoneNumber.length >= 6) {
                phoneNumber = '(' + phoneNumber.slice(0, 3) + ')-' + phoneNumber.slice(3, 6) + '-' + phoneNumber.slice(6);
            } else if (phoneNumber.length >= 3) {
                phoneNumber = '(' + phoneNumber.slice(0, 3) + ')-' + phoneNumber.slice(3);
            } else if (phoneNumber.length >= 1) {
                phoneNumber = `(` + phoneNumber;
            }
            e.target.value = phoneNumber;
        }
    }
    return (
        <>
            <img src={PlaceOrder} />
            <h1 id="paymentTitle">Review Your Order</h1>
            <div className="orderContainer">
                <div className="orderLeft">
                    <div className='billingInfo'>
                        <div className='billingInfoLeft'>
                            <h2>Shipping address <a href='https://www.youtube.com/watch?v=dQw4w9WgXcQ'>Change</a></h2>
                            <p>@gmail.com</p>
                            <p>525 Vernet St</p>
                            <p>Richardson, TX, 75080-3432</p>
                            <p>United States</p>
                            <div> <label className="paymentInputLabel" for="paymentPhoneNumber"> Phone: </label><input id="paymentPhoneNumber" onKeyDown={validInput} onKeyUp={phoneNumberInputFormatter} placeholder="(xxx)-xxx-xxxx" type='tel' maxLength="14" /></div>
                            <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">Add delivery Instructions</a>
                            <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">Ship to multiple addresses</a>
                        </div>
                        <div className="paymentMethod">
                            <h2>Payment method</h2>
                            <label className="paymentInputLabel" for='ccn'>Credit Card</label>
                            <input onKeyDown={validInput} onKeyUp={creditCardInputFormatter} id='ccn' autoComplete="cc-number" maxLength="19" minLength="13" placeholder="xxxx xxxx xxxx xxxx" />

                        </div>
                    </div>

                </div>
                <div className="orderRight">
                    <button>Place your order</button>
                    <p>By placing your order you agree to Amazon's privacy notice and conditions of uses</p>
                    <h4>Order summary</h4>
                    <div className='orderSummary'>
                        <div><span>Items (0):</span> <span>$0.00</span> </div>
                        <div className="shippingAndHandling"><span>Shipping &amp; handling:</span> <span>$0.00</span> </div>
                        <div><span>Total before tax:</span> <span>$0.00</span></div>
                        <div className='taxToBeCollected'><span>Estimated tax to be collected:</span> <span>$0.00</span></div>
                        <div className="orderTotalContainer"><h1 className='orderTotal'>Order Total:</h1><h1>$0.00</h1></div>
                    </div>
                </div>
            </div>
        </>

    )
}
export default Payment