import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-400">
      <div className="container py-4 text-center">
        <p className="text-sm">
          © {new Date().getFullYear()} Shree Om Annapurna Caterers. All Rights Reserved.
        </p>
        <p className="text-xs mt-1">
          Website designed by AI.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
