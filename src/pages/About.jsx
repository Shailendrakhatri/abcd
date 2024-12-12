import React from 'react';
import './About.css'; // Importing CSS for styling

function About() {
  return (
    <div className="about-container">
      <h1>About Us</h1>
      <p>
        Welcome to our website! We are committed to providing high-quality services and products to meet your needs.
        Our mission is to deliver excellence through innovation, dedication, and customer satisfaction.
      </p>
      <p>
        Our team is passionate, skilled, and focused on creating value for our clients. Whether you're looking for top-notch 
        products or reliable customer service, we are here to assist you every step of the way.
      </p>
      <h2>Our Values</h2>
      <ul>
        <li><strong>Integrity:</strong> We believe in honest and ethical business practices.</li>
        <li><strong>Innovation:</strong> Constantly striving to improve and innovate in our field.</li>
        <li><strong>Customer Focus:</strong> Your satisfaction is our top priority.</li>
        <li><strong>Teamwork:</strong> Collaboration and respect are at the heart of what we do.</li>
      </ul>
      <p>
        Thank you for visiting our website. We look forward to serving you and exceeding your expectations.
      </p>
    </div>
  );
}

export default About;
