import React from 'react';
import Navbar from '../../Components/NavBar/Navbar';
import './About.css'; 
import Footer from '../../Components/Footer/Footer'

const About = () => {
  return (
    <div > <Navbar/>
    <div className="about-us-container">
      <h2>About Us</h2>
      <p>Welcome to our bookstore, where our mission is to offer book lovers a place to browse, 
        purchase, and enjoy literature that's effortless and delightful. Throughout the process 
        of browsing and buying your next favorite book, we aim to create an environment where 
        you can immerse yourself in the joy of reading without constraint.</p>
        <p>Join us in our commitment to fostering a community that celebrates the love of books</p>

      <p>Thank you for supporting our bookstore!</p>

      <div className="teamname"><p>© Code Champs</p></div>
    </div>
    <Footer/>
    </div>
  );
}

export default About;
