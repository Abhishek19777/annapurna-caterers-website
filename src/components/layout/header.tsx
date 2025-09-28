"use client";

import { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu, UtensilsCrossed } from 'lucide-react';
import { WHATSAPP_BOOK_NOW_LINK, NAV_LINKS } from '@/lib/constants';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <div className="mr-4 flex items-center">
          <Link href="/" className="flex items-center gap-2 font-bold">
            <UtensilsCrossed className="h-6 w-6 text-primary" />
            <span className="font-headline text-lg">Shree Om Annapurna Caterers</span>
          </Link>
        </div>
        <nav className="hidden items-center space-x-6 text-sm font-medium md:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="transition-colors hover:text-primary"
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="flex flex-1 items-center justify-end space-x-4">
          <Button asChild className="hidden bg-accent hover:bg-accent/90 text-accent-foreground md:inline-flex">
            <a href={WHATSAPP_BOOK_NOW_LINK} target="_blank" rel="noopener noreferrer">Book Now</a>
          </Button>
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="outline" size="icon">
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
                    <Button asChild size="lg" className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">
                        <a href={WHATSAPP_BOOK_NOW_LINK} target="_blank" rel="noopener noreferrer">Book Now</a>
                    </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;
