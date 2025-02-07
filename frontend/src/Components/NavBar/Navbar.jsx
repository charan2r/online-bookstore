/* eslint-disable no-unused-vars */
import React from 'react'
import './Navbar.css'
import {useState} from 'react'
import { Link } from 'react-router-dom';
//import logo_white from '../../assets/logo_light.jpg'
import search_icon_light from '../../assets/Vectorsearch.svg'
import cart from '../../assets/Vectorcart.svg'
//import profile from '../../assets/profile.jpg'

const Navbar = () => {

  const[Category,setCategory] = useState("home");
  return (
    <div className='navbar'>
        <div>
          <h2 className='title'>Bookstore</h2>
        </div>

        <ul className = 'navabr-menu'>
            <li><Link to="/">Home</Link></li>
            <li><Link to="#explore">Category</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
        </ul>

        <div className='navbar-right'>
          <img src={search_icon_light} alt="Search Icon" className='searchImg' />
          <Link to="/cart"><img src={cart} alt="Cart Icon" className = 'searchImg'/></Link>
          <div className='navbar-search'>
            <button className='right_button'><Link to="/login">Login</Link></button>
          </div>
        </div> 
    </div>
  )
}

export default Navbar