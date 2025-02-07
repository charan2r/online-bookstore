import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Cart.css'; 
import bin_icon from '../../assets/bin.png'; 
import Navbar from '../../Components/NavBar/Navbar';
import Footer from '../../Components/Footer/Footer'


const Cart = () => {
  const [cart, setCart] = useState([
  
    
  ]);

  const [shippingFee] = useState(0); 
  const [total, setTotal] = useState(0);
  
  useEffect(() => {
    const calculateTotal = () => {
      const subtotal = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
      return subtotal + shippingFee;
    };
    setTotal(calculateTotal());
  }, [cart, shippingFee]);


  const removeFromCart = (index) => {
    const updatedCart = [...cart.slice(0, index), ...cart.slice(index + 1)];
    setCart(updatedCart);
  };


   const decrementQuantity = (index) => {
    const updatedCart = [...cart];
    if (updatedCart[index].quantity > 1) {
      updatedCart[index].quantity -= 1;
    }
    setCart(updatedCart);
  };

 
  const incrementQuantity = (index) => {
    const updatedCart = [...cart];
    updatedCart[index].quantity += 1;
    setCart(updatedCart);
  };


  
  const calculateSubtotal = () => {
    return cart.reduce((acc, item) => acc + item.price, 0);
  };

  
  const calculateTotal = () => {
    return calculateSubtotal() + shippingFee;
  };

  useEffect(() => {
    const fetchImages = async () => {
      const updatedCart = [...cart];
      for (let i = 0; i < cart.length; i++) {
        try {
          const response = await fetch('https://example.com/150'); 
          if (response.ok) {
            const imageUrl = await response.blob();
            updatedCart[i].image = URL.createObjectURL(imageUrl);
          } else {
            console.error('Failed to fetch image for item:', cart[i]);
          }
        } catch (error) {
          console.error('Error fetching image:', error);
        }
      }
      setCart(updatedCart);
    };
    fetchImages();
  }, [cart]);

  return (
    <div > <div><Navbar/>
    <div className="cart-container">
      <div className="cart-items-container">
        <h2>Shopping Cart</h2>
        <ul>
          {cart.map((item, index) => (
          <li key={index}>

            <div className="item-container">
              <img src={item.image} alt={item.name} className="item-image" />
              <div className="item-info">
                <span className="item-name">{item.name}</span>
                <div className="item-details">
                  <span className="item-author">Author: {item.author}</span>
                  <span className="item-price">Rs.{item.price}</span>
                  <div className="quantity-container">
                    <button onClick={() => decrementQuantity(index)}>-</button>
                      <span className="quantity">{item.quantity}</span>
                      <button onClick={() => incrementQuantity(index)}>+</button>
                  </div>
                </div>
              </div>
              <img 
                src={bin_icon}
                alt="Delete"
                onClick={() => removeFromCart(index)}
                className="icon_bin "
              />
            </div>
          </li>
          ))}
        </ul>
      </div>
      <div className="cart-summary-container">
        <h2>Summary</h2>
        <table>
          <tbody>
            <tr>
              <td>Subtotal:</td>
              <td>Rs.{calculateSubtotal()}</td>
            </tr>
            <tr>
              <td>Shipping Fee:</td>
              <td>Rs.{shippingFee}</td>
            </tr>
            <tr>
              <td>Total:</td>
              <td>Rs.{calculateTotal()}</td>
            </tr>
          </tbody>
        </table>
        {/* Add buttons for checkout or shop more */}
        <Link to='/placeOrder'>
        <button className="checkout-btn">Check Out</button>
        </Link>
        <Link to='/'>
        <button className="shop-more-btn">Shop More</button>
        </Link>
      </div>
    </div>

    </div>
    <Footer/>
    </div>
  )
}

export default Cart
