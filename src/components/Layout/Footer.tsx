import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-4 mt-auto">
      <div className="container mx-auto">
        <p className="text-center">
          &copy; {new Date().getFullYear()} DigiSmile. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
