import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { StatsSection } from './components/StatsSection';
import { AboutSection } from './components/AboutSection';
import { FacilitiesSection } from './components/FacilitiesSection';
import { WhyChooseSection } from './components/WhyChooseSection';
import { GallerySection } from './components/GallerySection';
import { ReviewsSection } from './components/ReviewsSection';
import { BookingSection } from './components/BookingSection';
import { LocationSection } from './components/LocationSection';
import { FaqSection } from './components/FaqSection';
import { FinalCta } from './components/FinalCta';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { BookingModal } from './components/BookingModal';
import { MobileBottomBar } from './components/MobileBottomBar';

export default function App() {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [modalDefaultSport, setModalDefaultSport] = useState<'turf' | 'pickleball'>('turf');

  const handleOpenBookingModal = (sport?: 'turf' | 'pickleball') => {
    if (sport) {
      setModalDefaultSport(sport);
    }
    setIsBookingModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#080a0c] text-slate-100 font-sans selection:bg-emerald-500 selection:text-slate-950">
      {/* Navigation */}
      <Navbar onOpenBookingModal={handleOpenBookingModal} />

      {/* Main Page Sections */}
      <main>
        <Hero onOpenBookingModal={handleOpenBookingModal} />
        <StatsSection />
        <AboutSection onOpenBookingModal={handleOpenBookingModal} />
        <FacilitiesSection onOpenBookingModal={handleOpenBookingModal} />
        <WhyChooseSection />
        <GallerySection onOpenBookingModal={handleOpenBookingModal} />
        <ReviewsSection />
        <BookingSection />
        <LocationSection />
        <FaqSection />
        <FinalCta onOpenBookingModal={handleOpenBookingModal} />
      </main>

      {/* Footer & Floating Widgets */}
      <Footer />
      <FloatingWhatsApp />
      <MobileBottomBar onOpenBookingModal={handleOpenBookingModal} />

      {/* Global Booking Modal */}
      <BookingModal
        isOpen={isBookingModalOpen}
        onClose={() => setIsBookingModalOpen(false)}
        defaultSport={modalDefaultSport}
      />
    </div>
  );
}
