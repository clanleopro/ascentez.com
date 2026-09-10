import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/case-studies")({
  head: () => ({
    meta: [
      { title: "Case Studies · Borouge, Lafarge, Gasco, Takreer · Ascentez" },
      { name: "description", content: "Four flagship heavy-lift projects in the UAE. Borouge 3 flare tip at 190m. Lafarge cement plant modules. Gasco Habshan. Takreer Ruwais refinery." },
      { property: "og:title", content: "Ascentez Case Studies · Heavy Lifts Delivered" },
      { property: "og:description", content: "190m flare tip. 43T cement modules. Refinery tube bundles. Lifts delivered under ADNOC OS-ST-19." },
    ],
  }),
  component: CaseStudiesPage,
});

const cases = [
  {
    id: "borouge", num: "01 · Borouge 3 · Flare Tip Replacement", owner: "Owner · Borouge",
    title: <>Five flare tips. 190 <span className="red">metres</span> up.<br />Two metres of clearance.</>,
    scope: "Borouge 3 needed five 5-tonne flare tips swapped at the top of a 190-metre flare tower during a live-plant shutdown window. Clearance between the crane boom and the flare tower was 2 metres. Wind conditions on the stack were high. The lift could not slip the schedule.",
    specs: [["Crane", "Demag CC8800-1 (1,600T)"], ["Configuration", "SWSL"], ["Main Boom", "108m at 88°"], ["Jib", "108m"], ["Working Radius", "68m"], ["Chart Used", "84.18%"]],
    detail: [
      ["Approach", "We built a 3D simulation of the lift before mobilisation. We reviewed and validated the subcontractor's lift plans. We supervised assembly and dismantling of the Demag CC8800-1, then supervised the flare tip operation itself."],
      ["Outcome", "Five flare tips replaced. Man baskets and material baskets landed. Zero incidents. ADNOC HSE OS-ST-19 compliance documented end to end."],
    ],
  },
  {
    id: "lafarge", num: "02 · Lafarge Cement Plant · AQC and SP Boiler", owner: "Owner · Lafarge Emirates Cement · Client · ENGIE · Consultant · Bureau Veritas",
    title: <>One crawler. Five lifts.<br />One <span className="red">confined</span> footprint.</>,
    scope: "AQC and SP Boiler installation inside an operating cement plant. 43-tonne modules and 36-tonne flue gas ducts needed placement in a confined area with strict safety control. The contractor's lift plans also needed review and approval before execution.",
    specs: [["Crane", "Demag CC2800-1"], ["Boom", "SSL/LSL · 96m"], ["Max Lift", "43t module"], ["Chart Used", "90.2% peak"], ["Assist", "Sany STC750"], ["Lifts", "5 documented"]],
    detail: [
      ["Approach", "We prepared the primary lift plans for the AQC Boiler and SP Boiler work. We reviewed and approved subcontractor lift plans. We supervised every lift on site. One Demag CC2800-1 in SSL/LSL configuration handled the heavy lifts. A Sany STC750 assisted on the hopper duct tailing operation."],
      ["Lift log", "SP Boiler Module 43t at 54m, 190t SL, 85.91% chart. Flue Gas Duct 36.23t at 62m, 250t SL, 90.2% chart. Boiler Tube Bundle 30t at 54m, 170t SL, 84.26%. Hopper Ducts 21.12t at 54m, 85.12% (with Sany STC750 assist at 35.53%). Support Duct 3.05t at 66m, 0t SL, 84.83%."],
      ["Outcome", "All lifts landed. No rework. No reschedule. Primary and subcontractor lift plans approved and filed."],
    ],
  },
  {
    id: "gasco", num: "03 · Gasco Habshan · Plant Shutdown Support", owner: "Owner · ADNOC Gas (Gasco)",
    title: <>Confined-space lifts,<br /><span className="red">in a live</span> shutdown window.</>,
    scope: "Valve and spool replacements inside an operating gas plant. Hard-to-access locations. A shutdown window that could not slip. Full ADNOC HSE OS-ST-19 compliance required for every lift.",
    specs: [["Cranes", "Mobile 50t to 80t"], ["Scope", "Valve and Spool"], ["Role", "APLO Supervision"], ["Standard", "ADNOC OS-ST-19"], ["Environment", "Hard-access"], ["Outcome", "Zero incidents"]],
    detail: [
      ["Approach", "Mobile cranes from 50 to 80 tonnes mobilised to each work area. Every lift classified, risk-assessed, and signed off before execution."],
      ["Compliance", "Detailed lifting plans prepared and approved. Competency validation for lifting personnel, riggers, and signallers. Pre-lift inspections of cranes, lifting gear, and ground conditions. Classification of lifting operations (critical vs non-critical) with risk assessments. Toolbox Talks and JSA before every lift. Continuous supervision and emergency preparedness."],
      ["Outcome", "Shutdown scope completed. Zero incidents. Full ADNOC HSE OS-ST-19 compliance documented."],
    ],
  },
  {
    id: "takreer", num: "04 · Takreer Ruwais · Heat Exchanger Tube Bundles", owner: "Owner · ADNOC Refining (Takreer)",
    title: <>Sinking soil, 110t mobile,<br /><span className="red">zero rework.</span></>,
    scope: "Heavy tube bundle replacement during a Ruwais refinery shutdown. Ground conditions were unstable. Soil was sinking under load. Crane positioning and load spreading had to be worked out before anything moved.",
    specs: [["Cranes", "95t and 110t mobile"], ["Scope", "Tube Bundles, Catalyst"], ["Challenge", "Sinking soil"], ["Standard", "ADNOC OS-ST-19"], ["Role", "Planning and APLO"], ["Outcome", "Safe, on plan"]],
    detail: [
      ["Approach", "Mobile cranes of 95 and 110 tonnes mobilised with full load-spreading mats. Bearing pressure calculations signed off for every setup. Lift plans prepared and reviewed. Supervision continuous on site."],
      ["Compliance", "Lift plan preparation, review, and approval. Operator, rigger, and signaller competency verification. Pre-lift inspection of cranes, tackles, and ground stability. Lift classification and risk assessment. Toolbox Talks and JSA before execution. Continuous supervision and emergency preparedness."],
      ["Outcome", "Heat exchanger tube bundles replaced. Catalyst replaced. Ground stability maintained throughout. Full ADNOC HSE OS-ST-19 compliance logged."],
    ],
  },
];

function CaseStudiesPage() {
  const [expanded, setExpanded] = useState<string | null>(null);
  return (
    <>
      <Nav dark />

      <section className="cs-hero">
        <div className="wrap">
          <div>
            <div className="eyebrow eyebrow-red">Case Studies</div>
            <h1 className="cs-hero-h1" style={{ marginTop: 28 }}>Four projects.<br />Four <span className="red">reasons</span><br />to call us.</h1>
          </div>
          <div>
            <p className="summary">Each project below was chosen because something about it was harder than a textbook lift. Height. Clearance. Soil. Access. A live plant overhead. What follows is what we did and what we used.</p>
            <div className="legend">
              <span>04 Projects</span>
              <span>08 Critical Lifts</span>
              <span>1600T Fleet</span>
            </div>
          </div>
        </div>
      </section>

      <div className="cs-vertical">
        <div className="wrap">
          {cases.map((c, i) => (
            <article key={c.id} id={c.id} className={`cs-card${expanded === c.id ? " expanded" : ""}`}>
              <div className="hero-art">
                <div className="placeholder-label">PROJECT PHOTO · PLACEHOLDER</div>
                <div className="serial">CASE · 0{i + 1} / 04</div>
              </div>
              <div>
                <div className="num">{c.num}</div>
                <div className="owner">{c.owner}</div>
                <h3 className="cs-card-h3">{c.title}</h3>
              </div>
              <p className="scope">{c.scope}</p>
              <div className="specs">
                {c.specs.map(([k, v]) => (
                  <div key={k}><span className="k">{k}</span><span className="v">{v}</span></div>
                ))}
              </div>
              <button className="cs-expand-btn" onClick={() => setExpanded(expanded === c.id ? null : c.id)}>
                {expanded === c.id ? "Collapse Detail ←" : "Expand Detail →"}
              </button>
              {expanded === c.id && (
                <div className="cs-detail">
                  <div>
                    {c.detail.map(([h, p]) => (
                      <div key={h}>
                        <h4>{h}</h4>
                        <p>{p}</p>
                      </div>
                    ))}
                  </div>
                  <div className="cs-annotated" />
                </div>
              )}
            </article>
          ))}
        </div>
      </div>

      <section className="cs-cta">
        <div className="wrap">
          <div>
            <div className="eyebrow eyebrow-red">Got a project like these?</div>
            <h2 className="cs-cta-h2" style={{ marginTop: 20 }}>Start a<br /><span className="red">conversation.</span></h2>
            <p style={{ color: "var(--steel)", fontSize: 17, lineHeight: 1.6, marginTop: 24, maxWidth: 520 }}>We respond to every serious inquiry within one working day. Send the load, the site, and the window.</p>
          </div>
          <Link to="/contact" className="download">
            <div className="meta">PDF · Rev 3 · 15 Pages</div>
            <h3>Ascentez<br />Project Portfolio</h3>
            <div className="inline-link">Start a Conversation →</div>
          </Link>
        </div>
      </section>

      <Footer />
    </>
  );
}
