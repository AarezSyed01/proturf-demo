import React, { useState } from 'react';
import { MessageSquare, Phone, Calendar, Clock, Users, Send, CheckCircle2 } from 'lucide-react';
import { BUSINESS_INFO, TIME_SLOTS } from '../data/businessData';

export const BookingSection: React.FC = () => {
  const [sport, setSport] = useState<'turf' | 'pickleball' | 'both'>('turf');
  const [date, setDate] = useState<string>(new Date().toISOString().split('T')[0]);
  const [timeSlot, setTimeSlot] = useState<string>(TIME_SLOTS[4]); // Evening/Night Prime
  const [playerName, setPlayerName] = useState<string>('');
  const [playerCount, setPlayerCount] = useState<string>('10 players');

  const handleWhatsAppClick = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    const sportName = sport === 'turf' ? 'Pro Turf' : sport === 'pickleball' ? 'Pro Pickleball' : 'Turf & Pickleball';
    const message = `Hi Pro Turf & Pro Pickleball! I'd like to book a slot:
- *Sport:* ${sportName}
- *Date:* ${date || 'Today/Upcoming'}
- *Preferred Time:* ${timeSlot}
- *Players/Group Size:* ${playerCount}
${playerName ? `- *Booked By:* ${playerName}` : ''}

Please confirm availability and booking process. Thanks!`;

    const encodedMsg = encodeURIComponent(message);
    window.open(`https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${encodedMsg}`, '_blank');
  };

  return (
    <section id="contact" className="py-24 relative bg-gradient-to-b from-[#0a0e12] via-[#0d1319] to-[#080a0c]">
      {/* Background Glow */}
      <div className="absolute top-1/2 right-10 -translate-y-1/2 w-96 h-96 bg-emerald-500/15 blur-[160px] pointer-events-none rounded-full"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-bold tracking-wider uppercase mb-4">
            <MessageSquare className="w-3.5 h-3.5" />
            Instant Slot Booking
          </div>
          <h2 className="text-4xl sm:text-6xl font-black text-white tracking-tight uppercase font-display leading-tight">
            READY TO{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-green-400 to-lime-300">
              PLAY?
            </span>
          </h2>
          <p className="mt-4 text-xl font-bold text-slate-200">
            Gather your team, choose your game, and get your slot at Pro Turf.
          </p>
        </div>

        {/* Quick Direct Buttons & Interactive Slot Selector */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          {/* Left Column: Direct CTA Cards */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            <div className="p-8 rounded-3xl bg-[#0d1117] border border-emerald-500/30 shadow-2xl relative overflow-hidden flex-1 flex flex-col justify-between">
              <div className="space-y-4">
                <span className="px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-xs font-bold uppercase tracking-wider border border-emerald-500/30">
                  Fastest Booking
                </span>
                <h3 className="text-2xl sm:text-3xl font-black text-white font-display">
                  Book Directly on WhatsApp
                </h3>
                <p className="text-slate-300 text-sm leading-relaxed">
                  Send a message to check live slot availability, enquire rates, or reserve your evening/night slot instantly.
                </p>

                <div className="space-y-2.5 pt-2">
                  <div className="flex items-center gap-2.5 text-xs font-semibold text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    <span>Instant response from Pro Turf staff</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-xs font-semibold text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    <span>Flexible time slot selection</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-xs font-semibold text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    <span>Open 24 Hours for all slots</span>
                  </div>
                </div>
              </div>

              <div className="pt-8 space-y-3">
                <a
                  href={`https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=Hi%20Pro%20Turf%20%26%20Pro%20Pickleball%2C%20I%20would%20like%20to%20enquire%20about%20booking%20a%20slot.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-4 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black text-base tracking-wide flex items-center justify-center gap-3 transition-all duration-300 shadow-lg shadow-emerald-500/25 hover:scale-102"
                  id="cta-whatsapp-btn"
                >
                  <MessageSquare className="w-5 h-5 fill-slate-950" />
                  <span>BOOK ON WHATSAPP</span>
                </a>

                <a
                  href={`tel:${BUSINESS_INFO.phoneRaw}`}
                  className="w-full py-4 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-700 font-extrabold text-base tracking-wide flex items-center justify-center gap-3 transition-all duration-300"
                  id="cta-call-btn"
                >
                  <Phone className="w-5 h-5 text-emerald-400" />
                  <span>CALL NOW ({BUSINESS_INFO.phoneDisplay})</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Custom Quick Booking Form */}
          <div className="lg:col-span-7 bg-[#0d1117] border border-slate-800 p-8 sm:p-10 rounded-3xl shadow-2xl">
            <h3 className="text-xl sm:text-2xl font-black text-white font-display mb-2">
              Custom Slot Enquiry Form
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 mb-6">
              Fill in your game preference below to generate a pre-filled WhatsApp booking request.
            </p>

            <form onSubmit={handleWhatsAppClick} className="space-y-5">
              {/* Sport Selector */}
              <div>
                <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
                  Select Game / Court
                </label>
                <div className="grid grid-cols-3 gap-2.5">
                  <button
                    type="button"
                    onClick={() => setSport('turf')}
                    className={`py-3 px-3 rounded-xl font-bold text-xs sm:text-sm transition-all border ${
                      sport === 'turf'
                        ? 'bg-emerald-500 border-emerald-400 text-slate-950 shadow-md'
                        : 'bg-slate-900 border-slate-800 text-slate-300 hover:bg-slate-800'
                    }`}
                  >
                    ⚽ Pro Turf
                  </button>
                  <button
                    type="button"
                    onClick={() => setSport('pickleball')}
                    className={`py-3 px-3 rounded-xl font-bold text-xs sm:text-sm transition-all border ${
                      sport === 'pickleball'
                        ? 'bg-emerald-500 border-emerald-400 text-slate-950 shadow-md'
                        : 'bg-slate-900 border-slate-800 text-slate-300 hover:bg-slate-800'
                    }`}
                  >
                    🏓 Pickleball
                  </button>
                  <button
                    type="button"
                    onClick={() => setSport('both')}
                    className={`py-3 px-3 rounded-xl font-bold text-xs sm:text-sm transition-all border ${
                      sport === 'both'
                        ? 'bg-emerald-500 border-emerald-400 text-slate-950 shadow-md'
                        : 'bg-slate-900 border-slate-800 text-slate-300 hover:bg-slate-800'
                    }`}
                  >
                    🏆 Both
                  </button>
                </div>
              </div>

              {/* Date & Time Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2 flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5 text-emerald-400" />
                    Preferred Date
                  </label>
                  <input
                    type="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className="w-full bg-slate-900 border border-slate-800 rounded-xl px-4 py-3 text-sm font-semibold text-white focus:outline-none focus:border-emerald-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2 flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 text-emerald-400" />
                    Preferred Time Slot
                  </label>
                  <select
                    value={timeSlot}
                    onChange={(e) => setTimeSlot(e.target.value)}
                    className="w-full bg-slate-900 border border-slate-800 rounded-xl px-4 py-3 text-sm font-semibold text-white focus:outline-none focus:border-emerald-500"
                  >
                    {TIME_SLOTS.map((slot) => (
                      <option key={slot} value={slot}>
                        {slot}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Player Count & Name */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2 flex items-center gap-1">
                    <Users className="w-3.5 h-3.5 text-emerald-400" />
                    Approx. Team Size
                  </label>
                  <select
                    value={playerCount}
                    onChange={(e) => setPlayerCount(e.target.value)}
                    className="w-full bg-slate-900 border border-slate-800 rounded-xl px-4 py-3 text-sm font-semibold text-white focus:outline-none focus:border-emerald-500"
                  >
                    <option value="2-4 players (Pickleball / Small Group)">2-4 Players</option>
                    <option value="6-10 players (Box Cricket / Football)">6-10 Players</option>
                    <option value="12-16 players (Full Turf Match)">12-16 Players</option>
                    <option value="Tournament / Large Group">Tournament / Large Event</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
                    Your Name (Optional)
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Rahul Patil"
                    value={playerName}
                    onChange={(e) => setPlayerName(e.target.value)}
                    className="w-full bg-slate-900 border border-slate-800 rounded-xl px-4 py-3 text-sm font-semibold text-white focus:outline-none focus:border-emerald-500 placeholder-slate-600"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-4 rounded-xl bg-gradient-to-r from-emerald-500 to-green-500 hover:from-emerald-400 hover:to-green-400 text-slate-950 font-black text-base tracking-wide flex items-center justify-center gap-2 shadow-lg shadow-emerald-500/20 transition-all duration-300"
                id="send-whatsapp-form-btn"
              >
                <Send className="w-4 h-4 fill-slate-950" />
                <span>SEND WHATSAPP ENQUIRY NOW</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
