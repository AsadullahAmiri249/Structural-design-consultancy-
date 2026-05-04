import React from 'react';
import { Link } from 'react-router-dom';
import { Building2, Mail, Phone, MapPin, Linkedin, Facebook, Twitter } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-navy text-white pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Company Info */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center gap-2 group">
              <div className="bg-white/10 p-2 group-hover:bg-steel transition-colors">
                <Building2 className="text-accent" size={32} />
              </div>
              <div>
                <div className="text-2xl font-black tracking-tighter uppercase leading-none text-white">
                  StruDesign
                </div>
                <div className="text-[10px] font-bold tracking-[0.2em] uppercase text-accent leading-none mt-1">
                  Consulting
                </div>
              </div>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
              Professional structural design consultancy providing safe, efficient, and code-compliant structural engineering services for projects worldwide.
            </p>
            <div className="flex gap-4">
              <a href="#" className="bg-white/5 p-2 rounded-full hover:bg-steel hover:text-white transition-all text-gray-400">
                <Linkedin size={20} />
              </a>
              <a href="#" className="bg-white/5 p-2 rounded-full hover:bg-steel hover:text-white transition-all text-gray-400">
                <Facebook size={20} />
              </a>
              <a href="#" className="bg-white/5 p-2 rounded-full hover:bg-steel hover:text-white transition-all text-gray-400">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="text-sm font-bold uppercase tracking-[0.2em] text-accent">Quick Links</h4>
            <ul className="space-y-4">
              {['Home', 'About Us', 'Services', 'Portfolio', 'Process', 'Contact'].map((item) => (
                <li key={item}>
                  <Link 
                    to={item === 'Home' ? '/' : `/${item.toLowerCase().replace(' ', '-')}`} 
                    className="text-gray-400 hover:text-white transition-colors text-sm font-medium"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-6">
            <h4 className="text-sm font-bold uppercase tracking-[0.2em] text-accent">Our Services</h4>
            <ul className="space-y-4">
              {[
                'Structural Design',
                'Structural Analysis',
                'Building Assessment',
                'Seismic Design',
                'Steel Structure Design',
                'Foundation Design'
              ].map((item) => (
                <li key={item}>
                  <Link 
                    to="/services" 
                    className="text-gray-400 hover:text-white transition-colors text-sm font-medium"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact info */}
          <div className="space-y-6">
            <h4 className="text-sm font-bold uppercase tracking-[0.2em] text-accent">Contact Details</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="text-accent shrink-0 mt-1" size={20} />
                <span className="text-gray-400 text-sm leading-relaxed">
                  123 Engineering Blvd, Suite 400<br />
                  Business District, City 10001
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="text-accent shrink-0" size={20} />
                <span className="text-gray-400 text-sm font-medium">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="text-accent shrink-0" size={20} />
                <span className="text-gray-400 text-sm font-medium">info@strudesign.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-xs text-gray-500 font-medium">
            © {currentYear} StruDesign Consulting. All rights reserved.
          </p>
          <div className="flex gap-8">
            <a href="#" className="text-xs text-gray-500 hover:text-white transition-colors uppercase tracking-widest font-bold">Privacy Policy</a>
            <a href="#" className="text-xs text-gray-500 hover:text-white transition-colors uppercase tracking-widest font-bold">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
