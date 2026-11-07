import React from 'react';
import { ArrowRight, Sparkles, ShieldCheck, Zap } from 'lucide-react';
import { PRODUCT_CONFIG } from '../config';

interface FinalCtaProps {
  onBuyClick: () => void;
}

export const FinalCta: React.FC<FinalCtaProps> = ({ onBuyClick }) => {
  return (
    <section className="relative overflow-hidden bg-[#0A1128] text-white py-16 sm:py-24 border-b border-slate-800">
      {/* Discreet Electronic Circuit Traces in Dark Mode */}
      <div className="absolute inset-0 circuit-pattern-dark pointer-events-none opacity-40" aria-hidden="true" />
      
      {/* Ambient gradient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-600/15 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-900/60 border border-blue-700/60 text-sky-300 text-xs font-semibold">
          <Zap className="w-3.5 h-3.5 text-amber-400" />
          <span>Acesso Imediato ao Material Didático</span>
        </div>

        <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-black tracking-tight text-white max-w-3xl mx-auto leading-tight text-balance">
          O Próximo Projeto Que Vai Despertar a Curiosidade dos Seus Alunos Pode Estar Aqui!
        </h2>

        <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
          Explore uma biblioteca com mais de 200 projetos de eletrônica educativa e leve novas possibilidades de aprendizagem prática para suas aulas.
        </p>

        {/* Highlight Price */}
        <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 inline-block">
          <p className="text-base sm:text-lg font-bold text-white">
            Mais de 200 projetos por apenas <span className="text-amber-400 text-2xl font-black">{PRODUCT_CONFIG.currency} {PRODUCT_CONFIG.price}</span>
          </p>
          <p className="text-xs text-slate-400 mt-0.5">
            {PRODUCT_CONFIG.paymentType}
          </p>
        </div>

        {/* CTA Button */}
        <div>
          <button
            onClick={onBuyClick}
            className="w-full sm:w-auto px-8 py-4 rounded-xl font-extrabold text-base sm:text-lg text-white bg-emerald-600 hover:bg-emerald-500 active:scale-[0.99] shadow-xl shadow-emerald-600/30 transition-all duration-150 inline-flex items-center justify-center gap-3 cursor-pointer group"
          >
            <span>QUERO COMEÇAR AGORA</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        <div className="flex items-center justify-center gap-6 text-xs text-slate-400">
          <span>🔒 Ambiente Criptografado</span>
          <span>·</span>
          <span>⚡ Liberação Imediata</span>
          <span>·</span>
          <span>📥 Arquivos em PDF para Download</span>
        </div>
      </div>
    </section>
  );
};
