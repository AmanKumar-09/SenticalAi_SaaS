import React from 'react';

export interface LogoProps {
  className?: string;
  variant?: 'full' | 'icon';
  size?: 'sm' | 'md' | 'lg';
  darkMode?: boolean;
}

export const SenticalIcon: React.FC<{ className?: string }> = ({ className = 'w-10 h-10' }) => (
  <svg
    viewBox="0 0 240 240"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    {/* Speech Bubble Base */}
    <path
      d="M48 30H192C208.569 30 222 43.4315 222 60V140C222 156.569 208.569 170 192 170H125L70 210V170H48C31.4315 170 18 156.569 18 140V60C18 43.4315 31.4315 30 48 30Z"
      fill="#12B76A"
    />
    {/* Growth Bar 1 */}
    <rect x="68" y="112" width="22" height="34" rx="8" fill="white" />
    {/* Growth Bar 2 */}
    <rect x="104" y="90" width="22" height="56" rx="8" fill="white" />
    {/* Growth Bar 3 */}
    <rect x="140" y="68" width="22" height="78" rx="8" fill="white" />
    {/* Sparkle Star */}
    <path
      d="M151 26C151 37.5 159.5 46 171 46C159.5 46 151 54.5 151 66C151 54.5 142.5 46 131 46C142.5 46 151 37.5 151 26Z"
      fill="#D4F668"
    />
  </svg>
);

export const SenticalLogo: React.FC<LogoProps> = ({
  className = '',
  variant = 'full',
  size = 'md',
  darkMode = false,
}) => {
  const iconSizes = {
    sm: 'w-7 h-7',
    md: 'w-10 h-10',
    lg: 'w-14 h-14',
  };

  const textSizes = {
    sm: 'text-base',
    md: 'text-2xl',
    lg: 'text-4xl',
  };

  const taglineSizes = {
    sm: 'text-[8px]',
    md: 'text-[10px]',
    lg: 'text-[13px]',
  };

  if (variant === 'icon') {
    return <SenticalIcon className={`${iconSizes[size]} ${className}`} />;
  }

  return (
    <div className={`inline-flex items-center gap-3 ${className}`}>
      <SenticalIcon className={iconSizes[size]} />
      <div className="flex flex-col">
        <div className={`font-extrabold tracking-tight leading-none ${textSizes[size]}`}>
          <span className={darkMode ? 'text-white' : 'text-[#0B4A34]'}>Sentical </span>
          <span className="text-[#12B76A]">Ai</span>
        </div>
        <span
          className={`font-semibold tracking-[0.24em] uppercase mt-1 leading-none ${
            darkMode ? 'text-slate-300' : 'text-[#556B62]'
          } ${taglineSizes[size]}`}
        >
          BUSINESS GROWTH ON WHATSAPP
        </span>
      </div>
    </div>
  );
};
