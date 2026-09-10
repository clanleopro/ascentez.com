import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import logoLight from "@/assets/logo-light.png";
import logoDark from "@/assets/logo-dark.png";
import { useQuoteModal } from "@/components/site/QuoteModal";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/fleet", label: "Fleet" },
  { to: "/case-studies", label: "Case Studies" },
  { to: "/contact", label: "Contact" },
] as const;

export function Nav({ dark = false }: { dark?: boolean }) {
  const { open } = useQuoteModal();
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") setMenuOpen(false); };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [menuOpen]);

  return (
    <header className={`nav${dark ? " dark" : ""}`}>
      <div className="wrap">
        <Link to="/" className="nav-logo" aria-label="Ascentez home" onClick={() => setMenuOpen(false)}>
          <img
            src={dark ? logoLight : logoDark}
            alt="Ascentez"
            className="nav-logo-img"
          />
        </Link>
        <nav className="nav-links">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              activeProps={{ className: "active" }}
              activeOptions={{ exact: l.to === "/" }}
            >
              {l.label}
            </Link>
          ))}
        </nav>
        <div className="nav-cta">
          <button
            type="button"
            onClick={() => open("Header")}
            className="btn btn-red nav-cta-btn"
            style={{ padding: "10px 18px", fontSize: 11 }}
          >
            Contact Sales <span className="arrow">→</span>
          </button>
          <button
            type="button"
            className={`nav-burger${menuOpen ? " open" : ""}`}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((v) => !v)}
          >
            <span /><span /><span />
          </button>
        </div>
      </div>

      {menuOpen && (
        <>
          <button
            type="button"
            className="nav-scrim"
            aria-label="Close menu"
            onClick={() => setMenuOpen(false)}
          />
          <aside className={`nav-drawer${dark ? " dark" : ""}`} role="dialog" aria-modal="true" aria-label="Site menu">
            <div className="nav-drawer-eyebrow">Menu</div>
            <nav className="nav-drawer-links">
              {links.map((l) => (
                <Link
                  key={l.to}
                  to={l.to}
                  activeProps={{ className: "active" }}
                  activeOptions={{ exact: l.to === "/" }}
                  onClick={() => setMenuOpen(false)}
                >
                  {l.label}
                </Link>
              ))}
            </nav>
            <button
              type="button"
              onClick={() => { setMenuOpen(false); open("Header · Mobile"); }}
              className="btn btn-red nav-drawer-cta"
            >
              Contact Sales <span className="arrow">→</span>
            </button>
          </aside>
        </>
      )}
    </header>
  );
}
