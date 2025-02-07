import React from 'react';
import { FaShoppingCart, FaRegBookmark, FaStar, FaFireAlt } from 'react-icons/fa';
import './Products.css'; 

// Display details about a book in homepage
function Products(props) {
    return (
        <div className="productCart">
            {/* Title */}
            <h2 className="productTitle">{props.sectionTitle}</h2>

            {/* Product Image */}
            <img src={props.image} className="productImage" alt={props.name} />
            
            {/* Icons */}
            <FaShoppingCart className="productCart_cart" />
            <FaRegBookmark className="productCart_wishlist" />
            <FaFireAlt className="productCart_fastSelling" />

            {/* Product Content */}
            <div className="productCart_content">
                <h3 className="productName">{props.name}</h3>
                <div className="displayStack__1">
                    <div className="productPrice">Rs.{props.price}.00</div>
                </div>
                <div className="displayStack__2">
                    <div className="productRating">
                        {[...Array(props.rating)].map((_, index) => (
                            <FaStar key={index} />
                        ))}
                    </div>
                </div>
            </div>
            
            {/* More Explore Button */}
            {props.showButton && <button className="moreExploreButton">Explore</button>}
        </div>
    );
}

export default Products;
