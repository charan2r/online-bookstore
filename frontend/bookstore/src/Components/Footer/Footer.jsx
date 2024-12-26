import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <div className='Footer' id='Footer'>
        <div className = "Footer-content">
        <div className="Footer-content-left">
           
            <h2>BOOKSTORE</h2>
            <p>Bookstores play a vital role in promoting literacy, supporting authors, and fostering a love of reading within communities. They serve as cultural landmarks and gathering places where people can explore, discover, and connect through the written word.</p>
            <div className="footer-social">
                <img src="" alt="" />
                <img src="" alt="" />
                <img src="" alt="" />
            </div>

        </div>
        <div className="footer-content-center">
           <h2>CODECHAMPS</h2> 
           <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
            <li>Privacy Policy</li>
           </ul>
        </div>

        <div className="Footer-content-right">
            <h2>GET UPDATES</h2>
            <ul>
                <li>+032-8597614</li>
                <li>codechamps@gmail.com</li>
            </ul>


        </div>
        
        </div>
        <p className="footer-copyright">Copyright 2024 @codechamps - All Right Reserved</p>
    </div>
  )
}

export default Footer