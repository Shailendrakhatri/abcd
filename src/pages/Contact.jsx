import React from 'react';
import './Contact.css'; // Importing CSS for styling

function Contact() {
  return (
    <div className="contact-container">
      <h1>Contact Us</h1>
      <p>We'd love to hear from you! Reach out to us using any of the following methods:</p>
      
      <div className="contact-details">
        <h2>Email</h2>
        <p><a href="mailto:support@yourwebsite.com">support@yourwebsite.com</a></p>
        
        <h2>Phone</h2>
        <p>+1 234 567 890</p>
        
        <h2>Address</h2>
        <p>
          Your Company Name<br />
          123 Business Street<br />
          Your City, State, ZIP<br />
          Your Country
        </p>
        
        <h2>Social Media</h2>
        <p>
          <a href="https://facebook.com/yourpage" target="_blank" rel="noopener noreferrer">Facebook</a> | 
          <a href="https://twitter.com/yourpage" target="_blank" rel="noopener noreferrer"> Twitter</a> |
          <a href="https://instagram.com/yourpage" target="_blank" rel="noopener noreferrer"> Instagram</a>
        </p>
      </div>
      
      <form className="contact-form">
        <h2>Send us a message</h2>
        <label>
          Name:
          <input type="text" name="name" required />
        </label>
        <label>
          Email:
          <input type="email" name="email" required />
        </label>
        <label>
          Message:
          <textarea name="message" rows="5" required></textarea>
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Contact;
