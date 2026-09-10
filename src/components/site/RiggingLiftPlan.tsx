/**
 * Detailed engineered lift-plan SVG.
 * Two panels: isometric crawler crane (left) + plan view with radius arcs (right),
 * data table, dimension lines, title block. Styled like a real lift plan drawing.
 */
export function RiggingLiftPlan({ className = "" }: { className?: string }) {
  const arcs = [
    { r: 90, label: "R24400" },
    { r: 110, label: "R26400" },
    { r: 135, label: "R29800" },
    { r: 160, label: "R32500" },
    { r: 185, label: "R34320" },
  ];
  return (
    <svg
      className={className}
      viewBox="0 0 900 560"
      fill="none"
      stroke="currentColor"
      strokeWidth="0.8"
      style={{ color: "var(--ink)", width: "100%", height: "100%" }}
      preserveAspectRatio="xMidYMid meet"
      fontFamily="ui-monospace, SFMono-Regular, monospace"
    >
      {/* drawing border */}
      <rect x="6" y="6" width="888" height="548" stroke="currentColor" strokeWidth="1.4" />
      <rect x="14" y="14" width="872" height="532" strokeWidth="0.4" opacity="0.5" />

      {/* corner ticks / sheet grid markers */}
      {Array.from({ length: 16 }).map((_, i) => (
        <g key={`t${i}`} opacity="0.7">
          <line x1={14 + (872 / 16) * i} y1="14" x2={14 + (872 / 16) * i} y2="22" strokeWidth="0.4" />
          <line x1={14 + (872 / 16) * i} y1="538" x2={14 + (872 / 16) * i} y2="546" strokeWidth="0.4" />
          <text x={14 + (872 / 16) * i + 2} y="20" fontSize="6" fill="currentColor" opacity="0.6">{i + 1}</text>
        </g>
      ))}

      {/* divider between iso view and plan view */}
      <line x1="430" y1="30" x2="430" y2="430" strokeDasharray="3 3" opacity="0.5" />

      {/* ============== LEFT PANEL — Crane data table ============== */}
      <g transform="translate(28,34)">
        <rect x="0" y="0" width="180" height="150" strokeWidth="0.7" />
        <text x="6" y="11" fontSize="8" fontWeight="700" fill="currentColor">Main Crane Data</text>
        <text x="6" y="20" fontSize="5.5" opacity="0.7">[Demag CC8800-1]</text>
        <line x1="0" y1="24" x2="180" y2="24" strokeWidth="0.5" />
        {[
          ["Crane Configuration", "SWBL"],
          ["Main boom length", "108.0 m"],
          ["Main boom angle", "84.0 °"],
          ["Jib length", "108.0 m"],
          ["Jib angle", "26.75 °"],
          ["SL Mast", "50 m"],
          ["SL Radius", "24.0 m"],
          ["Counterweight", "235 t"],
          ["Working radius (max)", "84.0 m"],
          ["Hook block weight", "7.70 t"],
          ["Static Hook Load", "13.39 t"],
          ["DAF (15%)", "1.99"],
          ["Dynamic Lift Load", "15.38 t"],
          ["Crane chart capacity", "21.80 t"],
          ["% chart capacity", "70.73 %"],
        ].map(([k, v], i) => (
          <g key={k} transform={`translate(0, ${30 + i * 7.5})`}>
            <text x="6" y="0" fontSize="5.5" fill="currentColor">{k}</text>
            <text x="174" y="0" fontSize="5.5" fill="currentColor" textAnchor="end">{v}</text>
            <line x1="6" y1="2" x2="174" y2="2" strokeWidth="0.2" opacity="0.3" />
          </g>
        ))}
      </g>

      {/* ============== LEFT PANEL — Isometric crawler crane ============== */}
      <g transform="translate(220,40)">
        {/* ground line */}
        <line x1="-10" y1="370" x2="220" y2="370" strokeWidth="0.6" />
        {Array.from({ length: 22 }).map((_, i) => (
          <line key={i} x1={-10 + i * 11} y1="370" x2={-15 + i * 11} y2="378" strokeWidth="0.3" opacity="0.5" />
        ))}

        {/* crawler tracks (iso) */}
        <polygon points="40,360 160,360 175,374 25,374" strokeWidth="0.7" />
        <line x1="40" y1="360" x2="160" y2="360" opacity="0.4" />
        {Array.from({ length: 14 }).map((_, i) => (
          <line key={`tr${i}`} x1={40 + i * 9} y1="360" x2={32 + i * 9} y2="374" strokeWidth="0.3" opacity="0.5" />
        ))}
        {/* turntable */}
        <ellipse cx="100" cy="356" rx="48" ry="6" strokeWidth="0.7" />
        <ellipse cx="100" cy="354" rx="48" ry="6" opacity="0.4" />

        {/* counterweight stack */}
        <rect x="58" y="320" width="40" height="32" strokeWidth="0.7" />
        <line x1="58" y1="328" x2="98" y2="328" opacity="0.5" />
        <line x1="58" y1="336" x2="98" y2="336" opacity="0.5" />
        <line x1="58" y1="344" x2="98" y2="344" opacity="0.5" />
        {/* superlift tray + ballast */}
        <rect x="2" y="344" width="48" height="10" strokeWidth="0.6" />
        <rect x="6" y="332" width="40" height="14" strokeWidth="0.6" />
        <text x="26" y="342" fontSize="4.5" textAnchor="middle">SL-Ballast</text>

        {/* operator cab */}
        <rect x="100" y="324" width="22" height="28" strokeWidth="0.6" />
        <rect x="103" y="328" width="16" height="10" strokeWidth="0.3" opacity="0.5" />
        <text x="111" y="350" fontSize="4" textAnchor="middle" opacity="0.7">CAB</text>

        {/* A-frame mast */}
        <line x1="105" y1="324" x2="135" y2="220" strokeWidth="0.7" />
        <line x1="135" y1="324" x2="135" y2="220" strokeWidth="0.6" opacity="0.7" />
        {Array.from({ length: 8 }).map((_, i) => {
          const t = i / 8;
          return <line key={`m${i}`} x1={105 + (135 - 105) * t} y1={324 + (220 - 324) * t} x2={135} y2={324 + (220 - 324) * (t + 0.05)} strokeWidth="0.3" opacity="0.5" />;
        })}

        {/* superlift mast (second mast forward) */}
        <line x1="40" y1="344" x2="115" y2="220" strokeWidth="0.6" opacity="0.8" />
        <line x1="50" y1="344" x2="120" y2="222" strokeWidth="0.4" opacity="0.5" />
        <text x="80" y="290" fontSize="4.5" opacity="0.7">SL-Mast 50m</text>

        {/* main lattice boom — two parallel chords with truss */}
        <line x1="120" y1="324" x2="320" y2="60" strokeWidth="0.9" />
        <line x1="132" y1="332" x2="332" y2="68" strokeWidth="0.9" />
        {/* truss diagonals */}
        {Array.from({ length: 28 }).map((_, i) => {
          const t = i / 28;
          const x1 = 120 + (320 - 120) * t;
          const y1 = 324 + (60 - 324) * t;
          const x2 = 132 + (332 - 132) * (t + 0.035);
          const y2 = 332 + (68 - 332) * (t + 0.035);
          return <line key={`d${i}`} x1={x1} y1={y1} x2={x2} y2={y2} strokeWidth="0.3" opacity="0.55" />;
        })}
        {/* truss verticals */}
        {Array.from({ length: 14 }).map((_, i) => {
          const t = i / 14;
          const x1 = 120 + (320 - 120) * t;
          const y1 = 324 + (60 - 324) * t;
          const x2 = 132 + (332 - 132) * t;
          const y2 = 332 + (68 - 332) * t;
          return <line key={`v${i}`} x1={x1} y1={y1} x2={x2} y2={y2} strokeWidth="0.3" opacity="0.45" />;
        })}

        {/* jib transition */}
        <circle cx="320" cy="60" r="3" fill="currentColor" />
        {/* jib (angled forward) */}
        <line x1="320" y1="60" x2="430" y2="20" strokeWidth="0.7" />
        <line x1="324" y1="68" x2="434" y2="28" strokeWidth="0.7" />
        {Array.from({ length: 16 }).map((_, i) => {
          const t = i / 16;
          const x1 = 320 + (430 - 320) * t;
          const y1 = 60 + (20 - 60) * t;
          const x2 = 324 + (434 - 324) * (t + 0.06);
          const y2 = 68 + (28 - 68) * (t + 0.06);
          return <line key={`jd${i}`} x1={x1} y1={y1} x2={x2} y2={y2} strokeWidth="0.25" opacity="0.55" />;
        })}

        {/* pendant lines mast→boom tip and mast→jib */}
        <line x1="135" y1="220" x2="320" y2="60" strokeDasharray="2 2" strokeWidth="0.4" opacity="0.7" />
        <line x1="135" y1="220" x2="430" y2="20" strokeDasharray="2 2" strokeWidth="0.4" opacity="0.7" />

        {/* hook line + hook block */}
        <line x1="430" y1="22" x2="430" y2="200" strokeDasharray="1 2" strokeWidth="0.5" />
        <rect x="422" y="200" width="16" height="8" strokeWidth="0.6" />
        <path d="M425 208 L435 208 L435 218 Q430 226 425 218 Z" strokeWidth="0.6" />

        {/* annotations */}
        <text x="260" y="180" fontSize="5.5" opacity="0.85">Main Boom 108 m · Angle 84°</text>
        <text x="350" y="48" fontSize="5.5" opacity="0.85">Jib 108 m · Angle 26.75°</text>
        <circle cx="430" cy="20" r="2" fill="currentColor" />

        {/* iso view label */}
        <text x="0" y="396" fontSize="6" fontWeight="700">ISOMETRIC VIEW · CC8800-1 · SCALE 1:720</text>
      </g>

      {/* ============== RIGHT PANEL — Plan view with radius arcs ============== */}
      <g transform="translate(660,210)">
        {/* compass rose */}
        <g transform="translate(150,-150)">
          <circle r="14" strokeWidth="0.5" />
          <path d="M0,-14 L4,0 L0,14 L-4,0 Z" fill="currentColor" opacity="0.6" />
          <text x="0" y="-18" fontSize="6" textAnchor="middle">N</text>
        </g>

        {/* radius arcs from crane center */}
        {arcs.map((a, i) => (
          <g key={a.label}>
            <path
              d={`M ${-a.r} 0 A ${a.r} ${a.r} 0 0 1 ${a.r} 0`}
              strokeDasharray={i % 2 === 0 ? "0" : "3 2"}
              strokeWidth="0.5"
              opacity={0.8 - i * 0.08}
            />
            <text x={a.r + 2} y={-2} fontSize="5" opacity="0.8">{a.label}</text>
          </g>
        ))}

        {/* crane center marker */}
        <circle r="3" fill="currentColor" />
        <line x1="-8" y1="0" x2="8" y2="0" strokeWidth="0.4" />
        <line x1="0" y1="-8" x2="0" y2="8" strokeWidth="0.4" />
        <text x="-12" y="12" fontSize="5" textAnchor="end">CRANE C/L</text>

        {/* crawler footprint (top view rectangle) */}
        <rect x="-30" y="-22" width="60" height="44" strokeWidth="0.7" />
        <rect x="-30" y="-22" width="14" height="44" strokeWidth="0.4" opacity="0.6" />
        <rect x="16" y="-22" width="14" height="44" strokeWidth="0.4" opacity="0.6" />
        <rect x="-12" y="-8" width="24" height="16" strokeWidth="0.4" opacity="0.6" />

        {/* lift target / module footprint */}
        <g transform="translate(150,-90) rotate(20)">
          <rect x="-30" y="-18" width="60" height="36" strokeWidth="0.8" />
          <line x1="-30" y1="-18" x2="30" y2="18" strokeWidth="0.3" opacity="0.5" />
          <line x1="30" y1="-18" x2="-30" y2="18" strokeWidth="0.3" opacity="0.5" />
          <text x="0" y="3" fontSize="5" textAnchor="middle">FLARE TIP · 13.39 t</text>
        </g>

        {/* pickup zone */}
        <g transform="translate(-130,-60)">
          <rect x="-22" y="-14" width="44" height="28" strokeWidth="0.6" strokeDasharray="2 2" />
          <text x="0" y="2" fontSize="5" textAnchor="middle">PICKUP</text>
        </g>

        {/* swing arc (operating sector) */}
        <path d="M -160 0 A 160 160 0 0 1 160 0" strokeDasharray="5 3" strokeWidth="0.5" opacity="0.4" stroke="var(--red)" />

        {/* dimension lines on plan */}
        <line x1="0" y1="60" x2="150" y2="60" strokeWidth="0.4" />
        <line x1="0" y1="56" x2="0" y2="64" strokeWidth="0.4" />
        <line x1="150" y1="56" x2="150" y2="64" strokeWidth="0.4" />
        <text x="75" y="70" fontSize="5" textAnchor="middle">29789.94 mm</text>

        <line x1="-130" y1="80" x2="0" y2="80" strokeWidth="0.4" />
        <line x1="-130" y1="76" x2="-130" y2="84" strokeWidth="0.4" />
        <line x1="0" y1="76" x2="0" y2="84" strokeWidth="0.4" />
        <text x="-65" y="90" fontSize="5" textAnchor="middle">22086.67 mm</text>

        <text x="0" y="115" fontSize="6" fontWeight="700" textAnchor="middle">PLAN VIEW · FLARE AREA · SCALE 1:720</text>
      </g>

      {/* ============== BOTTOM — GBP / Wind data table ============== */}
      <g transform="translate(28,440)">
        <rect x="0" y="0" width="540" height="100" strokeWidth="0.7" />
        <text x="6" y="11" fontSize="7" fontWeight="700">GBP Calculation Under Mat (Main Crane)</text>
        <line x1="0" y1="15" x2="540" y2="15" strokeWidth="0.4" />

        {/* table header */}
        {["", "Aaxl (t/m²)", "Bxct (t/m²)", "Cxct (t/m²)", "Daxl (t/m²)"].map((h, i) => (
          <text key={i} x={6 + i * 108} y="24" fontSize="5.5" fontWeight="700" opacity="0.85">{h}</text>
        ))}
        {[
          ["Steel Mat", "8.4", "35.7", "17.4", "44.7"],
          ["Load (act.)", "—", "9.6", "—", "—"],
          ["GBPact. Under Mat", "—", "1.6", "—", "—"],
          ["Steel Mat", "Amax", "Bmax", "Cmax", "Dmax"],
          ["Load (max.)", "46.6", "46.6", "46.6", "46.6"],
          ["GBPmax. Under Mat", "—", "10.2", "—", "—"],
        ].map((row, i) => (
          <g key={i} transform={`translate(0,${32 + i * 9})`}>
            {row.map((c, j) => (
              <text key={j} x={6 + j * 108} y="0" fontSize="5">{c}</text>
            ))}
            <line x1="6" y1="2" x2="534" y2="2" strokeWidth="0.2" opacity="0.3" />
          </g>
        ))}
      </g>

      {/* ============== BOTTOM RIGHT — Wind / title block ============== */}
      <g transform="translate(580,440)">
        <rect x="0" y="0" width="290" height="100" strokeWidth="0.7" />
        <text x="6" y="11" fontSize="7" fontWeight="700">Maximum Allowable Wind Speed</text>
        <line x1="0" y1="15" x2="290" y2="15" strokeWidth="0.4" />
        {[
          ["Weight to be lifted", "Wt", "5000 kg"],
          ["Maximum wind speed", "Vmax", "9.5 m/s"],
          ["Dynamic pressure", "q of P", "60.03 N/m²"],
          ["Resulting wind force", "Fw", "493.2 N"],
          ["Wind resistant coeff.", "Cw", "1.6"],
          ["Projected area", "Aw", "7.552 m²"],
          ["Calculated wind speed", "Vcal", "9.59 m/s"],
        ].map(([k, sym, v], i) => (
          <g key={k} transform={`translate(0,${22 + i * 9.5})`}>
            <text x="6" y="0" fontSize="5">{k}</text>
            <text x="170" y="0" fontSize="5" opacity="0.7">{sym}</text>
            <text x="284" y="0" fontSize="5" textAnchor="end" fontWeight="700">{v}</text>
            <line x1="6" y1="2" x2="284" y2="2" strokeWidth="0.2" opacity="0.3" />
          </g>
        ))}
      </g>

      {/* outer title strip */}
      <g transform="translate(28,548)">
        <text x="0" y="-2" fontSize="5.5" opacity="0.6">ASCENTEZ · LIFT ENGINEERING · DWG-RIG-001 · REV A · SHEET 09</text>
        <text x="844" y="-2" fontSize="5.5" opacity="0.6" textAnchor="end">ADNOC OS-ST-19 · BS 7121 · LOLER</text>
      </g>
    </svg>
  );
}
