import React from 'react';
import { ADDRESS } from '@/lib/constants';
import LogoMark from '@/components/logo-mark';

const Footer = () => {
  return (
    <footer className="bg-[hsl(350,70%,8%)] text-white/70">
      <div className="h-1 bg-gradient-to-r from-primary via-accent to-primary" />
      <div className="container mx-auto flex flex-col items-center py-10 text-center md:py-12">
        <LogoMark className="h-14 w-14" />
        <p className="mt-3 font-script text-3xl text-primary">Shree Om Annapurna Caterers</p>
        <p className="mx-auto mt-4 max-w-md text-balance text-sm leading-relaxed">
          {ADDRESS}
        </p>
        <div className="mt-8 w-full max-w-xs border-t border-white/10 pt-6">
          <p className="text-xs leading-relaxed md:text-sm">
            © {new Date().getFullYear()} Shree Om Annapurna Caterers. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
