interface FlagIconProps {
  country: 'spain' | 'france' | 'russia';
  size?: number;
  className?: string;
}

export default function FlagIcon({ country, size = 64, className = '' }: FlagIconProps) {
  const id = `flag-${country}-${Math.random().toString(36).slice(2, 8)}`;

  const flags: Record<string, JSX.Element> = {
    spain: (
      <svg width={size} height={size} viewBox="0 0 120 120" className={className} role="img" aria-label="Spanish flag">
        <defs>
          <clipPath id={`${id}-clip`}>
            <circle cx="60" cy="60" r="56" />
          </clipPath>
          <filter id={`${id}-shadow`}>
            <feDropShadow dx="0" dy="2" stdDeviation="4" floodColor="#000" floodOpacity="0.15" />
          </filter>
        </defs>
        <circle cx="60" cy="60" r="58" fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="1" filter={`url(#${id}-shadow)`} />
        <g clipPath={`url(#${id}-clip)`}>
          <rect x="0" y="0" width="120" height="30" fill="#c60b1e" />
          <rect x="0" y="30" width="120" height="60" fill="#ffc400" />
          <rect x="0" y="90" width="120" height="30" fill="#c60b1e" />
          {/* Coat of arms hint */}
          <g transform="translate(46, 42)">
            <rect x="0" y="0" width="28" height="36" rx="3" fill="#ad1519" opacity="0.8" />
            <rect x="3" y="3" width="10" height="15" rx="1" fill="#ffc400" opacity="0.7" />
            <rect x="15" y="3" width="10" height="15" rx="1" fill="#fff" opacity="0.5" />
            <rect x="3" y="20" width="10" height="13" rx="1" fill="#fff" opacity="0.5" />
            <rect x="15" y="20" width="10" height="13" rx="1" fill="#ffc400" opacity="0.7" />
          </g>
        </g>
        <circle cx="60" cy="60" r="56" fill="none" stroke="rgba(255,255,255,0.3)" strokeWidth="2" />
      </svg>
    ),

    france: (
      <svg width={size} height={size} viewBox="0 0 120 120" className={className} role="img" aria-label="French flag">
        <defs>
          <clipPath id={`${id}-clip`}>
            <circle cx="60" cy="60" r="56" />
          </clipPath>
          <filter id={`${id}-shadow`}>
            <feDropShadow dx="0" dy="2" stdDeviation="4" floodColor="#000" floodOpacity="0.15" />
          </filter>
        </defs>
        <circle cx="60" cy="60" r="58" fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="1" filter={`url(#${id}-shadow)`} />
        <g clipPath={`url(#${id}-clip)`}>
          <rect x="0" y="0" width="40" height="120" fill="#002395" />
          <rect x="40" y="0" width="40" height="120" fill="#ffffff" />
          <rect x="80" y="0" width="40" height="120" fill="#ed2939" />
        </g>
        <circle cx="60" cy="60" r="56" fill="none" stroke="rgba(255,255,255,0.3)" strokeWidth="2" />
      </svg>
    ),

    russia: (
      <svg width={size} height={size} viewBox="0 0 120 120" className={className} role="img" aria-label="Russian flag">
        <defs>
          <clipPath id={`${id}-clip`}>
            <circle cx="60" cy="60" r="56" />
          </clipPath>
          <filter id={`${id}-shadow`}>
            <feDropShadow dx="0" dy="2" stdDeviation="4" floodColor="#000" floodOpacity="0.15" />
          </filter>
        </defs>
        <circle cx="60" cy="60" r="58" fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="1" filter={`url(#${id}-shadow)`} />
        <g clipPath={`url(#${id}-clip)`}>
          <rect x="0" y="0" width="120" height="40" fill="#ffffff" />
          <rect x="0" y="40" width="120" height="40" fill="#0039a6" />
          <rect x="0" y="80" width="120" height="40" fill="#d52b1e" />
        </g>
        <circle cx="60" cy="60" r="56" fill="none" stroke="rgba(255,255,255,0.3)" strokeWidth="2" />
      </svg>
    ),
  };

  return flags[country] || null;
}
