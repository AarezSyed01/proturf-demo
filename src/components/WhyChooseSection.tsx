import React from 'react';
import { motion } from 'motion/react';
import { Trophy, Zap, Award, ShieldCheck, CalendarCheck, MapPin, Sparkles } from 'lucide-react';
import { WHY_CHOOSE_US } from '../data/businessData';

const iconMap: Record<string, React.FC<{ className?: string }>> = {
  Trophy,
  Zap,
  Award,
  ShieldCheck,
  CalendarCheck,
  MapPin,
};

export const WhyChooseSection: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section id="why-us" className="py-24 relative bg-[#080a0c]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-bold tracking-wider uppercase mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            The Pro Turf Advantage
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight uppercase font-display">
            WHY PLAY AT{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-green-400">
              PRO TURF?
            </span>
          </h2>
          <p className="mt-4 text-lg text-slate-300">
            Everything you need for a seamless, energetic, and memorable game night in Latur.
          </p>
        </motion.div>

        {/* 6 Grid Feature Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
        >
          {WHY_CHOOSE_US.map((item) => {
            const IconComponent = iconMap[item.iconName] || Trophy;
            return (
              <motion.div
                key={item.id}
                variants={cardVariants}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                className="group relative p-8 rounded-3xl bg-[#0d1117] border border-slate-800/90 hover:border-emerald-500/40 transition-all duration-300 hover:shadow-xl hover:shadow-emerald-950/40 flex flex-col justify-between"
              >
                {/* Subtle top border highlight on hover */}
                <div className="absolute top-0 left-8 right-8 h-[2px] bg-gradient-to-r from-transparent via-emerald-500/0 to-transparent group-hover:via-emerald-400/80 transition-all duration-500"></div>

                <div>
                  <div className="w-14 h-14 rounded-2xl bg-slate-900 border border-slate-700/80 group-hover:border-emerald-500/50 flex items-center justify-center text-emerald-400 mb-6 transition-colors shadow-inner group-hover:bg-emerald-500/10">
                    <IconComponent className="w-7 h-7 text-emerald-400 group-hover:scale-110 transition-transform" />
                  </div>

                  <h3 className="text-xl font-extrabold text-white font-display mb-3 group-hover:text-emerald-400 transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-slate-300 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-slate-800/60 flex items-center justify-between text-xs text-slate-400 font-bold uppercase tracking-wider">
                  <span>Facility Standard</span>
                  <span className="text-emerald-400 group-hover:translate-x-1 transition-transform">
                    ✓ Verified
                  </span>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

