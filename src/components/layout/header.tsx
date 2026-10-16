
"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu } from 'lucide-react';
import LogoMark from '@/components/logo-mark';
import { WHATSAPP_BOOK_NOW_LINK, NAV_LINKS } from '@/lib/constants';
import { cn } from '@/lib/utils';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [hoveredLink, setHoveredLink] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 10;
      if (scrolled !== isScrolled) {
        setIsScrolled(scrolled);
      }
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Set initial state
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isScrolled]);

  const linkColor = isScrolled ? "text-foreground/80 hover:text-accent" : "text-foreground/80 hover:text-accent";

  return (
    <motion.header 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300",
        isScrolled ? "border-b bg-background/85 shadow-sm backdrop-blur-md" : "bg-background"
      )}
    >
      <div className="container flex h-16 items-center gap-3 md:h-[4.5rem]">
        <div className="mr-auto flex min-w-0 items-center">
          <Link href="/" aria-label="Shree Om Annapurna Caterers - home" className="flex shrink-0 items-center gap-2 font-bold">
            <Image src="/images/logo.png" alt="Shree Om Annapurna Caterers logo" width={48} height={48} priority className="h-9 w-9 shrink-0 md:h-11 md:w-11" />
            <span className={cn("whitespace-nowrap font-script text-lg font-bold text-accent sm:text-xl md:text-2xl", linkColor)}>
              Shree Om Annapurna
            </span>
          </Link>
        </div>
        <nav className="hidden items-center space-x-1 text-[15px] font-medium xl:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onMouseEnter={() => setHoveredLink(link.href)}
              onMouseLeave={() => setHoveredLink('')}
              className={cn("relative rounded-md px-3 py-2 transition-colors", linkColor)}
            >
              {hoveredLink === link.href && (
                <motion.span
                  layoutId="hover-bg"
                  className="absolute inset-0 -z-10 rounded-md bg-primary/10"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                />
              )}
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="ml-auto flex items-center gap-4">
          <Button asChild className="hidden md:inline-flex" variant="default">
            <a href={WHATSAPP_BOOK_NOW_LINK} target="_blank" rel="noopener noreferrer">Book Now</a>
          </Button>
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="xl:hidden">
              <Button variant="outline" size="icon" className={cn("text-foreground")}>
                <Menu className="h-5 w-5" />
                <span className="sr-only">Open Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left">
              <div className="flex flex-col h-full">
                <div className="mb-8">
                  <Link href="/" className="flex items-center gap-2 font-bold" onClick={() => setIsOpen(false)}>
                    <LogoMark className="h-10 w-10" />
                    <span className="font-script text-2xl font-bold text-accent">Shree Om Annapurna</span>
                  </Link>
                </div>
                <nav className="flex flex-col space-y-1 text-lg">
                  {NAV_LINKS.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="rounded-lg px-3 py-3 font-medium transition-colors hover:bg-primary/10 hover:text-accent"
                      onClick={() => setIsOpen(false)}
                    >
                      {link.label}
                    </Link>
                  ))}
                </nav>
                <div className="mt-auto">
                    <Button asChild size="lg" className="w-full">
                        <a href={WHATSAPP_BOOK_NOW_LINK} target="_blank" rel="noopener noreferrer">Book Now</a>
                    </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;
