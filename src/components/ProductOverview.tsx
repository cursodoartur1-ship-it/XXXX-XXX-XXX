import React, { useState } from 'react';
import { 
  Zap, 
  Lightbulb, 
  RotateCw, 
  Bell, 
  Bot, 
  Target, 
  CheckCircle, 
  FileText, 
  ChevronRight,
  Clock,
  Sparkles
} from 'lucide-react';
import { PRODUCT_CATEGORIES, SAMPLE_PROJECTS } from '../data/landingData';

export const ProductOverview: React.FC = () => {
  const [activeSampleId, setActiveSampleId] = useState<string>(SAMPLE_PROJECTS[0].id);

  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case 'Zap': return <Zap className="w-5 h-5 text-amber-500" />;
      case 'Lightbulb': return <Lightbulb className="w-5 h-5 text-amber-500" />;
      case 'RotateCw': return <RotateCw className="w-5 h-5 text-blue-600" />;
      case 'Bell': return <Bell className="w-5 h-5 text-red-500" />;
      case 'Bot': return <Bot className="w-5 h-5 text-purple-600" />;
      case 'Target': return <Target className="w-5 h-5 text-emerald-600" />;
      default: return <Zap className="w-5 h-5 text-blue-600" />;
    }
  };

  const selectedSample = SAMPLE_PROJECTS.find(p => p.id === activeSampleId) || SAMPLE_PROJECTS[0];

  return (
    <section id="conteudo" className="py-16 sm:py-20 bg-slate-50/60 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-3">
          <span className="text-xs font-bold uppercase tracking-wider text-blue-600">
            Estrutura Completa do Material
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight text-balance">
            Conheça a Biblioteca com +200 Projetos de Eletrônica Educativa
          </h2>
          <p className="text-base text-slate-600 leading-relaxed">
            Uma coleção organizada para transformar conceitos de eletrônica em experiências práticas de aprendizagem.
          </p>
        </div>

        {/* 6 Category Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PRODUCT_CATEGORIES.map((cat) => (
            <div 
              key={cat.id}
              className="bg-white rounded-2xl p-6 border border-slate-200/90 shadow-xs hover:shadow-md hover:border-blue-300 transition-all duration-200 flex flex-col justify-between"
            >
              <div className="space-y-4">
                {/* Header row with clean editorial number and icon */}
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center">
                    {getCategoryIcon(cat.icon)}
                  </div>
                  <span className="font-mono text-xs font-bold text-slate-400">
                    Módulo {cat.number}
                  </span>
                </div>

                <div className="space-y-2">
                  <h3 className="text-lg font-bold text-slate-900">
                    {cat.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {cat.description}
                  </p>
                </div>

                {/* Example Projects List */}
                <div className="pt-2 border-t border-slate-100 space-y-1.5">
                  <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                    Exemplos inclusos no guia:
                  </p>
                  <ul className="space-y-1">
                    {cat.exampleProjects.slice(0, 3).map((ex) => (
                      <li key={ex} className="text-xs text-slate-700 flex items-start gap-1.5">
                        <span className="text-blue-500 font-bold shrink-0">›</span>
                        <span>{ex}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Clean Unboxed Tags */}
              <div className="pt-4 mt-4 border-t border-slate-100 flex flex-wrap gap-x-2 gap-y-1 text-[11px] text-slate-500 font-medium">
                {cat.tags.map((tag, i) => (
                  <React.Fragment key={tag}>
                    <span>{tag}</span>
                    {i < cat.tags.length - 1 && <span className="text-slate-300">·</span>}
                  </React.Fragment>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Visual Component Flatlay Showcase Strip */}
        <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-5 space-y-4">
              <span className="text-xs font-bold uppercase tracking-wider text-blue-600">
                Acessibilidade de Materiais
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
                Componentes Simples, Seguros e de Baixo Custo
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Todos os projetos utilizam componentes padrão de baixa tensão (como pilhas AA, protoboard de 400/830 furos, jumpers, LEDs, resistores e pequenos motores DC). São itens fáceis de encontrar em lojas de eletrônica locais ou kits online acessíveis.
              </p>
              <div className="space-y-2 pt-1 text-xs text-slate-700">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Sem necessidade de solda para projetos básicos na protoboard.</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Alimentação 100% segura por pilhas (1,5V a 9V).</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Reutilizáveis em dezenas de montagens diferentes.</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7">
              <div className="relative rounded-xl overflow-hidden border border-slate-200 shadow-xs">
                <img
                  src="/src/assets/images/electronics_components_flatlay_1793849762063.jpg"
                  alt="Fotografia de componentes de eletrônica didática organizada sobre esquema técnico"
                  referrerPolicy="no-referrer"
                  className="w-full h-auto object-cover aspect-16/10"
                />
                <div className="p-3 bg-slate-900 text-slate-300 text-[11px] flex justify-between items-center">
                  <span>Ilustração dos tipos de componentes abordados nas atividades digitais</span>
                  <span className="text-sky-400 font-mono">Baixa Tensão (DC)</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Interactive Sample Project Explorer */}
        <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm">
          <div className="p-6 sm:p-8 bg-gradient-to-r from-slate-900 to-blue-950 text-white">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-amber-400">
                  Transparência Pedagógica
                </span>
                <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-white mt-1">
                  Veja Como Cada Projeto é Estruturado no Material
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 mt-1">
                  Clique nas amostras abaixo para inspecionar o padrão das fichas didáticas que você receberá:
                </p>
              </div>

              {/* Sample Tabs */}
              <div className="flex flex-wrap gap-2">
                {SAMPLE_PROJECTS.map((sample) => (
                  <button
                    key={sample.id}
                    onClick={() => setActiveSampleId(sample.id)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                      activeSampleId === sample.id
                        ? 'bg-blue-600 text-white shadow-xs'
                        : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                    }`}
                  >
                    {sample.number}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Active Sample Project Sheet Display */}
          <div className="p-6 sm:p-8 space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-slate-100 gap-2">
              <div>
                <div className="flex items-center gap-2 text-xs font-semibold text-blue-600">
                  <span>{selectedSample.number}</span>
                  <span>·</span>
                  <span>{selectedSample.category}</span>
                </div>
                <h4 className="text-lg sm:text-xl font-bold text-slate-900 mt-0.5">
                  {selectedSample.title}
                </h4>
              </div>
              <div className="flex items-center gap-3 text-xs text-slate-600">
                <span className="px-2 py-0.5 bg-slate-100 rounded text-slate-700 font-medium">
                  {selectedSample.difficulty}
                </span>
                <span className="flex items-center gap-1 text-slate-500">
                  <Clock className="w-3.5 h-3.5" />
                  {selectedSample.estimatedTime}
                </span>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
              {/* Materials Column */}
              <div className="lg:col-span-5 space-y-3 p-4 rounded-xl bg-slate-50 border border-slate-200/80">
                <p className="text-xs font-bold text-slate-900 uppercase tracking-wider flex items-center gap-1.5">
                  <FileText className="w-3.5 h-3.5 text-blue-600" />
                  Materiais Necessários:
                </p>
                <ul className="space-y-1.5">
                  {selectedSample.materials.map((mat) => (
                    <li key={mat} className="text-xs text-slate-700 flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-1.5 shrink-0" />
                      <span>{mat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Instructions Steps Column */}
              <div className="lg:col-span-7 space-y-3">
                <p className="text-xs font-bold text-slate-900 uppercase tracking-wider">
                  Roteiro de Montagem Passo a Passo:
                </p>
                <ol className="space-y-2.5">
                  {selectedSample.steps.map((st, idx) => (
                    <li key={st} className="text-xs sm:text-sm text-slate-700 flex items-start gap-2.5">
                      <span className="w-5 h-5 rounded-full bg-blue-100 text-blue-700 font-bold text-[11px] flex items-center justify-center shrink-0 mt-0.5">
                        {idx + 1}
                      </span>
                      <span className="leading-relaxed">{st}</span>
                    </li>
                  ))}
                </ol>

                {/* Concept Learned Box */}
                <div className="mt-4 p-3.5 bg-emerald-50 border border-emerald-200 rounded-xl">
                  <p className="text-xs font-bold text-emerald-900 mb-0.5">
                    O que o aluno aprende com esse projeto:
                  </p>
                  <p className="text-xs text-emerald-800 leading-relaxed">
                    {selectedSample.conceptLearned}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
