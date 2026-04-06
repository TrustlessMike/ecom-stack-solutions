export function PlatformsIcon({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      {/* Awning */}
      <path d="M8 20L12 8h40l4 12" stroke="#c8ff00" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M8 20h48" stroke="#c8ff00" strokeWidth="4" strokeLinecap="round" />
      {/* Awning scallops */}
      <path d="M8 20c0 5 4 8 8 8s8-3 8-8" fill="#c8ff00" opacity="0.25" />
      <path d="M24 20c0 5 4 8 8 8s8-3 8-8" fill="#c8ff00" opacity="0.35" />
      <path d="M40 20c0 5 4 8 8 8s8-3 8-8" fill="#c8ff00" opacity="0.25" />
      {/* Building */}
      <rect x="12" y="28" width="40" height="28" rx="2" fill="#c8ff00" opacity="0.12" stroke="#c8ff00" strokeWidth="3" />
      {/* Door */}
      <rect x="25" y="38" width="14" height="18" rx="2" fill="#c8ff00" opacity="0.3" stroke="white" strokeWidth="2" />
      {/* Door handle */}
      <circle cx="36" cy="48" r="1.5" fill="white" />
    </svg>
  );
}

export function EmailIcon({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      {/* Envelope body */}
      <rect x="6" y="16" width="40" height="32" rx="4" fill="#c8ff00" opacity="0.12" stroke="#c8ff00" strokeWidth="3" />
      {/* Envelope flap */}
      <path d="M6 20l20 14 20-14" stroke="#c8ff00" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
      {/* Lightning bolt */}
      <path d="M48 8l-6 14h8l-7 16" stroke="white" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M48 8l-6 14h8l-7 16" stroke="#c8ff00" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function ReviewsIcon({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      {/* Speech bubble */}
      <path d="M8 12h36a4 4 0 014 4v20a4 4 0 01-4 4H20l-8 8v-8H8a4 4 0 01-4-4V16a4 4 0 014-4z" fill="#c8ff00" opacity="0.12" stroke="#c8ff00" strokeWidth="3" />
      {/* Star */}
      <path d="M26 19l3.1 6.3 6.9 1-5 4.9 1.2 6.8L26 34.7 19.8 38l1.2-6.8-5-4.9 6.9-1L26 19z" fill="#c8ff00" stroke="white" strokeWidth="1.5" />
    </svg>
  );
}

export function AnalyticsIcon({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      {/* Chart bars */}
      <rect x="8" y="36" width="10" height="20" rx="2" fill="#c8ff00" opacity="0.3" stroke="#c8ff00" strokeWidth="2.5" />
      <rect x="22" y="24" width="10" height="32" rx="2" fill="#c8ff00" opacity="0.5" stroke="#c8ff00" strokeWidth="2.5" />
      <rect x="36" y="14" width="10" height="42" rx="2" fill="#c8ff00" opacity="0.7" stroke="#c8ff00" strokeWidth="2.5" />
      {/* Upward arrow */}
      <path d="M52 36V10m0 0l-6 6m6-6l6 6" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function ShippingIcon({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      {/* Box */}
      <rect x="14" y="16" width="36" height="32" rx="3" fill="#c8ff00" opacity="0.12" stroke="#c8ff00" strokeWidth="3" />
      {/* Box flaps */}
      <path d="M14 28h36" stroke="#c8ff00" strokeWidth="2.5" />
      <path d="M32 16v12" stroke="white" strokeWidth="2.5" />
      {/* Tape */}
      <rect x="28" y="28" width="8" height="20" rx="1" fill="#c8ff00" opacity="0.25" stroke="white" strokeWidth="1.5" />
      {/* Speed lines */}
      <line x1="4" y1="24" x2="10" y2="24" stroke="#c8ff00" strokeWidth="2.5" strokeLinecap="round" />
      <line x1="2" y1="32" x2="10" y2="32" stroke="#c8ff00" strokeWidth="2.5" strokeLinecap="round" />
      <line x1="4" y1="40" x2="10" y2="40" stroke="#c8ff00" strokeWidth="2.5" strokeLinecap="round" />
    </svg>
  );
}

export function ConversionIcon({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      {/* Funnel */}
      <path d="M8 8h48L40 32v16l-16 8V32L8 8z" fill="#c8ff00" opacity="0.12" stroke="#c8ff00" strokeWidth="3" strokeLinejoin="round" />
      {/* Funnel middle line */}
      <path d="M16 18h32" stroke="#c8ff00" strokeWidth="2" opacity="0.4" />
      {/* Dollar sign */}
      <text x="32" y="30" textAnchor="middle" fill="white" fontWeight="800" fontSize="16" fontFamily="sans-serif">$</text>
    </svg>
  );
}
