import React from 'react';
import './Explore.css';
import { Link } from 'react-router-dom';
import book1 from '../../assets/book1.jpg';
import book2 from '../../assets/book2.jpg';
import book3 from '../../assets/book3.jpeg';
import book4 from '../../assets/book4.webp';

const Explore = (category,setCategory) => { 
  return (
    <div className='explore-book' id='explore-book'>
      <h1>Explore Our Book Categories</h1>
      <div className="book-list">
        <div className="book">
          <div className="book-frame">
            <div className="left-page"></div>
            <div className="right-page"></div>
          </div>
          <Link to="/bookinfo"> 
            <img src={book1} alt="Book 1" />
          </Link>
          <div className="book-info">
            <p>Short Stories</p>
          </div>
        </div>
        <div className="book">
          <div className="book-frame">
            <div className="left-page"></div>
            <div className="right-page"></div>
          </div>
          <img src={book2} alt="Book 2" />
          <div className="book-info">
            <p>Novels</p>
          </div>
        </div>
        <div className="book">
          <div className="book-frame">
            <div className="left-page"></div>
            <div className="right-page"></div>
          </div>
          <img src={book3} alt="Book 3" />
          <div className="book-info">
            <p>Educational</p>
          </div>
        </div>
        <div className="book">
          <div className="book-frame">
            <div className="left-page"></div>
            <div className="right-page"></div>
          </div>
          <img src={book4} alt="Book 4" />
          <div className="book-info">
            <p>Translations</p>
          </div>
        </div>
        <div className="book">
          <div className="book-frame">
            <div className="left-page"></div>
            <div className="right-page"></div>
          </div>
          <img src={book3} alt="Book 3" />
          <div className="book-info">
            <p>FIction</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Explore;
