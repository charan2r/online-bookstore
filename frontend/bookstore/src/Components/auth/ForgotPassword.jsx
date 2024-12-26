import React, { useState } from 'react';
import './LoginSignup.css';
import email_icon from '../../assets/email.png' 

function ForgotPassword() {
  const [email, setEmail] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      // Send password reset request to backend 
      const response = await fetch('/api/forgot-password', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });

      if (!response.ok) {
        throw new Error('Failed to send reset request.');
      }

      setSuccessMessage('A password reset link has been sent to your email.');
      setEmail(''); // Clear email after submit
    } catch (error) {
      setErrorMessage('Please try again later.');
      console.error('Forgot password error:', error);
    }
  };

  return (
    <div className="container">
      <div className="header">
        <div className="text">Book Store</div>
      </div>
      <div className="forgot-password">
        <h3>Forgot Password</h3><br/>
        <form onSubmit={handleSubmit}>
          <div className="input">
            <img src={email_icon} alt="Email" className="icon" />
            <input type="text" placeholder="Email address" name="email" value={email}
              onChange={(e) => setEmail(e.target.value)}required/>
          </div>
          {errorMessage && <p className="error">{errorMessage}</p>}
          {successMessage && <p className="success">{successMessage}</p>}<br/>
          <button className= "submit" type="submit">Send Link</button>
        </form>
      </div>
    </div>
  );
}

export default ForgotPassword;
