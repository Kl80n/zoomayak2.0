import React from 'react';

interface ZoomayakLogoProps {
  className?: string;
  compact?: boolean;
  showSlogan?: boolean;
}

/**
 * Единый векторный логотип ЗооМаяк.
 * В светлой и тёмной теме геометрия, размеры и композиция одинаковые;
 * меняются только цвета линий/текста для читаемости на фоне.
 */
export const ZoomayakLogo: React.FC<ZoomayakLogoProps> = ({
  className = '',
  compact = false,
  showSlogan = true,
}) => {
  if (compact) {
    return (
      <span
        className={`inline-flex select-none shrink-0 ${className}`}
        aria-label="ЗооМаяк"
      >
        <svg
          viewBox="0 0 160 160"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-11 h-11 sm:w-12 sm:h-12 shrink-0"
          aria-hidden="true"
        >
          <LogoArtwork />
        </svg>
      </span>
    );
  }

  return (
    <span
      className={`inline-flex items-center gap-3.5 select-none shrink-0 ${className}`}
      aria-label="ЗооМаяк — Ваш ориентир в мире питомцев"
    >
      <svg
        viewBox="0 0 160 160"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-11 h-11 sm:w-12 sm:h-12 shrink-0"
        aria-hidden="true"
      >
        <LogoArtwork />
      </svg>

      <span className="flex flex-col justify-center min-w-0">
        <span className="flex items-baseline font-bold tracking-tight text-xl sm:text-2xl leading-none whitespace-nowrap">
          <span className="text-slate-900 dark:text-white transition-colors">Зоо</span>
          <span className="text-cyan-600 dark:text-emerald-400 transition-colors">Маяк</span>
        </span>
        {showSlogan && (
          <span className="text-[10px] sm:text-xs font-medium text-slate-500 dark:text-slate-200 tracking-normal mt-0.5 whitespace-nowrap transition-colors">
            Ваш ориентир в мире питомцев
          </span>
        )}
      </span>
    </span>
  );
};

const LogoArtwork: React.FC = () => (
  <>
    {/* Маяк */}
    <path
      d="M80 14V22M73 22H87M75 22L72 50H88L85 22M68 50H92M70 50L66 112M90 50L94 112"
      className="stroke-cyan-600 dark:stroke-cyan-300"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
    />

    {/* Лапка в фонаре */}
    <circle cx="80" cy="36" r="2.2" className="fill-cyan-600 dark:fill-cyan-300" />
    <circle cx="76" cy="32" r="1.3" className="fill-cyan-600 dark:fill-cyan-300" />
    <circle cx="80" cy="30" r="1.3" className="fill-cyan-600 dark:fill-cyan-300" />
    <circle cx="84" cy="32" r="1.3" className="fill-cyan-600 dark:fill-cyan-300" />

    {/* Полосы маяка */}
    <path
      d="M71 66L89 60M70 82L90 75M68 98L92 90"
      className="stroke-emerald-600 dark:stroke-emerald-400"
      strokeWidth="3.5"
      strokeLinecap="round"
    />

    {/* Собака — слева, чистый силуэт без лишних выступов */}
    <path
      d="M74 100C67 98 62 91 60 84C58 77 53 74 48 76C44 78 43 83 45 88C47 93 49 97 45 101C39 107 36 116 35 125C34 133 38 139 52 144C63 147 70 147 76 142"
      className="stroke-cyan-600 dark:stroke-cyan-300"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <circle cx="56" cy="85" r="2" className="fill-cyan-600 dark:fill-cyan-300" />

    {/* Кот — справа. Шея и затылок полностью гладкие, без «палки». */}
    <path
      d="M86 100C93 98 98 91 100 84L104 76L108 72L112 76L114 84C114 88 115 91 117 95C121 101 123 106 124 114C125 123 124 132 121 138C117 143 109 145 99 144C92 144 87 142 84 140"
      className="stroke-cyan-600 dark:stroke-cyan-300"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <circle cx="105" cy="85" r="2" className="fill-cyan-600 dark:fill-cyan-300" />

    {/* Сердце */}
    <path
      d="M80 134C77 130 68 118 68 111C68 105 73 101 78 105C80 107 80 107 80 107C80 107 80 107 82 105C87 101 92 105 92 111C92 118 83 130 80 134Z"
      className="stroke-emerald-600 dark:stroke-emerald-300"
      strokeWidth="2.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </>
);
