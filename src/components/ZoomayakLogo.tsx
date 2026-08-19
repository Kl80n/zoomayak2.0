import React from 'react';

/**
 * ЕДИНЫЙ MASTER-ЛОГОТИП ЗооМаяк.
 * Светлая тема использует утверждённый master без изменений.
 * Тёмная тема использует согласованный вариант «Неоновый контур»
 * из предоставленных пользователем вариантов — без белой плашки.
 */
export const ZoomayakLogo: React.FC<{ className?: string; compact?: boolean }> = ({ className = '', compact = false }) => (
  <span className={`zoomayak-approved-logo ${compact ? 'is-compact' : ''} ${className}`} data-logo-theme>
    <span className="zoomayak-logo-glow" aria-hidden="true" />
    {compact ? (
      <>
        <img
          src="/zoomayak-logo-approved-icon.png"
          alt="ЗооМаяк"
          className="zoomayak-approved-logo-img zoomayak-logo-light"
          draggable={false}
        />
        <img
          src="/zoomayak-logo-dark.png"
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
        <span className="zoomayak-dark-lockup">
          <img
            src="/zoomayak-logo-dark.png"
            alt="ЗооМаяк — неоновый контур"
            className="zoomayak-approved-logo-img zoomayak-logo-dark"
            draggable={false}
          />
          <span className="zoomayak-dark-wordmark" aria-hidden="true">
            <b>Зоо</b><strong>Маяк</strong>
          </span>
        </span>
      </>
    )}
  </span>
);
