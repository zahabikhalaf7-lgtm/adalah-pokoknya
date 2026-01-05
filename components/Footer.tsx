import React from 'react';
import { Facebook, Twitter, Youtube, Hexagon, Instagram, Linkedin } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-black py-12 border-t border-white/5">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          
          {/* Brand */}
          <div className="flex items-center gap-2">
            <Hexagon className="text-brand-red w-6 h-6 fill-brand-red" />
            <span className="text-lg font-bold tracking-wider text-white">AGATHA</span>
          </div>

          {/* Nav Links */}
          <div className="flex gap-8 text-sm font-medium text-brand-gray">
             <a href="#home" className="hover:text-brand-red transition-colors">Home</a>
             <a href="#about" className="hover:text-brand-red transition-colors">About</a>
             <a href="#projects" className="hover:text-brand-red transition-colors">Projects</a>
             <a href="#contact" className="hover:text-brand-red transition-colors">Contact</a>
          </div>

          {/* Socials */}
          <div className="flex gap-6">
            <a href="#" className="text-brand-gray hover:text-brand-red hover:scale-110 transition-all">
              <Facebook size={20} />
            </a>
            <a href="#" className="text-brand-gray hover:text-brand-red hover:scale-110 transition-all">
              <Twitter size={20} />
            </a>
            <a href="#" className="text-brand-gray hover:text-brand-red hover:scale-110 transition-all">
              <Instagram size={20} />
            </a>
             <a href="#" className="text-brand-gray hover:text-brand-red hover:scale-110 transition-all">
              <Linkedin size={20} />
            </a>
            <a href="#" className="text-brand-gray hover:text-brand-red hover:scale-110 transition-all">
              <Youtube size={20} />
            </a>
          </div>

        </div>
        
        <div className="text-center mt-12 text-xs text-brand-gray/40">
           &copy; {new Date().getFullYear()} Agatha Design. All rights reserved.
        </div>
      </div>
    </footer>
  );
};