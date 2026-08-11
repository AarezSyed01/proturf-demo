import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageSquare, X } from 'lucide-react';
import { BUSINESS_INFO } from '../data/businessData';

export const FloatingWhatsApp: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(true);

  const containerVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.16, 1, 0.3, 1],
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const childVariants = {
    hidden: { opacity: 0, y: 15, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.4,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="fixed bottom-20 sm:bottom-6 right-4 sm:right-6 z-50 flex flex-col items-end gap-2 group"
      id="floating-whatsapp-container"
    >
      {/* Tooltip Badge */}
      <AnimatePresence>
        {showTooltip && (
          <motion.div
            variants={childVariants}
            exit={{ opacity: 0, scale: 0.8, y: 10, transition: { duration: 0.2 } }}
            className="relative bg-slate-900 border border-emerald-500/40 text-slate-100 text-xs font-bold px-3.5 py-2 rounded-2xl shadow-xl backdrop-blur-md flex items-center gap-2"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping shrink-0"></span>
            <span>Book Slot on WhatsApp</span>
            <button
              onClick={() => setShowTooltip(false)}
              className="text-slate-400 hover:text-white p-0.5 transition-colors"
              aria-label="Close tooltip"
            >
              <X className="w-3 h-3" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* WhatsApp Floating Button */}
      <motion.a
        variants={childVariants}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        href={BUSINESS_INFO.whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="relative p-4 rounded-full bg-gradient-to-r from-emerald-500 to-green-500 text-slate-950 font-black shadow-2xl shadow-emerald-500/40 border-2 border-emerald-300/40 group flex items-center justify-center glow-green"
        aria-label="Book on WhatsApp"
        id="floating-whatsapp-btn"
      >
        <span className="absolute inset-0 rounded-full bg-emerald-400 animate-ping opacity-20 pointer-events-none"></span>
        <MessageSquare className="w-7 h-7 fill-slate-950 relative z-10" />
      </motion.a>
    </motion.div>
  );
};
