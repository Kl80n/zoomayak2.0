import React from 'react';

export const ZoomayakLogo: React.FC<{ className?: string; compact?: boolean }> = ({ className = '', compact = false }) => (
  <div className={`flex items-center gap-2.5 ${className}`}>
    <svg viewBox="0 0 72 72" aria-hidden="true" className={compact ? 'w-10 h-10' : 'w-12 h-12'} fill="none">
      {/* Lighthouse */}
      <path d="M31 25h10l4 29H27l4-29Z" fill="currentColor" opacity=".12" stroke="currentColor" strokeWidth="2"/>
      <path d="M29 34h14M28 43h16" stroke="currentColor" strokeWidth="2" opacity=".7"/>
      {/* Paw/light */}
      <circle cx="36" cy="19" r="5" fill="currentColor"/>
      <circle cx="31.5" cy="14.5" r="2.2" fill="currentColor"/>
      <circle cx="40.5" cy="14.5" r="2.2" fill="currentColor"/>
      {/* Protective rays / hands */}
      <path d="M34 20C27 16 19 14 11 17M38 20c7-4 15-6 23-3" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round"/>
      <path d="M12 17l5 1M60 17l-5 1" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      {/* Cat and dog silhouettes */}
      <path d="M18 55c0-6 3-10 7-10 3 0 5 2 6 5 1 3-1 7-5 9h-5c-2 0-3-1-3-4Z" fill="currentColor" opacity=".9"/>
      <path d="M54 55c0-6-3-10-7-10-3 0-5 2-6 5-1 3 1 7 5 9h5c2 0 3-1 3-4Z" fill="currentColor" opacity=".9"/>
      {/* Heart */}
      <path d="M36 53c-2.8-3.2-7-1.4-7 2 0 3.2 4.2 5.8 7 7.5 2.8-1.7 7-4.3 7-7.5 0-3.4-4.2-5.2-7-2Z" fill="currentColor"/>
      {/* base */}
      <path d="M22 63h28" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
    </svg>
    {!compact && (
      <span className="brand-wordmark whitespace-nowrap">Зоо<span>Маяк</span></span>
    )}
  </div>
);
