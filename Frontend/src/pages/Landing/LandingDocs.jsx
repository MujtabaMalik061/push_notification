import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { BookOpen, ArrowUpRight, Search, Copy, Check } from "lucide-react";
import sections from "./data/npmDocs.json";
import "../../assets/style/LandingDocs.css";
function InlineText({ text }) {
  return text.split(/(`[^`]+`|https:\/\/[^\s]+)/g).map((part, index) => {
    if (part.startsWith("`"))
      return <code key={index}>{part.slice(1, -1)}</code>;
    if (part.startsWith("https://"))
      return (
        <a key={index} href={part} target="_blank" rel="noopener noreferrer">
          {part} <ArrowUpRight size={13} />
        </a>
      );
    return part;
  });
}
function CodeExample({ text, language }) {
  const [copied, setCopied] = useState(false);
  const [error, setError] = useState(false);
  useEffect(() => {
    if (!copied) return;
    const timer = setTimeout(() => setCopied(false), 2000);
    return () => clearTimeout(timer);
  }, [copied]);
  async function copy() {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setError(false);
    } catch {
      setError(true);
    }
  }
  return (
    <div className="sdk-code">
      <div className="sdk-code-header">
        <span>{language || "example"}</span>
        <button type="button" onClick={copy} aria-label="Copy code example">
          {copied ? <Check size={15} /> : <Copy size={15} />}
          {copied ? "Copied" : "Copy"}
        </button>
      </div>
      <pre>
        <code>{text}</code>
      </pre>
      {error && (
        <p role="status">
          Copy unavailable. Select and copy the code manually.
        </p>
      )}
    </div>
  );
}
function DocBlock({ block }) {
  switch (block.type) {
    case "code":
      return <CodeExample text={block.text} language={block.language} />;
    case "heading":
      return <h3>{block.text}</h3>;
    case "note":
      return (
        <div className="sdk-note">
          <InlineText text={block.text} />
        </div>
      );
    case "list":
      return (
        <ul className="sdk-list">
          {block.items.map((item) => (
            <li key={item}>
              <InlineText text={item} />
            </li>
          ))}
        </ul>
      );
    case "table":
      return (
        <div className="sdk-table-scroll">
          <table>
            <caption className="sdk-visually-hidden">
              SDK reference parameters and methods
            </caption>
            <thead>
              <tr>
                {block.rows[0].map((cell) => (
                  <th scope="col" key={cell}>
                    {cell}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {block.rows.slice(1).map((row, index) => (
                <tr key={index}>
                  {row.map((cell, cellIndex) => (
                    <td key={cellIndex}>
                      <InlineText
                        text={cell.replace("✅", "Yes").replace("❌", "No")}
                      />
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    default:
      return (
        <p>
          <InlineText text={block.text} />
        </p>
      );
  }
}
export default function LandingDocs() {
  const [query, setQuery] = useState("");
  const [active, setActive] = useState(sections[0].id);
  const filteredSections = sections.filter((section) =>
    `${section.title} ${JSON.stringify(section.blocks)}`
      .toLowerCase()
      .includes(query.trim().toLowerCase()),
  );
  useEffect(() => {
    function updateActive() {
      let current = sections[0].id;
      for (const section of sections) {
        const element = document.getElementById(section.id);
        if (element && element.getBoundingClientRect().top <= 160)
          current = section.id;
      }
      setActive(current);
    }
    window.addEventListener("scroll", updateActive, {
      passive: true,
    });
    updateActive();
    return () => window.removeEventListener("scroll", updateActive);
  }, []);
  return (
    <div className="sdk-docs marketing-width">
      <aside className="sdk-sidebar">
        <div className="sdk-sidebar-title">
          <BookOpen size={20} />
          <h2>SDK documentation</h2>
        </div>
        <label className="sdk-search">
          <Search size={17} />
          <span className="sdk-visually-hidden">
            Search documentation sections
          </span>
          <input
            type="search"
            placeholder="Find a section…"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
          />
        </label>
        <nav aria-label="Documentation sections">
          {filteredSections.map((section) => (
            <a
              key={section.id}
              href={`#${section.id}`}
              aria-current={active === section.id ? "location" : undefined}
              className={active === section.id ? "active" : ""}
              onClick={() => setActive(section.id)}
            >
              {section.title}
            </a>
          ))}
        </nav>
        {filteredSections.length === 0 && (
          <p className="sdk-no-results" role="status">
            No matching sections. Try “email” or “token”.
          </p>
        )}
        <Link className="marketing-text-link" to="/contact">
          Need a hand? Contact us <ArrowUpRight size={15} />
        </Link>
      </aside>
      <article className="sdk-content">
        <header className="sdk-docs-heading">
          <span className="marketing-eyebrow">THE DEV PUSH JAVASCRIPT SDK</span>
          <h1>From install to inbox.</h1>
          <p>
            Add push notifications and email sending to your React web
            application with <code>dev-push-notification</code>.
          </p>
          <div className="marketing-actions">
            <a
              className="landing-page-btn landing-page-btn-primary"
              href="https://www.npmjs.com/package/dev-push-notification"
              target="_blank"
              rel="noopener noreferrer"
            >
              View on npm <ArrowUpRight size={16} />
            </a>
            <Link
              className="landing-page-btn landing-page-btn-outline"
              to="/api-section"
            >
              Get your API key
            </Link>
          </div>
        </header>
        <div className="sdk-note">
          <strong>Package compatibility</strong>
          <p>
            This guide follows the supplied npm documentation. This project
            currently installs version 1.0.4, which does not export{" "}
            <code>sendMail</code> or forward the notification <code>link</code>{" "}
            parameter. Email and click-link examples require a package version
            that supports those features. Response examples are illustrative and
            may differ by API version.
          </p>
        </div>
        {sections.map((section) => (
          <section className="sdk-section" id={section.id} key={section.id}>
            <h2>{section.title}</h2>
            {section.blocks.map((block, index) => (
              <DocBlock key={index} block={block} />
            ))}
          </section>
        ))}
        <div className="sdk-note">
          <strong>Before you run the React example</strong>
          <p>
            Use a browser that supports push messaging over HTTPS or localhost.
            Request notification permission from a user action. Check that token
            generation returns a successful response with a token before
            sending; the installed SDK can return null on failure. Never publish
            real credentials in example code.
          </p>
        </div>
      </article>
    </div>
  );
}
