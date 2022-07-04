
import './App.css';
import Header from './Header';
import Home from './Home';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
function App() {
  return (
    // BEM
    <Router>
      <Header/>
      <Routes>

    <Route path='/checkout' element={<h1>I am checkout</h1>}></Route>

    <Route path='/' element = {<Home/>}>
      </Route>

     </Routes>
    </Router>
    );
}

export default App;
