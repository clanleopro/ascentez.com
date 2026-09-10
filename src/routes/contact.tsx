import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { PhoneInput } from "@/components/site/PhoneInput";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Ascentez · Abu Dhabi" },
      { name: "description", content: "Talk to Ascentez about heavy lifts, transportation, and rigging. We respond within one working day. Mohamed Bin Zayed City, Abu Dhabi." },
      { property: "og:title", content: "Contact Ascentez · Abu Dhabi" },
      { property: "og:description", content: "Heavy things to move? Send us the load and the location. We reply within one working day." },
    ],
  }),
  component: ContactPage,
});

const inquiryTypes = ["Lift Engineering", "Crane Rental", "Transportation", "Tools Rental", "Tools Trading", "Manpower", "General"];

const serviceLines = [
  { n: "01", name: "Lift Engineering", desc: "Lift studies, 3D plans, rigging design.", contact: "info@ascentez.com" },
  { n: "02", name: "Crane Rental", desc: "Crawler, mobile, all-terrain. Operated or bare.", contact: "info@ascentez.com" },
  { n: "03", name: "Transportation", desc: "SPMTs, low-beds, route surveys.", contact: "info@ascentez.com" },
  { n: "04", name: "Tools Rental & Trading", desc: "Spreader beams, frames, slings, shackles.", contact: "info@ascentez.com" },
  { n: "05", name: "Manpower", desc: "APLO, riggers, supervisors, safety officers.", contact: "info@ascentez.com" },
  { n: "06", name: "General Inquiries", desc: "Partnerships, vendor onboarding, media.", contact: "info@ascentez.com" },
];

function ContactPage() {
  const [type, setType] = useState("Lift Engineering");
  const [sent, setSent] = useState(false);

  const submit = (e: FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <>
      <Nav />

      {/* HERO */}
      <section className="ct-hero">
        <div className="wrap">
          <div className="ct-hero-grid">
            <div>
              <div className="eyebrow eyebrow-red">Contact · Abu Dhabi · U.A.E</div>
              <h1 className="ct-hero-h1">Let's talk<br />about <span className="red">heavy</span><br /><span className="italic-serif" style={{ color: "var(--steel)" }}>things.</span></h1>
            </div>
            <div className="ct-hero-aside">
              <p className="ct-hero-lede">Send us the load and the location. A named engineer replies within one working day.</p>
              <div className="ct-quick">
                <a href="tel:+971588776556" className="ct-quick-row">
                  <span className="k">Call</span>
                  <span className="v">+971 58 877 6556</span>
                </a>
                <a href="https://wa.me/971588776556" target="_blank" rel="noopener noreferrer" className="ct-quick-row">
                  <span className="k">WhatsApp</span>
                  <span className="v">+971 58 877 6556</span>
                </a>
                <a href="mailto:info@ascentez.com" className="ct-quick-row">
                  <span className="k">Email</span>
                  <span className="v">info@ascentez.com</span>
                </a>
                <a href="tel:+97126392249" className="ct-quick-row">
                  <span className="k">Office</span>
                  <span className="v">+971 2 639 2249</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DETAILS STRIP */}
      <section className="ct-strip">
        <div className="wrap ct-strip-grid">
          <div>
            <div className="eyebrow eyebrow-red">Headquarters</div>
            <p className="ct-addr">
              Ascentez Engineering Services L.L.C - S.P.C<br />
              Office No. M3, Mezzanine Floor<br />
              Building No. C149, Sector M11<br />
              Mohamed Bin Zayed City<br />
              Abu Dhabi, United Arab Emirates
            </p>
          </div>
          <div>
            <div className="eyebrow eyebrow-red">Hours</div>
            <p className="ct-addr">
              Sun to Thu · 08:00 to 18:00 GST<br />
              Site response · 24 / 7 for shutdowns<br />
              Reply window · within one working day
            </p>
          </div>
          <div>
            <div className="eyebrow eyebrow-red">Follow</div>
            <p className="ct-addr">
              <a href="https://linkedin.com/company/ascentez" target="_blank" rel="noopener noreferrer">LinkedIn</a><br />
              <a href="https://youtube.com/@Ascentez" target="_blank" rel="noopener noreferrer">YouTube</a><br />
              <a href="https://wa.me/971588776556" target="_blank" rel="noopener noreferrer">WhatsApp Channel</a>
            </p>
          </div>
        </div>
      </section>

      {/* FORM SECTION */}
      <section className="ct-form-section">
        <div className="wrap">
          <div className="ct-form-head">
            <div>
              <div className="eyebrow eyebrow-red">General Inquiry</div>
              <h2 className="ct-form-h2-big">Send us<br />a <span className="red">message.</span></h2>
            </div>
            <p className="ct-form-lede">The more specific you are about scope, location, weight, and schedule, the faster we can respond with a real answer instead of a holding email.</p>
          </div>

          <div className="ct-form-card">
            {!sent ? (
              <form onSubmit={submit} className="ct-form">
                <div className="row">
                  <div className="ct-field"><label>Full name</label><input type="text" name="name" required placeholder="Your name" /></div>
                  <div className="ct-field"><label>Company</label><input type="text" name="company" placeholder="Company or organisation" /></div>
                </div>
                <div className="row">
                  <div className="ct-field"><label>Email</label><input type="email" name="email" required placeholder="you@company.com" /></div>
                  <div className="ct-field"><label>Phone</label><PhoneInput name="phone" /></div>
                </div>
                <div className="ct-field">
                  <label>Inquiry type</label>
                  <div className="ct-chip-row">
                    {inquiryTypes.map((t) => (
                      <button type="button" key={t} className={`ct-chip${type === t ? " selected" : ""}`} onClick={() => setType(t)}>{t}</button>
                    ))}
                  </div>
                </div>
                <div className="row">
                  <div className="ct-field"><label>Project location</label><input type="text" name="location" placeholder="e.g. Ruwais, Habshan, Taweelah" /></div>
                  <div className="ct-field"><label>Expected load weight</label><input type="text" name="load" placeholder="e.g. 40T module, 120T transformer" /></div>
                </div>
                <div className="ct-field"><label>Target schedule</label><input type="text" name="schedule" placeholder="When do you need it?" /></div>
                <div className="ct-field"><label>Message</label><textarea name="message" rows={4} placeholder="Tell us what you need." /></div>

                <div className="ct-form-foot">
                  <div className="ct-form-note">Or skip the form. <a href="mailto:info@ascentez.com" style={{ color: "var(--red)", borderBottom: "1px solid var(--red)" }}>info@ascentez.com</a></div>
                  <button type="submit" className="btn btn-red">Send Inquiry <span className="arrow">→</span></button>
                </div>
              </form>
            ) : (
              <div className="ct-success show">
                <div className="check">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="var(--red)" strokeWidth="2"><polyline points="4 12 10 18 20 6" /></svg>
                </div>
                <h3>Message <span className="red">sent.</span></h3>
                <p className="muted">Thanks. We have your message. A named engineer will reply within one working day. If this is urgent, WhatsApp us on +971 58 877 6556.</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* DIRECT LINES BY SERVICE */}
      <section className="ct-lines">
        <div className="wrap">
          <div className="ct-lines-head">
            <div>
              <div className="eyebrow eyebrow-red">Direct Lines</div>
              <h2 className="fleet-h2">By service<br /><span className="red">line.</span></h2>
            </div>
            <p>Skip the switchboard. Write to the discipline that owns the work.</p>
          </div>

          <div className="ct-lines-table">
            <div className="ctl-row head">
              <span>#</span><span>Service</span><span>What it covers</span><span>Direct email</span><span />
            </div>
            {serviceLines.map((s) => (
              <div key={s.n} className="ctl-row">
                <span className="tn">{s.n}</span>
                <span className="tname">{s.name}</span>
                <span className="tdesc">{s.desc}</span>
                <span className="tmail"><a href={`mailto:${s.contact}`}>{s.contact}</a></span>
                <Link to="/contact" className="tcta">Write →</Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="final-cta-f">
        <div className="wrap">
          <div className="eyebrow" style={{ color: "#0A0A0A" }}>Operations · Abu Dhabi</div>
          <h2 className="final-cta-h2">Heavy work.<br />Specific answers.</h2>
          <p>Tell us the load, the site, and the date. We respond with people, not auto-replies.</p>
          <a href="https://wa.me/971588776556" target="_blank" rel="noopener noreferrer" className="btn">WhatsApp Us <span className="arrow">→</span></a>
        </div>
      </section>

      <Footer />
    </>
  );
}
