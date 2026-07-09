import { useState, useEffect } from "react";
import {
  about,
  aiFirst,
  education,
  experience,
  frontendUnited,
  profile,
  showCareerSection,
  tools,
  whatIDo,
  workPlaceholder,
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
          <a href="#" className="logo" onClick={closeMenu} aria-label="Amy Ash home">
            a
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

            <div className="hero-copy">
              <h2 className="hero-copy-lead">{about.headline}</h2>
              <p className="hero-copy-sub">{about.headlineSub}</p>
              {about.heroParagraphs.map((paragraph) => (
                <p key={paragraph.slice(0, 40)}>{paragraph}</p>
              ))}
            </div>
          </div>
        </section>

        <ExperienceTicker theme="dark" />

        {/* Inflection + stats */}
        <section id="about" className="intro">
          <div className="intro-grid">
            <div className="intro-copy">
              <p className="eyebrow"><span className="ai-chapter-num">02</span>{about.eyebrow}</p>
              <div className="intro-prose">
                {about.paragraphs.map((paragraph) => (
                  <p key={paragraph.slice(0, 40)}>{paragraph}</p>
                ))}
              </div>
            </div>

            <div className="intro-visual">
              <div className="intro-photo" role="img" aria-label="Designer at work" />
            </div>
          </div>
        </section>

        <section
          id="ai-first"
          className="ai-chapter"
          aria-labelledby="ai-chapter-title"
        >
          <div className="ai-chapter-inner">
            <div className="ai-chapter-primary">
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
                      <h3
                        className={`ai-card-title ${
                          item.id === "cursor" ? "ai-card-title--with-logo" : ""
                        }`}
                      >
                        {item.id === "cursor" && (
                          <img
                            src="/logos/cursor.svg"
                            alt=""
                            aria-hidden="true"
                            className="ai-card-title-logo"
                          />
                        )}
                        <span>{item.title}</span>
                      </h3>
                      {item.description && (
                        <p className="ai-card-desc">
                          {item.id === "cursor" &&
                          item.description.includes("Experience Design AI Learning Labs")
                            ? item.description
                                .split("Experience Design AI Learning Labs")
                                .map((part, index, arr) => (
                                  <span key={`${item.id}-desc-${index}`}>
                                    {part}
                                    {index < arr.length - 1 && (
                                      <strong>Experience Design AI Learning Labs</strong>
                                    )}
                                  </span>
                                ))
                            : item.description}
                        </p>
                      )}
                      {item.links?.map((link) => (
                        <a
                          key={link.href}
                          className="ai-card-link"
                          href={link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {link.cta} →
                        </a>
                      ))}
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

            <div className="ai-chapter-prose">
              {aiFirst.paragraphs.map((paragraph) => (
                <p key={paragraph.slice(0, 40)}>{paragraph}</p>
              ))}
            </div>
          </div>
        </section>

        <section
          id="what-i-do"
          className="what-i-do"
          aria-labelledby="what-i-do-title"
        >
          <div className="what-i-do-inner">
            <p className="eyebrow">
              <span className="ai-chapter-num">04</span>
              Capabilities
            </p>
            <h2 id="what-i-do-title" className="what-i-do-headline">
              {whatIDo.title}
            </h2>
            <div className="skills-what">
              <ul>
                {whatIDo.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
            <div className="what-i-do-tools">
              <h3 className="credentials-tools-title">{tools.title}</h3>
              <p className="credentials-tools-list">{tools.items.join(" • ")}</p>
            </div>
          </div>
        </section>

        {/* Selected work — placeholder while case studies are in progress */}
        <section id="work" className="work">
          <p className="eyebrow"><span className="ai-chapter-num">05</span>Selected Projects</p>
          <h2 className="work-headline">
            Places I&apos;ve helped shape products, platforms, and public experiences.
          </h2>

          <div className="work-placeholder">
            <ul className="work-placeholder-logos" aria-label="Selected clients">
              {workPlaceholder.logos.map((client) => (
                <li key={client.name}>
                  <img
                    src={client.logo}
                    alt={client.name}
                    className="work-placeholder-logo"
                    style={{ "--logo-scale": client.scale ?? 1 }}
                    loading="lazy"
                  />
                </li>
              ))}
            </ul>
            <p className="work-placeholder-note">{workPlaceholder.note}</p>
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
              <p className="fu-spotlight-eyebrow"><span className="ai-chapter-num">06</span>{frontendUnited.tagline}</p>
              {frontendUnited.heroImage && (
                <img
                  src={frontendUnited.heroImage.src}
                  alt={frontendUnited.heroImage.alt}
                  className="fu-spotlight-hero"
                  loading="lazy"
                />
              )}
              <h2 id="fu-spotlight-title" className="fu-spotlight-title">
                <span className="fu-spotlight-title-line">{frontendUnited.titleSub}</span>
                <span>{frontendUnited.title}</span>
              </h2>
              <div className="fu-spotlight-text-grid">
                {frontendUnited.paragraphs?.map((paragraph) => (
                  <p key={paragraph.slice(0, 48)} className="fu-spotlight-desc">
                    {paragraph}
                  </p>
                ))}
              </div>
              <a
                className="fu-spotlight-link"
                href={frontendUnited.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                Read more →
              </a>
            </div>
            <div className="fu-spotlight-media">
              <div className="fu-spotlight-gallery-grid">
                {[frontendUnited.mainImage, ...(frontendUnited.gallery ?? [])].map(
                  (image) => (
                    <img
                      key={image.src}
                      src={image.src}
                      alt={image.alt}
                      className="fu-spotlight-photo fu-spotlight-photo--thumb"
                      loading="lazy"
                    />
                  )
                )}
              </div>
            </div>
          </div>
        </section>

        {showCareerSection && (
          <section id="career" className="timeline-section">
            <p className="eyebrow">
              <span className="ai-chapter-num">07</span>Career
            </p>
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
        )}

        <section
          id="education"
          className="credentials"
          aria-labelledby="credentials-title"
        >
          <div className="credentials-col">
            <p className="eyebrow">
              <span className="ai-chapter-num">
                {showCareerSection ? "08" : "07"}
              </span>
              Education
            </p>
            <h2 id="credentials-title" className="visually-hidden">
              Education
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
        </section>
      </main>

      {/* Black footer */}
      <footer id="contact" className="site-footer">
        <div className="footer-cta">
          <h2>Let's Build Something Better</h2>
          <p>
            I'm always interested in ambitious teams exploring the intersection
            of product design, AI and emerging technology.
          </p>
          <p>
            Whether you're looking for a design leader, an AI design specialist
            or someone who enjoys solving difficult problems, I'd love to hear
            from you.
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
