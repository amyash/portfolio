import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  about,
  aiFirst,
  education,
  experience,
  frontendUnited,
  getCaseStudyById,
  profile,
  showCareerSection,
  tools,
  whatIDo,
  selectedProjects,
} from "./data";
import AsciiCursor from "./components/AsciiCursor";
import ExperienceTicker from "./components/ExperienceTicker";
import MediaLightbox from "./components/MediaLightbox";
import { setDocumentMeta } from "./seo";
import "./App.css";

export default function App() {
  const [lightboxIndex, setLightboxIndex] = useState(null);

  useEffect(() => {
    setDocumentMeta({ path: "/" });
  }, []);

  const frontendMedia = [
    frontendUnited.heroImage,
    frontendUnited.mainImage,
    ...(frontendUnited.gallery ?? []),
  ]
    .filter(Boolean)
    .map((image) => ({ ...image, type: "image" }));

  if (frontendUnited.video) {
    frontendMedia.push(frontendUnited.video);
  }

  const frontendVideo = frontendUnited.video ?? null;
  const frontendVideoIndex = frontendVideo
    ? frontendMedia.findIndex(
        (item) => item.type === "video" && item.videoId === frontendVideo.videoId,
      )
    : -1;
  const frontendGalleryItems = frontendMedia
    .map((item, index) => ({ item, index }))
    .filter(({ item, index }) => index > 0 && item.type !== "video");

  useEffect(() => {
    document.body.style.overflow = lightboxIndex != null ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [lightboxIndex]);

  useEffect(() => {
    if (window.location.hash !== "#work") return undefined;
    const target = document.getElementById("work");
    if (!target) return undefined;
    const frame = window.requestAnimationFrame(() => {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    });
    return () => window.cancelAnimationFrame(frame);
  }, []);

  const scrollToWork = (event) => {
    const target = document.getElementById("work");
    if (!target) return;
    event.preventDefault();
    target.scrollIntoView({ behavior: "smooth", block: "start" });
    window.history.replaceState(null, "", "/#work");
  };

  const openLightbox = (index) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);

  return (
    <>
      <header className="site-header">
        <div className="header-inner">
          <Link to="/" className="logo" aria-label="Amy Ash home">
            <img src="/a-logo.png" alt="" width="32" height="32" />
          </Link>
        </div>
        <Link to="/#work" className="header-link" onClick={scrollToWork}>
          <span className="header-link-flip">
            <span className="header-link-face header-link-face--front">
              Case Studies
            </span>
            <span className="header-link-face header-link-face--back" aria-hidden="true">
              Case Studies
            </span>
          </span>
        </Link>
      </header>

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
          id="what-i-do"
          className="what-i-do"
          aria-labelledby="what-i-do-title"
        >
          <div className="what-i-do-inner">
            <p className="eyebrow">
              <span className="ai-chapter-num">03</span>
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

        {/* Selected work */}
        <section id="work" className="work">
          <p className="eyebrow"><span className="ai-chapter-num">05</span>Selected Projects</p>
          <h2 className="work-headline">
            Places I&apos;ve helped shape products, platforms, and public experiences.
          </h2>

          <div className="work-cards">
            {selectedProjects.map((cs, index) => {
              const study = getCaseStudyById(cs.id);
              const hasReport = Boolean(study?.details ?? cs.details);

              return (
                <Link
                  key={cs.id}
                  to={`/work/${cs.id}`}
                  className="work-card"
                  aria-label={`Open ${cs.company} case study`}
                >
                  <div className="work-card-media">
                    {cs.image ? (
                      <img
                        src={cs.image}
                        alt=""
                        className="work-card-image work-card-image--photo"
                        loading="lazy"
                      />
                    ) : (
                      <div
                        className={`work-card-image case-thumb--${(index % 6) + 1}`}
                        aria-hidden="true"
                      />
                    )}
                    <span className="work-card-status">
                      {hasReport
                        ? study?.status || cs.status || "Case study"
                        : "Coming soon"}
                    </span>
                  </div>
                  <div className="work-card-body">
                    <h3 className="work-card-title">{cs.company}</h3>
                    <p className="work-card-desc">{cs.description}</p>
                    <div className="work-card-footer">
                      <span className="work-card-cta">
                        {cs.cta} <span aria-hidden="true">→</span>
                      </span>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </section>

        {/* Frontend United */}
        <section
          id="frontend-united"
          className="fu-spotlight"
          aria-labelledby="fu-spotlight-title"
        >
          <div className="fu-spotlight-inner">
            <div className="fu-spotlight-intro">
              <p className="fu-spotlight-eyebrow"><span className="ai-chapter-num">06</span>{frontendUnited.tagline}</p>
              <h2 id="fu-spotlight-title" className="fu-spotlight-title">
                <span className="fu-spotlight-title-line">{frontendUnited.titleSub}</span>
                <span>{frontendUnited.title}</span>
              </h2>
              {frontendUnited.heroImage && (
                <button
                  type="button"
                  className="fu-spotlight-hero-btn"
                  onClick={() => openLightbox(0)}
                  aria-label={`Open image: ${frontendUnited.heroImage.alt}`}
                >
                  <img
                    src={frontendUnited.heroImage.src}
                    alt={frontendUnited.heroImage.alt}
                    className="fu-spotlight-hero"
                    loading="lazy"
                  />
                </button>
              )}
            </div>

            <div className="fu-spotlight-split">
              <div className="fu-spotlight-copy">
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
              {frontendVideo && frontendVideoIndex >= 0 && (
                <div className="fu-spotlight-media">
                  <button
                    type="button"
                    className="fu-spotlight-media-btn fu-spotlight-media-btn--video fu-spotlight-media-btn--feature"
                    onClick={() => openLightbox(frontendVideoIndex)}
                    aria-label={`Play video: ${frontendVideo.title}`}
                  >
                    <img
                      src={frontendVideo.thumb}
                      alt={frontendVideo.alt}
                      className="fu-spotlight-photo fu-spotlight-photo--video"
                      loading="lazy"
                    />
                    <span className="fu-spotlight-play" aria-hidden="true">
                      ▶
                    </span>
                  </button>
                </div>
              )}
            </div>

            {frontendGalleryItems.length > 0 && (
              <div className="fu-spotlight-gallery">
                <div className="fu-spotlight-gallery-grid">
                  {frontendGalleryItems.map(({ item, index }) => (
                    <button
                      key={item.src}
                      type="button"
                      className="fu-spotlight-media-btn"
                      onClick={() => openLightbox(index)}
                      aria-label={`Open image: ${item.alt}`}
                    >
                      <img
                        src={item.src}
                        alt={item.alt}
                        className="fu-spotlight-photo fu-spotlight-photo--thumb"
                        loading="lazy"
                      />
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        </section>

        <MediaLightbox
          items={frontendMedia}
          index={lightboxIndex}
          onClose={closeLightbox}
          onNavigate={setLightboxIndex}
        />

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
        </div>

        <div className="footer-mega">
          <p className="footer-mega-text">Amy Ash</p>
          <p className="footer-mega-year">2026</p>
        </div>

        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} Amy Ash. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
}
