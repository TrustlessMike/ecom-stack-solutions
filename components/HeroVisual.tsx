'use client';

export default function HeroVisual() {
  return (
    <div className="hero-visual-container relative w-full max-w-lg mx-auto lg:mx-0" aria-hidden="true">
      <svg viewBox="0 0 480 400" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
        {/* Glow background */}
        <defs>
          <radialGradient id="limeGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#c8ff00" stopOpacity="0.15" />
            <stop offset="100%" stopColor="#c8ff00" stopOpacity="0" />
          </radialGradient>
          <filter id="glowFilter">
            <feGaussianBlur stdDeviation="8" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Background glow */}
        <circle cx="240" cy="200" r="180" fill="url(#limeGlow)" />

        {/* Dashboard frame */}
        <rect x="60" y="40" width="360" height="240" rx="12" fill="#141413" stroke="#27272a" strokeWidth="2" className="hero-float" />

        {/* Title bar */}
        <rect x="60" y="40" width="360" height="36" rx="12" fill="#1a1a19" />
        <rect x="60" y="64" width="360" height="12" fill="#1a1a19" />
        {/* Window dots */}
        <circle cx="82" cy="58" r="5" fill="#ff6b4a" opacity="0.8" />
        <circle cx="98" cy="58" r="5" fill="#c8ff00" opacity="0.5" />
        <circle cx="114" cy="58" r="5" fill="#52525b" opacity="0.5" />

        {/* Chart bars - animated */}
        <g className="hero-float" style={{ animationDelay: '0.5s' }}>
          <rect x="90" y="200" width="36" height="60" rx="4" fill="#c8ff00" opacity="0.2" />
          <rect x="90" y="220" width="36" height="40" rx="4" fill="#c8ff00" opacity="0.6" />
        </g>
        <g className="hero-float" style={{ animationDelay: '0.8s' }}>
          <rect x="140" y="170" width="36" height="90" rx="4" fill="#c8ff00" opacity="0.2" />
          <rect x="140" y="195" width="36" height="65" rx="4" fill="#c8ff00" opacity="0.7" />
        </g>
        <g className="hero-float" style={{ animationDelay: '1.1s' }}>
          <rect x="190" y="140" width="36" height="120" rx="4" fill="#c8ff00" opacity="0.2" />
          <rect x="190" y="160" width="36" height="100" rx="4" fill="#c8ff00" opacity="0.8" />
        </g>
        <g className="hero-float" style={{ animationDelay: '1.4s' }}>
          <rect x="240" y="110" width="36" height="150" rx="4" fill="#c8ff00" opacity="0.2" />
          <rect x="240" y="125" width="36" height="135" rx="4" fill="#c8ff00" opacity="0.9" />
        </g>

        {/* Trend line */}
        <polyline
          points="108,210 158,185 208,150 258,118"
          stroke="white"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          opacity="0.7"
          filter="url(#glowFilter)"
        />
        {/* Trend dots */}
        <circle cx="108" cy="210" r="4" fill="white" className="hero-pulse-glow" />
        <circle cx="158" cy="185" r="4" fill="white" />
        <circle cx="208" cy="150" r="4" fill="white" />
        <circle cx="258" cy="118" r="5" fill="#c8ff00" className="hero-pulse-glow" stroke="white" strokeWidth="2" />

        {/* Metric cards */}
        {/* Revenue card */}
        <rect x="300" y="90" width="105" height="56" rx="8" fill="#1a1a19" stroke="#27272a" strokeWidth="1.5" />
        <text x="312" y="110" fill="#a1a09e" fontSize="9" fontFamily="sans-serif">Revenue</text>
        <text x="312" y="130" fill="#c8ff00" fontSize="16" fontWeight="800" fontFamily="sans-serif">$48.2K</text>

        {/* Conversion card */}
        <rect x="300" y="158" width="105" height="56" rx="8" fill="#1a1a19" stroke="#c8ff00" strokeWidth="1.5" opacity="0.8" className="hero-pulse-glow" />
        <text x="312" y="178" fill="#a1a09e" fontSize="9" fontFamily="sans-serif">Conversion</text>
        <text x="312" y="198" fill="white" fontSize="16" fontWeight="800" fontFamily="sans-serif">4.8%</text>
        <text x="370" y="198" fill="#c8ff00" fontSize="10" fontWeight="700" fontFamily="sans-serif">+12%</text>

        {/* Floating elements around the dashboard */}
        {/* Star */}
        <g className="hero-float" style={{ animationDelay: '0.3s' }}>
          <path d="M40 120l4 8 9 1.3-6.5 6.3 1.5 9-8-4.2-8 4.2 1.5-9L27 129.3l9-1.3z" fill="#c8ff00" opacity="0.6" />
        </g>

        {/* Shopping bag */}
        <g className="hero-float" style={{ animationDelay: '1.8s' }}>
          <rect x="420" y="100" width="30" height="34" rx="4" fill="none" stroke="#c8ff00" strokeWidth="2.5" opacity="0.5" />
          <path d="M427 108v-6a8 8 0 0116 0v6" stroke="#c8ff00" strokeWidth="2" opacity="0.5" fill="none" />
        </g>

        {/* Lime accent circles - decorative */}
        <circle cx="50" cy="300" r="20" fill="#c8ff00" opacity="0.06" />
        <circle cx="430" cy="320" r="30" fill="#c8ff00" opacity="0.04" />

        {/* Bottom metric bar */}
        <rect x="80" y="310" width="320" height="48" rx="10" fill="#141413" stroke="#27272a" strokeWidth="1.5" />
        <circle cx="108" cy="334" r="12" fill="#c8ff00" opacity="0.15" />
        <text x="108" y="338" textAnchor="middle" fill="#c8ff00" fontSize="12" fontWeight="800" fontFamily="sans-serif">5</text>
        <text x="128" y="330" fill="#a1a09e" fontSize="8" fontFamily="sans-serif">Tools</text>
        <text x="128" y="342" fill="white" fontSize="10" fontWeight="700" fontFamily="sans-serif">Connected</text>

        <line x1="200" y1="318" x2="200" y2="350" stroke="#27272a" strokeWidth="1" />

        <circle cx="228" cy="334" r="12" fill="rgba(255,107,74,0.15)" />
        <text x="228" y="338" textAnchor="middle" fill="#ff6b4a" fontSize="12" fontWeight="800" fontFamily="sans-serif">3</text>
        <text x="248" y="330" fill="#a1a09e" fontSize="8" fontFamily="sans-serif">Active</text>
        <text x="248" y="342" fill="white" fontSize="10" fontWeight="700" fontFamily="sans-serif">Campaigns</text>

        <line x1="320" y1="318" x2="320" y2="350" stroke="#27272a" strokeWidth="1" />

        <text x="340" y="330" fill="#a1a09e" fontSize="8" fontFamily="sans-serif">Stack Score</text>
        <text x="340" y="344" fill="#c8ff00" fontSize="13" fontWeight="800" fontFamily="sans-serif">92/100</text>
      </svg>
    </div>
  );
}
