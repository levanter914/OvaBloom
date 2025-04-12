// components/Footer.jsx
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-white text-center py-4">
      <p className="text-sm text-[#5E3023]">
        &copy; {new Date().getFullYear()} <a href="https://github.com/levanter914" className="font-semibold hover:underline">levanter914</a>.<br/>All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
