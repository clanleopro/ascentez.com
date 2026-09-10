/* SVG crane illustrations — blueprint and silhouette style */

export function CraneBlueprint({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 400 700" fill="none" stroke="currentColor" strokeWidth="1.2" style={{ color: "var(--red)" }} preserveAspectRatio="xMidYMid meet">
      {/* tower */}
      <line x1="200" y1="100" x2="200" y2="600" />
      <line x1="190" y1="100" x2="190" y2="600" opacity="0.5" />
      <line x1="210" y1="100" x2="210" y2="600" opacity="0.5" />
      {/* tower cross-bracing */}
      {Array.from({ length: 14 }).map((_, i) => {
        const y = 130 + i * 35;
        return (
          <g key={i}>
            <line x1="190" y1={y} x2="210" y2={y + 35} opacity="0.4" />
            <line x1="210" y1={y} x2="190" y2={y + 35} opacity="0.4" />
          </g>
        );
      })}
      {/* base */}
      <rect x="150" y="600" width="100" height="20" />
      <line x1="120" y1="620" x2="280" y2="620" />
      <line x1="100" y1="640" x2="300" y2="640" />
      {/* counter-jib */}
      <line x1="200" y1="100" x2="60" y2="120" />
      <line x1="200" y1="110" x2="60" y2="130" opacity="0.5" />
      <rect x="40" y="115" width="30" height="20" fill="currentColor" opacity="0.3" />
      {/* main jib boom — angled up */}
      <line x1="200" y1="100" x2="380" y2="40" />
      <line x1="200" y1="110" x2="380" y2="50" opacity="0.5" />
      {/* boom truss */}
      {Array.from({ length: 10 }).map((_, i) => {
        const t = i / 10;
        const x1 = 200 + (380 - 200) * t;
        const y1 = 100 + (40 - 100) * t;
        const x2 = 200 + (380 - 200) * (t + 0.05);
        const y2 = 110 + (50 - 110) * (t + 0.05);
        return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} opacity="0.4" />;
      })}
      {/* hook line */}
      <line x1="350" y1="55" x2="350" y2="350" strokeDasharray="2 4" />
      {/* hook */}
      <path d="M340 350 L360 350 L360 365 Q350 380 340 365 Z" fill="none" />
      <circle cx="350" cy="345" r="4" fill="currentColor" />
      {/* operator cab */}
      <rect x="195" y="92" width="14" height="14" fill="currentColor" opacity="0.6" />
      {/* annotations dots */}
      <circle cx="380" cy="40" r="3" fill="currentColor" />
      <circle cx="60" cy="120" r="3" fill="currentColor" />
      <circle cx="200" cy="600" r="3" fill="currentColor" />
    </svg>
  );
}

export function CraneSilhouette({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 400 700" fill="currentColor" preserveAspectRatio="xMidYMid meet">
      <polygon points="195,80 205,80 215,600 185,600" />
      <polygon points="200,80 60,110 60,118 200,98" />
      <polygon points="200,80 380,30 380,40 200,98" />
      <rect x="40" y="108" width="30" height="22" />
      <rect x="160" y="600" width="80" height="18" />
      <rect x="120" y="618" width="160" height="10" />
      <line x1="350" y1="40" x2="350" y2="340" stroke="currentColor" strokeWidth="2" />
      <path d="M338 340 L362 340 L362 358 Q350 378 338 358 Z" />
      <rect x="192" y="72" width="16" height="14" />
    </svg>
  );
}

export function IconCrawler({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 200 160" fill="none" stroke="currentColor" strokeWidth="1.1" style={{ color: "var(--red)" }} preserveAspectRatio="xMidYMid meet">
      {/* crawler track base */}
      <rect x="10" y="118" width="170" height="22" />
      <line x1="10" y1="124" x2="180" y2="124" opacity="0.4" />
      <line x1="10" y1="134" x2="180" y2="134" opacity="0.4" />
      {/* track wheels */}
      {Array.from({ length: 8 }).map((_, i) => (
        <circle key={i} cx={22 + i * 22} cy="140" r="6" />
      ))}
      {Array.from({ length: 8 }).map((_, i) => (
        <circle key={`d${i}`} cx={22 + i * 22} cy="140" r="2" fill="currentColor" />
      ))}
      {/* drive sprockets at ends */}
      <circle cx="14" cy="129" r="4" />
      <circle cx="178" cy="129" r="4" />
      {/* turntable */}
      <rect x="60" y="108" width="80" height="10" />
      <line x1="60" y1="113" x2="140" y2="113" opacity="0.4" />
      {/* operator cab */}
      <rect x="50" y="78" width="36" height="30" />
      <rect x="56" y="84" width="24" height="14" fill="currentColor" opacity="0.25" />
      <line x1="56" y1="91" x2="80" y2="91" opacity="0.5" />
      {/* counterweight stack */}
      <rect x="92" y="82" width="30" height="26" />
      <line x1="92" y1="90" x2="122" y2="90" opacity="0.5" />
      <line x1="92" y1="99" x2="122" y2="99" opacity="0.5" />
      {/* A-frame mast */}
      <line x1="105" y1="82" x2="125" y2="40" />
      <line x1="125" y1="82" x2="125" y2="40" opacity="0.6" />
      <circle cx="125" cy="40" r="3" fill="currentColor" />
      {/* lattice boom — two parallel chords */}
      <line x1="100" y1="80" x2="196" y2="14" />
      <line x1="106" y1="86" x2="200" y2="22" opacity="0.7" />
      {/* boom truss diagonals */}
      {Array.from({ length: 12 }).map((_, i) => {
        const t = i / 12;
        const x1 = 100 + (196 - 100) * t;
        const y1 = 80 + (14 - 80) * t;
        const x2 = 106 + (200 - 106) * (t + 0.04);
        const y2 = 86 + (22 - 86) * (t + 0.04);
        return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} opacity="0.4" />;
      })}
      {/* pendant lines from mast to boom tip */}
      <line x1="125" y1="40" x2="196" y2="14" strokeDasharray="3 2" opacity="0.6" />
      {/* hoist line + hook */}
      <line x1="196" y1="18" x2="196" y2="92" strokeDasharray="2 3" />
      <rect x="190" y="92" width="12" height="6" />
      <path d="M192 98 L200 98 L200 106 Q196 114 192 106 Z" />
      {/* tip annotation */}
      <circle cx="198" cy="14" r="2.5" fill="currentColor" />
    </svg>
  );
}

export function IconMobile({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 220 140" fill="none" stroke="currentColor" strokeWidth="1.1" style={{ color: "var(--red)" }} preserveAspectRatio="xMidYMid meet">
      {/* chassis */}
      <rect x="10" y="92" width="180" height="22" />
      <line x1="10" y1="100" x2="190" y2="100" opacity="0.4" />
      {/* outriggers */}
      <line x1="20" y1="114" x2="8" y2="126" />
      <rect x="2" y="124" width="14" height="6" />
      <line x1="180" y1="114" x2="192" y2="126" />
      <rect x="186" y="124" width="14" height="6" />
      {/* wheels (8-axle all-terrain) */}
      {Array.from({ length: 8 }).map((_, i) => (
        <g key={i}>
          <circle cx={22 + i * 21} cy="120" r="8" />
          <circle cx={22 + i * 21} cy="120" r="3" fill="currentColor" />
        </g>
      ))}
      {/* cab */}
      <path d="M10 92 L10 70 L48 70 L54 82 L54 92 Z" />
      <rect x="14" y="74" width="14" height="10" fill="currentColor" opacity="0.25" />
      <rect x="32" y="76" width="14" height="8" fill="currentColor" opacity="0.25" />
      {/* operator cab on slewing platform */}
      <rect x="60" y="74" width="22" height="18" />
      <rect x="64" y="78" width="14" height="10" fill="currentColor" opacity="0.25" />
      {/* slewing ring */}
      <rect x="58" y="88" width="80" height="6" />
      <line x1="58" y1="91" x2="138" y2="91" opacity="0.5" />
      {/* telescoping boom — angled */}
      <line x1="92" y1="74" x2="212" y2="14" />
      <line x1="98" y1="84" x2="212" y2="24" />
      {/* telescope sections */}
      {Array.from({ length: 5 }).map((_, i) => {
        const t = (i + 1) / 6;
        const x = 92 + (212 - 92) * t;
        const y1 = 74 + (14 - 74) * t;
        const y2 = 84 + (24 - 84) * t;
        return <line key={i} x1={x} y1={y1} x2={x} y2={y2} opacity="0.5" strokeDasharray="1 2" />;
      })}
      {/* boom pivot */}
      <circle cx="95" cy="79" r="3" fill="currentColor" />
      {/* hoist line + hook */}
      <line x1="212" y1="18" x2="212" y2="78" strokeDasharray="2 3" />
      <rect x="206" y="78" width="12" height="6" />
      <path d="M208 84 L216 84 L216 92 Q212 100 208 92 Z" />
      <circle cx="214" cy="14" r="2.5" fill="currentColor" />
    </svg>
  );
}

export function IconSPMT({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 240 120" fill="none" stroke="currentColor" strokeWidth="1.1" style={{ color: "var(--red)" }} preserveAspectRatio="xMidYMid meet">
      {/* cargo / module on top */}
      <rect x="20" y="14" width="200" height="36" />
      <line x1="20" y1="22" x2="220" y2="22" opacity="0.4" />
      {/* cargo internal bracing */}
      {Array.from({ length: 8 }).map((_, i) => (
        <line key={i} x1={40 + i * 22} y1="14" x2={40 + i * 22} y2="50" opacity="0.3" />
      ))}
      <line x1="20" y1="14" x2="220" y2="50" opacity="0.25" strokeDasharray="3 3" />
      <line x1="220" y1="14" x2="20" y2="50" opacity="0.25" strokeDasharray="3 3" />
      {/* lashing points */}
      <circle cx="30" cy="14" r="2" fill="currentColor" />
      <circle cx="210" cy="14" r="2" fill="currentColor" />
      {/* trailer deck */}
      <rect x="6" y="54" width="228" height="18" />
      <line x1="6" y1="62" x2="234" y2="62" opacity="0.4" />
      {/* deck bolts */}
      {Array.from({ length: 14 }).map((_, i) => (
        <circle key={i} cx={14 + i * 16} cy="58" r="1.2" fill="currentColor" />
      ))}
      {/* hydraulic suspension cylinders */}
      {Array.from({ length: 12 }).map((_, i) => (
        <rect key={i} x={14 + i * 18} y="72" width="6" height="14" opacity="0.7" />
      ))}
      {/* axle lines */}
      <rect x="6" y="86" width="228" height="6" />
      {/* wheels — 12 axles, double tyres */}
      {Array.from({ length: 12 }).map((_, i) => {
        const cx = 17 + i * 18;
        return (
          <g key={i}>
            <circle cx={cx} cy="100" r="7" />
            <circle cx={cx + 6} cy="100" r="7" />
            <circle cx={cx} cy="100" r="2" fill="currentColor" />
            <circle cx={cx + 6} cy="100" r="2" fill="currentColor" />
          </g>
        );
      })}
      {/* power pack pod */}
      <rect x="216" y="74" width="20" height="14" />
      <line x1="216" y1="80" x2="236" y2="80" opacity="0.5" />
    </svg>
  );
}

export function IconHook({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 200 160" fill="none" stroke="currentColor" strokeWidth="1.1" style={{ color: "var(--red)" }} preserveAspectRatio="xMidYMid meet">
      {/* four wire ropes coming down from the boom */}
      <line x1="78" y1="2" x2="78" y2="34" />
      <line x1="92" y1="2" x2="92" y2="34" />
      <line x1="108" y1="2" x2="108" y2="34" />
      <line x1="122" y1="2" x2="122" y2="34" />
      {/* upper shackle / becket pin */}
      <rect x="86" y="30" width="28" height="6" />
      <circle cx="100" cy="33" r="2" fill="currentColor" />
      {/* sheave block side cheeks (hex-ish housing) */}
      <path d="M58 40 L142 40 L156 60 L156 88 L142 108 L58 108 L44 88 L44 60 Z" />
      <path d="M58 40 L142 40 L156 60 L156 88 L142 108 L58 108 L44 88 L44 60 Z" opacity="0.5" transform="translate(2 2)" />
      {/* bolt rivets around the cheek */}
      <circle cx="58" cy="50" r="2" fill="currentColor" />
      <circle cx="142" cy="50" r="2" fill="currentColor" />
      <circle cx="58" cy="98" r="2" fill="currentColor" />
      <circle cx="142" cy="98" r="2" fill="currentColor" />
      <circle cx="50" cy="74" r="2" fill="currentColor" />
      <circle cx="150" cy="74" r="2" fill="currentColor" />
      {/* central sheave wheel */}
      <circle cx="100" cy="74" r="22" />
      <circle cx="100" cy="74" r="14" opacity="0.5" />
      <circle cx="100" cy="74" r="3" fill="currentColor" />
      {/* spokes */}
      <line x1="100" y1="60" x2="100" y2="88" opacity="0.45" />
      <line x1="86" y1="74" x2="114" y2="74" opacity="0.45" />
      <line x1="90" y1="64" x2="110" y2="84" opacity="0.45" />
      <line x1="110" y1="64" x2="90" y2="84" opacity="0.45" />
      {/* groove lines */}
      <line x1="78" y1="74" x2="86" y2="74" opacity="0.6" />
      <line x1="114" y1="74" x2="122" y2="74" opacity="0.6" />
      {/* swivel neck below block */}
      <rect x="90" y="108" width="20" height="10" />
      <line x1="90" y1="113" x2="110" y2="113" opacity="0.5" />
      <circle cx="100" cy="113" r="2" fill="currentColor" />
      {/* hook body — curved C */}
      <path d="M86 118 L114 118 L114 130 Q114 142 108 150 Q98 158 90 152 Q80 144 84 132 Q88 124 96 124 Q104 124 106 132" />
      <path d="M86 118 L86 130 Q86 144 96 152" opacity="0.5" />
      {/* safety latch */}
      <line x1="100" y1="124" x2="112" y2="148" strokeDasharray="2 2" opacity="0.7" />
      <circle cx="100" cy="124" r="1.6" fill="currentColor" />
      {/* tip dot */}
      <circle cx="90" cy="152" r="2" fill="currentColor" />
    </svg>
  );
}
