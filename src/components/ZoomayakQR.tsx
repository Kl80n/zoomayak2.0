import React from 'react';
import { QRCodeCanvas } from 'qrcode.react';

interface ZoomayakQRProps {
  value: string;
  size?: number;
  logoSize?: number;
  className?: string;
  showBorder?: boolean;
  lightBackground?: boolean;
  badgeShape?: 'rounded' | 'circle';
}

export const ZoomayakQR: React.FC<ZoomayakQRProps> = ({
  value,
  size = 156,
  logoSize,
  className = '',
  showBorder = false,
  lightBackground = true,
  badgeShape = 'rounded',
}) => {
  // Optimal logo size for Level H (~24-26% of QR size ensures 100% scan reliability)
  const computedLogoSize = logoSize || Math.max(30, Math.round(size * 0.24));
  const badgeOuterSize = computedLogoSize + 10;

  return (
    <div
      className={`relative inline-flex items-center justify-center select-none ${
        showBorder ? 'p-2.5 rounded-2xl border border-slate-200/80 dark:border-slate-700/80 shadow-md' : ''
      } ${lightBackground ? 'bg-white' : 'bg-transparent'} ${className}`}
      style={{
        width: showBorder ? `${size + 20}px` : `${size}px`,
        height: showBorder ? `${size + 20}px` : `${size}px`,
      }}
    >
      {/* High error-correction QR code canvas with standard quiet-zone margin */}
      <QRCodeCanvas
        value={value}
        size={size}
        level="H"
        includeMargin={true}
        marginSize={2}
        bgColor="#ffffff"
        fgColor="#0a0f1d"
      />

      {/* Centered official Zoomayak Brand Emblem Plate */}
      <div
        className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white flex items-center justify-center shadow-[0_2px_8px_rgba(0,0,0,0.25)] border-2 border-teal-600/30 overflow-hidden pointer-events-none z-10 ${
          badgeShape === 'circle' ? 'rounded-full' : 'rounded-xl'
        }`}
        style={{
          width: `${badgeOuterSize}px`,
          height: `${badgeOuterSize}px`,
        }}
      >
        <img
          src="/zoomayak-logo-approved-icon.png"
          alt="ЗооМаяк"
          className="w-full h-full object-contain p-1.5"
          loading="eager"
        />
      </div>
    </div>
  );
};
