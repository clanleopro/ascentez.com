import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { Nav } from "@/components/site/Nav";
import { Ticker } from "@/components/site/Ticker";
import { Footer } from "@/components/site/Footer";
import { IconCrawler, IconSPMT, IconHook, CraneBlueprint } from "@/components/site/Cranes";
import { useQuoteModal } from "@/components/site/QuoteModal";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Ascentez · Heavy Lifting and Transportation, Abu Dhabi" },
      { name: "description", content: "Heavy lifts, heavy transportation, and rigging for industrial projects across the UAE. 45t to 1,600t crane fleet. ADNOC OS-ST-19 compliant. Abu Dhabi based." },
      { property: "og:title", content: "Ascentez · Heavy Lifting and Transportation" },
      { property: "og:description", content: "45-tonne mobile cranes to 1,600-tonne crawlers. Borouge 3 flare tip at 190m. Lafarge, Gasco, Takreer delivered." },
    ],
  }),
  component: HomePage,
});

const CLIENTS = [
  { name: "ADNOC", logo: "https://logo.clearbit.com/adnoc.ae" },
  { name: "Borouge", logo: "https://logo.clearbit.com/borouge.com" },
  { name: "Lafarge", logo: "https://logo.clearbit.com/lafarge.com" },
  { name: "ENGIE", logo: "https://logo.clearbit.com/engie.com" },
  { name: "Bureau Veritas", logo: "https://logo.clearbit.com/bureauveritas.com" },
  { name: "ADNOC Gas", logo: "https://logo.clearbit.com/adnocgas.ae" },
  { name: "ADNOC Refining", logo: "https://logo.clearbit.com/adnoc.ae" },
  { name: "Emirates Steel", logo: "https://logo.clearbit.com/emiratessteel.com" },
];

function HomePage() {
  const { open } = useQuoteModal();

  useEffect(() => {
    const els = document.querySelectorAll<HTMLElement>(".reveal");
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("is-visible");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.15 }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <>
      <Nav dark />
      <Ticker />

      {/* HERO */}
      <section className="hero-v1">
        <div className="hero-v1-numbers">
          N 24°26'00"<br />
          E 54°26'00"<br />
          ABU DHABI · UAE<br />
          LAT · 45°<br />
          BOOM · 108M<br />
          CAP · 1600T
        </div>
        <div className="wrap">
          <div className="hero-v1-grid">
            <div className="hero-v1-left">
              <div className="hero-v1-eyebrow">Heavy Lifting and Transportation · Est. Abu Dhabi</div>
              <h1 className="hero-v1-h1">
                <span className="hero-lift-mask"><span className="hero-lift-inner">We Rise</span></span><br />
                <span className="hero-lift-mask"><span className="hero-lift-inner d1">by <span className="red">Lifting</span></span></span><br />
                <span className="hero-lift-mask"><span className="hero-lift-inner d2 stroke">Others.</span></span>
              </h1>
              <p className="hero-v1-sub">
                We plan, engineer, and execute the heaviest lifts in the UAE. Oil and gas, cement, energy, infrastructure. From 45-tonne mobile cranes to 1,600-tonne crawlers, under one accountable team.
              </p>
              <div className="hero-v1-actions">
                <button type="button" onClick={() => open("Hero · Request Lift Plan")} className="btn btn-red">Request a Lift Plan <span className="arrow">→</span></button>
                <Link to="/case-studies" className="btn btn-ghost-dark">View Our Work <span className="arrow">→</span></Link>
              </div>
              <div className="hero-v1-meta">
                <div><span style={{ color: "var(--steel-2)" }}>Crane Fleet</span><br /><strong>45t to 1,600t</strong></div>
                <div><span style={{ color: "var(--steel-2)" }}>Compliance</span><br /><strong>ADNOC HSE OS-ST-19</strong></div>
                <div><span style={{ color: "var(--steel-2)" }}>Reach</span><br /><strong>108m main boom</strong></div>
              </div>
            </div>
            <div className="hero-v1-right">
              <CraneBlueprint className="crane-svg" />
              <div className="spec-tag t1">BOOM · 108M · ANGLE · 88°</div>
              <div className="spec-tag t2">WORKING RADIUS · 68M</div>
              <div className="spec-tag t3">CHART CAP · 84.18%</div>
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="stats reveal">
        <div className="wrap">
          <div className="stats-grid">
            <Stat target={12000} formatter={(n) => n.toLocaleString()} unit="T+" label="Tonnes Lifted" />
            <Stat target={140} unit="+" label="Projects Delivered" />
            <Stat target={1600} formatter={(n) => n.toLocaleString()} unit="T" label="Max Crane Capacity" />
            <Stat target={190} unit="M" label="Highest Lift: Borouge 3" />
          </div>
        </div>
      </section>

      {/* INDUSTRIES */}
      <section className="industries reveal">
        <div className="wrap">
          <div className="section-head">
            <div><div className="eyebrow eyebrow-red">Industries</div></div>
            <div>
              <h2 className="section-h2">Built for the heaviest<br />work on earth.</h2>
              <p className="section-p">
                We work where precision and safety cannot slip. Six sectors. One playbook. Every lift planned on paper and in 3D before anything moves on site.
              </p>
            </div>
          </div>

          <div className="ind-list">
            {[
              ["01", "Oil and Gas", "Refineries, flare systems, pipeline support. Full ADNOC HSE OS-ST-19 compliance."],
              ["02", "Construction and Infrastructure", "Bridges, high-rise buildings, modular construction."],
              ["03", "Cement", "AQC boilers, SP boilers, flue ducts, tube bundles. Lifts inside live plants."],
              ["04", "Energy and Power", "Wind turbine erection, transformers, power plant modules."],
              ["05", "Mining", "Haulage of mining machinery, processing equipment, on-site installation."],
              ["06", "Manufacturing", "Industrial machinery transport. Route surveys included."],
            ].map(([n, name, desc]) => (
              <Link key={n} to="/services" className="ind-row">
                <span className="ind-num">{n} /</span>
                <span className="ind-name">{name}</span>
                <span className="ind-desc">{desc}</span>
                <span className="ind-cta">Explore →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES TEASER */}
      <section className="svc-teaser reveal">
        <div className="wrap">
          <div className="section-head">
            <div><div className="eyebrow eyebrow-red">What We Do</div></div>
            <div>
              <h2 className="section-h2">Three disciplines.<br />One <span className="red">accountable</span> team.</h2>
              <p className="section-p">
                A single point of authority for the entire lifting lifecycle. Engineered plans, certified equipment, qualified manpower, on-site supervision. One team, one standard.
              </p>
            </div>
          </div>

          <div className="svc-cards">
            <ServiceCard to="/services" hash="lift-engineering" tag="01 / Engineering" icon={<IconCrawler />} title={<>Lift<br />Engineering</>} desc="2D and 3D lift plans, route studies, load chart verification, rigging design. The documentation that gets your HSE team to sign off." />
            <ServiceCard to="/services" hash="transportation" tag="02 / Transport" icon={<IconSPMT />} title={<>Heavy<br />Transportation</>} desc="SPMTs, trailers, boom trucks. Oversized load studies, route surveys, end-to-end logistics for heavy cargo." />
            <ServiceCard to="/services" hash="rigging" tag="03 / Execution" icon={<IconHook />} title={<>Rigging<br />and Supervision</>} desc="APLO, rigging supervisors, safety officers on site. Rigging, jacking, and turnkey execution of complex lifts." />
          </div>
          <div style={{ textAlign: "center", marginTop: 60 }}>
            <Link to="/services" className="btn">All Services <span className="arrow">→</span></Link>
          </div>
        </div>
      </section>

      {/* EDITORIAL */}
      <section className="editorial-block reveal">
        <div className="wrap">
          <div>
            <div className="kicker">Our Discipline</div>
            <blockquote>
              Precision runs the job.<br />
              Everything else <span className="red">serves that.</span>
            </blockquote>
          </div>
          <div className="notes">
            <p>Every lift is a controlled event. We draw it first on paper and in 3D. We verify the load chart at the working radius. We confirm the rigger's certification. We inspect the shackle before the shift.</p>
            <p>When a 5-tonne flare tip swings 190 metres off the deck with 2 metres of clearance to the flare tower, "almost" is not an acceptable answer. We do the boring paperwork so the lift itself is never dramatic.</p>
            <Link to="/about" className="inline-link" style={{ marginTop: 24 }}>How we work →</Link>
          </div>
        </div>
      </section>

      {/* CASE STUDIES TEASER */}
      <section className="cs-teaser reveal">
        <div className="wrap">
          <div className="section-head">
            <div><div className="eyebrow eyebrow-red">Selected Projects</div></div>
            <div>
              <h2 className="section-h2">Lifts of <span className="red">record.</span></h2>
              <p className="section-p">
                Four flagship projects for ADNOC, Borouge, Lafarge, and Takreer. Each one a lift the other bidders said could not be done on that schedule, on that crane, in that footprint. Each one delivered.
              </p>
            </div>
          </div>

          <div className="cs-list">
            <Link to="/case-studies" className="cs-feature">
              <div className="placeholder" />
              <div>
                <div className="cs-owner">Borouge 3 · Flare Tip Replacement</div>
                <h3>Five flare tips,<br />190 metres up.</h3>
              </div>
              <div className="cs-meta-grid">
                <div><span className="k">Crane</span><span className="v">Demag CC8800-1</span></div>
                <div><span className="k">Boom</span><span className="v">108m plus 108m jib</span></div>
                <div><span className="k">Chart Used</span><span className="v">84.18%</span></div>
              </div>
            </Link>
            <div className="cs-side">
              {[
                ["Lafarge", "Cement Plant", "AQC and SP Boiler · 43T Module"],
                ["Gasco", "Habshan", "Shutdown · Valve and Spool"],
                ["Takreer", "Ruwais", "Heat Exchanger Tube Bundles"],
              ].map(([t1, t2, m]) => (
                <Link key={t1} to="/case-studies" className="cs-mini">
                  <div>
                    <h4>{t1}<br />{t2}</h4>
                    <div className="cs-mini-meta">{m}</div>
                  </div>
                  <div>→</div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CLIENTS · horizontal logo marquee */}
      <section className="clients reveal">
        <div className="wrap">
          <div className="clients-head">
            <div className="eyebrow eyebrow-red" style={{ justifyContent: "center" }}>Trusted By</div>
            <h3>Major Operators and EPCs</h3>
          </div>
        </div>
        <div className="logo-marquee">
          <div className="logo-marquee-track">
            {[...CLIENTS, ...CLIENTS].map((c, i) => (
              <div key={`${c.name}-${i}`} className="logo-cell">
                <img src={c.logo} alt={c.name} loading="lazy" onError={(e) => { (e.currentTarget as HTMLImageElement).style.visibility = "hidden"; }} />
                <span>{c.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="final-cta reveal">
        <div className="wrap">
          <h2>Have something<br />heavy to move?</h2>
          <p className="lead">Send us the load, the site, and the constraint. We reply within one working day with a first-pass plan or a clear next question.</p>
          <div className="hero-v1-actions">
            <button type="button" onClick={() => open("Final CTA")} className="btn">Contact Sales <span className="arrow">→</span></button>
            <Link to="/contact" className="btn btn-ghost-dark">Contact Page</Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

function Stat({ target, unit, label, formatter }: { target: number; unit?: string; label: string; formatter?: (n: number) => string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [val, setVal] = useState(0);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting && !started.current) {
          started.current = true;
          const duration = 1800;
          const start = performance.now();
          const tick = (now: number) => {
            const t = Math.min(1, (now - start) / duration);
            const eased = 1 - Math.pow(1 - t, 3);
            setVal(Math.round(target * eased));
            if (t < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
          io.disconnect();
        }
      });
    }, { threshold: 0.4 });
    io.observe(el);
    return () => io.disconnect();
  }, [target]);

  const display = formatter ? formatter(val) : String(val);

  return (
    <div className="stat" ref={ref}>
      <div className="stat-value">
        {display}
        {unit && <span className="unit">{unit}</span>}
      </div>
      <div className="stat-label">{label}</div>
    </div>
  );
}

function ServiceCard({ tag, icon, title, desc, to, hash }: { tag: string; icon: React.ReactNode; title: React.ReactNode; desc: string; to?: string; hash?: string }) {
  const content = (
    <>
      <div className="svc-tag">{tag}</div>
      <div className="svc-icon">{icon}</div>
      <h3>{title}</h3>
      <p className="svc-desc">{desc}</p>
      <div className="svc-arrow">Learn More →</div>
    </>
  );
  if (to) {
    return (
      <Link to={to} hash={hash} className="svc-card">
        {content}
      </Link>
    );
  }
  return <div className="svc-card">{content}</div>;
}
