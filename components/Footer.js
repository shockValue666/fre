// components/Footer.js
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <p className="text-center text-sm">
        &copy; {new Date().getFullYear()} DegNA. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
