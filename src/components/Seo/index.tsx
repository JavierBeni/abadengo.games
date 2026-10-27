import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { localizedPath, SUPPORTED_LANGUAGES } from "../../utils/localizedRoutes";

type SeoProps = {
  title: string;
  description: string;
  image?: string;
  noIndex?: boolean;
};

const Seo: React.FC<SeoProps> = ({ title, description, image, noIndex = false }) => {
  const { pathname } = useLocation();
  const { i18n } = useTranslation();

  useEffect(() => {
    const canonicalUrl = `${window.location.origin}${pathname}`;
    const normalizedDescription = description.replace(/\s+/g, " ").trim();
    const metaDescription = normalizedDescription.length > 160
      ? `${normalizedDescription.slice(0, 157).trimEnd()}...`
      : normalizedDescription;

    const setMeta = (attribute: "name" | "property", key: string, content?: string) => {
      const selector = `meta[${attribute}="${key}"]`;
      let element = document.head.querySelector<HTMLMetaElement>(selector);

      if (!content) {
        element?.remove();
        return;
      }

      if (!element) {
        element = document.createElement("meta");
        element.setAttribute(attribute, key);
        document.head.appendChild(element);
      }

      element.content = content;
    };

    document.title = title;
    document.documentElement.lang = i18n.resolvedLanguage || i18n.language;
    setMeta("name", "description", metaDescription);
    setMeta("name", "robots", noIndex ? "noindex, nofollow" : undefined);
    setMeta("property", "og:title", title);
    setMeta("property", "og:description", metaDescription);
    setMeta("property", "og:type", "website");
    setMeta("property", "og:url", canonicalUrl);
    setMeta("property", "og:image", image ? new URL(image, window.location.origin).href : undefined);
    setMeta("name", "twitter:card", image ? "summary_large_image" : "summary");
    setMeta("name", "twitter:title", title);
    setMeta("name", "twitter:description", metaDescription);
    setMeta("name", "twitter:image", image ? new URL(image, window.location.origin).href : undefined);

    let canonical = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.rel = "canonical";
      document.head.appendChild(canonical);
    }
    canonical.href = canonicalUrl;

    [...SUPPORTED_LANGUAGES, "x-default"].forEach((language) => {
      const hrefLanguage = language === "x-default" ? "en" : language;
      let alternate = document.head.querySelector<HTMLLinkElement>(`link[rel="alternate"][hreflang="${language}"]`);
      if (!alternate) {
        alternate = document.createElement("link");
        alternate.rel = "alternate";
        alternate.hreflang = language;
        document.head.appendChild(alternate);
      }
      alternate.href = `${window.location.origin}${localizedPath(pathname, hrefLanguage)}`;
    });
  }, [description, i18n.language, i18n.resolvedLanguage, image, noIndex, pathname, title]);

  return null;
};

export default Seo;