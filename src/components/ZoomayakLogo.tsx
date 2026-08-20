import React from 'react';

interface ZoomayakLogoProps {
  className?: string;
  compact?: boolean;
  showSlogan?: boolean;
}

/**
 * Утверждённый master-логотип.
 *
 * Важно: artwork не перерисовывается и не масштабируется по-разному
 * между темами. Светлый и тёмный lockup имеют один и тот же исходный
 * холст 242×86 и выводятся в одном фиксированном контейнере.
 */
export const ZoomayakLogo: React.FC<ZoomayakLogoProps> = ({
  className = '',
  compact = false,
  showSlogan = true,
}) => {
  if (compact) {
    return (
      <span className={`zoomayak-logo-compact ${className}`} aria-label="ЗооМаяк">
        <img
          src="/zoomayak-logo-approved-icon.png"
          alt=""
          className="zoomayak-logo-icon zoomayak-logo-light"
          aria-hidden="true"
        />
        <img
          src="/zoomayak-logo-dark-icon.png"
          alt=""
          className="zoomayak-logo-icon zoomayak-logo-dark"
          aria-hidden="true"
        />
      </span>
    );
  }

  return (
    <span
      className={`zoomayak-approved-logo ${className}`}
      aria-label="ЗооМаяк — Ваш ориентир в мире питомцев"
    >
      <img
        src="/zoomayak-logo-approved.png"
        alt="ЗооМаяк — Ваш ориентир в мире питомцев"
        className="zoomayak-approved-logo-img zoomayak-logo-light"
      />
      <img
        src="/zoomayak-logo-dark-lockup-normalized.png"
        alt="ЗооМаяк — Ваш ориентир в мире питомцев"
        className={`zoomayak-approved-logo-img zoomayak-logo-dark${showSlogan ? '' : ' zoomayak-no-slogan'}`}
      />
    </span>
  );
};
