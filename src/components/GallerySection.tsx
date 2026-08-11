import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Camera, X, ZoomIn, MessageSquare, ArrowRight } from 'lucide-react';
import { GALLERY_ITEMS } from '../data/businessData';
import { GalleryItem } from '../types';

interface GallerySectionProps {
  onOpenBookingModal: (sport?: 'turf' | 'pickleball') => void;
}

export const GallerySection: React.FC<GallerySectionProps> = ({ onOpenBookingModal }) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);

  const categories = [
    { key: 'all', label: 'All Photos' },
    { key: 'turf', label: 'Turf' },
    { key: 'cricket', label: 'Cricket' },
    { key: 'football', label: 'Football' },
    { key: 'pickleball', label: 'Pickleball' },
    { key: 'ambience', label: 'Ambience' },
  ];

  const filteredItems = activeCategory === 'all'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter((item) => item.category === activeCategory);

  return (
    <section id="gallery" className="py-24 relative bg-[#0a0e12]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-bold tracking-wider uppercase mb-4">
            <Camera className="w-3.5 h-3.5" />
            Photo Gallery
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight uppercase font-display">
            THE PRO TURF{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-green-400">
              EXPERIENCE
            </span>
          </h2>
          <p className="mt-4 text-lg text-slate-300">
            A glimpse into the turf, floodlights, courts, and electrifying sports action at Latur.
          </p>
        </motion.div>

        {/* Category Tabs */}
        <div className="flex items-center justify-center flex-wrap gap-2 sm:gap-3 mb-10">
          {categories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setActiveCategory(cat.key)}
              className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-extrabold transition-all duration-300 border ${
                activeCategory === cat.key
                  ? 'bg-emerald-500 border-emerald-400 text-slate-950 shadow-lg shadow-emerald-500/25 scale-105'
                  : 'bg-slate-900/80 border-slate-800 text-slate-300 hover:text-white hover:border-slate-700'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Image Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          <AnimatePresence>
            {filteredItems.map((item) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.35 }}
                key={item.id}
                onClick={() => setSelectedImage(item)}
                className="group relative rounded-2xl overflow-hidden bg-[#0d1117] border border-slate-800 hover:border-emerald-500/50 cursor-pointer shadow-lg hover:shadow-emerald-950/40 transition-all duration-500"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={item.imageUrl}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 filter brightness-90 group-hover:brightness-100"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>

                  {/* Hover Icon */}
                  <div className="absolute top-4 right-4 p-2.5 rounded-xl bg-slate-950/80 backdrop-blur-md text-emerald-400 opacity-0 group-hover:opacity-100 transition-all duration-300 scale-90 group-hover:scale-100 border border-emerald-500/30">
                    <ZoomIn className="w-4 h-4" />
                  </div>

                  {/* Bottom Details */}
                  <div className="absolute bottom-4 left-4 right-4">
                    <span className="text-[10px] uppercase font-black text-emerald-400 tracking-widest bg-emerald-950/80 px-2.5 py-1 rounded-md border border-emerald-500/30">
                      {item.category}
                    </span>
                    <h3 className="text-base font-extrabold text-white font-display mt-2 group-hover:text-emerald-400 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs text-slate-300 line-clamp-1 mt-0.5">
                      {item.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Gallery CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5 }}
          className="mt-16 text-center p-8 rounded-3xl bg-slate-900/60 border border-slate-800 max-w-3xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6"
        >
          <div className="text-left">
            <h3 className="text-xl font-black text-white font-display">
              Want to see it in action?
            </h3>
            <p className="text-sm text-slate-300 mt-1">
              Book your slot now and play under Latur's best floodlights.
            </p>
          </div>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => onOpenBookingModal()}
            className="px-6 py-3.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-extrabold text-sm tracking-wide shrink-0 transition-all flex items-center gap-2 shadow-lg shadow-emerald-500/20"
            id="gallery-book-cta"
          >
            <MessageSquare className="w-4 h-4" />
            <span>Book Your Slot</span>
            <ArrowRight className="w-4 h-4" />
          </motion.button>
        </motion.div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md p-4 sm:p-8 flex items-center justify-center"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className="relative max-w-4xl w-full bg-[#0d1117] border border-slate-800 rounded-3xl overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 z-10 p-2 rounded-full bg-slate-900/80 border border-slate-700 text-slate-300 hover:text-white"
              >
                <X className="w-6 h-6" />
              </button>

              <div className="max-h-[70vh] overflow-hidden">
                <img
                  src={selectedImage.imageUrl}
                  alt={selectedImage.title}
                  className="w-full h-full object-contain max-h-[70vh] mx-auto"
                  referrerPolicy="no-referrer"
                />
              </div>

              <div className="p-6 bg-[#080a0c] border-t border-slate-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div>
                  <span className="text-xs font-bold uppercase tracking-widest text-emerald-400">
                    {selectedImage.category}
                  </span>
                  <h3 className="text-xl font-extrabold text-white font-display">
                    {selectedImage.title}
                  </h3>
                  <p className="text-sm text-slate-300 mt-1">
                    {selectedImage.description}
                  </p>
                </div>
                <button
                  onClick={() => {
                    setSelectedImage(null);
                    onOpenBookingModal();
                  }}
                  className="px-5 py-2.5 rounded-xl bg-emerald-500 text-slate-950 font-bold text-xs uppercase tracking-wider flex items-center gap-2 hover:bg-emerald-400"
                >
                  <MessageSquare className="w-4 h-4" />
                  Book This Arena
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

