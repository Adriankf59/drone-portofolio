// components/Footer.js
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-blue-500 py-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center text-white">
        <p>Uber Aerials</p>
        <ul className="flex space-x-4">
          <li>Privacy Policy</li>
          <li>Terms of Service</li>
          <li>Contact Us</li>
        </ul>
        <div className="flex space-x-2">
          <i className="fab fa-twitter"></i>
          <i className="fab fa-facebook-f"></i>
          <i className="fab fa-linkedin-in"></i>
        </div>
      </div>
    </footer>
  );
};

export default Footer;