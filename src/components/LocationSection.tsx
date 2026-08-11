import React from 'react';
import { MapPin, Navigation, Phone, Clock, ExternalLink, ShieldCheck } from 'lucide-react';
import { BUSINESS_INFO } from '../data/businessData';

export const LocationSection: React.FC = () => {
  return (
    <section id="location" className="py-24 relative bg-[#080a0c]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-bold tracking-wider uppercase mb-4">
            <MapPin className="w-3.5 h-3.5" />
            Easy Access in Latur
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight uppercase font-display">
            FIND PRO{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-green-400">
              TURF
            </span>
          </h2>
          <p className="mt-4 text-lg text-slate-300">
            Conveniently located near LIC Office on Latur Road, Deep Jyoti Nagar, Latur.
          </p>
        </div>

        {/* Location & Map Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Column: Address Details & Action Buttons */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-8 rounded-3xl bg-[#0d1117] border border-slate-800 space-y-6 shadow-xl">
              <div className="flex items-start gap-4">
                <div className="p-3.5 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-extrabold text-white font-display">
                    Facility Address
                  </h3>
                  <p className="text-sm font-semibold text-slate-200 mt-1 leading-relaxed">
                    {BUSINESS_INFO.location}
                  </p>
                </div>
              </div>

              {/* Plus Code Badge */}
              <div className="p-4 rounded-2xl bg-slate-900 border border-slate-800 flex items-center justify-between">
                <div>
                  <p className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">
                    Google Plus Code
                  </p>
                  <p className="text-sm font-black text-emerald-400 font-mono mt-0.5">
                    {BUSINESS_INFO.plusCode}
                  </p>
                </div>
                <ExternalLink className="w-4 h-4 text-slate-500" />
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3.5 rounded-2xl bg-slate-900 border border-slate-800 text-cyan-400 shrink-0">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-base font-extrabold text-white">
                    Facility Timings
                  </h4>
                  <p className="text-sm font-bold text-emerald-400 mt-0.5">
                    {BUSINESS_INFO.timings}
                  </p>
                  <p className="text-xs text-slate-400">
                    High floodlights active all evening & night
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3.5 rounded-2xl bg-slate-900 border border-slate-800 text-emerald-400 shrink-0">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-base font-extrabold text-white">
                    Direct Phone Line
                  </h4>
                  <p className="text-sm font-bold text-slate-200 mt-0.5">
                    {BUSINESS_INFO.phoneDisplay}
                  </p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 space-y-3">
                <a
                  href={BUSINESS_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-4 rounded-xl bg-gradient-to-r from-emerald-500 to-green-500 hover:from-emerald-400 hover:to-green-400 text-slate-950 font-extrabold text-base tracking-wide flex items-center justify-center gap-2.5 transition-all shadow-lg shadow-emerald-500/20"
                  id="get-directions-btn"
                >
                  <Navigation className="w-5 h-5 fill-slate-950" />
                  <span>GET DIRECTIONS</span>
                </a>

                <a
                  href={`tel:${BUSINESS_INFO.phoneRaw}`}
                  className="w-full py-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-200 font-bold text-sm tracking-wide flex items-center justify-center gap-2.5 border border-slate-800 transition-all"
                  id="location-call-btn"
                >
                  <Phone className="w-4 h-4 text-emerald-400" />
                  <span>CALL PRO TURF ({BUSINESS_INFO.phoneDisplay})</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Google Maps Iframe Container */}
          <div className="lg:col-span-7 h-[450px] lg:h-[520px] rounded-3xl overflow-hidden border border-slate-800 relative shadow-2xl group">
            <iframe
              title="Pro Turf & Pro Pickleball Location Map Latur"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3785.451!2d76.5772!3d18.4088!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTjCsDI0JzMxLjciTiA3NsKwMzQnMzcuOSJF!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
              className="w-full h-full border-0 filter contrast-125 brightness-90 grayscale-[30%] group-hover:grayscale-0 transition-all duration-500"
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>

            {/* Map Overlay Badge */}
            <div className="absolute top-4 left-4 bg-slate-950/90 border border-emerald-500/40 p-3 rounded-2xl backdrop-blur-md shadow-lg flex items-center gap-2.5">
              <ShieldCheck className="w-5 h-5 text-emerald-400" />
              <div>
                <p className="text-xs font-black text-white">Pro Turf & Pro Pickleball</p>
                <p className="text-[10px] text-slate-400">Deep Jyoti Nagar, Latur</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
