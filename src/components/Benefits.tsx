import React from 'react';
import { 
  Users, 
  Brain, 
  Eye, 
  Clock, 
  TrendingUp, 
  Compass, 
  CheckCircle2 
} from 'lucide-react';
import { BENEFITS } from '../data/landingData';

export const Benefits: React.FC = () => {
  const getBenefitIcon = (iconName: string) => {
    switch (iconName) {
      case 'Users': return <Users className="w-5 h-5 text-blue-600" />;
      case 'Brain': return <Brain className="w-5 h-5 text-purple-600" />;
      case 'Eye': return <Eye className="w-5 h-5 text-amber-500" />;
      case 'Clock': return <Clock className="w-5 h-5 text-emerald-600" />;
      case 'TrendingUp': return <TrendingUp className="w-5 h-5 text-sky-600" />;
      case 'Compass': return <Compass className="w-5 h-5 text-indigo-600" />;
      default: return <CheckCircle2 className="w-5 h-5 text-blue-600" />;
    }
  };

  return (
    <section id="beneficios" className="py-16 sm:py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-3">
          <span className="text-xs font-bold uppercase tracking-wider text-blue-600">
            Vantagens Educacionais
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight text-balance">
            Muito Mais do Que Projetos: Uma Nova Forma de Ensinar e Aprender!
          </h2>
          <p className="text-base text-slate-600 leading-relaxed">
            Descubra como uma abordagem prática transforma a dinâmica da sua sala de aula e acelera o aprendizado dos alunos.
          </p>
        </div>

        {/* 6 Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {BENEFITS.map((benefit, index) => (
            <div 
              key={benefit.id}
              className="p-6 rounded-2xl bg-slate-50/70 border border-slate-200 hover:bg-white hover:border-blue-300 hover:shadow-md transition-all duration-200 space-y-3 flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 shadow-2xs flex items-center justify-center">
                  {getBenefitIcon(benefit.icon)}
                </div>
                <h3 className="text-base font-bold text-slate-900">
                  {benefit.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {benefit.description}
                </p>
              </div>

              <div className="pt-2 flex items-center gap-1.5 text-xs text-blue-700 font-semibold">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Impacto direto no aprendizado</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
