import React from 'react'
import './Home.css'
import Header from '../../Components/Header/Header'
import Explore from '../../Components/Explore/Explore' // Book categories
import Navbar from '../../Components/NavBar/Navbar'
//import Products from '../../Components/Products/Products' // Book cards with details
import Footer from '../../Components/Footer/Footer'



const Home = () => {
  return (
    <div>
      <Navbar/>
      <Header/>
      <div id='explore'>
        <Explore/>
      </div>
      <Footer/>    
    </div>
  );
}

export default Home;
