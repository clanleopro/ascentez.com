import { Link } from "@tanstack/react-router";
import logoLight from "@/assets/logo-light.png";

export function Footer() {
  return (
    <footer className="footer">
      <div className="wrap">
        <div className="footer-grid">
          <div className="f-brand">
            <img src={logoLight} alt="Ascentez" className="footer-logo-img" />
            <p>
              Heavy lifting, transportation, and rigging for industrial projects across the Middle East. Engineered. Supervised. Delivered.
            </p>
          </div>
          <div>
            <h4>Sitemap</h4>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/fleet">Fleet</Link></li>
              <li><Link to="/case-studies">Case Studies</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4>Capabilities</h4>
            <ul>
              <li><Link to="/services">Lift Engineering</Link></li>
              <li><Link to="/services">Heavy Transportation</Link></li>
              <li><Link to="/services">Rigging and Supervision</Link></li>
              <li><Link to="/services">Crane Rental</Link></li>
              <li><Link to="/services">Lifting Tools (Rental and Trading)</Link></li>
              <li><Link to="/services">Manpower and APLO</Link></li>
            </ul>
          </div>
          <div>
            <h4>Headquarters</h4>
            <ul className="footer-hq">
              <li>Mohamed Bin Zayed City</li>
              <li>Abu Dhabi, U.A.E</li>
              <li><a href="tel:+971588776556">+971 58 877 6556</a></li>
              <li><a href="mailto:info@ascentez.com">info@ascentez.com</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-base">
          <span>© {new Date().getFullYear()} Ascentez Engineering Services L.L.C - S.P.C</span>
          <span>We Rise By Lifting Others</span>
        </div>
      </div>
    </footer>
  );
}
