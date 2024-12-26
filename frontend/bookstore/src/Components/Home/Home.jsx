
import React from 'react'
import './Home.css'
import Header from '../../Components/Header/Header'
import Explore from '../../Components/Explore/Explore'
import Navbar from '../../Components/NavBar/Navbar'
import Products from '../../Components/Products/Products'

import Footer from '../../Components/Footer/Footer'
import Content from '../../Content'






const Home = () => {
  
  
  return (
    <div>
      <Navbar/>
        <Header/>
        <Explore/>
        <Products/>
      <Content/>
        <Footer/>
     
    </div>
  );
}

export default Home;
