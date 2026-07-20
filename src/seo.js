const SITE_URL = "https://amyash.co.uk";

export const siteMeta = {
  siteName: "Amy Ash",
  title: "Amy Ash — Experience Designer",
  description:
    "Experience designer at Expedia Group (Vrbo). Portfolio of UX, UI, interaction design and front-end work across travel, culture, museums and public services.",
  url: SITE_URL,
  image: `${SITE_URL}/amy-portrait.png`,
  imageAlt: "Amy Ash, experience designer",
  locale: "en_GB",
};

function upsertMeta(attr, key, content) {
  if (!content) return;
  let el = document.head.querySelector(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

function upsertLink(rel, href) {
  if (!href) return;
  let el = document.head.querySelector(`link[rel="${rel}"]`);
  if (!el) {
    el = document.createElement("link");
    el.setAttribute("rel", rel);
    document.head.appendChild(el);
  }
  el.setAttribute("href", href);
}

/** Update document title and social meta for the current route. */
export function setDocumentMeta({
  title = siteMeta.title,
  description = siteMeta.description,
  path = "/",
  image = siteMeta.image,
  imageAlt = siteMeta.imageAlt,
  type = "website",
} = {}) {
  const url = path.startsWith("http")
    ? path
    : `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;

  document.title = title;

  upsertMeta("name", "description", description);
  upsertMeta("property", "og:title", title);
  upsertMeta("property", "og:description", description);
  upsertMeta("property", "og:url", url);
  upsertMeta("property", "og:image", image);
  upsertMeta("property", "og:image:alt", imageAlt);
  upsertMeta("property", "og:type", type);
  upsertMeta("name", "twitter:title", title);
  upsertMeta("name", "twitter:description", description);
  upsertMeta("name", "twitter:image", image);
  upsertMeta("name", "twitter:image:alt", imageAlt);
  upsertLink("canonical", url);
}
