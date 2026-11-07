import React, { useEffect, useState } from 'react';
import { ArrowRight, Zap } from 'lucide-react';
import { PRODUCT_CONFIG } from '../config';

interface MobileStickyBarProps {
  onBuyClick: () => void;
}

export const MobileStickyBar: React.FC<MobileStickyBarProps> = ({ onBuyClick }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show when scrolled past 350px (after hero top)
      if (window.scrollY > 350) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-slate-900/95 backdrop-blur-md border-t border-slate-800 p-2.5 px-4 shadow-2xl transition-all duration-200">
      <div className="flex items-center justify-between gap-3 max-w-md mx-auto">
        <div className="truncate">
          <p className="text-xs font-bold text-white truncate">
            +200 Projetos Eletrônica
          </p>
          <p className="text-[11px] text-amber-400 font-bold">
            Apenas {PRODUCT_CONFIG.currency} {PRODUCT_CONFIG.price}
          </p>
        </div>

        <button
          onClick={onBuyClick}
          className="px-4 py-2.5 rounded-lg text-xs font-black text-white bg-emerald-600 hover:bg-emerald-500 active:scale-95 shadow-md shadow-emerald-600/30 shrink-0 flex items-center gap-1.5 transition-all cursor-pointer whitespace-nowrap"
        >
          <span>QUERO ACESSAR</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
};
