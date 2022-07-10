
import './App.css';
import Header from './Header';
import Home from './Home';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Checkout from './Checkout';
import React from 'react';
function App() {
  return (
    // BEM
    <Router>
      <Header/>
      <Routes>

    <Route path='/checkout' element={<Checkout/>}></Route>

    <Route path='/' element = {<Home/>}>
      </Route>

     </Routes>
    </Router>
    );
}

export default App;
