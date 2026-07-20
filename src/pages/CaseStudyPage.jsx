import { useEffect, useLayoutEffect } from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import CaseStudyContent from "../components/CaseStudyContent";
import { getCaseStudyById, selectedProjects } from "../data";
import { setDocumentMeta, siteMeta } from "../seo";
import "../App.css";

export default function CaseStudyPage() {
  const { id } = useParams();
  const study = getCaseStudyById(id);
  const card = selectedProjects.find((item) => item.id === id);
  const project = study
    ? { ...study, description: card?.description ?? study.description }
    : card;

  useLayoutEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [id]);

  useEffect(() => {
    if (!project) return;
    const title = `${project.company} — Amy Ash`;
    const description =
      project.description ||
      project.tagline ||
      `Case study: ${project.company} by Amy Ash, experience designer.`;
    const imagePath = card?.image;
    setDocumentMeta({
      title,
      description,
      path: `/work/${id}`,
      image: imagePath ? `${siteMeta.url}${imagePath}` : siteMeta.image,
      imageAlt: imagePath
        ? `${project.company} case study`
        : siteMeta.imageAlt,
      type: "article",
    });
  }, [id, study, card]);

  if (!project) {
    return <Navigate to="/" replace />;
  }

  return (
    <div className="case-study-enter" key={id}>
      <header className="site-header">
        <Link to="/#work" className="header-link header-link--left">
          <span className="header-link-flip">
            <span className="header-link-face header-link-face--front">
              ← Back to work
            </span>
            <span
              className="header-link-face header-link-face--back"
              aria-hidden="true"
            >
              ← Back to work
            </span>
          </span>
        </Link>
        <div className="header-inner header-inner--end">
          <Link to="/" className="logo" aria-label="Amy Ash home">
            <img src="/a-logo.png" alt="" width="32" height="32" />
          </Link>
        </div>
      </header>

      <main className="case-study-page">
        <CaseStudyContent project={project} />
      </main>

      <footer className="site-footer site-footer--case-study">
        <div className="footer-mega">
          <p className="footer-mega-text">Amy Ash</p>
          <p className="footer-mega-year">2026</p>
        </div>
        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} Amy Ash. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
