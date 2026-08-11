import React from 'react';
import { Phone, MapPin, Instagram, Facebook, ArrowUp } from 'lucide-react';
import { BUSINESS_INFO } from '../data/businessData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#050709] text-slate-400 border-t border-slate-900 pt-16 pb-12 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-900">
          {/* Brand Col */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-400 to-green-600 flex items-center justify-center text-slate-950 font-black text-xl shadow-lg shadow-emerald-500/20">
                P
              </div>
              <div className="flex flex-col">
                <span className="font-extrabold text-xl tracking-tight text-white font-display">
                  PRO TURF
                </span>
                <span className="text-[10px] uppercase tracking-widest text-emerald-400 font-bold -mt-1">
                  & Pro Pickleball
                </span>
              </div>
            </div>

            <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
              Premium sports experience in Latur. Play box cricket, football, and pickleball under high-intensity floodlights with family, friends, and teams.
            </p>

            {/* Google Rating Tag */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-xs font-semibold text-slate-300">
              <span className="text-amber-400">★★★★★</span>
              <span>4.9/5 from 138+ Google Reviews</span>
            </div>
          </div>

          {/* Quick Links Col */}
          <div className="lg:col-span-3 space-y-3">
            <p className="text-xs font-extrabold text-white uppercase tracking-widest font-display">
              Quick Links
            </p>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#home" className="hover:text-emerald-400 transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#facilities" className="hover:text-emerald-400 transition-colors">
                  Facilities (Turf & Pickleball)
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-emerald-400 transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#reviews" className="hover:text-emerald-400 transition-colors">
                  Player Reviews
                </a>
              </li>
              <li>
                <a href="#location" className="hover:text-emerald-400 transition-colors">
                  Location & Map
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-emerald-400 transition-colors">
                  Contact & Booking
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Details Col */}
          <div className="lg:col-span-4 space-y-4">
            <p className="text-xs font-extrabold text-white uppercase tracking-widest font-display">
              Contact & Address
            </p>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-emerald-400 shrink-0 mt-1" />
                <div>
                  <p className="font-bold text-white">{BUSINESS_INFO.phoneDisplay}</p>
                  <p className="text-xs text-slate-500">Available 24 Hours for Booking</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-emerald-400 shrink-0 mt-1" />
                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                  {BUSINESS_INFO.location}
                </p>
              </div>
            </div>

            {/* Social Media Links */}
            <div className="pt-2">
              <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
                Connect With Us:
              </p>
              <div className="flex items-center gap-3">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-emerald-400 hover:border-emerald-500/40 transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram className="w-4 h-4" />
                </a>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-emerald-400 hover:border-emerald-500/40 transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom copyright & back to top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© 2026 Pro Turf & Pro Pickleball. All Rights Reserved.</p>
          <div className="flex items-center gap-6">
            <span>Open 24/7 in Latur</span>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-emerald-400 flex items-center gap-1 transition-colors"
            >
              <ArrowUp className="w-3.5 h-3.5" />
              <span>Back to Top</span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
