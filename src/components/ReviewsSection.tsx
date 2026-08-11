import React from 'react';
import { motion } from 'motion/react';
import { Star, MessageSquareQuote, ExternalLink, ShieldCheck } from 'lucide-react';
import { REVIEWS_DATA, BUSINESS_INFO } from '../data/businessData';

export const ReviewsSection: React.FC = () => {
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
    <section id="reviews" className="py-24 relative bg-[#080a0c] overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-emerald-500/10 blur-[150px] pointer-events-none rounded-full"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-bold tracking-wider uppercase mb-4">
            <ShieldCheck className="w-3.5 h-3.5" />
            Google Reviews & Feedback
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight uppercase font-display">
            WHAT PLAYERS{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-green-400">
              SAY
            </span>
          </h2>
          <p className="mt-4 text-lg text-slate-300">
            Real feedback from players, teams, and tournament organizers in Latur.
          </p>
        </motion.div>

        {/* Prominent Google Rating Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6 }}
          className="p-8 rounded-3xl bg-[#0d1117] border border-emerald-500/30 shadow-2xl mb-12 max-w-2xl mx-auto text-center flex flex-col items-center justify-center relative overflow-hidden"
        >
          <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-emerald-500 via-green-400 to-emerald-500"></div>

          <div className="text-5xl sm:text-6xl font-black text-white font-display tracking-tight flex items-center justify-center gap-2">
            <span>4.9</span>
            <span className="text-2xl text-slate-400 font-bold">/ 5</span>
          </div>

          <div className="flex items-center gap-1.5 text-amber-400 my-3">
            <Star className="w-6 h-6 fill-amber-400" />
            <Star className="w-6 h-6 fill-amber-400" />
            <Star className="w-6 h-6 fill-amber-400" />
            <Star className="w-6 h-6 fill-amber-400" />
            <Star className="w-6 h-6 fill-amber-400" />
          </div>

          <p className="text-base font-bold text-slate-200">
            Based on <span className="text-emerald-400 font-extrabold">{BUSINESS_INFO.reviewCount} Verified Google Reviews</span>
          </p>
          <p className="text-xs text-slate-400 mt-1">
            Top rated sports club & turf facility in Latur city
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {REVIEWS_DATA.map((rev) => (
            <motion.div
              key={rev.id}
              variants={cardVariants}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="p-7 rounded-3xl bg-[#0d1117] border border-slate-800 hover:border-emerald-500/40 transition-all duration-300 flex flex-col justify-between group shadow-lg"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>
                  <span className="text-[10px] uppercase font-bold text-emerald-400 bg-emerald-950/80 px-2.5 py-1 rounded-full border border-emerald-500/30">
                    {rev.highlight}
                  </span>
                </div>

                <div className="relative pl-6 border-l-2 border-emerald-500/40 mb-6">
                  <p className="text-slate-200 text-sm leading-relaxed italic">
                    “{rev.quote}”
                  </p>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between">
                <div>
                  <p className="text-sm font-extrabold text-white font-display">
                    {rev.author}
                  </p>
                  <p className="text-xs text-slate-400">
                    {rev.timeAgo}
                  </p>
                </div>
                <MessageSquareQuote className="w-6 h-6 text-slate-700 group-hover:text-emerald-400 transition-colors" />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Google Reviews Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-12 text-center"
        >
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href={BUSINESS_INFO.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-slate-900 border border-slate-700 hover:border-emerald-500/50 text-slate-200 hover:text-white font-extrabold text-sm transition-all duration-300 shadow-md"
            id="view-google-reviews-btn"
          >
            <span>View All Reviews on Google</span>
            <ExternalLink className="w-4 h-4 text-emerald-400" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

