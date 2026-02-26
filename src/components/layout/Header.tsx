'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetClose } from '@/components/ui/sheet';
import { Menu, Camera } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useState, useEffect } from 'react';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'Services', href: '#services' },
  { name: 'Gallery', href: '#gallery' },
  { name: 'Contact', href: '#contact' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={cn(
        'sticky top-0 z-50 w-full transition-all duration-300',
        scrolled ? 'border-b border-border/50 bg-background/80 backdrop-blur-sm' : 'bg-transparent'
      )}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          <Link href="#home" className="flex items-center gap-2">
            <Camera className="h-7 w-7 text-primary" />
            <span className="text-2xl font-bold font-headline">Kutografic</span>
          </Link>
          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
              >
                {link.name}
              </Link>
            ))}
          </nav>
          <div className="flex items-center gap-4">
            <Button
              asChild
              className="hidden md:inline-flex transition-all duration-300 hover:shadow-primary/40 hover:shadow-[0_0_20px] active:scale-95"
            >
              <Link href="#contact">Get Quote</Link>
            </Button>
            <div className="md:hidden">
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon">
                    <Menu className="h-6 w-6" />
                    <span className="sr-only">Open menu</span>
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="bg-card w-[280px]">
                  <div className="flex flex-col h-full">
                    <div className="flex items-center gap-2 p-4 border-b border-border">
                        <Camera className="h-7 w-7 text-primary" />
                        <span className="text-xl font-bold font-headline">Kutografic</span>
                    </div>
                    <nav className="flex-grow flex flex-col gap-4 p-4">
                      {navLinks.map((link) => (
                        <SheetClose key={link.name} asChild>
                          <Link
                            href={link.href}
                            className="text-lg font-medium text-foreground transition-colors hover:text-primary"
                          >
                            {link.name}
                          </Link>
                        </SheetClose>
                      ))}
                    </nav>
                     <div className="p-4 border-t border-border">
                        <SheetClose asChild>
                          <Button asChild className="w-full">
                            <Link href="#contact">Get Quote</Link>
                          </Button>
                        </SheetClose>
                    </div>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
