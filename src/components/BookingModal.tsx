import React, { useState } from 'react';
import { X, MessageSquare, Phone, Calendar, Clock, Send, Users, ShieldCheck } from 'lucide-react';
import { BUSINESS_INFO, TIME_SLOTS } from '../data/businessData';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultSport?: 'turf' | 'pickleball';
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  defaultSport = 'turf',
}) => {
  const [sport, setSport] = useState<'turf' | 'pickleball' | 'both'>(defaultSport);
  const [date, setDate] = useState<string>(new Date().toISOString().split('T')[0]);
  const [timeSlot, setTimeSlot] = useState<string>(TIME_SLOTS[4]);
  const [playerName, setPlayerName] = useState<string>('');
  const [groupSize, setGroupSize] = useState<string>('6-10 Players');

  if (!isOpen) return null;

  const handleWhatsAppSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const sportTitle = sport === 'turf' ? 'Pro Turf' : sport === 'pickleball' ? 'Pro Pickleball' : 'Turf & Pickleball';
    const text = `Hi Pro Turf & Pro Pickleball! I'd like to book a slot:
- *Sport:* ${sportTitle}
- *Date:* ${date}
- *Time Slot:* ${timeSlot}
- *Players:* ${groupSize}
${playerName ? `- *Name:* ${playerName}` : ''}

Please confirm availability!`;

    window.open(`https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${encodeURIComponent(text)}`, '_blank');
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md p-4 flex items-center justify-center animate-in fade-in duration-200"
      onClick={onClose}
      id="booking-modal-overlay"
    >
      <div
        className="relative max-w-lg w-full max-h-[92vh] overflow-y-auto bg-[#0d1117] border border-emerald-500/30 rounded-3xl p-6 sm:p-8 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
        id="booking-modal-content"
      >
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-slate-900 border border-slate-800 text-slate-400 hover:text-white"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-2 mb-2">
          <span className="p-1.5 rounded-lg bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
            <ShieldCheck className="w-4 h-4" />
          </span>
          <span className="text-xs font-bold uppercase tracking-widest text-emerald-400">
            Pro Turf & Pro Pickleball
          </span>
        </div>

        <h3 className="text-2xl font-black text-white font-display">
          Book Your Match Slot
        </h3>
        <p className="text-xs text-slate-400 mb-6">
          Open 24/7 in Latur. Select your preferences to send a fast WhatsApp message.
        </p>

        <form onSubmit={handleWhatsAppSubmit} className="space-y-4">
          <div>
            <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
              Facility / Sport
            </label>
            <div className="grid grid-cols-3 gap-2">
              <button
                type="button"
                onClick={() => setSport('turf')}
                className={`py-2.5 rounded-xl font-bold text-xs transition-all border ${
                  sport === 'turf'
                    ? 'bg-emerald-500 border-emerald-400 text-slate-950 font-black'
                    : 'bg-slate-900 border-slate-800 text-slate-300 hover:bg-slate-800'
                }`}
              >
                ⚽ Turf
              </button>
              <button
                type="button"
                onClick={() => setSport('pickleball')}
                className={`py-2.5 rounded-xl font-bold text-xs transition-all border ${
                  sport === 'pickleball'
                    ? 'bg-emerald-500 border-emerald-400 text-slate-950 font-black'
                    : 'bg-slate-900 border-slate-800 text-slate-300 hover:bg-slate-800'
                }`}
              >
                🏓 Pickleball
              </button>
              <button
                type="button"
                onClick={() => setSport('both')}
                className={`py-2.5 rounded-xl font-bold text-xs transition-all border ${
                  sport === 'both'
                    ? 'bg-emerald-500 border-emerald-400 text-slate-950 font-black'
                    : 'bg-slate-900 border-slate-800 text-slate-300 hover:bg-slate-800'
                }`}
              >
                🏆 Both
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1 flex items-center gap-1">
                <Calendar className="w-3 h-3 text-emerald-400" /> Date
              </label>
              <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="w-full bg-slate-900 border border-slate-800 rounded-xl px-3 py-2.5 text-xs font-semibold text-white focus:outline-none focus:border-emerald-500"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1 flex items-center gap-1">
                <Clock className="w-3 h-3 text-emerald-400" /> Time Slot
              </label>
              <select
                value={timeSlot}
                onChange={(e) => setTimeSlot(e.target.value)}
                className="w-full bg-slate-900 border border-slate-800 rounded-xl px-3 py-2.5 text-xs font-semibold text-white focus:outline-none focus:border-emerald-500"
              >
                {TIME_SLOTS.map((s) => (
                  <option key={s} value={s}>
                    {s}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1 flex items-center gap-1">
                <Users className="w-3 h-3 text-emerald-400" /> Group Size
              </label>
              <select
                value={groupSize}
                onChange={(e) => setGroupSize(e.target.value)}
                className="w-full bg-slate-900 border border-slate-800 rounded-xl px-3 py-2.5 text-xs font-semibold text-white focus:outline-none focus:border-emerald-500"
              >
                <option value="2-4 Players">2-4 Players</option>
                <option value="6-10 Players">6-10 Players</option>
                <option value="12-16 Players">12-16 Players</option>
                <option value="Tournament / Event">Tournament / Event</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1">
                Your Name (Optional)
              </label>
              <input
                type="text"
                placeholder="Name"
                value={playerName}
                onChange={(e) => setPlayerName(e.target.value)}
                className="w-full bg-slate-900 border border-slate-800 rounded-xl px-3 py-2.5 text-xs font-semibold text-white focus:outline-none focus:border-emerald-500 placeholder-slate-600"
              />
            </div>
          </div>

          <div className="pt-3 space-y-2">
            <button
              type="submit"
              className="w-full py-3.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black text-sm tracking-wide flex items-center justify-center gap-2 shadow-lg shadow-emerald-500/20"
            >
              <Send className="w-4 h-4 fill-slate-950" />
              <span>SEND WHATSAPP ENQUIRY</span>
            </button>

            <a
              href={`tel:${BUSINESS_INFO.phoneRaw}`}
              className="w-full py-2.5 rounded-xl bg-slate-900 text-slate-300 font-bold text-xs flex items-center justify-center gap-2 hover:bg-slate-800 border border-slate-800"
            >
              <Phone className="w-3.5 h-3.5 text-emerald-400" />
              <span>Or Call {BUSINESS_INFO.phoneDisplay}</span>
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};
