import React from 'react';
import { Clock, BookMarked, Sparkles, FolderCheck, Compass } from 'lucide-react';
import { PRODUCT_CONFIG } from '../config';

interface OfferValuationProps {
  onBuyClick: () => void;
}

export const OfferValuation: React.FC<OfferValuationProps> = ({ onBuyClick }) => {
  return (
    <section className="py-16 sm:py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto space-y-10">
          {/* Header */}
          <div className="text-center space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-600">
              Economia Real de Tempo e Energia
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight text-balance">
              Imagine Ter Mais de 200 Ideias de Projetos Sempre à Sua Disposição!
            </h2>
            <p className="text-base text-slate-600 leading-relaxed max-w-2xl mx-auto">
              Quanto vale o seu tempo ao planejar aulas e oficinas? Ter uma biblioteca estruturada ao seu alcance muda completamente a sua rotina de preparação pedagógica.
            </p>
          </div>

          {/* 3 Pillars of Value */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-2xs space-y-3">
              <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
                <Clock className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-slate-900">
                Chega de Pesquisas Perdidas
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Em vez de passar horas procurando esquemas fragmentados em fóruns ou vídeos sem roteiro, você abre seu material e encontra a atividade exata para o tema do dia.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-2xs space-y-3">
              <div className="w-10 h-10 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center">
                <FolderCheck className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-slate-900">
                Organização por Nível e Tema
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Você pode filtrar o projeto ideal de acordo com a maturidade da turma: desde a primeira pilha com LED até sensores com fototransistores e robótica móvel.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-2xs space-y-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
                <BookMarked className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-slate-900">
                Acervo Permanente de Consulta
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                O arquivo digital fica salvo no seu computador, tablet ou celular para sempre. Consulte sempre que precisar montar um novo semestre, feira de ciências ou workshop.
              </p>
            </div>
          </div>

          {/* Focus callout banner */}
          <div className="p-6 rounded-2xl bg-white border border-blue-200 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="space-y-1 text-center sm:text-left">
              <p className="text-sm font-bold text-slate-900">
                Toda essa biblioteca prática de referência disponível hoje
              </p>
              <p className="text-xs text-slate-500">
                Acesso imediato ao material digital completo por taxa única de investimento educativo.
              </p>
            </div>
            <button
              onClick={onBuyClick}
              className="px-6 py-3 rounded-xl font-bold text-sm text-white bg-emerald-600 hover:bg-emerald-500 transition-colors shadow-sm shrink-0 cursor-pointer"
            >
              Garantir Acesso por R$ 9,90
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
