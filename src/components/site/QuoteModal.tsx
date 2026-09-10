import { createContext, useCallback, useContext, useEffect, useState, type FormEvent, type ReactNode } from "react";
import { useServerFn } from "@tanstack/react-start";
import { submitInquiry } from "@/functions/inquiries.functions";
import { PhoneInput } from "@/components/site/PhoneInput";

type OpenOpts = { source?: string; presetType?: string };
type Ctx = { open: (opts?: OpenOpts | string) => void; close: () => void };
const QuoteCtx = createContext<Ctx | null>(null);

export function useQuoteModal() {
  const ctx = useContext(QuoteCtx);
  if (!ctx) throw new Error("QuoteModal context missing");
  return ctx;
}

const inquiryTypes = [
  "Lift Engineering",
  "Crane Rental",
  "Heavy Transportation",
  "Rigging & Supervision",
  "Tools Rental",
  "Tools Trading",
  "Manpower / APLO",
];

export function QuoteModalProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [source, setSource] = useState<string | undefined>();
  const [presetType, setPresetType] = useState<string | undefined>();

  const open = useCallback((opts?: OpenOpts | string) => {
    if (typeof opts === "string") { setSource(opts); setPresetType(undefined); }
    else { setSource(opts?.source); setPresetType(opts?.presetType); }
    setIsOpen(true);
  }, []);
  const close = useCallback(() => setIsOpen(false), []);

  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") close(); };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [isOpen, close]);

  return (
    <QuoteCtx.Provider value={{ open, close }}>
      {children}
      {isOpen && <QuoteDialog source={source} presetType={presetType} onClose={close} />}
    </QuoteCtx.Provider>
  );
}

function QuoteDialog({ source, presetType, onClose }: { source?: string; presetType?: string; onClose: () => void }) {
  const submit = useServerFn(submitInquiry);
  const [type, setType] = useState(presetType || "Lift Engineering");
  const chipOptions = presetType && !inquiryTypes.includes(presetType)
    ? [presetType, ...inquiryTypes]
    : inquiryTypes;
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (status === "sending") return;
    const fd = new FormData(e.currentTarget);
    setStatus("sending");
    setErrorMsg("");
    try {
      await submit({
        data: {
          name: String(fd.get("name") || ""),
          company: String(fd.get("company") || ""),
          email: String(fd.get("email") || ""),
          phone: String(fd.get("phone") || ""),
          type,
          location: String(fd.get("location") || ""),
          load: String(fd.get("load") || ""),
          schedule: String(fd.get("schedule") || ""),
          message: String(fd.get("message") || ""),
        },
      });
      setStatus("sent");
    } catch (err) {
      setStatus("error");
      setErrorMsg(err instanceof Error ? err.message : "Could not send. Try again.");
    }
  };

  return (
    <div className="qm-overlay" role="dialog" aria-modal="true" aria-label="Contact Sales" onClick={onClose}>
      <div className="qm-panel" onClick={(e) => e.stopPropagation()}>
        <button className="qm-close" onClick={onClose} aria-label="Close">×</button>

        <div className="qm-side">
          <div className="qm-eyebrow">Contact Sales · Abu Dhabi</div>
          <h2 className="qm-title">Tell us<br />what you need<br /><span className="red">to lift.</span></h2>
          <p className="qm-sub">We reply within one working day with a first-pass plan or a clear next question.</p>
          <div className="qm-meta">
            <div><span>Phone</span><a href="tel:+971588776556">+971 58 877 6556</a></div>
            <div><span>Email</span><a href="mailto:info@ascentez.com">info@ascentez.com</a></div>
            <div><span>HQ</span>Mohamed Bin Zayed City, Abu Dhabi</div>
            {source && <div><span>From</span>{source}</div>}
          </div>
        </div>

        <div className="qm-form-wrap">
          {status === "sent" ? (
            <div className="qm-success">
              <div className="qm-check">✓</div>
              <h3>Inquiry received.</h3>
              <p>Our team will reply within one working day.</p>
              <button className="btn btn-red" onClick={onClose}>Close</button>
            </div>
          ) : (
            <form onSubmit={onSubmit} className="ct-form qm-form">
              <div className="row">
                <div className="ct-field"><label>Full name</label><input type="text" name="name" required maxLength={120} placeholder="Your name" /></div>
                <div className="ct-field"><label>Company</label><input type="text" name="company" maxLength={160} placeholder="Company or organisation" /></div>
              </div>
              <div className="row">
                <div className="ct-field"><label>Email</label><input type="email" name="email" required maxLength={255} placeholder="you@company.com" /></div>
                <div className="ct-field"><label>Phone</label><PhoneInput name="phone" /></div>
              </div>
              <div className="ct-field">
                <label>Inquiry type</label>
                <div className="ct-chip-row">
                  {chipOptions.map((t) => (
                    <button type="button" key={t} className={`ct-chip${type === t ? " selected" : ""}`} onClick={() => setType(t)}>{t}</button>
                  ))}
                </div>
              </div>
              <div className="row">
                <div className="ct-field"><label>Project location</label><input type="text" name="location" maxLength={200} placeholder="e.g. Ruwais, Habshan, Taweelah" /></div>
                <div className="ct-field"><label>Expected load weight</label><input type="text" name="load" maxLength={200} placeholder="e.g. 40T module, 120T transformer" /></div>
              </div>
              <div className="ct-field"><label>Target schedule</label><input type="text" name="schedule" maxLength={200} placeholder="When do you need it?" /></div>
              <div className="ct-field"><label>Message</label><textarea name="message" rows={4} maxLength={2000} placeholder="Tell us what you need. The more specific, the faster we reply." /></div>

              {status === "error" && <div className="qm-error">{errorMsg}</div>}

              <div className="ct-form-foot">
                <div className="ct-form-note">Or email <a href="mailto:info@ascentez.com" style={{ color: "var(--red)", borderBottom: "1px solid var(--red)" }}>info@ascentez.com</a></div>
                <button type="submit" disabled={status === "sending"} className="btn btn-red">
                  {status === "sending" ? "Sending…" : <>Send Inquiry <span className="arrow">→</span></>}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
