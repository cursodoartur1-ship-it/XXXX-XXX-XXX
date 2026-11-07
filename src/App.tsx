/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { CHECKOUT_URL } from './config';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { PainPoints } from './components/PainPoints';
import { ProductOverview } from './components/ProductOverview';
import { Benefits } from './components/Benefits';
import { HowItWorks } from './components/HowItWorks';
import { TargetAudience } from './components/TargetAudience';
import { OfferValuation } from './components/OfferValuation';
import { MainOffer } from './components/MainOffer';
import { Faq } from './components/Faq';
import { FinalCta } from './components/FinalCta';
import { Footer } from './components/Footer';
import { CheckoutModal } from './components/CheckoutModal';
import { LegalModal } from './components/LegalModal';
import { MobileStickyBar } from './components/MobileStickyBar';

export default function App() {
  const [checkoutModalOpen, setCheckoutModalOpen] = useState(false);
  const [legalModalType, setLegalModalType] = useState<'terms' | 'privacy' | null>(null);

  // Centralized checkout handler for all CTA buttons
  const handleBuyClick = () => {
    const trimmed = CHECKOUT_URL?.trim();
    if (trimmed && trimmed !== '#' && (trimmed.startsWith('http://') || trimmed.startsWith('https://'))) {
      window.location.href = trimmed;
    } else {
      // If CHECKOUT_URL is not configured, inform the user with the setup modal
      setCheckoutModalOpen(true);
    }
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-blue-600 selection:text-white">
      {/* Navigation Header */}
      <Header onBuyClick={handleBuyClick} />

      {/* Main Content Flow */}
      <main>
        {/* 1. First Fold / Hero Section */}
        <Hero onBuyClick={handleBuyClick} />

        {/* 2. Pain Points Identification */}
        <PainPoints />

        {/* 3. Product Presentation & Content Breakdown */}
        <ProductOverview />

        {/* 4. Pedagogical Benefits */}
        <Benefits />

        {/* 5. Visual "How it Works" Step-by-Step */}
        <HowItWorks />

        {/* 6. Target Audience Breakdown */}
        <TargetAudience />

        {/* 7. Offer Valuation & Time Savings */}
        <OfferValuation onBuyClick={handleBuyClick} />

        {/* 8. Conversion Offer Card */}
        <MainOffer onBuyClick={handleBuyClick} />

        {/* 9. Interactive FAQ Accordion */}
        <Faq />

        {/* 10. Final Call to Action */}
        <FinalCta onBuyClick={handleBuyClick} />
      </main>

      {/* Footer */}
      <Footer
        onOpenTerms={() => setLegalModalType('terms')}
        onOpenPrivacy={() => setLegalModalType('privacy')}
      />

      {/* Mobile Sticky CTA Bar */}
      <MobileStickyBar onBuyClick={handleBuyClick} />

      {/* Checkout Setup Informational Modal */}
      <CheckoutModal
        isOpen={checkoutModalOpen}
        onClose={() => setCheckoutModalOpen(false)}
      />

      {/* Full Terms and Privacy Policy Modal */}
      <LegalModal
        type={legalModalType}
        onClose={() => setLegalModalType(null)}
      />
    </div>
  );
}
