import React from 'react';
import { motion } from 'motion/react';
import { Star, ChevronRight, MessageSquare, ShieldCheck, Clock, MapPin } from 'lucide-react';
import { BUSINESS_INFO } from '../data/businessData';

interface HeroProps {
  onOpenBookingModal: (sport?: 'turf' | 'pickleball') => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBookingModal }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-28 pb-20 overflow-hidden bg-[#080a0c]"
    >
      {/* Background Image with Dark Gradient Overlays */}
      <div className="absolute inset-0 z-0">
        <motion.img
          initial={{ scale: 1.15, opacity: 0 }}
          animate={{ scale: 1.05, opacity: 1 }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
          src="https://images.unsplash.com/photo-1529900748604-07564a03e7a6?q=80&w=1920&auto=format&fit=crop"
          alt="Pro Turf & Pickleball Sports Facility at Night"
          className="w-full h-full object-cover object-center filter brightness-75 contrast-110"
          referrerPolicy="no-referrer"
        />
        {/* Layered Gradient Overlays for High Legibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#080a0c] via-[#080a0c]/80 to-black/60"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#080a0c] via-transparent to-[#080a0c]/80"></div>
        {/* Subtle Green Ambient Glow */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-emerald-500/15 blur-[140px] pointer-events-none rounded-full"></div>
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center"
      >
        {/* Trust Badge */}
        <motion.div
          variants={itemVariants}
          className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-slate-900/80 border border-emerald-500/30 backdrop-blur-md mb-8 shadow-lg shadow-emerald-950/40"
        >
          <div className="flex items-center text-amber-400">
            <Star className="w-4 h-4 fill-amber-400" />
            <Star className="w-4 h-4 fill-amber-400" />
            <Star className="w-4 h-4 fill-amber-400" />
            <Star className="w-4 h-4 fill-amber-400" />
            <Star className="w-4 h-4 fill-amber-400" />
          </div>
          <span className="text-xs sm:text-sm font-bold text-slate-200">
            {BUSINESS_INFO.googleRating}/5 Google Rating
          </span>
          <span className="text-slate-600">•</span>
          <span className="text-xs sm:text-sm font-semibold text-emerald-400">
            {BUSINESS_INFO.reviewCount}+ Google Reviews
          </span>
        </motion.div>

        {/* Main Headline */}
        <motion.h1
          variants={itemVariants}
          className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-white tracking-tight leading-none mb-4 font-display uppercase"
        >
          PLAY. COMPETE.{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-green-400 to-lime-300 glow-green-text">
            DOMINATE.
          </span>
        </motion.h1>

        {/* Subheading */}
        <motion.p
          variants={itemVariants}
          className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-200 tracking-wide mb-6 font-display max-w-3xl"
        >
          {BUSINESS_INFO.subtitle}
        </motion.p>

        {/* Supporting Text */}
        <motion.p
          variants={itemVariants}
          className="text-base sm:text-lg text-slate-300/90 max-w-2xl leading-relaxed mb-10"
        >
          “{BUSINESS_INFO.description}”
        </motion.p>

        {/* Primary and Secondary CTA Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto mb-12"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.96 }}
            onClick={() => onOpenBookingModal()}
            className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-emerald-500 via-green-500 to-emerald-400 text-slate-950 font-black text-lg tracking-wide shadow-xl shadow-emerald-500/25 hover:shadow-emerald-500/40 transition-all duration-300 flex items-center justify-center gap-3 group"
            id="hero-primary-cta"
          >
            <MessageSquare className="w-5 h-5 fill-slate-950 group-hover:scale-110 transition-transform" />
            <span>Book Your Slot</span>
            <ChevronRight className="w-5 h-5 text-slate-950 group-hover:translate-x-1 transition-transform" />
          </motion.button>

          <motion.a
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            href="#facilities"
            className="w-full sm:w-auto px-8 py-4 rounded-xl bg-slate-900/80 hover:bg-slate-800 text-slate-200 hover:text-white font-extrabold text-base border border-slate-700/80 hover:border-emerald-500/50 backdrop-blur-md transition-all duration-300 flex items-center justify-center gap-2"
            id="hero-secondary-cta"
          >
            <span>Explore Facilities</span>
            <ChevronRight className="w-4 h-4 text-emerald-400" />
          </motion.a>
        </motion.div>

        {/* Quick Highlights Bar */}
        <motion.div
          variants={itemVariants}
          className="grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-6 pt-6 border-t border-slate-800/80 w-full max-w-3xl text-left"
        >
          <div className="flex items-center gap-3 bg-slate-900/40 p-3 rounded-xl border border-slate-800/50 backdrop-blur-sm">
            <Clock className="w-5 h-5 text-emerald-400 shrink-0" />
            <div>
              <p className="text-xs text-slate-400 uppercase font-bold tracking-wider">Timings</p>
              <p className="text-sm font-extrabold text-slate-200">Open 24 Hours</p>
            </div>
          </div>

          <div className="flex items-center gap-3 bg-slate-900/40 p-3 rounded-xl border border-slate-800/50 backdrop-blur-sm">
            <MapPin className="w-5 h-5 text-emerald-400 shrink-0" />
            <div>
              <p className="text-xs text-slate-400 uppercase font-bold tracking-wider">Location</p>
              <p className="text-sm font-extrabold text-slate-200 truncate">Deep Jyoti Nagar, Latur</p>
            </div>
          </div>

          <div className="col-span-2 sm:col-span-1 flex items-center gap-3 bg-slate-900/40 p-3 rounded-xl border border-slate-800/50 backdrop-blur-sm">
            <ShieldCheck className="w-5 h-5 text-emerald-400 shrink-0" />
            <div>
              <p className="text-xs text-slate-400 uppercase font-bold tracking-wider">Experience</p>
              <p className="text-sm font-extrabold text-slate-200">Turf & Pickleball</p>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

