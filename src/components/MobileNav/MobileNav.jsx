import { useState } from "react";
import NovaStackLogo from "../NovaStackLogo/NovaStackLogo";
import { Menu, X } from 'lucide-react';
const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="md:hidden bg-slate-950 border-b border-slate-800 sticky top-0 z-40">
      <div className="flex items-center justify-between px-4 py-4">
        <NovaStackLogo />
        
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-slate-300 hover:text-cyan-400 transition-colors"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {isOpen && (
        <div className="border-t border-slate-800 bg-slate-900 px-4 py-4 space-y-3 animate-in fade-in slide-in-from-top-2 duration-200">
          <a
            href="#features"
            onClick={() => setIsOpen(false)}
            className="block text-slate-300 hover:text-cyan-400 transition-colors font-medium py-2"
          >
            Features
          </a>
          <a
            href="#services"
            onClick={() => setIsOpen(false)}
            className="block text-slate-300 hover:text-cyan-400 transition-colors font-medium py-2"
          >
            Services
          </a>
          <a
            href="#about"
            onClick={() => setIsOpen(false)}
            className="block text-slate-300 hover:text-cyan-400 transition-colors font-medium py-2"
          >
            About
          </a>
          <a
            href="#contact"
            onClick={() => setIsOpen(false)}
            className="block text-slate-300 hover:text-cyan-400 transition-colors font-medium py-2"
          >
            Contact
          </a>
          
          <div className="border-t border-slate-700 pt-3 mt-3 space-y-2">
            <button className="w-full px-4 py-2 text-slate-300 border border-slate-700 rounded-lg hover:border-cyan-400 hover:text-cyan-400 transition-colors font-medium">
              Sign In
            </button>
            <button className="w-full px-4 py-2 bg-gradient-to-r from-cyan-400 to-blue-500 text-slate-950 rounded-lg font-semibold hover:shadow-lg hover:shadow-cyan-400/50 transition-all">
              Get Started
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};
export default MobileNav;