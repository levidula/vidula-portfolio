import { useState, useEffect } from 'react';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from '@/components/ui/sheet';

const navLinks = [
   { label: 'Home', href: '#home' },
   { label: 'Projects', href: '#projects' },
   { label: 'Experience', href: '#experience' },
   { label: 'Contact', href: '#contact' },
 ];
 
 export const Navbar = () => {
   const [scrolled, setScrolled] = useState(false);
 
   useEffect(() => {
     const handleScroll = () => {
       setScrolled(window.scrollY > 20);
     };
     window.addEventListener('scroll', handleScroll);
     return () => window.removeEventListener('scroll', handleScroll);
   }, []);
 
   return (
     <nav
       className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
         scrolled
           ? 'bg-background/95 backdrop-blur-sm shadow-card'
           : 'bg-transparent'
       }`}
     >
       <div className="container mx-auto px-6 md:px-12 lg:px-20">
         <div className="flex items-center justify-between h-16 md:h-20">
           {/* Brand */}
           <a
             href="#home"
            className="relative font-serif text-xl md:text-2xl font-medium text-foreground tracking-[0.08em] transition-colors duration-300 hover:text-clay-dark after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-full after:h-[1px] after:bg-clay after:scale-x-0 after:origin-left after:transition-transform after:duration-500 hover:after:scale-x-100"
           >
            V.Dev
           </a>
 
           {/* Navigation Links */}
           <ul className="hidden md:flex items-center gap-8">
             {navLinks.map((link) => (
               <li key={link.label}>
                 <a
                   href={link.href}
                   className="relative text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-300 after:content-[''] after:absolute after:left-0 after:bottom-[-4px] after:w-full after:h-[1px] after:bg-primary after:scale-x-0 after:origin-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-left"
                 >
                   {link.label}
                 </a>
               </li>
             ))}
           </ul>
 
            {/* Mobile Menu */}
            <Sheet>
              <SheetTrigger asChild>
                <button
                  className="md:hidden p-2 text-foreground hover:text-primary transition-colors duration-300"
                  aria-label="Open menu"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <line x1="4" y1="8" x2="20" y2="8" />
                    <line x1="4" y1="16" x2="20" y2="16" />
                  </svg>
                </button>
              </SheetTrigger>
              <SheetContent side="top" className="w-full bg-background border-b border-border">
                <nav className="flex flex-col gap-6 pt-8 pb-6">
                  {navLinks.map((link) => (
                    <SheetClose asChild key={link.label}>
                      <a
                        href={link.href}
                        className="text-lg font-medium text-foreground hover:text-primary transition-colors duration-300 px-2"
                      >
                        {link.label}
                      </a>
                    </SheetClose>
                  ))}
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </nav>
    );
  };