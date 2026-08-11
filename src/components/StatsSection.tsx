import React from 'react';
import { motion } from 'motion/react';
import { Star, MessageSquareQuote, Clock, MapPin } from 'lucide-react';
import { BUSINESS_INFO } from '../data/businessData';

export const StatsSection: React.FC = () => {
  const stats = [
    {
      value: `${BUSINESS_INFO.googleRating}★`,
      label: 'Google Rating',
      sublabel: 'Top rated facility in Latur',
      icon: Star,
      iconColor: 'text-amber-400',
    },
    {
      value: `${BUSINESS_INFO.reviewCount}+`,
      label: 'Google Reviews',
      sublabel: 'Verified player feedback',
      icon: MessageSquareQuote,
      iconColor: 'text-emerald-400',
    },
    {
      value: '24/7',
      label: 'Open Always',
      sublabel: 'Day & night floodlights',
      icon: Clock,
      iconColor: 'text-cyan-400',
    },
    {
      value: 'Latur',
      label: 'Prime Location',
      sublabel: 'Deep Jyoti Nagar, MH',
      icon: MapPin,
      iconColor: 'text-emerald-400',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1],
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.9, y: 20 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section className="relative z-20 -mt-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto" id="stats">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-40px' }}
        className="grid grid-cols-2 md:grid-cols-4 gap-4 p-6 sm:p-8 rounded-3xl bg-[#0d1117]/90 border border-emerald-500/20 backdrop-blur-xl shadow-2xl shadow-black/80"
      >
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="flex flex-col items-center sm:items-start p-4 rounded-2xl bg-slate-900/40 border border-slate-800/80 hover:border-emerald-500/40 transition-all duration-300 group"
            >
              <div className="flex items-center gap-2 mb-2">
                <div className="p-2 rounded-xl bg-slate-800/80 group-hover:bg-emerald-500/10 transition-colors">
                  <Icon className={`w-5 h-5 ${stat.iconColor}`} />
                </div>
                <span className="text-xs uppercase tracking-wider font-extrabold text-slate-400">
                  {stat.label}
                </span>
              </div>
              <p className="text-3xl sm:text-4xl font-black text-white font-display tracking-tight group-hover:text-emerald-400 transition-colors">
                {stat.value}
              </p>
              <p className="text-xs text-slate-400 mt-1 font-medium">{stat.sublabel}</p>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
};

