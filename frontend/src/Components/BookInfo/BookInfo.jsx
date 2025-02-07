import React, { useState } from 'react';
import './BookInfo.css';
//import cart from '../../assets/cart.avif';
import { Link } from 'react-router-dom';
//import Footer from '../../Components/Footer/Footer';

// Sample book functionalties
const BookInfo = ({ book }) => {
    const [quantity, setQuantity] = useState(1);

    const handleIncrement = () => {
        setQuantity(prevQuantity => prevQuantity + 1);
    };

    const handleDecrement = () => {
        if (quantity > 1) {
            setQuantity(prevQuantity => prevQuantity - 1);
        }
    };

    if (!book) {
        return <div>Loading...</div>; 
    }

    return (
        <div className="book-info">
            <div className="book-details">
                <h2>{book.title}</h2>
                <p>by {book.author}</p>
                <p>Rs. {book.price}</p>
                <p>Publisher: {book.publisher}</p>
                <p>Availability: {book.inStock ? 'In Stock' : 'Out of Stock'}</p>
                <div className="quantity-control">
                    <button onClick={handleDecrement}>-</button>
                    <span>{quantity}</span>
                    <button onClick={handleIncrement}>+</button>
                </div>
                <Link to='/cart'>
                    <button className="btn-buy">Buy Now</button>
                </Link>
                <button className="btn-cart">
                    <div className="img-cart">
                        {/*<Link to='/cart'>
                            <img src={cart} alt="Add to Cart" />
                        </Link> */}
                    </div>
                </button>
            </div>
            <div className="other-publications">
                <h3>Other publications by {book.author}</h3>
                <div className="books-grid">
                    {book.otherPublications.map((otherBook) => (
                        <div className="book-item" key={otherBook.id}>
                            <img src={otherBook.imageUrl} alt={otherBook.title} />
                            <h4>{otherBook.title}</h4>
                            <p>by {otherBook.author}</p>
                            <p>Rs. {otherBook.price}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default BookInfo;
