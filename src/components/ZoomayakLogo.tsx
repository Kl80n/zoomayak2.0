import React from 'react';

/**
 * ЕДИНЫЙ MASTER-ЛОГОТИП ЗооМаяк.
 * Светлая тема использует утверждённый master без изменений.
 * Тёмная тема использует согласованный вариант «Неоновый контур»
 * из предоставленных пользователем вариантов — без белой плашки.
 */
export const ZoomayakLogo: React.FC<{ className?: string; compact?: boolean }> = ({ className = '', compact = false }) => (
  <span className={`zoomayak-approved-logo ${compact ? 'is-compact' : ''} ${className}`} data-logo-theme>
    {compact ? (
      <>
        <img
          src="/zoomayak-logo-approved-icon.png"
          alt="ЗооМаяк"
          className="zoomayak-approved-logo-img zoomayak-logo-light"
          draggable={false}
        />
        <img
          src="/zoomayak-logo-dark-icon.png"
          alt="ЗооМаяк"
          className="zoomayak-approved-logo-img zoomayak-logo-dark"
          draggable={false}
        />
      </>
    ) : (
      <>
        <img
          src="/zoomayak-logo-approved.png"
          alt="ЗооМаяк — Ваш ориентир в мире питомцев"
          className="zoomayak-approved-logo-img zoomayak-logo-light"
          draggable={false}
        />
        <img
          src="/zoomayak-logo-dark-lockup-normalized.png"
          alt="ЗооМаяк — Ваш ориентир в мире питомцев"
          className="zoomayak-approved-logo-img zoomayak-logo-dark"
          draggable={false}
        />
      </>
    )}
  </span>
);

