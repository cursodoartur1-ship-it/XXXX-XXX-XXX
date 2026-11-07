import React from 'react';
import { Mail, MessageCircle, AlertCircle, Cpu, ShieldCheck } from 'lucide-react';
import { PRODUCT_CONFIG } from '../config';

interface FooterProps {
  onOpenTerms: () => void;
  onOpenPrivacy: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenTerms, onOpenPrivacy }) => {
  return (
    <footer className="bg-slate-950 text-slate-400 py-12 sm:py-16 text-xs sm:text-sm border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          {/* Brand & Digital Notice */}
          <div className="md:col-span-5 space-y-3">
            <div className="flex items-center gap-2 text-white font-bold text-base">
              <div className="w-7 h-7 rounded-lg bg-blue-600 text-white flex items-center justify-center">
                <Cpu className="w-4 h-4" />
              </div>
              <span>{PRODUCT_CONFIG.name}</span>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              Material digital educativo desenvolvido para professores, instrutores de robótica, educadores e estudantes. Promovendo o ensino prático de conceitos de eletrônica e tecnologia.
            </p>
            <div className="flex items-center gap-2 text-xs text-emerald-400 pt-1">
              <ShieldCheck className="w-4 h-4 shrink-0" />
              <span>Garantia incondicional de 7 dias protegida por lei.</span>
            </div>
          </div>

          {/* Essential Technical & Material Disclaimer */}
          <div className="md:col-span-4 space-y-2">
            <p className="text-xs font-bold text-slate-200 uppercase tracking-wider flex items-center gap-1.5">
              <AlertCircle className="w-4 h-4 text-amber-400" />
              Aviso Legal Pedagógico
            </p>
            <p className="text-xs text-slate-400 leading-relaxed">
              Este produto é um <strong>material 100% digital</strong> composto por guias, diagramas esquemáticos e roteiros passo a passo. <strong>Não inclui</strong> componentes físicos, placas, pilhas ou ferramentas, que devem ser adquiridos separadamente pelo comprador em lojas de eletrônica.
            </p>
            <p className="text-xs text-slate-500">
              Todas as experiências descritas operam com circuitos didáticos de baixa tensão (pilhas/baterias). Menores de idade devem sempre ter supervisão responsável.
            </p>
          </div>

          {/* Support & Legal Links */}
          <div className="md:col-span-3 space-y-3">
            <p className="text-xs font-bold text-slate-200 uppercase tracking-wider">
              Atendimento & Suporte
            </p>
            <div className="space-y-2 text-xs">
              <a 
                href={`mailto:${PRODUCT_CONFIG.supportEmail}`}
                className="flex items-center gap-2 text-slate-300 hover:text-white transition-colors"
              >
                <Mail className="w-4 h-4 text-sky-400 shrink-0" />
                <span className="truncate">{PRODUCT_CONFIG.supportEmail}</span>
              </a>
              <div className="flex items-center gap-2 text-slate-400">
                <MessageCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>WhatsApp: {PRODUCT_CONFIG.supportWhatsapp}</span>
              </div>
            </div>

            <div className="pt-3 border-t border-slate-800 flex flex-col gap-1.5 text-xs">
              <button
                onClick={onOpenTerms}
                className="text-left text-slate-400 hover:text-sky-400 transition-colors cursor-pointer"
              >
                Termos de Uso do Material
              </button>
              <button
                onClick={onOpenPrivacy}
                className="text-left text-slate-400 hover:text-sky-400 transition-colors cursor-pointer"
              >
                Política de Privacidade
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="pt-8 border-t border-slate-800 text-center text-xs text-slate-500 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} {PRODUCT_CONFIG.name}. Todos os direitos reservados.</p>
          <p className="text-[11px] text-slate-600">Material Didático Digital Independente para Fins Educacionais.</p>
        </div>
      </div>
    </footer>
  );
};
