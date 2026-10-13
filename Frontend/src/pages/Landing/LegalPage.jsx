import { Link } from "react-router-dom";
import { FileText, ArrowUpRight } from "lucide-react";
export default function LegalPage({
  title,
  intro,
  summary,
  sections,
  relatedPath,
  relatedLabel,
}) {
  return (
    <div className="marketing-width marketing-info-page legal-page">
      <div className="info-heading">
        <span className="marketing-eyebrow">
          CLEAR INFORMATION. BETTER DECISIONS.
        </span>
        <h1>{title}</h1>
        <p>{intro}</p>
      </div>
      <div className="legal-summary">
        <span className="marketing-icon">
          <FileText size={24} />
        </span>
        <div>
          <h2>At a glance</h2>
          <p>{summary}</p>
        </div>
      </div>
      <div className="legal-layout">
        <aside className="legal-sidebar">
          <nav aria-label={`${title} sections`}>
            <h2>On this page</h2>
            {sections.map(([id, heading], index) => (
              <a key={id} href={`#${id}`}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                {heading}
              </a>
            ))}
          </nav>
          <Link to={relatedPath} className="marketing-text-link">
            {relatedLabel} <ArrowUpRight size={16} />
          </Link>
        </aside>
        <div className="legal-content">
          {sections.map(([id, heading, text], index) => (
            <section key={id} id={id}>
              <span className="legal-number">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h2>{heading}</h2>
              {text.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </section>
          ))}
          <div className="legal-contact">
            <h2>Have a question?</h2>
            <p>Contact us about this policy or your account.</p>
            <Link className="marketing-text-link" to="/contact">
              Get in touch <ArrowUpRight size={17} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
