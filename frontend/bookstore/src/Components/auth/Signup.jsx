import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './LoginSignup.css'; // link to styles
import user_icon from '../../assets/user.png';
import password_icon from '../../assets/password.png';
import email_icon from '../../assets/email.png';
import eye_icon from '../../assets/eye.png';
import eye_slash_icon from '../../assets/eye-slash.png';
import axios from 'axios';

const Signup = () => {
  const navigate = useNavigate(); //useNavigate for navigation

  const [passwordVisible, setPasswordVisible] = useState(false);
  const [formData, setFormData] = useState({ email: '', name: '', password: '', password_confirmation: '' });
  const [formErrors, setFormErrors] = useState({ email: '', name: '', password: '', password_confirmation: '' });

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    let errors = {};
    let isValid = true;

    // Checking validations
    if (!formData.email.trim()) {
      errors.email = 'Email address is required';
      isValid = false;
    }

    // Email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(formData.email.trim())) {
      errors.email = 'Invalid email address';
      isValid = false;
    }

    if (!formData.name.trim()) {
      errors.name = 'User name is required';
      isValid = false;
    }

    if (!formData.password.trim()) {
      errors.password = 'Password is required';
      isValid = false;
    } else if (formData.password.length < 8) {
      errors.password = 'Password must be at least 8 characters';
      isValid = false;
    }

    if (formData.password !== formData.password_confirmation) {
      errors.password_confirmation = 'Password does not match';
      isValid = false;
    }

    setFormErrors(errors);
    // perform signup
    if (isValid) {
  
      try {
        const response = await axios.post('http://127.0.0.1:8000/api/register', formData);
        if (response.data.success) {
          // Redirect to the home page
          return <Link to="/" />;
        }
      } catch (error) {
        console.error('Error occurred:', error);
      }
      console.log('Form submitted:', formData);

      // Redirect to  login page
      navigate('/login'); 
    }
  };

  return (
    <div className='container'>
      <div className="header">
        <div className="text">Book Store</div>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="inputs">
          <h1>Sign Up</h1>

          {/* Email */}
          <div className="input">
            <img src={email_icon} alt="" className="icon" />
            <input type="text" placeholder="Email address" name="email" value={formData.email} onChange={handleInputChange} required />
          </div>
          {formErrors.email && <span className="error">{formErrors.email}</span>}

          {/* User name */}
          <div className="input">
            <img src={user_icon} alt="" className="icon" />
            <input type="text" placeholder="User Name" name="name" value={formData.name} onChange={handleInputChange} required />
          </div>
          {formErrors.name && <span className="error">{formErrors.name}</span>}

          {/* Password */}
          <div className="input">
            <img src={password_icon} alt="" className="icon" />
            <input type={passwordVisible ? 'text' : 'password'} placeholder="Password" name="password" value={formData.password} onChange={handleInputChange} required />
            <button type="button" className="eye-button" onClick={togglePasswordVisibility}>
              <img src={passwordVisible ? eye_slash_icon : eye_icon} alt={passwordVisible ? 'Hide password' : 'Show password'} />
            </button>
          </div>
          {formErrors.password && <span className="error">{formErrors.password}</span>}

          {/* Confirm Password */}
          <div className="input">
            <img src={password_icon} alt="" className="icon" />
            <input type={passwordVisible ? 'text' : 'password'} placeholder="Confirm Password" name="password_confirmation" value={formData.password_confirmation} onChange={handleInputChange} required />
            <button type="button" className="eye-button" onClick={togglePasswordVisibility}>
              <img src={passwordVisible ? eye_slash_icon : eye_icon} alt={passwordVisible ? 'Hide password' : 'Show password'} />
            </button>
          </div>
          {formErrors.password_confirmation && <span className="error">{formErrors.password_confirmation}</span>}

        </div>

        {/* Remember me label */}
        <div className="remember">
          <span>
            <input type="checkbox" id="remember" name="remember" />
            <label htmlFor="remember">Remember me</label>
          </span>
        </div>

        {/* Signup button */}
        <div className="submit-button">
          <button type="submit" className="submit">Sign Up</button>
        </div>
      </form>

      <div className="logset">
        <span className="haveaccount">Already have an account? 
          <span className='linkTextBold'>
            <Link to="/login"> Log In</Link>
          </span>
        </span>
      </div>

      {/* Team name */}
      <div className="teamname"><p>© Code Champs</p></div>
    </div>
  );
};

export default Signup;
