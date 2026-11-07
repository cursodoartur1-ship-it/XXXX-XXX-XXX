import React from 'react';
import { Check, ShieldCheck, Download, Lock, Sparkles, ArrowRight, Zap } from 'lucide-react';
import { PRODUCT_CONFIG } from '../config';

interface HeroProps {
  onBuyClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onBuyClick }) => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-sky-50/60 via-white to-slate-50 pt-6 pb-16 lg:py-20 border-b border-slate-200">
      {/* Background Decorative Circuit Traces */}
      <div className="absolute inset-0 circuit-pattern pointer-events-none opacity-60" aria-hidden="true" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Strip Banner */}
        <div className="flex justify-center mb-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-900 text-xs sm:text-sm font-semibold shadow-xs">
            <span className="text-amber-500 font-bold">⚡</span>
            <span>{PRODUCT_CONFIG.badge}</span>
          </div>
        </div>

        {/* Main Split Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Headline, Copy, Benefits & CTA */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.15] text-balance">
              Transforme Suas Aulas em Experiências Incríveis com <span className="text-blue-600 underline decoration-amber-400 decoration-wavy decoration-2 underline-offset-4">+200 Projetos de Eletrônica</span> para Alunos!
            </h1>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Chega de ficar apenas na teoria! Tenha acesso a mais de 200 projetos práticos, com orientações passo a passo, para ensinar conceitos de eletrônica de forma visual, envolvente e educativa.
            </p>

            {/* 3 Highlighted Benefits */}
            <div className="pt-1 pb-2 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
              <div className="flex items-center gap-2 text-slate-800 text-sm font-medium">
                <span className="flex items-center justify-center w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 shrink-0">
                  <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                </span>
                <span>Mais de 200 projetos educativos</span>
              </div>
              <div className="flex items-center gap-2 text-slate-800 text-sm font-medium">
                <span className="flex items-center justify-center w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 shrink-0">
                  <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                </span>
                <span>Instruções passo a passo</span>
              </div>
              <div className="flex items-center gap-2 text-slate-800 text-sm font-medium">
                <span className="flex items-center justify-center w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 shrink-0">
                  <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                </span>
                <span>Do básico aos mais avançados</span>
              </div>
            </div>

            {/* Primary Action Box */}
            <div className="pt-2 space-y-3 max-w-md mx-auto lg:mx-0">
              {/* Price Callout */}
              <div className="flex items-center justify-center lg:justify-start gap-2 text-slate-600 text-xs sm:text-sm">
                <span>Acesso Completo e Vitalício por apenas</span>
                <span className="text-2xl font-black text-slate-900 tracking-tight">
                  {PRODUCT_CONFIG.currency} {PRODUCT_CONFIG.price}
                </span>
                <span className="text-slate-400 font-normal">({PRODUCT_CONFIG.paymentType})</span>
              </div>

              {/* Main CTA Button */}
              <button
                onClick={onBuyClick}
                className="w-full py-4 px-6 rounded-xl font-extrabold text-base sm:text-lg text-white bg-emerald-600 hover:bg-emerald-500 active:scale-[0.99] shadow-xl shadow-emerald-600/25 transition-all duration-150 flex items-center justify-center gap-3 cursor-pointer group"
              >
                <span>QUERO ACESSAR OS +200 PROJETOS AGORA</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>

              {/* Trust Indicators */}
              <div className="flex items-center justify-center gap-4 sm:gap-6 pt-1 text-xs text-slate-500 font-medium">
                <span className="flex items-center gap-1.5">
                  <Lock className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                  Pagamento seguro
                </span>
                <span>·</span>
                <span className="flex items-center gap-1.5">
                  <Download className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                  Material digital
                </span>
                <span>·</span>
                <span className="flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  Compra protegida
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Educational Image Mockup */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              {/* Soft decorative glow */}
              <div className="absolute -inset-1.5 bg-gradient-to-r from-blue-600 to-amber-400 rounded-2xl blur-lg opacity-25" />
              
              <div className="relative rounded-2xl overflow-hidden bg-slate-900 border border-slate-200/80 shadow-2xl">
                <img
                  src="/src/assets/images/hero_electronics_kit_1793849761046.jpg"
                  alt="Conjunto de materiais educativos de eletrônica e tablet com guia passo a passo"
                  referrerPolicy="no-referrer"
                  className="w-full h-auto object-cover aspect-16/10"
                />

                {/* Overlaid feature tag bar */}
                <div className="p-4 bg-slate-900/95 border-t border-slate-800 text-white flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
                    <div>
                      <p className="text-xs font-semibold text-slate-100">Biblioteca Digital Prática</p>
                      <p className="text-[11px] text-slate-400">Circuitos didáticos de baixa tensão para alunos</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="text-xs font-mono font-bold text-amber-400">200+ Projetos</span>
                  </div>
                </div>
              </div>

              {/* Micro Floating Highlight */}
              <div className="hidden sm:flex absolute -bottom-4 -left-4 bg-white p-3 rounded-xl shadow-lg border border-slate-200 items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-blue-100 text-blue-600 flex items-center justify-center shrink-0">
                  <Zap className="w-5 h-5 fill-blue-600 text-blue-600" />
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-900">Aprenda na Prática</p>
                  <p className="text-[11px] text-slate-500">Sem fórmulas complicadas</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
