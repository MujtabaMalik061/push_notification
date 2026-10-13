import { createElement } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Bell,
  Code2,
  KeyRound,
  Gift,
  BarChart3,
  Wallet,
  Check,
  Terminal,
  Layers,
} from "lucide-react";
const features = [
  [
    Code2,
    "A familiar developer workflow",
    "Connect your Firebase project, install the JavaScript SDK, and send notifications from your application.",
  ],
  [
    KeyRound,
    "Your keys, in one place",
    "Create and manage API keys from the dashboard. Revoke access when a key is no longer needed.",
  ],
  [
    BarChart3,
    "See what happens next",
    "Review API activity and notification results to understand usage and investigate failed requests.",
  ],
  [
    Wallet,
    "Credits you can track",
    "Check your balance and usage in the dashboard, then purchase credits when you need more.",
  ],
  [
    Gift,
    "Daily rewards",
    "Claim available daily rewards from your account to keep experimenting with your integration.",
  ],
  [
    Layers,
    "Built for everyday updates",
    "Bring order updates, reminders, and product announcements into the same notification workflow.",
  ],
];
export default function LandingPage() {
  return (
    <>
      <section className="marketing-hero marketing-width">
        <div className="hero-copy">
          <span className="marketing-eyebrow">
            <span className="status-dot" /> A direct connection to your users
          </span>
          <h1>
            Small message.
            <br />
            <span>Big connection.</span>
          </h1>
          <p>
            Keep your users in the loop with a simple push notification API.
            From the first integration to everyday updates, Dev Push helps you
            make every message count.
          </p>
          <div className="marketing-actions">
            <Link
              className="landing-page-btn landing-page-btn-primary"
              to="/signup"
            >
              Start building <ArrowRight size={18} />
            </Link>
            <Link
              className="landing-page-btn landing-page-btn-outline"
              to="/landing-docs"
            >
              Explore the docs <Code2 size={18} />
            </Link>
          </div>
          <div className="hero-checks">
            <span>
              <Check size={16} /> JavaScript SDK
            </span>
            <span>
              <Check size={16} /> Credit-based usage
            </span>
          </div>
        </div>
        <div
          className="hero-visual"
          aria-label="Illustrative notification integration"
        >
          <div className="visual-label">
            <Terminal size={16} /> YOUR NEXT GREAT UPDATE
          </div>
          <div className="notification-preview">
            <span className="preview-bell">
              <Bell size={22} />
            </span>
            <div>
              <div className="preview-meta">
                YOUR APP <span>now · example</span>
              </div>
              <h2>Your order is on its way 📦</h2>
              <p>A timely update. Right where it matters.</p>
            </div>
          </div>
          <div className="hero-code">
            <div className="code-window-bar">
              <span />
              <span />
              <span />
              <b>notification.js</b>
            </div>
            <pre>
              <code>{`await sendNotification({
  apiKey: "YOUR_API_KEY",
  title: "Your order is on its way",
  body: "Thanks for shopping with us!",
  fcmTokens: [deviceToken],
});`}</code>
            </pre>
            <div className="code-footnote">
              <span className="status-dot" /> One SDK. Your notification
              workflow.
            </div>
          </div>
          <div className="visual-caption">
            <Bell size={16} /> The right message, at the right moment.
          </div>
        </div>
      </section>
      <div className="marketing-strip">
        <div className="marketing-width">
          <span>Made for your next</span>
          <strong>Product update</strong>
          <strong>Order notification</strong>
          <strong>Helpful reminder</strong>
          <strong>New connection</strong>
        </div>
      </div>
      <section className="marketing-section marketing-width">
        <div className="section-heading">
          <span className="marketing-eyebrow">
            LESS FRICTION. MORE BUILDING.
          </span>
          <h2>
            Everything you need.
            <br />
            Room to make it yours.
          </h2>
          <p>
            A focused toolkit for adding notifications to your app and managing
            them as you grow.
          </p>
        </div>
        <div className="marketing-grid">
          {features.map(([Icon, title, text]) => (
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
      <section className="workflow-section">
        <div className="marketing-width">
          <div className="section-heading">
            <span className="marketing-eyebrow">
              FROM IDEA TO FIRST MESSAGE
            </span>
            <h2>Three steps. One connection.</h2>
            <p>Your next notification starts here.</p>
          </div>
          <div className="workflow-grid">
            {[
              [
                "01",
                "Set up your account",
                "Create an account, connect your Firebase configuration, and generate an API key.",
              ],
              [
                "02",
                "Connect your application",
                "Follow the SDK guide to configure messaging and request notification permission.",
              ],
              [
                "03",
                "Send and keep track",
                "Send to opted-in device tokens, then check your results, activity, and credit balance.",
              ],
            ].map(([n, title, text]) => (
              <article key={n}>
                <span className="step-number">{n}</span>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
          <Link className="marketing-text-link" to="/landing-docs">
            Follow the integration guide <ArrowRight size={17} />
          </Link>
        </div>
      </section>
      <section className="marketing-section marketing-width">
        <div className="faq-layout">
          <div className="section-heading">
            <span className="marketing-eyebrow">GOOD QUESTIONS</span>
            <h2>
              A little clarity
              <br />
              before you start.
            </h2>
            <Link to="/contact" className="marketing-text-link">
              Talk to us <ArrowRight size={17} />
            </Link>
          </div>
          <div className="marketing-faq">
            {[
              [
                "What do I need to get started?",
                "A Dev Push account, a Firebase project, and an application that supports push notifications. The documentation walks through configuration, the service worker, and device tokens.",
              ],
              [
                "How do credits work?",
                "Basic accounts use credits for supported API actions, including device token generation and notification sending. Check your dashboard for your balance, rewards, and available purchase options.",
              ],
              [
                "Will every notification reach a device?",
                "Delivery depends on notification permission, valid device tokens, network connectivity, and the messaging provider. Check the API response for success and failure results.",
              ],
              [
                "Can I try it before integrating?",
                "Yes. Explore the demo to see the notification workflow, then use the documentation to connect your own application.",
              ],
            ].map(([q, a]) => (
              <details key={q}>
                <summary>{q}</summary>
                <p>{a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
      <section className="marketing-cta marketing-width">
        <span className="marketing-eyebrow">MAKE YOUR NEXT MESSAGE MATTER</span>
        <h2>
          Your users have something
          <br />
          to look forward to.
        </h2>
        <p>Build a better connection, one notification at a time.</p>
        <Link
          to="/signup"
          className="landing-page-btn landing-page-btn-primary"
        >
          Get started <ArrowRight size={18} />
        </Link>
      </section>
    </>
  );
}
