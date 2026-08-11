import React from 'react';
import { motion } from 'motion/react';
import { MessageSquare, Phone, Trophy, ChevronRight } from 'lucide-react';
import { BUSINESS_INFO } from '../data/businessData';

interface FinalCtaProps {
  onOpenBookingModal: (sport?: 'turf' | 'pickleball') => void;
}

export const FinalCta: React.FC<FinalCtaProps> = ({ onOpenBookingModal }) => {
  return (
    <section className="py-20 relative bg-[#080a0c] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.96 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="relative rounded-3xl bg-gradient-to-br from-emerald-950/80 via-[#0d1319] to-black border border-emerald-500/30 p-10 sm:p-16 text-center overflow-hidden shadow-2xl shadow-emerald-950/60"
        >
          {/* Subtle Glows */}
          <div className="absolute -top-24 -left-24 w-80 h-80 bg-emerald-500/20 rounded-full blur-[120px] pointer-events-none"></div>
          <div className="absolute -bottom-24 -right-24 w-80 h-80 bg-green-500/20 rounded-full blur-[120px] pointer-events-none"></div>

          <div className="relative z-10 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-extrabold uppercase tracking-widest mb-6">
              <Trophy className="w-4 h-4" />
              Pro Turf & Pro Pickleball Latur
            </div>

            <h2 className="text-3xl sm:text-5xl md:text-6xl font-black text-white uppercase font-display tracking-tight leading-tight mb-4">
              YOUR GAME. YOUR TEAM.{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-green-400 to-lime-300">
                YOUR TURF.
              </span>
            </h2>

            <p className="text-lg sm:text-xl font-bold text-slate-300 mb-8">
              Make your next match count.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => onOpenBookingModal()}
                className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-emerald-500 to-green-400 text-slate-950 font-black text-base tracking-wide shadow-xl shadow-emerald-500/30 transition-all duration-300 flex items-center justify-center gap-2.5"
                id="final-book-slot-btn"
              >
                <MessageSquare className="w-5 h-5 fill-slate-950" />
                <span>BOOK YOUR SLOT</span>
                <ChevronRight className="w-4 h-4" />
              </motion.button>

              <motion.a
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                href={`tel:${BUSINESS_INFO.phoneRaw}`}
                className="w-full sm:w-auto px-8 py-4 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-700 font-extrabold text-base tracking-wide transition-all flex items-center justify-center gap-2.5"
                id="final-contact-us-btn"
              >
                <Phone className="w-5 h-5 text-emerald-400" />
                <span>CONTACT US</span>
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

