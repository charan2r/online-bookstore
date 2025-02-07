import React, { useState } from 'react';
import Navbar from '../../Components/NavBar/Navbar';
import Footer from '../../Components/Footer/Footer'
import './Contact.css'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
//handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };
//handle form submition
  const handleSubmit = (e) => {
    e.preventDefault();
//can add backend impliments here
    console.log(formData);
    //clear form after submission
    setFormData({
      name: '',
      email: '',
      message: ''
    });
  };

  return (
    <div > <Navbar/>
    <div className="contact-us">
      <h2>Contact Us</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <button type="submit">Submit</button>
        <div className="teamname"><p>© Code Champs</p></div>
      </form>
    </div>
    <Footer/>
    </div>
  );
};

export default Contact;
