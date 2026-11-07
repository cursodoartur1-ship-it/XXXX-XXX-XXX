import React from 'react';
import { AlertTriangle, Clock, HelpCircle, Frown, Sparkles } from 'lucide-react';
import { PAIN_POINTS } from '../data/landingData';

export const PainPoints: React.FC = () => {
  const icons = [AlertTriangle, HelpCircle, Clock, Frown, Sparkles];

  return (
    <section className="py-16 sm:py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <span className="text-xs font-bold uppercase tracking-wider text-blue-600">
            O Desafio da Sala de Aula
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight text-balance">
            Seus Alunos Aprendem Eletrônica ou Apenas Decoram a Teoria?
          </h2>
          <p className="text-base text-slate-600 leading-relaxed">
            Muitos educadores e instrutores enfrentam diariamente a barreira do desinteresse quando a eletrônica é apresentada apenas através de esquemas complexos na lousa e fórmulas decoradas.
          </p>
        </div>

        {/* 2-Column Grid: Image Context & Pain Point Cards */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Authentic Classroom Image */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="relative rounded-2xl overflow-hidden shadow-lg border border-slate-200 bg-slate-100">
              <img
                src="/src/assets/images/classroom_stem_learning_1793849761724.jpg"
                alt="Professora e alunos montando experimento prático de eletrônica em sala de aula"
                referrerPolicy="no-referrer"
                className="w-full h-auto object-cover aspect-4/3"
              />
              <div className="p-4 bg-slate-900 text-white">
                <p className="text-xs font-semibold text-sky-400 uppercase tracking-wider">
                  O Momento da Descoberta
                </p>
                <p className="text-xs text-slate-300 mt-0.5">
                  Quando o LED acende pela primeira vez, a teoria ganha vida imediatamente na mente do estudante.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Pain Points List */}
          <div className="lg:col-span-7 order-1 lg:order-2 space-y-4">
            {PAIN_POINTS.map((item, index) => {
              const IconComponent = icons[index % icons.length];
              return (
                <div 
                  key={item.title}
                  className="p-4 sm:p-5 rounded-xl border border-slate-200 bg-slate-50/70 hover:bg-white hover:border-blue-200 hover:shadow-xs transition-all duration-200 flex gap-4 items-start"
                >
                  <div className="w-10 h-10 rounded-lg bg-blue-100 text-blue-700 flex items-center justify-center shrink-0">
                    <IconComponent className="w-5 h-5" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-sm sm:text-base font-bold text-slate-900">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {item.description}
                    </p>
                    <p className="text-xs text-amber-700 font-semibold pt-0.5">
                      {item.highlight}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Impactful Closing Phrase Banner */}
        <div className="mt-12 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-blue-900 via-blue-950 to-slate-900 text-white text-center shadow-xl border border-blue-800/50">
          <div className="max-w-3xl mx-auto space-y-2">
            <span className="text-xs font-bold tracking-widest uppercase text-amber-400">
              O Ponto de Virada Pedagógico
            </span>
            <p className="text-xl sm:text-2xl lg:text-3xl font-extrabold tracking-tight text-white leading-snug">
              "A eletrônica fica muito mais interessante quando o aluno deixa de apenas observar e começa a construir!"
            </p>
            <p className="text-xs sm:text-sm text-slate-300 pt-1">
              Dê aos seus estudantes a oportunidade de experimentar, errar, corrigir e celebrar cada circuito que funciona.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
