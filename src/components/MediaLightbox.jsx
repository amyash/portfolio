import { useEffect, useRef } from "react";
import "./MediaLightbox.css";

export default function MediaLightbox({ items, index, onClose, onNavigate }) {
  const closeRef = useRef(null);
  const item = index == null ? null : items[index];
  const open = Boolean(item);

  useEffect(() => {
    if (!open) return undefined;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();

    const onKeyDown = (event) => {
      if (event.key === "Escape") {
        onClose();
        return;
      }
      if (event.key === "ArrowRight" && items.length > 1) {
        onNavigate((index + 1) % items.length);
        return;
      }
      if (event.key === "ArrowLeft" && items.length > 1) {
        onNavigate((index - 1 + items.length) % items.length);
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open, index, items.length, onClose, onNavigate]);

  if (!open) return null;

  const isVideo = item.type === "video";

  return (
    <div
      className="media-lightbox"
      role="dialog"
      aria-modal="true"
      aria-label={item.alt || item.title || "Media viewer"}
      onClick={onClose}
    >
      <div
        className="media-lightbox-panel"
        onClick={(event) => event.stopPropagation()}
      >
        <button
          ref={closeRef}
          type="button"
          className="media-lightbox-close"
          onClick={onClose}
          aria-label="Close"
        >
          Close
        </button>

        {items.length > 1 && (
          <>
            <button
              type="button"
              className="media-lightbox-nav media-lightbox-nav--prev"
              onClick={() => onNavigate((index - 1 + items.length) % items.length)}
              aria-label="Previous"
            >
              ‹
            </button>
            <button
              type="button"
              className="media-lightbox-nav media-lightbox-nav--next"
              onClick={() => onNavigate((index + 1) % items.length)}
              aria-label="Next"
            >
              ›
            </button>
          </>
        )}

        <div className="media-lightbox-stage">
          {isVideo ? (
            <iframe
              className="media-lightbox-video"
              src={`https://www.youtube.com/embed/${item.videoId}?autoplay=1&rel=0`}
              title={item.title || "YouTube video"}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          ) : (
            <img
              className="media-lightbox-image"
              src={item.src}
              alt={item.alt || ""}
            />
          )}
        </div>

        {(item.alt || item.title) && (
          <p className="media-lightbox-caption">{item.alt || item.title}</p>
        )}
      </div>
    </div>
  );
}
