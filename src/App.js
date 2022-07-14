
import './App.css';
import Home from './Home';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Checkout from './Checkout';
import React, { Fragment } from 'react';
import Login from './Login';
import Header from './Header';
function App() {
  return (
    // BEM
    <Router>
      <Routes>
    <Route path='/login' element={<><Login/></>}> </Route>
    <Route path='/checkout' element={<div className="checkoutContainer"><Header/><Checkout/></div>}></Route>
    <Route path='/' element = {<div className="homeContainer"><Header/><Home/></div>}></Route>
     </Routes>
    </Router>
    );
}

export default App;
