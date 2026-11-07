import React from 'react';
import { Check, ShieldCheck, Download, Lock, Zap, ArrowRight } from 'lucide-react';
import { PRODUCT_CONFIG } from '../config';

interface MainOfferProps {
  onBuyClick: () => void;
}

export const MainOffer: React.FC<MainOfferProps> = ({ onBuyClick }) => {
  const offerItems = [
    "+200 projetos educativos de eletrônica",
    "Projetos organizados por nível e tema",
    "Orientações práticas de montagem",
    "Material digital para consulta",
    "Diferentes experiências para explorar conceitos de eletrônica",
  ];

  return (
    <section id="oferta" className="py-16 sm:py-24 bg-gradient-to-b from-white via-sky-50/50 to-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-3 mb-10">
          <span className="text-xs font-bold uppercase tracking-wider text-blue-600">
            Acesso Imediato e Vitalício
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight text-balance">
            Oferta Especial por Tempo Limitado
          </h2>
          <p className="text-base text-slate-600">
            Adquira agora mesmo toda a biblioteca de projetos e transforme a forma de ensinar eletrônica.
          </p>
        </div>

        {/* Centralized Premium Offer Card */}
        <div className="max-w-xl mx-auto relative">
          {/* Subtle Outer Glow */}
          <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 via-sky-500 to-emerald-500 rounded-3xl blur-md opacity-30" />

          <div className="relative rounded-3xl bg-white border-2 border-blue-600 shadow-2xl overflow-hidden">
            {/* Top Highlight Banner */}
            <div className="bg-gradient-to-r from-blue-700 via-blue-800 to-slate-900 px-6 py-4 text-center text-white">
              <span className="text-xs font-bold uppercase tracking-widest text-amber-300">
                ⚡ Material Digital Educativo
              </span>
              <h3 className="text-xl sm:text-2xl font-black tracking-tight text-white mt-1">
                Tenha Acesso à Biblioteca de +200 Projetos de Eletrônica!
              </h3>
            </div>

            {/* Card Body */}
            <div className="p-6 sm:p-8 space-y-6">
              {/* Checklist */}
              <div className="space-y-3 pt-2">
                {offerItems.map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                    </span>
                    <span className="text-sm sm:text-base font-semibold text-slate-800 leading-snug">
                      {item}
                    </span>
                  </div>
                ))}
              </div>

              {/* Price Display Section */}
              <div className="pt-6 border-t border-slate-100 text-center space-y-1 bg-slate-50/70 -mx-6 sm:-mx-8 px-6 sm:px-8 py-6">
                <p className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                  Valor Promocional Exclusivo
                </p>

                <div className="flex items-baseline justify-center gap-1.5">
                  <span className="text-sm font-bold text-slate-600">APENAS</span>
                  <span className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight">
                    {PRODUCT_CONFIG.currency} {PRODUCT_CONFIG.price}
                  </span>
                </div>

                <p className="text-xs text-slate-500 font-medium">
                  {PRODUCT_CONFIG.paymentType}
                </p>
              </div>

              {/* Purchase Button */}
              <div className="pt-2 space-y-3">
                <button
                  onClick={onBuyClick}
                  className="w-full py-4 px-6 rounded-xl font-extrabold text-base sm:text-lg text-white bg-emerald-600 hover:bg-emerald-500 active:scale-[0.99] shadow-xl shadow-emerald-600/30 transition-all duration-150 flex items-center justify-center gap-2 cursor-pointer group text-center"
                >
                  <span>SIM! QUERO MEUS +200 PROJETOS POR R$ 9,90</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform shrink-0" />
                </button>

                {/* Trust and Security Details */}
                <div className="flex items-center justify-center gap-4 text-xs text-slate-500 font-medium pt-2">
                  <span className="flex items-center gap-1">
                    <Lock className="w-3.5 h-3.5 text-slate-400" />
                    Pagamento 100% Seguro
                  </span>
                  <span>·</span>
                  <span className="flex items-center gap-1">
                    <Download className="w-3.5 h-3.5 text-blue-600" />
                    Download Imediato
                  </span>
                  <span>·</span>
                  <span className="flex items-center gap-1">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                    Garantia 7 Dias
                  </span>
                </div>
              </div>

              {/* Delivery Clarification */}
              <div className="pt-4 border-t border-slate-100 text-center">
                <p className="text-[11px] text-slate-400 leading-relaxed">
                  * Este produto é um material 100% digital. Você receberá o acesso imediatamente no seu e-mail após a confirmação do pagamento. Componentes físicos não inclusos.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
