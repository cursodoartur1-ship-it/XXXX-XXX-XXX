import React from 'react';
import { GraduationCap, School, Bot, BookOpen, Heart, CheckCircle2 } from 'lucide-react';
import { TARGET_AUDIENCE } from '../data/landingData';

export const TargetAudience: React.FC = () => {
  const getAudienceIcon = (id: string) => {
    switch (id) {
      case 'professores': return <GraduationCap className="w-6 h-6 text-blue-600" />;
      case 'escolas': return <School className="w-6 h-6 text-purple-600" />;
      case 'robotica': return <Bot className="w-6 h-6 text-emerald-600" />;
      case 'alunos': return <BookOpen className="w-6 h-6 text-amber-500" />;
      case 'pais': return <Heart className="w-6 h-6 text-rose-500" />;
      default: return <GraduationCap className="w-6 h-6 text-blue-600" />;
    }
  };

  return (
    <section id="publico" className="py-16 sm:py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-3">
          <span className="text-xs font-bold uppercase tracking-wider text-blue-600">
            Público-Alvo
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight text-balance">
            Uma Biblioteca de Projetos para Quem Acredita no Aprendizado Prático
          </h2>
          <p className="text-base text-slate-600 leading-relaxed">
            Desenvolvido para atender educadores, instituições e famílias que valorizam o desenvolvimento de habilidades manuais, científicas e tecnológicas.
          </p>
        </div>

        {/* 5 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {TARGET_AUDIENCE.map((item) => (
            <div
              key={item.id}
              className="p-6 rounded-2xl bg-slate-50/70 border border-slate-200 hover:bg-white hover:border-blue-300 hover:shadow-md transition-all duration-200 flex flex-col justify-between space-y-4"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-xl bg-white border border-slate-200 shadow-2xs flex items-center justify-center">
                    {getAudienceIcon(item.id)}
                  </div>
                  <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                    {item.role.split(' ')[0]}
                  </span>
                </div>

                <div className="space-y-1">
                  <h3 className="text-base font-bold text-slate-900">
                    {item.role}
                  </h3>
                  <p className="text-xs font-semibold text-blue-600">
                    {item.title}
                  </p>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pt-1">
                    {item.description}
                  </p>
                </div>
              </div>

              <div className="pt-3 border-t border-slate-200/70 flex items-start gap-2 text-xs text-slate-700 font-medium">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                <span>{item.idealFor}</span>
              </div>
            </div>
          ))}

          {/* Quick Bonus Metric Card */}
          <div className="p-6 rounded-2xl bg-gradient-to-br from-blue-900 to-slate-900 text-white flex flex-col justify-between space-y-4 shadow-md">
            <div className="space-y-2">
              <span className="text-xs font-bold uppercase tracking-wider text-amber-400">
                Acesso Imediato
              </span>
              <h3 className="text-xl font-black text-white tracking-tight">
                Mais de 200 Ideias em um Só Lugar
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Não gaste semanas criando materiais didáticos do zero. Tenha um catálogo completo pronto para download e consulta rápida.
              </p>
            </div>
            <div className="pt-3 border-t border-blue-800 text-xs text-slate-300 flex justify-between items-center">
              <span>Formato 100% Digital</span>
              <span className="text-amber-400 font-bold">R$ 9,90</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
