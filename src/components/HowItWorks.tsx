import React from 'react';
import { ArrowRight, Info, Check } from 'lucide-react';
import { STEPS } from '../data/landingData';

export const HowItWorks: React.FC = () => {
  return (
    <section id="como-funciona" className="py-16 sm:py-20 bg-slate-50/70 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-3">
          <span className="text-xs font-bold uppercase tracking-wider text-blue-600">
            Metodologia Didática
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight text-balance">
            Da Teoria à Prática em Poucos Passos
          </h2>
          <p className="text-base text-slate-600 leading-relaxed">
            Uma sequência visual simples e direta para você aplicar qualquer atividade com segurança e clareza.
          </p>
        </div>

        {/* 4 Steps Timeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {STEPS.map((item, index) => (
            <div 
              key={item.step}
              className="relative p-6 rounded-2xl bg-white border border-slate-200 shadow-xs flex flex-col justify-between hover:shadow-md transition-shadow"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="w-9 h-9 rounded-xl bg-blue-600 text-white font-black text-sm flex items-center justify-center shadow-xs">
                    0{item.step}
                  </span>
                  <span className="text-xs font-bold text-slate-400 uppercase tracking-wider font-mono">
                    Passo {item.step}
                  </span>
                </div>

                <h3 className="text-base font-bold text-slate-900 leading-snug">
                  {item.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-100 text-xs text-blue-700 font-medium flex items-center gap-1.5">
                <Check className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                <span>{item.tip}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Demonstrative Image & Essential Disclaimer Box */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-xs">
          <div className="lg:col-span-5 relative rounded-xl overflow-hidden border border-slate-200">
            <img
              src="/src/assets/images/robotics_circuit_project_1793849763270.jpg"
              alt="Projeto educativo de robótica e motor montado por aluno em sala de aula"
              referrerPolicy="no-referrer"
              className="w-full h-auto object-cover aspect-4/3"
            />
            <div className="p-3 bg-slate-900 text-slate-300 text-[11px] flex justify-between items-center">
              <span>Exemplo de projeto prático com motor DC e LEDs</span>
              <span className="text-amber-400 font-mono">Robótica & Automação</span>
            </div>
          </div>

          <div className="lg:col-span-7 space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-amber-50 border border-amber-200 text-amber-900 text-xs font-bold">
              <Info className="w-4 h-4 text-amber-600 shrink-0" />
              <span>Aviso Importante sobre Materiais e Segurança</span>
            </div>

            <h3 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
              Orientações Claras para o Sucesso da Sua Aula
            </h3>

            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Os componentes físicos (como pilhas, fios, protoboard e pequenos motores) <strong>não estão incluídos na compra</strong> deste infoproduto digital. Você adquire a biblioteca completa de projetos, orientações e fichas didáticas.
            </p>

            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Os projetos devem ser sempre escolhidos conforme a faixa etária dos estudantes, os recursos materiais disponíveis no seu laboratório e o nível de supervisão necessário, garantindo sempre a utilização de <strong>circuitos seguros de baixa tensão</strong>.
            </p>

            <div className="pt-2 flex flex-wrap gap-4 text-xs font-semibold text-slate-700">
              <span className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-500" />
                Circuitos de 1,5V a 9V
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-500" />
                Segurança pedagógica
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-500" />
                Supervisão recomendada
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
