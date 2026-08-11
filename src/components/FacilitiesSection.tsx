import React from 'react';
import { motion } from 'motion/react';
import { Check, MessageSquare, ArrowRight, Activity, Trophy } from 'lucide-react';
import { FACILITIES } from '../data/businessData';

interface FacilitiesSectionProps {
  onOpenBookingModal: (sport?: 'turf' | 'pickleball') => void;
}

export const FacilitiesSection: React.FC<FacilitiesSectionProps> = ({ onOpenBookingModal }) => {
  return (
    <section id="facilities" className="py-24 relative bg-[#0a0e12]">
      {/* Background Glow Effect */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-emerald-500/10 blur-[150px] pointer-events-none rounded-full"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-bold tracking-wider uppercase mb-4">
            <Activity className="w-3.5 h-3.5" />
            Our World-Class Facilities
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight uppercase font-display">
            CHOOSE YOUR{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-green-400">
              GAME
            </span>
          </h2>
          <p className="mt-4 text-lg text-slate-300">
            Select your sport, gather your team, and enjoy a high-quality sports experience in Latur.
          </p>
        </motion.div>

        {/* Facilities Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
          {FACILITIES.map((facility, index) => {
            const isTurf = facility.id === 'turf';
            return (
              <motion.div
                key={facility.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="group relative rounded-3xl bg-[#0d1117] border border-slate-800 hover:border-emerald-500/40 overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-emerald-950/50 flex flex-col justify-between"
              >
                {/* Image & Badge Overlay */}
                <div className="relative h-64 sm:h-72 overflow-hidden">
                  <img
                    src={facility.image}
                    alt={facility.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 filter brightness-90 contrast-105"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0d1117] via-[#0d1117]/40 to-transparent"></div>

                  {/* Top Badge */}
                  <div className="absolute top-4 left-4 flex items-center gap-2">
                    <span className="px-3 py-1 rounded-full bg-slate-950/80 border border-emerald-500/40 backdrop-blur-md text-emerald-400 text-xs font-bold uppercase tracking-wider flex items-center gap-1.5">
                      <Trophy className="w-3.5 h-3.5 text-emerald-400" />
                      {facility.badge}
                    </span>
                  </div>

                  {/* Title overlay */}
                  <div className="absolute bottom-4 left-6 right-6">
                    <h3 className="text-2xl sm:text-3xl font-black text-white font-display uppercase tracking-wide">
                      {facility.title}
                    </h3>
                    <p className="text-xs font-extrabold text-emerald-400 uppercase tracking-widest">
                      {facility.tagline}
                    </p>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between space-y-6">
                  <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                    “{facility.description}”
                  </p>

                  {/* Feature Checklist */}
                  <div className="space-y-2.5 pt-2 border-t border-slate-800/80">
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">
                      Key Highlights:
                    </p>
                    {facility.features.map((feat, idx) => (
                      <div key={idx} className="flex items-center gap-3">
                        <div className="w-5 h-5 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center shrink-0">
                          <Check className="w-3 h-3 text-emerald-400" />
                        </div>
                        <span className="text-sm font-semibold text-slate-200">{feat}</span>
                      </div>
                    ))}
                  </div>

                  {/* Card CTA */}
                  <div className="pt-4">
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => onOpenBookingModal(isTurf ? 'turf' : 'pickleball')}
                      className="w-full py-4 rounded-xl bg-gradient-to-r from-emerald-500 to-green-500 hover:from-emerald-400 hover:to-green-400 text-slate-950 font-extrabold text-base tracking-wide transition-all duration-300 flex items-center justify-center gap-2 shadow-lg shadow-emerald-500/20 group-hover:shadow-emerald-500/30"
                      id={`book-${facility.id}-btn`}
                    >
                      <MessageSquare className="w-4 h-4 fill-slate-950" />
                      <span>{facility.ctaText}</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

