import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Components/Home/Home';
import Cart from './Components/Cart/Cart';
import Book from './Components/BookInfo/Book';
import ForgotPassword from './Components/auth/ForgotPassword';
import Signup from './Components/auth/Signup';
import Login from './Components/auth/Login';
import Products from './Components/Products/Products';
import PlaceOrder from './Components/PlaceOrder/PlaceOrder';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer'; 

import Content from './Content';

const App = () => {
  return (
    <div> 
      <div className='app'>
        <Router>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/' element={<Products />} />
            <Route path='/' element={<Content/>}/>
            <Route path='/contact' element={<Contact />} />
            <Route path='/about' element={<About />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/placeOrder' element={<PlaceOrder />} />
            <Route path='/bookinfo' element={<Book />} />
            <Route path='/signup' element={<Signup />} />
            <Route path='/login' element={<Login />} />
            <Route path='/forgot-password' element={<ForgotPassword />} />
            <Route path='/Footer' elemet={<Footer/>}/>
          </Routes>
        </Router>   
      </div>
    </div>
  )
}


export default App;
