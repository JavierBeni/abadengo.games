export const SUPPORTED_LANGUAGES = ["en", "es", "pl"] as const;

export type SupportedLanguage = (typeof SUPPORTED_LANGUAGES)[number];

export const isSupportedLanguage = (language: string | undefined): language is SupportedLanguage =>
  SUPPORTED_LANGUAGES.some((supportedLanguage) => supportedLanguage === language);

export const localizedPath = (path: string, language: string): string => {
  const safeLanguage = isSupportedLanguage(language) ? language : "en";
  const parsedUrl = new URL(path, "https://abadengo.local");
  const pathWithoutLanguage = parsedUrl.pathname.replace(/^\/(en|es|pl)(?=\/|$)/, "") || "/";
  const localizedPathname = pathWithoutLanguage === "/"
    ? `/${safeLanguage}`
    : `/${safeLanguage}${pathWithoutLanguage}`;

  return `${localizedPathname}${parsedUrl.search}${parsedUrl.hash}`;
};