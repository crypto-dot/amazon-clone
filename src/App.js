
import './App.css';
import Home from './Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Checkout from './Checkout';
import React, { useEffect } from 'react';
import Login from './Login';
import Header from './Header';
import Payment from './Payment';
import { auth } from './firebase';
import { useStateValue } from './StateProvider';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';

const promise = loadStripe("pk_test_51L2e6mIrIWnrxOHifzcAqvQ2oIKAQSwgQbIubxpxsec8u2e8kX0su659GiGUEV67i88JLhAsMlvdNJK5kUqNivMf00YkpnMPPQ");


function App() {
  const [{ }, dispatch] = useStateValue();

  useEffect(() => {
    auth.onAuthStateChanged(authUser => {
      if (authUser) {
        dispatch({
          type: 'SET_USER',
          user: authUser
        })
      } else {
        dispatch({
          type: 'SET_USER',
          user: null
        })

      }

    }

    );
  }, [])
  return (
    <Router>
      <Routes>
        <Route path='/login' element={<><Login /></>}> </Route>
        <Route path='/checkout' element={<div className="checkoutContainer"><Header /><Checkout /></div>}></Route>
        <Route path='/' element={<div className="homeContainer"><Header /><Home /></div>}></Route>
        <Route path='/payment' element={<div className="paymentContainer"><Elements stripe={promise} > <Payment /> </Elements></div>}></Route>
      </Routes>
    </Router>
  );
}

export default App;
