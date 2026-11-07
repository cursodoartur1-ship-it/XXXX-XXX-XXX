import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { FAQ_ITEMS } from '../data/landingData';

export const Faq: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0); // First open by default

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="duvidas" className="py-16 sm:py-20 bg-white border-b border-slate-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Section Header */}
        <div className="text-center space-y-3">
          <span className="text-xs font-bold uppercase tracking-wider text-blue-600">
            Tire Suas Dúvidas
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight text-balance">
            Perguntas Frequentes
          </h2>
          <p className="text-base text-slate-600">
            Respostas claras e transparentes sobre o material, formato e aplicação em sala de aula.
          </p>
        </div>

        {/* Interactive FAQ Accordion */}
        <div className="space-y-3">
          {FAQ_ITEMS.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={item.question}
                className="rounded-2xl border border-slate-200 overflow-hidden transition-colors duration-150"
              >
                <button
                  onClick={() => toggleAccordion(index)}
                  className={`w-full p-5 text-left flex items-center justify-between gap-4 transition-colors cursor-pointer ${
                    isOpen ? 'bg-blue-50/50' : 'bg-slate-50/60 hover:bg-slate-100/70'
                  }`}
                  aria-expanded={isOpen}
                >
                  <span className="text-sm sm:text-base font-bold text-slate-900">
                    {item.question}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-slate-500 shrink-0 transition-transform duration-200 ${
                      isOpen ? 'transform rotate-180 text-blue-600' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="p-5 pt-2 bg-white text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100">
                    <p>{item.answer}</p>
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
