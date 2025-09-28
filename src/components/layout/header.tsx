
"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu, UtensilsCrossed } from 'lucide-react';
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

  const linkColor = isScrolled ? "text-foreground" : "text-foreground";

  return (
    <motion.header 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300",
        isScrolled ? "border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60" : "bg-transparent"
      )}
    >
      <div className="container flex h-20 items-center">
        <div className="mr-auto flex items-center">
          <Link href="/" className="flex items-center gap-2 font-bold">
            <UtensilsCrossed className="h-8 w-8 text-primary" />
            <span className={cn("font-headline text-2xl", linkColor)}>
              Shree Om Annapurna
            </span>
          </Link>
        </div>
        <nav className="hidden items-center space-x-2 text-base font-medium md:flex">
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
                  className="absolute inset-0 -z-10 rounded-md bg-accent/10"
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
            <SheetTrigger asChild className="md:hidden">
              <Button variant="outline" size="icon" className={cn(!isScrolled && "border-primary/50 text-foreground")}>
                <Menu className="h-5 w-5" />
                <span className="sr-only">Open Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left">
              <div className="flex flex-col h-full">
                <div className="mb-8">
                  <Link href="/" className="flex items-center gap-2 font-bold" onClick={() => setIsOpen(false)}>
                    <UtensilsCrossed className="h-6 w-6 text-primary" />
                    <span className="font-headline text-lg">Shree Om Annapurna</span>
                  </Link>
                </div>
                <nav className="flex flex-col space-y-4 text-lg">
                  {NAV_LINKS.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="transition-colors hover:text-primary"
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
