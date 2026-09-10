import { createFileRoute, Link } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { useQuoteModal } from "@/components/site/QuoteModal";
import { RiggingLiftPlan } from "@/components/site/RiggingLiftPlan";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services · Heavy Lift, Transport, Rigging · Ascentez" },
      { name: "description", content: "Seven service lines under one team. Lift engineering, heavy transportation, rigging supervision, crane rental, lifting tools rental and trading, APLO manpower." },
      { property: "og:title", content: "Ascentez Services · Heavy Lift and Transport" },
      { property: "og:description", content: "From 2D and 3D lift plans to 1,600-tonne crane rental. One accountable team." },
    ],
  }),
  component: ServicesPage,
});

const blocks = [
  {
    id: "lift-engineering", idx: "01", title: <>Lift<br />Engineering</>, dark: false,
    lead: "Before anything moves, we draw the lift. 2D layout, 3D simulation, load chart at the working radius, rigging and sling calculations. The documentation that gets your HSE team to sign off the first time.",
    feats: [
      ["2D and 3D Lift Plans", "Rendered simulations with crane configuration, working radius, and clearance envelopes. Verified against the manufacturer load chart at the actual radius."],
      ["Route and Transport Studies", "Oversized load routing, bridge and road load checks, clearance measurements, escort planning."],
      ["Rigging Design", "Sling selection, shackle sizing, spreader bar specification, lift point verification, tailing sequence."],
      ["Method Statement and JSA", "Lift sequence, hold points, emergency response, competency matrix. Formatted to client HSE and ADNOC OS-ST-19."],
    ],
    specs: [
      ["Deliverables", "2D Drawings · 3D Model · Method Statement"],
      ["Standards", "ADNOC OS-ST-19 · BS 7121 · LOLER"],
      ["Typical Turnaround", "3 to 10 working days"],
      ["Software", "Liebherr LICCON · Demag IC-1 · 3D Lift Plan"],
    ],
    cta: "Need a lift plan?", ctaBtn: "Request a Plan",
  },
  {
    id: "transportation", idx: "02", title: <>Heavy<br /><span className="red">Transport</span>ation</>, dark: true,
    lead: "Oversized cargo, long routes, live plant access. We plan the move, verify the route, escort the load, and sign it off at delivery.",
    feats: [
      ["SPMT and Trailer Transport", "Self-Propelled Modular Transporters for heavy modules. Low-bed trailers to 120T. Axle loading optimised route by route."],
      ["Route Surveys", "Physical and GIS route survey. Bridge ratings, power line clearances, turn radii, night-move permits."],
      ["Equipment Transport", "Refinery equipment, power plant modules, wind turbine components, mining plant."],
      ["On-Site Coordination", "Transport supervisor on the load. Dedicated escort. Direct interface with your site and the authorities."],
    ],
    cta: "Moving something oversized?", ctaBtn: "Plan the Move",
  },
  {
    id: "rigging", idx: "03", title: <>Rigging, Jacking<br />and Installation</>, dark: false,
    lead: "The lift is one part. The receiving side is the other. We rig it, jack it, land it, and bolt it down.",
    feats: [
      ["Heavy Machinery Installation", "Precision placement on foundation. Levelling, grouting coordination, alignment verification."],
      ["Rigging and Jacking Services", "Hydraulic skidding and jacking for loads that cannot be craned. Controlled descent for hot-side replacements."],
      ["Turnkey Execution", "Single contract from planning to commissioning. One team, one accountability line."],
      ["Flare Tip Replacement", "Extreme-height lifts with full supervision. Borouge 3 at 190m is the reference."],
      ["Custom Rigging Equipment Design and Build", "In-house rigging engineers design bespoke spreader beams, lifting frames, baskets, and tailing fixtures when off-the-shelf gear will not do. Fabricated in our own facility, proof-load tested, and certified before it ships."],
    ],
    cta: "Shutdown coming up?", ctaBtn: "Plan the Shutdown",
  },
  {
    id: "manpower", idx: "04", title: <>Manpower<br />and <span className="red">APLO</span></>, dark: true,
    lead: "Single Point Authority. Qualified, certified, audited. From rigging engineer to signaller.",
    feats: [
      ["Single Point Authority", "One accountable lead per project. Coordinates engineering, HSE, crane crews, and client interface."],
      ["Rigging Engineer and APLO", "Appointed Person for Lifting Operations. Full responsibility for planning, supervision, and close-out."],
      ["Safety Officer", "On-site HSE for toolbox talks, JSA, emergency preparedness, and continuous supervision."],
      ["Supervisors, Riggers, Signallers", "Competency-validated crews. Certified to the client's standard. Audited before mobilisation."],
    ],
    cta: "Need qualified lifting crew?", ctaBtn: "Request Manpower",
  },
  {
    id: "crane-rental", idx: "05", title: <>Crane<br />Rental</>, dark: false,
    lead: "Mobile cranes 45t to 500t. Crawler cranes 80t to 1,600t. With or without operator. Short hire to long campaign.",
    feats: [
      ["Mobile Cranes: 45t to 500t", "All-terrain and rough-terrain cranes for fast mobilisation and restricted sites. Demag, Liebherr, and Grove fleet."],
      ["Crawler Cranes: 80t to 1,600t", "Heavy lattice-boom crawlers for modules, flare tips, long-reach lifts. Demag CC2800-1 and CC8800-1 in the fleet."],
      ["Operated or Bare Lease", "Cranes delivered with certified operator and full maintenance regime. Or bare lease to your accredited crew."],
      ["Transportation Included", "Mobilisation, assembly, and demobilisation handled end to end. You point to the pad. We bring the crane."],
    ],
    cta: "Looking for the right crane?", ctaBtn: "Browse the Fleet", ctaLink: "/fleet" as const,
  },
  {
    id: "tools-rental", idx: "06", title: <>Lifting Tools<br />Rental</>, dark: true,
    lead: "Certified spreader beams, lifting frames, baskets, and bespoke rigging gear. Inspected, tagged, ready.",
    feats: [
      ["Spreader and Lifting Beams", "Standard and modular spreader beams from 5t up to 1,000t. Load-tested and certified."],
      ["Lifting Frames", "Square and cross frames from 1t to 100t. Jumbo bag frames for 2 to 20 bags simultaneously."],
      ["Man and Material Baskets", "Engineered personnel and material baskets. Certified lifting points. Secondary attachments."],
      ["Modular Test Weights", "Calibrated test weights from 1t to 100t. Proof-load testing for cranes, hoists, and lifting gear."],
    ],
    cta: "Need certified rigging gear?", ctaBtn: "Check Availability",
  },
  {
    id: "tools-trading", idx: "07", title: <>Lifting Tools<br /><span className="red">Trading</span></>, dark: false,
    lead: "Sales of certified lifting equipment. In-house brand and OEM partners.",
    feats: [
      ["Spreader Beams up to 1,000t", "In-house designed and fabricated. Proof-load certificate with every unit."],
      ["Shackles up to 1,250t", "Bow and dee shackles. Green Pin and equivalent marine-grade."],
      ["Chain Pulley Blocks up to 40t", "Manual and lever-operated chain blocks. Kito, Yale, Vital in stock."],
      ["Wire Rope and Webbing Slings", "Polyester round slings, webbing slings, wire rope slings with reinforced terminations."],
    ],
    cta: "Buying lifting gear?", ctaBtn: "Get a Quote",
  },
];

function ServicesPage() {
  const { open } = useQuoteModal();
  return (
    <>
      <Nav />

      <section className="svc-hero">
        <div className="wrap">
          <div>
            <div className="eyebrow eyebrow-red">Services · 01 to 07</div>
            <h1 className="svc-hero-h1" style={{ marginTop: 24 }}>Seven service lines.<br />One <span className="red">accountable</span> team.</h1>
          </div>
          <div>
            <p className="svc-hero-p">Ascentez handles the full chain. Engineering, transportation, supervision, equipment, tools, and manpower. You pick the scope. We are accountable end to end.</p>
            <div className="actions" style={{ marginTop: 32, display: "flex", gap: 12, flexWrap: "wrap" }}>
              <button type="button" onClick={() => open("Services hero")} className="btn btn-red">Contact Sales <span className="arrow">→</span></button>
              <a className="btn btn-ghost" href="#lift-engineering">Browse Services ↓</a>
            </div>
          </div>
        </div>
      </section>

      <nav className="svc-anchors">
        <div className="wrap">
          {blocks.map((b) => (
            <a key={b.id} href={`#${b.id}`}>{b.idx} · {b.id.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase())}</a>
          ))}
        </div>
      </nav>

      {blocks.map((b) => (
        <section key={b.id} id={b.id} className={`svc-block${b.dark ? " dark" : ""}`}>
          <div className="wrap">
            <div className="svc-block-head">
              <div>
                <div className="svc-block-idx">{b.idx} · Service</div>
                <h2 className="svc-block-h2">{b.title}</h2>
              </div>
              <div>
                <div className="svc-block-lead">{b.lead}</div>
              </div>
            </div>
            <div className="svc-features">
              {b.feats.map(([h, p]) => (
                <div key={h} className="svc-feat">
                  <h4>{h}</h4>
                  <p>{p}</p>
                </div>
              ))}
            </div>
            {b.specs && (
              <div className="spec-strip">
                <div className="spec-strip-visual">
                  <RiggingLiftPlan />
                </div>
                <div className="spec-rows">
                  {b.specs.map(([k, v]) => (
                    <div key={k} className="row"><span>{k}</span><span className="v">{v}</span></div>
                  ))}
                </div>
              </div>
            )}
            <div className="svc-cta-row">
              <div style={{ fontFamily: "var(--f-mono)", fontSize: 12, letterSpacing: "0.14em", textTransform: "uppercase", color: b.dark ? "var(--steel-2)" : "var(--steel)" }}>{b.cta}</div>
              {b.ctaLink ? (
                <Link to={b.ctaLink} className="quote-trigger">{b.ctaBtn} <span>→</span></Link>
              ) : (
                <button type="button" onClick={() => open(`Service · ${b.id}`)} className="quote-trigger">{b.ctaBtn} <span>→</span></button>
              )}
            </div>
          </div>
        </section>
      ))}

      <section className="final-cta-s">
        <div className="wrap">
          <div className="eyebrow" style={{ color: "#0A0A0A" }}>Ready when you are</div>
          <h2 className="final-cta-h2">One form.<br />One engineer.<br />One plan.</h2>
          <p>Tell us the lift. We will send back the right crane, the right team, and the right plan.</p>
          <button type="button" onClick={() => open("Services · Final CTA")} className="btn">Contact Sales <span className="arrow">→</span></button>
        </div>
      </section>

      <Footer />
    </>
  );
}
