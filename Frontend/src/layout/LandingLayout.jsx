import { useEffect, useState } from "react";
import { Outlet, Link, NavLink, useLocation } from "react-router-dom";
import { Moon, Sun, Menu, X, ArrowUpRight } from "lucide-react";
import { useTheme } from "../context/ThemeContext";
import { IMAGES } from "../utils/constants";
import "../assets/style/LandingPage.css";
import "../assets/style/Marketing.css";
const links = [
  ["/", "Home"],
  ["/landing-docs", "Docs"],
  ["/landing-demo", "Demo"],
  ["/contact", "Contact Us"],
  ["/careers", "Careers"],
];
const footerGroups = [
  [
    "Product",
    [
      ["/landing-docs", "Documentation"],
      ["/landing-demo", "Try the demo"],
      ["/signup", "Create an account"],
    ],
  ],
  [
    "Company",
    [
      ["/contact", "Contact Us"],
      ["/careers", "Careers"],
    ],
  ],
  [
    "Legal",
    [
      ["/privacy", "Privacy Policy"],
      ["/terms", "Terms & Conditions"],
    ],
  ],
];
export default function LandingLayout() {
  const { theme, toggleTheme } = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <div className="landing-page-container marketing-shell">
      <a className="marketing-skip" href="#main-content">
        Skip to content
      </a>
      <header className="landing-page-header">
        <div className="landing-page-header-inner">
          <Link
            to="/"
            className="landing-page-logo"
            aria-label="Dev Push Notification home"
            onClick={() => setMenuOpen(false)}
          >
            <span className="landing-page-logo-icon">
              <img src={IMAGES.SiteLogo} alt="" />
            </span>
            <span className="landing-page-logo-text">
              Dev Push<span className="brand-caption">NOTIFICATION</span>
            </span>
          </Link>
          <nav
            id="marketing-navigation"
            aria-label="Main navigation"
            className={`landing-page-nav ${menuOpen ? "is-open" : ""}`}
          >
            {links.map(([to, label]) => (
              <NavLink
                key={to}
                to={to}
                end={to === "/"}
                className="landing-page-nav-link"
                onClick={() => setMenuOpen(false)}
              >
                {label}
              </NavLink>
            ))}
            <Link
              to="/signin"
              className="mobile-signin"
              onClick={() => setMenuOpen(false)}
            >
              Sign In
            </Link>
          </nav>
          <div className="landing-page-header-actions">
            <button
              type="button"
              onClick={toggleTheme}
              className="landing-page-icon-btn"
              aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
            >
              {theme === "dark" ? <Sun size={19} /> : <Moon size={19} />}
            </button>
            <Link
              to="/signin"
              className="landing-page-btn landing-page-btn-ghost desktop-signin"
            >
              Sign In
            </Link>
            <Link
              to="/signup"
              className="landing-page-btn landing-page-btn-primary"
            >
              Get Started <ArrowUpRight size={16} />
            </Link>
            <button
              type="button"
              className="menu-toggle landing-page-icon-btn"
              aria-label={menuOpen ? "Close navigation" : "Open navigation"}
              aria-expanded={menuOpen}
              aria-controls="marketing-navigation"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </header>
      <main id="main-content" tabIndex={-1}>
        <Outlet />
      </main>
      <footer className="landing-page-footer">
        <div className="landing-page-footer-inner">
          <div className="landing-page-footer-column footer-brand">
            <Link to="/" className="landing-page-logo">
              <span className="landing-page-logo-icon">
                <img src={IMAGES.SiteLogo} alt="" />
              </span>
              <span className="landing-page-logo-text">Dev Push</span>
            </Link>
            <p className="landing-page-footer-text">
              A little code. A meaningful connection.
              <br />
              Push notifications built for developers.
            </p>
          </div>
          {footerGroups.map(([title, items]) => (
            <div className="landing-page-footer-column" key={title}>
              <h2 className="landing-page-footer-title">{title}</h2>
              <ul className="landing-page-footer-list">
                {items.map(([to, label]) => (
                  <li key={to}>
                    <Link to={to}>{label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="landing-page-footer-bottom">
          <span>© {new Date().getFullYear()} Dev Push Notification.</span>
          <span>Built to keep your users in the loop.</span>
        </div>
      </footer>
    </div>
  );
}
