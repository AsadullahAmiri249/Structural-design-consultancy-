import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Building2, Phone } from 'lucide-react';
import { Button } from './UI';
import { cn } from '@/src/lib/utils';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Projects', path: '/projects' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header 
      className={cn(
        'fixed top-0 w-full z-50 transition-all duration-300',
        scrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="bg-navy p-2 group-hover:bg-steel transition-colors">
              <Building2 className="text-accent" size={32} />
            </div>
            <div>
              <div className={cn(
                "text-2xl font-black tracking-tighter uppercase leading-none",
                scrolled ? "text-navy" : "text-navy"
              )}>
                StruDesign
              </div>
              <div className="text-[10px] font-bold tracking-[0.2em] uppercase text-steel leading-none mt-1">
                Consulting
              </div>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center space-x-10">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={cn(
                  'text-sm font-bold uppercase tracking-widest hover:text-steel transition-colors relative group py-2',
                  location.pathname === link.path ? 'text-steel' : 'text-navy'
                )}
              >
                {link.name}
                <span className={cn(
                  "absolute bottom-0 left-0 w-full h-0.5 bg-steel transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left",
                  location.pathname === link.path && "scale-x-100"
                )} />
              </Link>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <a href="tel:+15551234567" className="flex items-center gap-2 text-navy font-bold hover:text-steel transition-colors mr-4">
              <Phone size={18} className="text-steel" />
              <span className="text-sm">+1 (555) 123-4567</span>
            </a>
            <Button variant="accent" size="sm" onClick={() => window.location.href='/contact'}>
              Request a Quote
            </Button>
          </div>

          {/* Mobile Toggle */}
          <button 
            className="lg:hidden text-navy hover:text-steel transition-colors cursor-pointer"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={32} /> : <Menu size={32} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav Overlay */}
      {isOpen && (
        <div className="lg:hidden fixed inset-0 top-[72px] bg-white z-40 animate-in fade-in slide-in-from-top-4 duration-300">
          <nav className="flex flex-col p-8 space-y-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={cn(
                  'text-2xl font-black uppercase tracking-tighter hover:text-steel transition-colors',
                  location.pathname === link.path ? 'text-steel' : 'text-navy'
                )}
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-8 border-t border-concrete">
               <Button variant="accent" className="w-full" onClick={() => window.location.href='/contact'}>
                Get a Free Consultation
              </Button>
              <div className="mt-8 flex items-center gap-4 justify-center">
                 <Phone size={20} className="text-steel" />
                 <span className="text-lg font-bold text-navy">+1 (555) 123-4567</span>
              </div>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
