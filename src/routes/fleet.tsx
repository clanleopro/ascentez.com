import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { IconCrawler, IconMobile, IconSPMT } from "@/components/site/Cranes";
import { useQuoteModal } from "@/components/site/QuoteModal";

function nodeToText(n: React.ReactNode): string {
  if (n == null || typeof n === "boolean") return "";
  if (typeof n === "string" || typeof n === "number") return String(n);
  if (Array.isArray(n)) return n.map(nodeToText).join(" ");
  if (typeof n === "object" && "props" in (n as unknown as Record<string, unknown>)) {
    const el = n as { type?: unknown; props?: { children?: React.ReactNode } };
    if (el.type === "br") return " ";
    return nodeToText(el.props?.children);
  }
  return "";
}

export const Route = createFileRoute("/fleet")({
  head: () => ({
    meta: [
      { title: "Fleet · Cranes, SPMTs, Lifting Tools · Ascentez" },
      { name: "description", content: "Crawler cranes 80t to 1,600t, mobile cranes 45t to 500t, SPMTs, low-beds, and certified rigging gear. Abu Dhabi based." },
      { property: "og:title", content: "Ascentez Fleet · 45t to 1,600t" },
      { property: "og:description", content: "Mobile cranes, crawler cranes, SPMTs, boom trucks, and a full inventory of certified rigging gear." },
    ],
  }),
  component: FleetPage,
});

const crawlers = [
  { tag: "Crawler · Flagship", model: <>Demag<br />CC8800-1</>, cap: "1,600", unit: "T", specs: [["Main Boom", "Up to 108m"], ["Jib", "108m"], ["Best Use", "Flare tip and heavy module"]] },
  { tag: "Crawler · Workhorse", model: <>Demag<br />CC2800-1</>, cap: "600", unit: "T", specs: [["Main Boom", "96m SSL/LSL"], ["SL Counterweight", "Up to 250t"], ["Best Use", "Cement plant and structural"]] },
  { tag: "Crawler · Mid", model: <>Mid-range<br />Crawler</>, cap: "250", unit: "T", specs: [["Capacity", "80t to 250t"], ["Boom", "Up to 70m"], ["Best Use", "Infrastructure, bridge, wind"]] },
];
const mobiles = [
  { tag: "All-Terrain · 500t Class", model: "AT · 500t", cap: "500", unit: "T", specs: [["Main Boom", "60m"], ["Best Use", "Heavy shutdown"], ["Availability", "Operated"]] },
  { tag: "All-Terrain · 200t Class", model: "AT · 200t", cap: "200", unit: "T", specs: [["Boom", "64m telescopic"], ["Best Use", "Refinery and industrial"], ["Availability", "Operated or bare"]] },
  { tag: "All-Terrain · 80t Class", model: "AT · 80t", cap: "80", unit: "T", specs: [["Boom", "48m telescopic"], ["Best Use", "Valve, spool, access"], ["Availability", "Operated or bare"]] },
];
const transports = [
  { tag: "SPMT", model: <>Self-Propelled<br />Modular Transporter</>, cap: "500", unit: "T+", specs: [["Configuration", "Modular and scalable"], ["Best Use", "Heavy module and refinery"]] },
  { tag: "Low-Bed Trailer", model: <>Low-Bed<br />Trailer</>, cap: "120", unit: "T", specs: [["Axles", "Up to 8-axle"], ["Best Use", "Site-to-site moves"]] },
  { tag: "Boom Truck and Forklift", model: <>Support<br />Equipment</>, cap: "20", unit: "T", specs: [["Fleet", "Boom truck, forklift"], ["Best Use", "Yard and light handling"]] },
];
const tools = [
  ["01", "Spreader Beam", "Standard and modular spreader beams, load-tested and certified.", "5t to 1,000t"],
  ["02", "Lifting Frame", "Square and cross lifting frames. Jumbo bag frames for 2 to 20 bags simultaneously.", "1t to 100t"],
  ["03", "Bow Shackles", "Marine-grade bow and dee shackles, Green Pin and equivalent.", "Up to 1,250t"],
  ["04", "Chain Pulley Block", "Manual and lever-operated chain blocks. Kito, Yale, Vital in stock.", "Up to 40t"],
  ["05", "Webbing and Wire Rope Slings", "Polyester round slings, webbing slings, wire rope slings with reinforced terminations.", "EN and ASME"],
  ["06", "Modular Test Weight", "Calibrated test weights for proof-load testing of cranes and hoists.", "1t to 100t"],
  ["07", "Man and Material Basket", "Engineered personnel and material baskets with certified lifting points.", "All sizes"],
  ["08", "Turnbuckles", "Heavy-duty turnbuckles for load stabilisation.", "Various"],
];

function EqCard({ icon, tag, model, cap, unit, specs, onRequest }: { icon: React.ReactNode; tag: string; model: React.ReactNode; cap: string; unit: string; specs: string[][]; onRequest: () => void }) {
  return (
    <div className="eq-card">
      <div className="eq-icon">{icon}</div>
      <div className="eq-tag">{tag}</div>
      <div className="eq-model">{model}</div>
      <div className="eq-cap">{cap}<span className="unit">{unit}</span></div>
      <div className="eq-specs">
        {specs.map(([k, v]) => (
          <div key={k} className="eq-spec-row"><span>{k}</span><span className="v">{v}</span></div>
        ))}
      </div>
      <button type="button" className="eq-cta" onClick={onRequest}>
        Request Quote <span className="arrow">→</span>
      </button>
    </div>
  );
}

function FleetPage() {
  const { open } = useQuoteModal();
  const reqCrawler = (c: { tag: string; model: React.ReactNode; cap: string; unit: string }) =>
    open({ source: `Fleet · ${nodeToText(c.model).trim()} (${c.cap}${c.unit})`, presetType: "Crane Rental · Crawler" });
  const reqMobile = (c: { tag: string; model: React.ReactNode; cap: string; unit: string }) =>
    open({ source: `Fleet · ${nodeToText(c.model).trim()} (${c.cap}${c.unit})`, presetType: "Crane Rental · Mobile" });
  const reqTransport = (c: { tag: string; model: React.ReactNode; cap: string; unit: string }) =>
    open({ source: `Fleet · ${nodeToText(c.model).trim()} (${c.cap}${c.unit})`, presetType: "Heavy Transportation" });
  const reqTool = (name: string, range: string) =>
    open({ source: `Fleet · ${name} (${range})`, presetType: "Tools Rental" });
  return (
    <>
      <Nav />

      <section className="fleet-hero">
        <div className="wrap">
          <div>
            <div className="eyebrow eyebrow-red">Equipment Fleet</div>
            <h1 className="fleet-hero-h1" style={{ marginTop: 28 }}>From 45<span className="red">t</span><br />to 1,600<span className="red">t.</span><br /><span className="italic-serif" style={{ color: "var(--steel-2)" }}>one fleet.</span></h1>
          </div>
          <div>
            <p style={{ color: "var(--steel-2)", fontSize: 17, lineHeight: 1.6 }}>Mobile cranes, crawler cranes, SPMTs, boom trucks, and a full inventory of certified rigging gear. Every asset inspected, certified, and ready to mobilise.</p>
            <div className="counts">
              <div>Mobile<strong>45t to 500t</strong></div>
              <div>Crawler<strong>80t to 1,600t</strong></div>
              <div>Transport<strong>SPMT and low-bed</strong></div>
            </div>
          </div>
        </div>
      </section>

      <nav className="fleet-tabs">
        <div className="wrap">
          <a className="fleet-tab active" href="#crawler">Crawler Cranes</a>
          <a className="fleet-tab" href="#mobile">Mobile Cranes</a>
          <a className="fleet-tab" href="#transport">Transportation</a>
          <a className="fleet-tab" href="#tools">Lifting Tools</a>
        </div>
      </nav>

      <section className="fleet-section" id="crawler">
        <div className="wrap">
          <div className="fleet-head">
            <div><div className="eyebrow eyebrow-red">01 · Crawlers</div><h2 className="fleet-h2">Crawler<br /><span className="red">Cranes</span></h2></div>
            <p>Heavy lattice-boom crawler cranes for the biggest lifts. Boiler modules, flare tips, wind components. Delivered, assembled, operated, and demobilised.</p>
          </div>
          <div className="eq-grid">
            {crawlers.map((c) => <EqCard key={c.tag} {...c} icon={<IconCrawler />} onRequest={() => reqCrawler(c)} />)}
          </div>
        </div>
      </section>

      <section className="fleet-section alt" id="mobile">
        <div className="wrap">
          <div className="fleet-head">
            <div><div className="eyebrow eyebrow-red">02 · Mobile</div><h2 className="fleet-h2">Mobile<br />Cranes</h2></div>
            <p>All-terrain and rough-terrain mobile cranes for fast mobilisation and restricted-access sites.</p>
          </div>
          <div className="eq-grid">
            {mobiles.map((c) => <EqCard key={c.tag} {...c} icon={<IconMobile />} onRequest={() => reqMobile(c)} />)}
          </div>
        </div>
      </section>

      <section className="fleet-section" id="transport">
        <div className="wrap">
          <div className="fleet-head">
            <div><div className="eyebrow eyebrow-red">03 · Transport</div><h2 className="fleet-h2">Heavy<br /><span className="red">Transportation</span></h2></div>
            <p>SPMTs, low-bed trailers, boom trucks, and support equipment for oversized and overweight cargo.</p>
          </div>
          <div className="eq-grid">
            {transports.map((c) => <EqCard key={c.tag} {...c} icon={<IconSPMT />} onRequest={() => reqTransport(c)} />)}
          </div>
        </div>
      </section>

      <section className="fleet-section alt" id="tools">
        <div className="wrap">
          <div className="fleet-head">
            <div><div className="eyebrow eyebrow-red">04 · Tools</div><h2 className="fleet-h2">Lifting Tools<br />Rental and Trading</h2></div>
            <p>Certified spreader beams, frames, baskets, shackles, and slings. Inspected, tagged, ready.</p>
          </div>
          <div className="tool-table">
            <div className="tool-row head"><span>#</span><span>Item</span><span>Description</span><span>Range</span><span /></div>
            {tools.map(([n, name, desc, range]) => (
              <div key={n} className="tool-row">
                <span className="tn">{n}</span>
                <span className="tname">{name}</span>
                <span className="tdesc">{desc}</span>
                <span className="trange">{range}</span>
                <button type="button" className="tcta" onClick={() => reqTool(name, range)}>Request →</button>
              </div>
            ))}
          </div>
          <p style={{ marginTop: 32, fontFamily: "var(--f-mono)", fontSize: 12, letterSpacing: "0.14em", color: "var(--steel)", textTransform: "uppercase" }}>
            Fleet partners and manufacturers we run: Demag · Liebherr · Grove · Sany · Kito · Yale · Green Pin
          </p>
        </div>
      </section>

      <section className="final-cta-f">
        <div className="wrap">
          <div className="eyebrow" style={{ color: "#0A0A0A" }}>Ready to mobilise</div>
          <h2 className="final-cta-h2">Pick the crane.<br />We will do the rest.</h2>
          <p>Share your scope and we will configure the right asset. Delivered, operated, insured, certified.</p>
          <button type="button" className="btn" onClick={() => open({ source: "Fleet · Final CTA", presetType: "Crane Rental" })}>Request a Crane <span className="arrow">→</span></button>
        </div>
      </section>

      <Footer />
    </>
  );
}
