import { createElement } from "react";
import { Link } from "react-router-dom";
import { Code2, Heart, Compass, ArrowUpRight, ArrowRight } from "lucide-react";
export default function LandingCareers() {
  return (
    <div className="marketing-width marketing-info-page">
      <div className="info-heading">
        <span className="marketing-eyebrow">BUILD SOMETHING THAT CONNECTS</span>
        <h1>
          Good tools start
          <br />
          with curious people.
        </h1>
        <p>
          We care about making developers’ everyday work simpler. If you enjoy
          thoughtful engineering and useful products, we’d like to hear from
          you.
        </p>
      </div>
      <div className="careers-banner">
        <div>
          <span className="marketing-eyebrow">OUR PURPOSE</span>
          <h2>Make the next connection easier.</h2>
          <p>
            Dev Push Notification brings notification delivery, API keys,
            credits, and usage insights into one workflow. We’re interested in
            people who can help make that experience clearer and more useful.
          </p>
        </div>
        <div className="careers-art" aria-hidden="true">
          <Code2 size={76} />
          <span>BUILD · LEARN · CONNECT</span>
        </div>
      </div>
      <section className="marketing-section">
        <div className="section-heading">
          <span className="marketing-eyebrow">WHAT MATTERS TO US</span>
          <h2>The way we build matters.</h2>
        </div>
        <div className="marketing-grid">
          {[
            [
              Compass,
              "Stay curious",
              "Ask good questions, learn from feedback, and understand the problem before reaching for a solution.",
            ],
            [
              Code2,
              "Keep it useful",
              "Make APIs predictable, interfaces clear, and documentation practical. Small details make a difference.",
            ],
            [
              Heart,
              "Care about the people",
              "Build with empathy for the developers using our tools and the people receiving their messages.",
            ],
          ].map(([Icon, title, text]) => (
            <article className="marketing-card" key={title}>
              <span className="marketing-icon">
                {createElement(Icon, {
                  size: 23,
                })}
              </span>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>
      <section className="career-interest">
        <div>
          <span className="marketing-eyebrow">START A CONVERSATION</span>
          <h2>Where could you make an impact?</h2>
          <p>
            These are areas of interest, rather than confirmed vacancies.
            Contact us to ask about current opportunities.
          </p>
        </div>
        <div className="career-areas">
          {[
            [
              "Product & frontend",
              "Thoughtful React interfaces and a smoother developer dashboard.",
            ],
            [
              "Backend & infrastructure",
              "Practical APIs, notification workflows, and reliable systems.",
            ],
            [
              "Developer experience",
              "Clear documentation, useful examples, and better onboarding.",
            ],
          ].map(([title, text]) => (
            <article key={title}>
              <div>
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
              <Code2 size={22} />
            </article>
          ))}
        </div>
      </section>
      <section className="marketing-cta">
        <span className="marketing-eyebrow">INTRODUCE YOURSELF</span>
        <h2>Show us what you love building.</h2>
        <p>
          Share your experience, a project or portfolio, and the kind of work
          you’re interested in.
        </p>
        <a
          className="landing-page-btn landing-page-btn-primary"
          href="mailto:support@dev-push-notification.com?subject=Career%20interest%20at%20Dev%20Push"
        >
          Express your interest <ArrowUpRight size={18} />
        </a>
        <Link to="/contact" className="marketing-text-link">
          Other questions? Contact us <ArrowRight size={17} />
        </Link>
      </section>
    </div>
  );
}
