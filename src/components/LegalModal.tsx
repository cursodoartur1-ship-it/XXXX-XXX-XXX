import React from 'react';
import { X, FileText, Shield } from 'lucide-react';
import { LEGAL_TERMS } from '../data/landingData';

interface LegalModalProps {
  type: 'terms' | 'privacy' | null;
  onClose: () => void;
}

export const LegalModal: React.FC<LegalModalProps> = ({ type, onClose }) => {
  if (!type) return null;

  const isTerms = type === 'terms';
  const title = isTerms ? 'Termos de Uso e Condições' : 'Política de Privacidade';
  const content = isTerms ? LEGAL_TERMS.termsOfUse : LEGAL_TERMS.privacyPolicy;
  const Icon = isTerms ? FileText : Shield;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/70 backdrop-blur-sm animate-fade-in">
      <div 
        className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col max-h-[85vh]"
        role="dialog"
        aria-modal="true"
        aria-labelledby="legal-modal-title"
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 bg-slate-900 text-white shrink-0">
          <div className="flex items-center gap-2.5">
            <Icon className="w-5 h-5 text-sky-400" />
            <h3 id="legal-modal-title" className="text-base font-semibold">
              {title}
            </h3>
          </div>
          <button 
            onClick={onClose}
            className="p-1 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
            aria-label="Fechar"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto space-y-4 text-slate-700 text-sm leading-relaxed whitespace-pre-line font-sans">
          {content}
        </div>

        {/* Footer */}
        <div className="px-6 py-3.5 bg-slate-50 border-t border-slate-200 flex justify-end shrink-0">
          <button
            onClick={onClose}
            className="px-4 py-2 text-xs font-semibold text-white bg-slate-900 hover:bg-slate-800 rounded-lg transition-colors"
          >
            Fechar
          </button>
        </div>
      </div>
    </div>
  );
};
