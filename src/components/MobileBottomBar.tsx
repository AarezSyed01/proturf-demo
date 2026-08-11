import React from 'react';
import { Phone, MessageSquare, Calendar } from 'lucide-react';
import { BUSINESS_INFO } from '../data/businessData';

interface MobileBottomBarProps {
  onOpenBookingModal: (sport?: 'turf' | 'pickleball') => void;
}

export const MobileBottomBar: React.FC<MobileBottomBarProps> = ({ onOpenBookingModal }) => {
  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-40 sm:hidden bg-[#080a0c]/95 border-t border-emerald-500/30 backdrop-blur-xl px-4 py-2.5 shadow-2xl flex items-center gap-2.5"
      id="mobile-sticky-bottom-bar"
    >
      <a
        href={`tel:${BUSINESS_INFO.phoneRaw}`}
        className="flex-1 py-3 px-3 rounded-xl bg-slate-900 border border-slate-700/80 text-slate-200 font-extrabold text-xs tracking-wide flex items-center justify-center gap-2 active:scale-95 transition-transform"
        id="mobile-bar-call-btn"
      >
        <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
        <span>CALL NOW</span>
      </a>

      <button
        onClick={() => onOpenBookingModal()}
        className="flex-1 py-3 px-3 rounded-xl bg-gradient-to-r from-emerald-500 to-green-400 text-slate-950 font-black text-xs tracking-wide shadow-lg shadow-emerald-500/25 flex items-center justify-center gap-2 active:scale-95 transition-transform"
        id="mobile-bar-book-btn"
      >
        <MessageSquare className="w-4 h-4 fill-slate-950 shrink-0" />
        <span>BOOK SLOT</span>
      </button>
    </div>
  );
};
