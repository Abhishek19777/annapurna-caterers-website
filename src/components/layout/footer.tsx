import React from 'react';
import { ADDRESS } from '@/lib/constants';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-400">
      <div className="container py-2 text-center md:py-4">
        <p className="text-xs md:text-sm">
          © {new Date().getFullYear()} Shree Om Annapurna Caterers. All Rights Reserved.
        </p>
        <p className="text-xs md:text-sm mt-1">
          {ADDRESS}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
