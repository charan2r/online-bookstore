/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';
import './Header.css'; 

const Header = () => {
  return (
    <div className='header-container'>
      <a href="#" style={{ textDecoration: 'none' }}>
        <div className='image-container'>
          <img
            src="https://static.vecteezy.com/system/resources/previews/027/100/867/large_2x/banner-with-a-pink-background-and-long-shadows-featuring-orange-books-or-notebooks-with-lavender-free-photo.jpg"
            alt="Description of the image" className='back_img'
          />
          <div className="text-overlay">
            <h3>Your books are here</h3>
            <p>Discover, explore, and indulge in your favorite reads with our online bookstore web application. Browse an extensive collection of genres, from classic literature to contemporary bestsellers, and seamlessly purchase your next literary adventure with just a few clicks. With user-friendly navigation and personalized recommendations, finding your next great read has never been easier</p>
            <button>View Explore</button>
          </div>
        </div>
      </a>
    </div>
  );
};

export default Header;
