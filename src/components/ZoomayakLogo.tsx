import React from 'react';

interface ZoomayakLogoProps {
  className?: string;
  compact?: boolean;
}

/**
 * ЕДИНЫЙ MASTER-ЛОГОТИП ЗооМаяк.
 * В обеих темах используется один и тот же artwork и одна и та же геометрия.
 * В тёмной теме меняется только читаемость через CSS — размер, название и слоган не меняются.
 */
export const ZoomayakLogo: React.FC<ZoomayakLogoProps> = ({
  className = '',
  compact = false,
}) => (
  <span
    className={`zoomayak-approved-logo ${compact ? 'is-compact' : ''} ${className}`}
    data-logo-theme
    aria-label="ЗооМаяк — Ваш ориентир в мире питомцев"
  >
    <img
      src={compact ? '/zoomayak-logo-approved-icon.png' : '/zoomayak-logo-approved.png'}
      alt="ЗооМаяк — Ваш ориентир в мире питомцев"
      className="zoomayak-approved-logo-img"
      draggable={false}
    />
  </span>
);
