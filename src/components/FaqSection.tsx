import React, { useState } from 'react';
import { HelpCircle, ChevronDown, ChevronUp } from 'lucide-react';
import { FAQS_DATA } from '../data/businessData';

export const FaqSection: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>('faq-1');

  const toggleFaq = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq" className="py-24 relative bg-[#0a0e12]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-bold tracking-wider uppercase mb-4">
            <HelpCircle className="w-3.5 h-3.5" />
            Got Questions?
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight uppercase font-display">
            FREQUENTLY ASKED{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-green-400">
              QUESTIONS
            </span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300">
            Everything you need to know before booking your match at Pro Turf Latur.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-4">
          {FAQS_DATA.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className={`rounded-2xl transition-all duration-300 border ${
                  isOpen
                    ? 'bg-[#0d1117] border-emerald-500/40 shadow-xl shadow-emerald-950/20'
                    : 'bg-[#0d1117]/60 border-slate-800 hover:border-slate-700'
                }`}
              >
                <button
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="text-base sm:text-lg font-bold text-white font-display">
                    {faq.question}
                  </span>
                  <div className={`p-2 rounded-xl transition-colors ${isOpen ? 'bg-emerald-500/20 text-emerald-400' : 'bg-slate-900 text-slate-400'}`}>
                    {isOpen ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-0 text-slate-300 text-sm sm:text-base leading-relaxed border-t border-slate-800/60 mt-1 pt-4">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
