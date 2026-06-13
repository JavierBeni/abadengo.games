/**
 * Security and validation utilities
 */

/**
 * Validates if a URL is safe (http/https only)
 */
export const isValidImageUrl = (url: string): boolean => {
  try {
    const parsed = new URL(url);
    return parsed.protocol === "http:" || parsed.protocol === "https:";
  } catch {
    return false;
  }
};

/**
 * Validates if a href is safe (relative paths or http/https URLs)
 */
export const isValidHref = (href: string): boolean => {
  if (!href) return false;
  // Allow relative paths and safe URLs
  return (
    href.startsWith("/") ||
    href.startsWith("http://") ||
    href.startsWith("https://")
  );
};

/**
 * Validates a callback function
 */
export const isValidCallback = (callback: unknown): boolean => {
  return typeof callback === "function";
};

/**
 * Validates a dropdown element structure
 */
export interface ValidDropdownElement {
  id: string;
  action: () => void;
  label: React.ReactNode;
}

export const isValidDropdownElement = (
  element: unknown
): element is ValidDropdownElement => {
  if (
    !element ||
    typeof element !== "object" ||
    !("id" in element) ||
    !("action" in element)
  ) {
    return false;
  }

  const el = element as Record<string, unknown>;
  return (
    typeof el.id === "string" &&
    typeof el.action === "function" &&
    "label" in el
  );
};

/**
 * Validates an array of dropdown elements
 */
export const isValidDropdownElements = (
  elements: unknown
): elements is ValidDropdownElement[] => {
  return (
    Array.isArray(elements) &&
    elements.length > 0 &&
    elements.every(isValidDropdownElement)
  );
};
