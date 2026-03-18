import xss from "xss";

export function sanitizeObject(obj) {
  const clean = {};
  for (const key in obj) {
    clean[key] = xss(obj[key] || "");
  }
  return clean;
}