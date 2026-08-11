import React from 'react';
import { motion } from 'motion/react';
import { CheckCircle2, MessageSquare, ArrowRight, ShieldCheck, Sparkles } from 'lucide-react';
import { BUSINESS_INFO } from '../data/businessData';

interface AboutSectionProps {
  onOpenBookingModal: (sport?: 'turf' | 'pickleball') => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onOpenBookingModal }) => {
  const features = [
    "Quality turf playing experience with cushioned feel & grip",
    "Excellent high-lumen lighting for clear evening & night matches",
    "Strong, tall surrounding nets for safe & continuous gameplay",
    "Clean, well-maintained facilities & comfortable ambient surroundings",
    "Cooperative and friendly staff to assist players",
    "Smooth & quick slot booking process via WhatsApp",
    "Ideal setup for both casual group games and competitive tournaments"
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden bg-[#080a0c]">
      {/* Subtle Background Glow */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-emerald-500/10 blur-[130px] pointer-events-none rounded-full"></div>

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
            About Pro Turf & Pickleball
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight uppercase font-display leading-tight">
            WHERE THE GAME GETS{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-green-400">
              SERIOUS
            </span>
          </h2>
          <p className="mt-4 text-lg text-slate-300">
            Latur’s premier sports arena built for passion, competition, and memorable matchdays.
          </p>
        </motion.div>

        {/* 2 Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Image with Floating Stats Badge */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 relative"
          >
            <div className="relative rounded-3xl overflow-hidden border border-emerald-500/20 shadow-2xl shadow-emerald-950/50 group">
              <img
                src="https://images.unsplash.com/photo-1575361204480-aadea25e6e68?q=80&w=1000&auto=format&fit=crop"
                alt="Pro Turf Arena Latur"
                className="w-full h-[450px] sm:h-[520px] object-cover group-hover:scale-105 transition-transform duration-700 filter brightness-90 contrast-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#080a0c] via-transparent to-transparent"></div>

              {/* Overlay Badge 1 */}
              <div className="absolute bottom-6 left-6 right-6 p-5 rounded-2xl bg-[#0d1117]/90 border border-slate-800 backdrop-blur-md shadow-xl flex items-center justify-between">
                <div>
                  <p className="text-xs font-bold text-emerald-400 uppercase tracking-widest">
                    Latur City's Choice
                  </p>
                  <p className="text-sm sm:text-base font-extrabold text-white mt-0.5">
                    For Friends, Families & Tournaments
                  </p>
                </div>
                <div className="hidden sm:flex items-center gap-1 bg-emerald-500/20 text-emerald-400 font-extrabold text-xs px-3 py-1.5 rounded-lg border border-emerald-500/30">
                  <ShieldCheck className="w-4 h-4" />
                  <span>4.9 / 5 Rating</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Compelling Copy & Key Features */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 space-y-6"
          >
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight font-display">
              A World-Class Sports Destination in Latur, Designed for Every Match
            </h3>

            <p className="text-slate-300 text-base leading-relaxed">
              Located conveniently at Deep Jyoti Nagar in Latur, <strong className="text-emerald-400 font-semibold">{BUSINESS_INFO.name}</strong> provides a high-energy, well-maintained arena for sports enthusiasts. Whether you are gathering friends for an evening box cricket clash, practicing football drills, or diving into an energetic pickleball match, our facility delivers a top-tier playing experience.
            </p>

            <p className="text-slate-300 text-base leading-relaxed">
              Equipped with high-intensity floodlights for crystal-clear night visibility, high boundary netting, and clean overall facilities, Pro Turf is engineered so you can focus purely on playing your best game.
            </p>

            {/* Checklist */}
            <div className="pt-2 space-y-3">
              {features.map((feature, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.06 }}
                  className="flex items-start gap-3"
                >
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <span className="text-sm sm:text-base font-medium text-slate-200">
                    {feature}
                  </span>
                </motion.div>
              ))}
            </div>

            {/* CTA */}
            <div className="pt-6">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => onOpenBookingModal()}
                className="inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-gradient-to-r from-emerald-500 to-green-500 text-slate-950 font-black text-base tracking-wide shadow-xl shadow-emerald-500/20 hover:shadow-emerald-500/30 transition-all duration-300"
                id="about-book-btn"
              >
                <MessageSquare className="w-5 h-5 fill-slate-950" />
                <span>Book Your Game</span>
                <ArrowRight className="w-4 h-4" />
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

