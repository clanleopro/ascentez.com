const items = [
  { l: "Fleet", v: "45t — 1,600t" },
  { l: "Boom", v: "108m main + 108m jib" },
  { l: "Compliance", v: "ADNOC OS-ST-19" },
  { l: "HQ", v: "Abu Dhabi · UAE" },
  { l: "Response", v: "<24h" },
  { l: "Safety", v: "Zero LTI" },
];

export function Ticker() {
  const row = (
    <>
      {items.map((it, i) => (
        <span key={i}>
          {it.l} <strong>{it.v}</strong> ·
        </span>
      ))}
    </>
  );
  return (
    <div className="ticker">
      <div className="ticker-track">
        {row}
        {row}
      </div>
    </div>
  );
}
