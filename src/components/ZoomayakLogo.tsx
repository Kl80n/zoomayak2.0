import React from 'react';

/**
 * ЕДИНЫЙ MASTER-ЛОГОТИП ЗооМаяк.
 * Не перерисовывать и не заменять другим знаком без явного согласования.
 */
export const ZoomayakLogo: React.FC<{ className?: string; compact?: boolean }> = ({ className = '', compact = false }) => (
  <span className={`zoomayak-approved-logo ${compact ? 'is-compact' : ''} ${className}`}>
    <img
      src={compact ? '/zoomayak-logo-approved-icon.png' : '/zoomayak-logo-approved.png'}
      alt="ЗооМаяк — Ваш ориентир в мире питомцев"
      className="zoomayak-approved-logo-img"
      draggable={false}
    />
  </span>
);
