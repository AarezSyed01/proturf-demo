import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, MessageSquare } from 'lucide-react';
import { BUSINESS_INFO } from '../data/businessData';

interface NavbarProps {
  onOpenBookingModal: (sport?: 'turf' | 'pickleball') => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBookingModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Facilities', href: '#facilities' },
    { name: 'About', href: '#about' },
    { name: 'Reviews', href: '#reviews' },
    { name: 'Location', href: '#location' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header
      id="main-nav"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#080a0c]/90 backdrop-blur-md border-b border-emerald-500/20 py-3 shadow-xl'
          : 'bg-gradient-to-b from-black/80 via-black/40 to-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a
            href="#home"
            className="group flex items-center gap-3 transition-transform hover:scale-105"
            id="nav-logo"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-400 to-green-600 flex items-center justify-center text-slate-950 font-black text-xl shadow-lg shadow-emerald-500/20 border border-emerald-300/30">
              P
            </div>
            <div className="flex flex-col">
              <span className="font-extrabold text-xl tracking-tight text-white flex items-center gap-1 font-display">
                PRO TURF
                <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              </span>
              <span className="text-[10px] uppercase tracking-widest text-emerald-400 font-bold -mt-1">
                & Pro Pickleball
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2" id="desktop-nav">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-3.5 py-2 text-sm font-semibold text-slate-300 hover:text-emerald-400 transition-colors rounded-lg hover:bg-white/5"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Desktop CTA & Quick Call */}
          <div className="hidden md:flex items-center gap-3" id="desktop-cta">
            <a
              href={`tel:${BUSINESS_INFO.phoneRaw}`}
              className="px-3 py-2 text-xs font-semibold text-slate-300 hover:text-white flex items-center gap-1.5 transition-colors border border-slate-800 rounded-lg hover:border-slate-700"
            >
              <Phone className="w-3.5 h-3.5 text-emerald-400" />
              <span>{BUSINESS_INFO.phoneDisplay}</span>
            </a>
            <button
              onClick={() => onOpenBookingModal()}
              className="relative group overflow-hidden rounded-xl bg-gradient-to-r from-emerald-500 to-green-500 px-5 py-2.5 text-sm font-bold text-slate-950 transition-all duration-300 hover:shadow-lg hover:shadow-emerald-500/30 hover:scale-105 active:scale-95"
              id="nav-book-btn"
            >
              <span className="relative z-10 flex items-center gap-1.5 font-extrabold tracking-wide">
                <MessageSquare className="w-4 h-4 fill-slate-950" />
                Book Now
              </span>
            </button>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2.5 rounded-xl bg-slate-900/80 border border-slate-800 text-slate-200 hover:text-emerald-400 focus:outline-none"
            aria-label="Toggle menu"
            id="mobile-menu-btn"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {isMobileMenuOpen && (
        <div
          className="md:hidden bg-[#080a0c]/95 border-b border-emerald-500/20 backdrop-blur-xl px-4 pt-3 pb-6 space-y-3 animate-in slide-in-from-top duration-200"
          id="mobile-drawer"
        >
          <div className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="px-4 py-3 text-base font-semibold text-slate-200 hover:text-emerald-400 hover:bg-white/5 rounded-xl transition-colors flex items-center justify-between"
              >
                <span>{link.name}</span>
                <span className="text-xs text-emerald-500/50">→</span>
              </a>
            ))}
          </div>

          <div className="pt-3 border-t border-slate-800/80 flex flex-col gap-2.5">
            <button
              onClick={() => {
                setIsMobileMenuOpen(false);
                onOpenBookingModal();
              }}
              className="w-full py-3 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-extrabold text-center tracking-wide shadow-lg shadow-emerald-500/20 flex items-center justify-center gap-2"
            >
              <MessageSquare className="w-4 h-4" />
              Book Slot via WhatsApp
            </button>
            <a
              href={`tel:${BUSINESS_INFO.phoneRaw}`}
              className="w-full py-3 rounded-xl bg-slate-900 border border-slate-800 text-slate-200 font-bold text-center flex items-center justify-center gap-2 hover:bg-slate-800"
            >
              <Phone className="w-4 h-4 text-emerald-400" />
              Call {BUSINESS_INFO.phoneDisplay}
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
