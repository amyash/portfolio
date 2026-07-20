import { useRef } from "react";
import { Link } from "react-router-dom";
import "./CaseStudyContent.css";

const CHAPTERS = [
  { key: "overview", title: "Overview" },
  { key: "challenge", title: "The challenge" },
  { key: "discovery", title: "Discovery" },
  { key: "devices", title: "Designing for radically different devices" },
  { key: "research", title: "Research-driven design" },
  { key: "myRole", title: "My role" },
  { key: "understandingUsers", title: "Understanding users" },
  { key: "solvingDiscovery", title: "Solving discovery" },
  { key: "designSystem", title: "Designing a scalable design system" },
  { key: "iterativeTesting", title: "Iterative user testing" },
  { key: "interactionDesign", title: "Interaction design" },
  { key: "balancingNeeds", title: "Balancing business and user needs" },
  { key: "designingBad", title: 'Designing "bad" on purpose' },
  { key: "buildingInBrowser", title: "Building in the browser" },
  { key: "mobileFirst", title: "Mobile-first... despite looking twenty years old" },
  { key: "context", title: "Context" },
  { key: "designBuild", title: "Design & build" },
  { key: "easterEggs", title: "Easter eggs" },
  { key: "result", title: "Result" },
  { key: "outcome", title: "Outcome" },
  { key: "reflection", title: "Reflection" },
];

const LINK_MARKDOWN = /\[([^\]]+)\]\(([^)]+)\)/g;

function renderLinkedText(text) {
  const parts = [];
  let lastIndex = 0;

  for (const match of text.matchAll(LINK_MARKDOWN)) {
    const [full, label, href] = match;
    const index = match.index ?? 0;
    if (index > lastIndex) {
      parts.push(text.slice(lastIndex, index));
    }
    parts.push(
      <a key={`${href}-${index}`} href={href} target="_blank" rel="noopener noreferrer">
        {label}
      </a>,
    );
    lastIndex = index + full.length;
  }

  if (lastIndex < text.length) {
    parts.push(text.slice(lastIndex));
  }

  return parts.length > 0 ? parts : text;
}

function CaseStudyVideo({ src, title, posterTime = 0 }) {
  const videoRef = useRef(null);
  const hasStartedRef = useRef(false);

  return (
    <video
      ref={videoRef}
      src={posterTime > 0 ? `${src}#t=${posterTime}` : src}
      controls
      playsInline
      preload="metadata"
      aria-label={title}
      onLoadedData={(event) => {
        if (posterTime > 0 && !hasStartedRef.current) {
          event.currentTarget.currentTime = posterTime;
        }
      }}
      onPlay={(event) => {
        if (hasStartedRef.current || posterTime <= 0) return;
        hasStartedRef.current = true;
        const video = event.currentTarget;
        if (video.currentTime >= posterTime - 0.25) {
          video.currentTime = 0;
        }
      }}
    />
  );
}

function ComingSoonBody({ project }) {
  return (
    <div className="csm-coming-soon">
      <p className="csm-coming-soon-eyebrow">Coming soon</p>
      <h1 id="case-study-title" className="csm-coming-soon-title">
        {project.company}
      </h1>
      {project.description && (
        <p className="csm-coming-soon-desc">{project.description}</p>
      )}
      <p className="csm-coming-soon-copy">
        This case study is still being written. Leave your email and I&apos;ll
        let you know when it&apos;s live.
      </p>
      <form
        className="csm-notify-form"
        onSubmit={(event) => {
          event.preventDefault();
          window.open("https://www.linkedin.com/in/amyashldn/", "_blank");
        }}
      >
        <input
          type="email"
          placeholder="your@email.com"
          aria-label="Email address"
          required
        />
        <button type="submit">Get notified</button>
      </form>
      <Link to="/#work" className="csm-text-close">
        Back to work
      </Link>
    </div>
  );
}

function ReportBody({ project }) {
  const details = project.details;
  const meta = [
    { label: "Role", value: details.role },
    { label: "Client", value: details.client },
    { label: "Location", value: details.location },
    { label: "Duration", value: details.duration },
    { label: "Launch", value: details.launchDate },
  ].filter((item) => item.value);

  const awardLogos = (details.awards ?? []).filter((award) => award.image);
  const textAwards = (details.awards ?? []).filter((award) => !award.image);

  const chapters = CHAPTERS.filter((chapter) => details[chapter.key]).map(
    (chapter, index) => ({
      ...chapter,
      body: details[chapter.key],
      num: String(index + 1).padStart(2, "0"),
    }),
  );

  const heroImages =
    details.heroImages ?? (details.heroImage ? [details.heroImage] : []);

  return (
    <>
      <header className="csm-hero">
        <div className="csm-hero-topbar">
          <span className="csm-hero-mark">Case study</span>
        </div>
        <p className="csm-hero-status">{project.status || "Featured"}</p>
        <h1 id="case-study-title" className="csm-hero-title">
          {project.company}
        </h1>
        {(project.question || project.tagline) && (
          <p className="csm-hero-tagline">
            {project.question || project.tagline}
          </p>
        )}
        {details.services && (
          <p className="csm-hero-lead">
            {details.services}
            {details.servicesLink && (
              <a
                href={details.servicesLink.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                {details.servicesLink.label}
              </a>
            )}
          </p>
        )}
        {heroImages.map((image) => (
          <figure key={image.src} className="csm-hero-figure">
            <img src={image.src} alt={image.alt} loading="lazy" />
            {image.caption && <figcaption>{image.caption}</figcaption>}
          </figure>
        ))}
        {details.heroImagesCredit && (
          <p className="csm-hero-credit">
            Photos:{" "}
            <a
              href={details.heroImagesCredit.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              {details.heroImagesCredit.label}
            </a>
          </p>
        )}
      </header>

      {(meta.length > 0 || awardLogos.length > 0) && (
        <section className="csm-meta" aria-label="Project details">
          <div className="csm-meta-grid">
            {meta.map((item) => (
              <article key={item.label} className="csm-meta-card">
                <p className="csm-meta-label">{item.label}</p>
                <p className="csm-meta-value">{item.value}</p>
              </article>
            ))}
            {awardLogos.map((award) => {
              const card = (
                <article className="csm-meta-card csm-meta-card--award">
                  <img src={award.image} alt={award.label} loading="lazy" />
                </article>
              );

              return award.href ? (
                <a
                  key={award.label}
                  href={award.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="csm-meta-card-link"
                >
                  {card}
                </a>
              ) : (
                <div key={award.label}>{card}</div>
              );
            })}
          </div>
        </section>
      )}

      {textAwards.length > 0 && (
        <section className="csm-awards" aria-label="Awards">
          <h2 className="csm-section-label">Awards</h2>
          <ul className="csm-awards-list">
            {textAwards.map((award) => (
              <li key={award.label}>
                {award.href ? (
                  <a
                    href={award.href}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {award.label}
                  </a>
                ) : (
                  <span>{award.label}</span>
                )}
              </li>
            ))}
          </ul>
        </section>
      )}

      <div className="csm-body">
        {details.warning && <p className="csm-warning">{details.warning}</p>}

        {details.heroVideo && (
          <figure className="csm-hero-figure csm-hero-figure--video csm-body-video">
            <CaseStudyVideo
              src={details.heroVideo.src}
              title={details.heroVideo.title}
              posterTime={details.heroVideo.posterTime ?? 0}
            />
          </figure>
        )}

        {details.heroLink && (
          <p className="csm-body-link">
            <a
              href={details.heroLink.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              {details.heroLink.label}
            </a>
          </p>
        )}

        {chapters.map((chapter) => (
          <section key={chapter.key} className="csm-chapter">
            {chapter.key === "overview" &&
              details.overviewImages?.length > 0 && (
                <div className="csm-chapter-figures csm-chapter-figures--full">
                  {details.overviewImages.map((image) => (
                    <figure
                      key={image.src}
                      className="csm-chapter-figure csm-chapter-figure--wide"
                    >
                      <img src={image.src} alt={image.alt} loading="lazy" />
                      {image.caption && (
                        <figcaption>{image.caption}</figcaption>
                      )}
                    </figure>
                  ))}
                </div>
              )}
            {chapter.key === "designingBad" &&
              details.designingBadImages?.length > 0 && (
                <div className="csm-chapter-figures csm-chapter-figures--before">
                  {details.designingBadImages.map((image) => (
                    <figure
                      key={image.src}
                      className="csm-chapter-figure csm-chapter-figure--wide"
                    >
                      <img src={image.src} alt={image.alt} loading="lazy" />
                      {image.caption && (
                        <figcaption>{image.caption}</figcaption>
                      )}
                    </figure>
                  ))}
                </div>
              )}
            <h2>
              <span className="csm-chapter-num">{chapter.num}</span>
              {chapter.title}
            </h2>
            {chapter.body.split("\n\n").map((paragraph) => (
              <p key={paragraph.slice(0, 48)}>{renderLinkedText(paragraph)}</p>
            ))}
            {chapter.key === "buildingInBrowser" &&
              details.buildingInBrowserImages?.length > 0 && (
                <div className="csm-chapter-figures">
                  {details.buildingInBrowserImages.map((image) => (
                    <figure
                      key={image.src}
                      className="csm-chapter-figure csm-chapter-figure--sm"
                    >
                      <img src={image.src} alt={image.alt} loading="lazy" />
                      {image.caption && (
                        <figcaption>{image.caption}</figcaption>
                      )}
                    </figure>
                  ))}
                </div>
              )}
            {chapter.key === "challenge" && details.challengeQuote && (
              <blockquote className="csm-pullquote">
                {details.challengeQuote}
              </blockquote>
            )}
            {chapter.key === "challenge" &&
              details.challengeImages?.length > 0 && (
                <div className="csm-chapter-figures">
                  {details.challengeImages.map((image) => (
                    <figure
                      key={image.src}
                      className="csm-chapter-figure csm-chapter-figure--wide"
                    >
                      <img src={image.src} alt={image.alt} loading="lazy" />
                      {image.caption && (
                        <figcaption>{image.caption}</figcaption>
                      )}
                    </figure>
                  ))}
                </div>
              )}
            {chapter.key === "discovery" &&
              details.discoveryImages?.items?.length > 0 && (
                <div className="csm-chapter-figures">
                  {details.discoveryImages.items.map((image) => (
                    <figure
                      key={image.src}
                      className="csm-chapter-figure csm-chapter-figure--wide"
                    >
                      <img src={image.src} alt={image.alt} loading="lazy" />
                      {image.caption && (
                        <figcaption>{image.caption}</figcaption>
                      )}
                    </figure>
                  ))}
                  {details.discoveryImages.credit && (
                    <p className="csm-chapter-credit">
                      {details.discoveryImages.credit}
                    </p>
                  )}
                </div>
              )}
          </section>
        ))}

        {details.videos?.length > 0 && (
          <section className="csm-media">
            <h2 className="csm-section-label">Campaign films</h2>
            <div className="csm-videos">
              {details.videos.map((video) => (
                <figure key={video.src} className="csm-video">
                  <video
                    src={video.src}
                    controls
                    playsInline
                    preload="metadata"
                  />
                  <figcaption>{video.title}</figcaption>
                </figure>
              ))}
            </div>
          </section>
        )}

        {details.youtubeEmbeds?.length > 0 && (
          <div className="csm-youtube-list">
            {details.youtubeEmbeds.map((embed) => (
              <figure key={embed.src} className="csm-youtube">
                <iframe
                  src={embed.src}
                  title={embed.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  loading="lazy"
                />
              </figure>
            ))}
          </div>
        )}

        {details.references?.length > 0 && (
          <section className="csm-extra">
            <h2 className="csm-section-label">References</h2>
            <ul className="csm-link-list">
              {details.references.map((ref) => (
                <li key={ref.href}>
                  <a href={ref.href} target="_blank" rel="noopener noreferrer">
                    {ref.label}
                  </a>
                </li>
              ))}
            </ul>
          </section>
        )}

        {details.showcase?.length > 0 && (
          <section className="csm-showcase" aria-label="Working images">
            <h2 className="csm-section-label">Images</h2>
            <div className="csm-showcase-grid">
              {details.showcase.map((image) => (
                <figure key={image.src} className="csm-showcase-item">
                  <img src={image.src} alt={image.alt} loading="lazy" />
                  {image.caption && <figcaption>{image.caption}</figcaption>}
                </figure>
              ))}
            </div>
          </section>
        )}
      </div>
    </>
  );
}

export default function CaseStudyContent({ project }) {
  if (!project) return null;

  return project.details ? (
    <ReportBody project={project} />
  ) : (
    <ComingSoonBody project={project} />
  );
}
