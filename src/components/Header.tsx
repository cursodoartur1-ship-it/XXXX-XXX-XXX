import React, { useState } from 'react';
import { Cpu, Menu, X } from 'lucide-react';
import { PRODUCT_CONFIG } from '../config';

interface HeaderProps {
  onBuyClick: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onBuyClick }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Conteúdo', href: '#conteudo' },
    { label: 'Benefícios', href: '#beneficios' },
    { label: 'Como Funciona', href: '#como-funciona' },
    { label: 'Público', href: '#publico' },
    { label: 'Dúvidas', href: '#duvidas' },
  ];

  return (
    <header className="sticky top-0 z-40 w-full bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-8 h-16">
          {/* Zone 1: Brand Wordmark (Single text element) */}
          <a 
            href="#" 
            className="flex items-center gap-2 text-slate-900 font-bold text-base sm:text-lg tracking-tight whitespace-nowrap shrink-0 hover:text-blue-700 transition-colors"
          >
            <div className="w-8 h-8 rounded-lg bg-blue-600 text-white flex items-center justify-center shadow-xs">
              <Cpu className="w-4 h-4" />
            </div>
            <span>+200 Projetos Eletrônica</span>
          </a>

          {/* Zone 2: Navigation Links (single-line, quiet typography) */}
          <nav className="hidden lg:flex items-center gap-6 text-sm font-medium text-slate-600">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="hover:text-blue-600 transition-colors whitespace-nowrap shrink-0"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Zone 3: 1 Primary Action */}
          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={onBuyClick}
              className="px-4 py-2 text-xs sm:text-sm font-bold text-white bg-emerald-600 hover:bg-emerald-500 rounded-lg shadow-sm hover:shadow transition-all whitespace-nowrap shrink-0 cursor-pointer active:scale-[0.98]"
            >
              Garantir por {PRODUCT_CONFIG.currency} {PRODUCT_CONFIG.price}
            </button>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition-colors"
              aria-label="Abrir menu de navegação"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-3 px-2 border-t border-slate-100 bg-white space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2 rounded-md text-sm font-medium text-slate-700 hover:text-blue-600 hover:bg-slate-50 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
        )}
      </div>
    </header>
  );
};
