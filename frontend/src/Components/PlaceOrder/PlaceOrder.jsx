import React, { useState } from 'react'
import './PlaceOrder.css'
import Navbar from '../../Components/NavBar/Navbar';
import visaImage from '../../assets/visa.png';
import mastercardImage from '../../assets/master.png';
import Footer from '../../Components/Footer/Footer'

const AddAddressPopup = ({ isVisible, setIsAddAddressPopupVisible }) => {
  return (
    <div className={`add-address-popup ${isVisible ? 'visible' : ''}`}>
      <h3>Add Shipping Address</h3>
      <form>
        <label htmlFor="name">Name:</label>
        <input type="text"className="add-text" id="name" name="name" required />
        <label htmlFor="phone">Phone:</label>
        <input type="tel" id="phone"className="add-text" name="phone" required />
        <label htmlFor="address">Shipping Address:</label>
        <textarea id="address" className="add-text" name="address" required></textarea>
        <label htmlFor="postalCode">Postal Code:</label>
        <input type="text" id="postalCode"className="add-text" name="postalCode" required />
        <button type="submit"className="add-confirm">Confirm</button>
      </form>
      <button className="close-popup" onClick={() => setIsAddAddressPopupVisible(false)}>Close</button>
    </div>
  );
};

const PlaceOrder = () => {

  const [isAddAddressPopupVisible, setIsAddAddressPopupVisible] = useState(false);
  return (
    <div > <Navbar/>
    <div class="order-container">
      <div className="place-order">
        <div className="form-group">
          <h3>Shipping Address</h3>
          <button className="add-btn" onClick={() => setIsAddAddressPopupVisible(true)}>Add</button>
        </div>
        <h3>Payment Method</h3>
          <div className="form-group">
          <div>
              <input type="radio" name="paymentMethod" id= "visa"value="visa"/>
              <img src={visaImage} alt="Visa" className="payment-image" />
            </div>
            <div>
              <input type="radio" name="paymentMethod" id= "mastercard" value="mastercard"/>
              <img src={mastercardImage} alt="Mastercard" className="payment-image" />
            </div>
          </div>
      </div>
      <div className="cart-summary-container">
          <h2>Summary</h2>
          <table>
            <tbody>
              <tr>
                <td>Subtotal:</td>
                <td>Rs.</td>
              </tr>
              <tr>
                <td>Shipping Fee:</td>
                <td>Rs.</td>
              </tr>
              <tr>
                <td>Total:</td>
                <td>Rs.</td>
              </tr>
            </tbody>
          </table>
          <button className="order-btn">Place Order</button>
      
      </div>
    </div>
    {isAddAddressPopupVisible && <AddAddressPopup isVisible={isAddAddressPopupVisible} setIsAddAddressPopupVisible={setIsAddAddressPopupVisible} />}
    <Footer/>
    </div>
  )
}

export default PlaceOrder
