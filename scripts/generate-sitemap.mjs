import { mkdir, writeFile } from "node:fs/promises";

const siteOrigin = new URL(process.env.SITE_URL || "https://www.abadengo.games").origin;
const productsApiUrl = process.env.PRODUCTS_API_URL
  || "https://abadengo-backend.onrender.com/api/products/all/available";
const languages = ["en", "es", "pl"];
const publicPages = [[], ["aboutus"], ["contact"], ["faq"], ["tips"]];

const encodePath = (segments) => segments.map(encodeURIComponent).join("/");
const localizedUrl = (language, segments) => `${siteOrigin}/${language}${segments.length ? `/${encodePath(segments)}` : ""}`;
const slugify = (value) => value.toLowerCase().replace(/[^a-z0-9]+/g, "");
const escapeXml = (value) => value
  .replaceAll("&", "&amp;")
  .replaceAll("<", "&lt;")
  .replaceAll(">", "&gt;")
  .replaceAll('"', "&quot;")
  .replaceAll("'", "&apos;");

const response = await fetch(productsApiUrl, { signal: AbortSignal.timeout(30000) });
if (!response.ok) {
  throw new Error(`Products API returned ${response.status}; sitemap generation stopped.`);
}

const products = await response.json();
if (!Array.isArray(products)) {
  throw new Error("Products API returned an unexpected response; sitemap generation stopped.");
}

const categorySlugs = [...new Set(products
  .map((product) => typeof product.game === "string" ? slugify(product.game) : "")
  .filter(Boolean))];
const productPaths = [...new Set(products
  .filter((product) => product.game && product._id)
  .map((product) => ["product", slugify(product.game), String(product._id)]))];
const pages = [
  ...publicPages,
  ...categorySlugs.map((game) => ["catalog", game]),
  ...productPaths,
];

const urlEntries = pages.flatMap((segments) => languages.map((language) => {
  const localizedLinks = languages
    .map((alternateLanguage) => `    <xhtml:link rel="alternate" hreflang="${alternateLanguage}" href="${escapeXml(localizedUrl(alternateLanguage, segments))}" />`)
    .concat(`    <xhtml:link rel="alternate" hreflang="x-default" href="${escapeXml(localizedUrl("en", segments))}" />`)
    .join("\n");

  return [
    "  <url>",
    `    <loc>${escapeXml(localizedUrl(language, segments))}</loc>`,
    localizedLinks,
    "  </url>",
  ].join("\n");
}));

const sitemap = [
  '<?xml version="1.0" encoding="UTF-8"?>',
  '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">',
  ...urlEntries,
  "</urlset>",
  "",
].join("\n");

await mkdir("public", { recursive: true });
await writeFile("public/sitemap.xml", sitemap);
await writeFile("public/robots.txt", `User-agent: *\nAllow: /\nSitemap: ${siteOrigin}/sitemap.xml\n`);

console.log(`Generated sitemap with ${urlEntries.length} URLs from ${products.length} products.`);