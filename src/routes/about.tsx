import { createFileRoute, Link } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { CraneBlueprint } from "@/components/site/Cranes";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Ascentez · Heavy Lift Engineering, Abu Dhabi" },
      { name: "description", content: "Abu Dhabi based heavy lifting and transportation company. Mission, values, process, and HQ details. 45t to 1,600t crane fleet. ADNOC OS-ST-19." },
      { property: "og:title", content: "About Ascentez · Heavy Lift Engineering" },
      { property: "og:description", content: "We plan, engineer, and supervise the heaviest lifts in the UAE. One accountable team under the CEO." },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      <Nav />

      <section className="about-hero">
        <div className="wrap">
          <div style={{ gridColumn: "1 / -1" }}>
            <div className="eyebrow eyebrow-red">About Ascentez · Engineering Services L.L.C - S.P.C</div>
          </div>
          <div>
            <h1 className="about-hero-h1">
              We lift<br />what others<br /><span className="red">won't.</span> And we<br />do it safely.
            </h1>
            <p className="sub">
              Ascentez is a heavy lifting and heavy transportation company based in Mohamed Bin Zayed City, Abu Dhabi. We work across the UAE on the lifts that need engineering, not just a crane.
            </p>
          </div>
          <div className="about-hero-visual">
            <CraneBlueprint className="crane-svg" />
            <div className="annot top">BOOM · 108M</div>
            <div className="annot mid">CC2800-1</div>
            <div className="annot low">250T CW</div>
          </div>

          <div className="about-crumbs" style={{ gridColumn: "1 / -1" }}>
            <div>Founded<strong>Abu Dhabi</strong></div>
            <div>Crane Capacity<strong>45t to 1,600t</strong></div>
            <div>Main Boom<strong>Up to 108m</strong></div>
            <div>Compliance<strong>ADNOC OS-ST-19</strong></div>
          </div>
        </div>
      </section>

      <section className="overview">
        <div className="wrap">
          <div className="overview-grid">
            <div>
              <div className="eyebrow eyebrow-red">Overview</div>
              <h2 className="overview-h2" style={{ marginTop: 20 }}>Built for the<br /><span className="red">difficult</span><br />lifts.</h2>
            </div>
            <div className="overview-body">
              <p className="lead">
                We plan, engineer, and deliver heavy lifts and heavy transportation for industrial projects across the UAE. Our work covers oil and gas, cement, energy, mining, and infrastructure. Repeat clients and referrals make up most of what we do.
              </p>
              <p>Our fleet runs from 45-tonne mobile cranes to 1,600-tonne crawlers, backed by SPMTs, boom trucks, trailers, and a full inventory of certified rigging gear. Every asset is inspected, certified, and ready to mobilise.</p>
              <p>Ascentez operates as a <strong>single point of authority</strong>. Lift engineering, on-site supervision, rigging, and manpower sit under one accountable team. We produce 2D and 3D lift plans, review subcontractor submissions, and supervise execution on site. Every project runs to ADNOC HSE OS-ST-19.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="mv">
        <div className="wrap">
          <div className="mv-card">
            <div>
              <div className="mv-label">Mission</div>
              <h3 className="mv-h3">Deliver heavy<br />lifts that are<br />safe and on<br />schedule.</h3>
              <p>Deliver heavy lifting and heavy transportation that are engineered, documented, and on schedule. Nothing more, nothing less. No surprises for the client.</p>
            </div>
            <div className="mv-num">01</div>
          </div>
          <div className="mv-card">
            <div>
              <div className="mv-label">Vision</div>
              <h3 className="mv-h3">Be the first<br />call when<br />the lift is<br />critical.</h3>
              <p>Be the name UAE industry thinks of first when the lift is at height, in a confined space, under a tight window, or under live plant conditions.</p>
            </div>
            <div className="mv-num">02</div>
          </div>
        </div>
      </section>

      <section className="values">
        <div className="wrap">
          <div className="section-head">
            <div><div className="eyebrow eyebrow-red">Core Values</div></div>
            <div><h2 className="section-h2">The five<br />non-negotiables.</h2></div>
          </div>
          <div className="values-grid">
            {[
              ["01", "Safety First", "Every lift runs through ADNOC OS-ST-19. JSA, pre-lift inspection, competency verification, toolbox talk. Before the crane arrives, not after."],
              ["02", "Precision and Expertise", "A 43-tonne module in a confined footprint does not forgive rushing. We take the time to get the plan right, then execute fast."],
              ["03", "Engineered, Not Guessed", "2D and 3D simulation on every non-routine lift. Verified load charts. Documented sequences. No figuring it out on the day."],
              ["04", "Sustainability", "Route studies that cut unnecessary transport kilometres. Equipment choices that reduce fuel burn. Green practices where they do not compromise safety."],
              ["05", "Accountable to the Client", "Our Appointed Person stays on your site, not on a phone in Dubai. One named engineer owns every project from mobilisation to demob."],
            ].map(([n, t, d]) => (
              <div key={n} className="value">
                <div className="v-icon">
                  <svg width="44" height="44" viewBox="0 0 44 44" fill="none" stroke="currentColor" strokeWidth="1.4">
                    <path d="M22 4 L38 10 L38 22 C38 32 30 38 22 40 C14 38 6 32 6 22 L6 10 Z" />
                    <path d="M15 22 L20 27 L30 17" strokeWidth="1.6" />
                  </svg>
                </div>
                <div className="v-num">{n}</div>
                <h4>{t}</h4>
                <p>{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="process">
        <div className="wrap">
          <div className="section-head">
            <div><div className="eyebrow eyebrow-red">Process</div></div>
            <div><h2 className="section-h2">Five steps.<br />Every <span className="red">project.</span></h2></div>
          </div>
          <div className="proc-list">
            {[
              ["01", "Scope and Site Walk", "We read the drawings, walk the site, and flag the constraints. Ground conditions, clearances, live-plant risks.", ["Drawings", "Site Walk"]],
              ["02", "Engineer the Lift", "2D layout, 3D simulation, load chart verification, rigging calculations, sequencing plan.", ["2D/3D Plan", "Load Chart", "JSA"]],
              ["03", "Review and Approve", "Client HSE, consultant, and where applicable ADNOC review. We close every comment before mobilisation.", ["HSE", "ADNOC Review"]],
              ["04", "Mobilise and Execute", "Crane assembly, rigging inspection, JSA, toolbox talk. Lift under direct supervision by the APLO.", ["APLO", "Toolbox Talk"]],
              ["05", "Demobilise and Close Out", "As-done drawings. Lift log. Inspection records. Everything the client needs for their file.", ["Closeout", "Lift Log"]],
            ].map(([n, p, b, tags]) => (
              <div key={n as string} className="proc-row">
                <div className="proc-num">{n}</div>
                <div className="proc-phase">{p}</div>
                <div className="proc-body">{b}</div>
                <div className="proc-tags">
                  {(tags as string[]).map((t) => <span key={t} className="proc-tag">{t}</span>)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="hq">
        <div className="wrap">
          <div className="hq-card">
            <div className="hq-label">Headquarters</div>
            <h3>Abu Dhabi.<br />On the ground.</h3>
            <address>
              Ascentez Engineering Services L.L.C - S.P.C<br />
              Office No. M3, Mezzanine Floor<br />
              Building No. C149, Sector M11<br />
              Mohamed Bin Zayed City<br />
              Abu Dhabi, United Arab Emirates
            </address>
            <div className="hq-details">
              <div className="row"><span>Phone</span><span className="v">+971 2 639 2249</span></div>
              <div className="row"><span>Mobile / WhatsApp</span><span className="v">+971 58 877 6556</span></div>
              <div className="row"><span>Email</span><span className="v">info@ascentez.com</span></div>
            </div>
            <Link to="/contact" className="btn btn-red" style={{ marginTop: 32 }}>Contact Us <span className="arrow">→</span></Link>
          </div>
          <div className="hq-map">
            <div className="pin" />
            <div className="pin-label">ASCENTEZ HQ</div>
            <div style={{ position: "absolute", top: 20, left: 20, fontFamily: "var(--f-mono)", fontSize: 10, letterSpacing: "0.2em", color: "var(--red)" }}>N 24°22'53" · E 54°33'34"</div>
            <div style={{ position: "absolute", bottom: 20, right: 20, fontFamily: "var(--f-mono)", fontSize: 10, letterSpacing: "0.2em", color: "var(--steel-2)" }}>MBZ CITY · SECTOR M11</div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
