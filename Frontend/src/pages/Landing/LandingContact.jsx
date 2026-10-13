import { useState } from "react";
import { Link } from "react-router-dom";
import { Mail, BookOpen, ArrowUpRight, MessageSquare } from "lucide-react";
export default function LandingContact() {
  const [prepared, setPrepared] = useState(false);
  function handleSubmit(event) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const subject = `${data.get("topic")}: ${data.get("name")}`;
    const body = `Name: ${data.get("name")}\nReply to: ${data.get("email")}\n\n${data.get("message")}`;
    window.location.href = `mailto:support@dev-push-notification.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setPrepared(true);
  }
  return (
    <div className="marketing-width marketing-info-page">
      <div className="info-heading">
        <span className="marketing-eyebrow">LET’S TALK</span>
        <h1>
          A good conversation
          <br />
          starts here.
        </h1>
        <p>
          Need a hand with your integration, have a billing question, or want to
          share an idea? Tell us what you’re working on.
        </p>
      </div>
      <div className="contact-layout">
        <div className="contact-options">
          <article className="marketing-card">
            <span className="marketing-icon">
              <Mail size={23} />
            </span>
            <h2>Talk to support</h2>
            <p>For account, credit, and integration questions.</p>
            <a
              className="marketing-text-link contact-email"
              href="mailto:support@dev-push-notification.com"
            >
              support@dev-push-notification.com <ArrowUpRight size={17} />
            </a>
          </article>
          <article className="marketing-card">
            <span className="marketing-icon">
              <BookOpen size={23} />
            </span>
            <h2>Find your next step</h2>
            <p>
              Explore setup instructions and SDK examples in our documentation.
            </p>
            <Link className="marketing-text-link" to="/landing-docs">
              Visit the docs <ArrowUpRight size={17} />
            </Link>
          </article>
          <p className="contact-note">
            For troubleshooting, include the error message and steps to
            reproduce it. Keep passwords, API keys, and device tokens out of
            your message.
          </p>
        </div>
        <form className="contact-form marketing-card" onSubmit={handleSubmit}>
          <span className="marketing-icon">
            <MessageSquare size={23} />
          </span>
          <h2>What can we help with?</h2>
          <p>This form prepares an email in your email app.</p>
          <div className="form-row">
            <label>
              Your name
              <input
                name="name"
                autoComplete="name"
                placeholder="Alex Morgan"
                required
                maxLength={100}
              />
            </label>
            <label>
              Email address
              <input
                name="email"
                type="email"
                autoComplete="email"
                placeholder="alex@company.com"
                required
                maxLength={254}
              />
            </label>
          </div>
          <label>
            Topic
            <select name="topic">
              <option>Integration support</option>
              <option>Account and billing</option>
              <option>Product feedback</option>
              <option>Partnerships</option>
              <option>Something else</option>
            </select>
          </label>
          <label>
            Your message
            <textarea
              name="message"
              rows={5}
              placeholder="A little context helps us help you…"
              required
              maxLength={4000}
            />
          </label>
          <button
            type="submit"
            className="landing-page-btn landing-page-btn-primary"
          >
            Open email app <ArrowUpRight size={17} />
          </button>
          <p className="form-note">
            By contacting us, you acknowledge our{" "}
            <Link to="/privacy">Privacy Policy</Link>.
          </p>
          {prepared && (
            <p role="status" className="form-status">
              Your email is prepared. Send it from your email app to complete
              your request. If no app opened, use the support email on this
              page.
            </p>
          )}
        </form>
      </div>
    </div>
  );
}
