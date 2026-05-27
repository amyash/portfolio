import { useState, useEffect } from "react";
import {
  about,
  aiFirst,
  caseStudies,
  education,
  experience,
  frontendUnited,
  highlightStats,
  footerStats,
  profile,
  skills,
} from "./data";
import AsciiCursor from "./components/AsciiCursor";
import ExperienceTicker from "./components/ExperienceTicker";
import "./App.css";

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <header className={`site-header ${menuOpen ? "menu-open" : ""}`}>
        <div className="header-inner">
          <a href="#" className="logo" onClick={closeMenu}>
            AA
          </a>
          <nav className="nav-desktop" aria-label="Primary">
            <a href="#about">About</a>
            <a href="#work">Work</a>
            <a href="#contact">Contact</a>
          </nav>
          <a
            className="btn-nav"
            href="https://www.linkedin.com/in/amyashldn/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          <button
            type="button"
            className="menu-toggle"
            aria-expanded={menuOpen}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            Menu
          </button>
        </div>
      </header>

      <div className={`mobile-menu ${menuOpen ? "is-open" : ""}`}>
        <nav>
          <a href="#about" onClick={closeMenu}>
            About
          </a>
          <a href="#work" onClick={closeMenu}>
            Work
          </a>
          <a href="#contact" onClick={closeMenu}>
            Contact
          </a>
        </nav>
      </div>

      <main>
        {/* Hero */}
        <section className="hero" aria-labelledby="hero-title">
          <AsciiCursor className="hero-ascii" />

          <div className="hero-content">
            <h1 id="hero-title" className="hero-title">
              <span className="hero-title-name">AMY ASH</span>
              <span className="hero-title-line">EXPERIENCE</span>
              <span className="hero-title-line">DESIGNER</span>
            </h1>
            <div className="hero-byline">
              <p>currently at Expedia Group</p>
            </div>
          </div>
        </section>

        <section
          id="ai-first"
          className="ai-chapter"
          aria-labelledby="ai-chapter-title"
        >
          <div className="ai-chapter-inner">
            <div className="ai-chapter-head">
              <span className="ai-chapter-num">{aiFirst.number}</span>
              <h2 id="ai-chapter-title" className="ai-chapter-title">
                <span>{aiFirst.title}</span>
                <span className="ai-chapter-title-line">{aiFirst.titleSub}</span>
              </h2>
            </div>

            <div className="ai-chapter-body">
              <p className="ai-chapter-lead">{aiFirst.lead}</p>

              <div className="ai-chapter-grid">
                {aiFirst.highlights.map((item) => (
                  <article key={item.id} className="ai-card">
                    <p className="ai-card-tag">{item.tag}</p>
                    <h3 className="ai-card-title">{item.title}</h3>
                    <p className="ai-card-desc">{item.description}</p>
                    {item.href && (
                      <a
                        className="ai-card-link"
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {item.cta}
                      </a>
                    )}
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <ExperienceTicker theme="orange" />

        {/* Inflection + stats */}
        <section id="about" className="intro">
          <div className="intro-grid">
            <div className="intro-copy">
              <p className="eyebrow">{about.eyebrow}</p>
              <h2 className="intro-headline">{about.headline}</h2>
              <h3 className="intro-headline-sub">{about.headlineSub}</h3>
            </div>

            <div className="intro-visual">
              <div className="intro-photo" role="img" aria-label="Designer at work" />
              <div className="intro-stats">
                {highlightStats.map((s) => (
                  <div
                    key={s.label}
                    className={`stat-block stat-block--${s.color}`}
                  >
                    <p className="stat-block-value">{s.value}</p>
                    <p className="stat-block-label">{s.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="intro-prose">
            {about.paragraphs.map((paragraph) => (
              <p key={paragraph.slice(0, 40)}>{paragraph}</p>
            ))}
          </div>
        </section>

        {/* Dark quote */}
        <section className="quote-band" aria-label="Testimonial">
          <div className="quote-media" aria-hidden>
            <div className="quote-thumb" />
          </div>
          <blockquote className="quote-content">
            <p>
              Amy&apos;s work is brilliant and she&apos;s an extremely nice and easy
              person to work with — I highly recommend her.
            </p>
            <footer>
              <cite>Tony Satchell</cite>
              <span>Former collaborator</span>
            </footer>
          </blockquote>
        </section>

        {/* Case studies */}
        <section id="work" className="work">
          <p className="eyebrow">Selected work</p>
          <h2 className="work-headline">
            Six projects. One through-line: clarity, care, and craft.
          </h2>

          <div className="case-row">
            {caseStudies.slice(0, 3).map((cs) => (
              <article key={cs.id} className="case-tile">
                <div className="case-thumb" />
                <span className="case-badge">{cs.status}</span>
                <h3>{cs.company}</h3>
                <p className="case-tag">{cs.tagline}</p>
                <p className="case-q">{cs.question}</p>
                <a
                  href={cs.href}
                  {...(cs.external
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                >
                  {cs.external ? "Visit" : "Learn more"} →
                </a>
              </article>
            ))}
          </div>

          <div className="case-featured">
            <div className="case-featured-media" />
            <div className="case-featured-copy">
              <span className="case-badge">Featured</span>
              <h3>BFI, Science Museum &amp; cultural experiences</h3>
              <p>
                Led UX and UI on Mediatheque, BFI Player, and the BFI Samsung TV app;
                co-curated the Oramics exhibition at the Science Museum — spatial
                design and digital touchpoints from arthouse streaming to museum floors.
              </p>
              <a
                href="https://player.bfi.org.uk/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Visit BFI Player →
              </a>
            </div>
          </div>

          <div className="case-row case-row--secondary">
            {caseStudies.slice(3).map((cs) => (
              <article key={cs.id} className="case-tile">
                <div className="case-thumb" />
                <span className="case-badge">{cs.status}</span>
                <h3>{cs.company}</h3>
                <p className="case-tag">{cs.tagline}</p>
                <a
                  href={cs.href}
                  {...(cs.external
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                >
                  Learn more →
                </a>
              </article>
            ))}
          </div>
        </section>

        {/* Frontend United */}
        <section
          id="frontend-united"
          className="fu-spotlight"
          aria-labelledby="fu-spotlight-title"
        >
          <div className="fu-spotlight-inner">
            <div className="fu-spotlight-copy">
              <p className="fu-spotlight-eyebrow">{frontendUnited.tagline}</p>
              <h2 id="fu-spotlight-title" className="fu-spotlight-title">
                MC for <em>{frontendUnited.name}</em>
              </h2>
              <p className="fu-spotlight-role">{frontendUnited.role}</p>
              <p className="fu-spotlight-desc">{frontendUnited.description}</p>
              <a
                className="fu-spotlight-link"
                href={frontendUnited.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                Visit frontendunited.org →
              </a>
            </div>
            <div className="fu-spotlight-badge" aria-hidden>
              <span className="fu-spotlight-badge-label">Annual</span>
              <span className="fu-spotlight-badge-main">EU</span>
              <span className="fu-spotlight-badge-sub">Design &amp; Tech</span>
            </div>
          </div>
        </section>

        {/* Experience */}
        <section className="timeline-section">
          <p className="eyebrow">Career</p>
          <h2 className="timeline-headline">Where I&apos;ve made impact</h2>
          <ol className="timeline">
            {experience.map((item) => (
              <li
                key={`${item.org}-${item.period}`}
                className={item.highlight ? "timeline-item--highlight" : ""}
              >
                <div className="timeline-main">
                  <div>
                    <strong>{item.role}</strong>
                    <span>{item.org}</span>
                  </div>
                  <time>{item.period}</time>
                </div>
                {item.description && (
                  <p className="timeline-desc">{item.description}</p>
                )}
              </li>
            ))}
          </ol>
        </section>

        <section className="credentials" aria-labelledby="credentials-title">
          <div className="credentials-col">
            <p className="eyebrow">Education</p>
            <h2 id="credentials-title" className="credentials-headline">
              Background
            </h2>
            <ul className="edu-list">
              {education.map((item) => (
                <li key={item.org}>
                  <strong className="edu-list-title">{item.title}</strong>
                  {item.major && (
                    <strong className="edu-list-title">{item.major}</strong>
                  )}
                  <span>{item.org}</span>
                  {item.detail && <p>{item.detail}</p>}
                </li>
              ))}
            </ul>
          </div>
          <div className="credentials-col">
            <p className="eyebrow">Skills</p>
            <h2 className="credentials-headline visually-hidden">
              Tools &amp; practice
            </h2>
            <div className="skills-grid">
              {skills.map((group) => (
                <div key={group.label} className="skills-group">
                  <h3>{group.label}</h3>
                  <ul>
                    {group.items.map((skill) => (
                      <li key={skill}>{skill}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Black footer */}
      <footer id="contact" className="site-footer">
        <div className="footer-cta">
          <h2>Get in touch</h2>
          <p>
            Open to conversations about experience design roles, consulting, and
            mentoring.
          </p>
          <form
            className="footer-form"
            onSubmit={(e) => {
              e.preventDefault();
              window.open("https://www.linkedin.com/in/amyashldn/", "_blank");
            }}
          >
            <input
              type="email"
              placeholder="your@email.com"
              aria-label="Email address"
            />
            <button type="submit">Connect</button>
          </form>
          <p className="footer-form-note">
            <a href={`mailto:${profile.email}`}>{profile.email}</a>
            {" · "}
            <a
              href={profile.website}
              target="_blank"
              rel="noopener noreferrer"
            >
              amyash.co.uk
            </a>
            {" · "}
            <a
              href="https://www.linkedin.com/in/amyashldn/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          </p>
        </div>

        <div className="footer-stats">
          {footerStats.map((s) => (
            <div key={s.label} className="footer-stat">
              <span className="footer-stat-value">{s.value}</span>
              <span className="footer-stat-label">{s.label}</span>
            </div>
          ))}
        </div>

        <div className="footer-mega">
          <p className="footer-mega-text">Amy Ash</p>
          <p className="footer-mega-year">2026</p>
        </div>

        <div className="footer-bottom">
          <nav aria-label="Footer">
            <a href="#about">About</a>
            <a href="#work">Work</a>
            <a
              href="https://www.linkedin.com/in/amyashldn/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          </nav>
          <p>© {new Date().getFullYear()} Amy Ash. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
}
