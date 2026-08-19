import React from 'react';

/**
 * ЕДИНЫЙ MASTER-ЛОГОТИП ЗооМаяк.
 * Не перерисовывать и не заменять другим знаком без явного согласования.
 */
export const ZoomayakLogo: React.FC<{ className?: string; compact?: boolean }> = ({ className = '', compact = false }) => (
  <span className={`zoomayak-approved-logo ${compact ? 'is-compact' : ''} ${className}`} data-logo-theme>
    <span className="zoomayak-logo-glow" aria-hidden="true" />
    {compact ? (
      <img
        src="/zoomayak-logo-approved-icon.png"
        alt="ЗооМаяк"
        className="zoomayak-approved-logo-img zoomayak-logo-light"
        draggable={false}
      />
    ) : (
      <>
        <img
          src="/zoomayak-logo-approved.png"
          alt="ЗооМаяк — Ваш ориентир в мире питомцев"
          className="zoomayak-approved-logo-img zoomayak-logo-light"
          draggable={false}
        />
        <img
          src="/zoomayak-logo-dark.png"
          alt="ЗооМаяк — Ваш ориентир в мире питомцев"
          className="zoomayak-approved-logo-img zoomayak-logo-dark"
          draggable={false}
        />
      </>
    )}
  </span>
);
