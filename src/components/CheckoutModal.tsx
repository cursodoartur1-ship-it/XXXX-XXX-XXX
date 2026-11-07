import React, { useState } from 'react';
import { X, ExternalLink, AlertCircle, CheckCircle2, ShieldCheck } from 'lucide-react';
import { CHECKOUT_URL, PRODUCT_CONFIG } from '../config';

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CheckoutModal: React.FC<CheckoutModalProps> = ({ isOpen, onClose }) => {
  const [testUrl, setTestUrl] = useState('');
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handleCopyCode = () => {
    navigator.clipboard.writeText('export const CHECKOUT_URL = "SUA_URL_AQUI";');
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleTestRedirect = () => {
    if (testUrl.trim()) {
      window.open(testUrl.trim().startsWith('http') ? testUrl.trim() : `https://${testUrl.trim()}`, '_blank');
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/70 backdrop-blur-sm animate-fade-in">
      <div 
        className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 bg-slate-900 text-white">
          <div className="flex items-center gap-2">
            <AlertCircle className="w-5 h-5 text-amber-400 shrink-0" />
            <h3 id="modal-title" className="text-base font-semibold">
              Checkout em Configuração
            </h3>
          </div>
          <button 
            onClick={onClose}
            className="p-1 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
            aria-label="Fechar modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-4 text-slate-700 text-sm">
          <div className="p-3.5 bg-amber-50 border border-amber-200 rounded-xl text-amber-900">
            <p className="font-semibold text-xs tracking-wide uppercase text-amber-800 mb-1">
              Aviso ao Administrador / Produtor
            </p>
            <p className="text-xs leading-relaxed">
              O link de pagamento ainda não foi configurado na constante <code className="px-1.5 py-0.5 bg-amber-100 rounded text-amber-950 font-mono text-[11px]">CHECKOUT_URL</code>.
            </p>
          </div>

          <p className="leading-relaxed">
            Para ativar as compras imediatas na sua página de vendas, basta colar o link do checkout da sua plataforma (Hotmart, Kiwify, Eduzz, Monetizze, Braip, Stripe, etc.) no arquivo de configuração do projeto:
          </p>

          <div className="bg-slate-950 text-slate-200 rounded-xl p-3.5 font-mono text-xs overflow-x-auto flex items-center justify-between gap-3">
            <div className="truncate">
              <span className="text-slate-500">// Arquivo: src/config.ts</span>
              <br />
              <span className="text-sky-400">export const</span> CHECKOUT_URL = <span className="text-emerald-400">"https://pay.suaplataforma..."</span>;
            </div>
            <button
              onClick={handleCopyCode}
              className="px-2.5 py-1.5 text-[11px] font-sans font-medium bg-slate-800 hover:bg-slate-700 text-slate-200 rounded-lg transition-colors shrink-0"
            >
              {copied ? 'Copiado!' : 'Copiar'}
            </button>
          </div>

          <div className="pt-2 border-t border-slate-100">
            <label className="block text-xs font-semibold text-slate-800 mb-1.5">
              Simular compra com URL de teste:
            </label>
            <div className="flex gap-2">
              <input
                type="text"
                placeholder="https://sua-pagina-de-pagamento.com"
                value={testUrl}
                onChange={(e) => setTestUrl(e.target.value)}
                className="flex-1 px-3 py-2 text-xs border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                onClick={handleTestRedirect}
                disabled={!testUrl.trim()}
                className="px-3.5 py-2 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-700 disabled:opacity-40 disabled:cursor-not-allowed rounded-lg flex items-center gap-1.5 transition-colors shrink-0"
              >
                <span>Testar</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          <div className="flex items-center gap-2 pt-1 text-xs text-slate-500">
            <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
            <span>Produto: <strong>{PRODUCT_CONFIG.name}</strong> por <strong>{PRODUCT_CONFIG.currency} {PRODUCT_CONFIG.price}</strong></span>
          </div>
        </div>

        {/* Footer */}
        <div className="px-6 py-3 bg-slate-50 border-t border-slate-200 flex justify-end">
          <button
            onClick={onClose}
            className="px-4 py-2 text-xs font-semibold text-slate-700 hover:text-slate-900 bg-white border border-slate-300 rounded-lg hover:bg-slate-100 transition-colors"
          >
            Entendi, fechar
          </button>
        </div>
      </div>
    </div>
  );
};
