import React, { useState } from 'react';
import './LoginSignup.css'/*link to styles*/
import { Link } from 'react-router-dom';
import axios from 'axios';

import user_icon from '../../assets/user.png';
import password_icon from '../../assets/password.png';
import eye_icon from '../../assets/eye.png';
import eye_slash_icon from '../../assets/eye-slash.png';
axios.defaults.withCredentials = true; // Allows cookies to be sent with requests

const Login = () => {
  /*password visible or not*/
  
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [formErrors, setFormErrors] = useState({ email: '', password: '' });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    let errors = {};
    let isValid = true;

    //checking validations
    if (!formData.email.trim()) {
      errors.email = 'email is required';
      isValid = false;
    }

    if (!formData.password.trim()) {
      errors.password = 'Password is required';
      isValid = false;
    }

    setFormErrors(errors);

    if (isValid) {
      try {
        const response = await axios.post('http://127.0.0.1:8000/api/login', formData);
        if (response.data.success) {
          // Redirect to the home page
          return <Link to="/" />;
        } else {
          console.log('Invalid email or password');
        }
      } catch (error) {
        console.error('Error occurred:', error);
      }
    }
  };

  return (
    <div className="container">
      <div className="header">
        <div className="text">Book Store</div>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="inputs">
          <h1>Log In</h1>
          <div className="input">
            <img src={user_icon} alt="" className="icon" />
            <input type="text" placeholder="Email Address" name="email" value={formData.email}
              onChange={handleInputChange} required />
            
          </div>
          {formErrors.email && <span className="error">{formErrors.email}</span>}
          <div className="input">
            <img src={password_icon} alt="" className="icon" />
            <input type={passwordVisible ? 'text' : 'password'} placeholder="Password" name="password" value={formData.password}
            onChange={handleInputChange} required />
            <button type="button" className="eye-button" onClick={togglePasswordVisibility}>
              <img src={passwordVisible ? eye_slash_icon : eye_icon}
                alt={passwordVisible ? 'Hide password' : 'Show password'}/>
            </button>
           
          </div>
          {formErrors.password && <span className="error">{formErrors.password}</span>}
        </div>
        <div className="forgot-password">
          <Link to="/forgot-password">Forgot Password?</Link>
        </div>
        <div className="remember">
          <span>
            <input type="checkbox" id="remember" name="remember" />
            <label htmlFor="remember">Remember me</label>
          </span>
        </div>
        
      {/* have to link to home */}
        <div className="submit-button">
          <button type="submit" className="submit"> <Link to="/"> Log In</Link></button>
        </div>
      </form>

      <div className="logset">
        <span className="haveaccount">
          Don't have an account? 
           <span className='linkTextBold'><Link to="/signup"> Sign Up</Link></span>
        </span>
      </div>
      <div className="teamname">
        <p>© Code Champs</p>
      </div>
    </div>
  );
};


export default Login;
