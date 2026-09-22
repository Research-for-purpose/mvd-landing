const LOCAL_SITE_URL = "http://localhost:3000";

export function getSiteUrl() {
  const configuredUrl = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  const vercelProductionUrl = process.env.VERCEL_PROJECT_PRODUCTION_URL?.trim();
  const vercelPreviewUrl = process.env.VERCEL_URL?.trim();
  const candidate = configuredUrl || vercelProductionUrl || vercelPreviewUrl || LOCAL_SITE_URL;
  const url = /^https?:\/\//i.test(candidate) ? candidate : `https://${candidate}`;

  return url.replace(/\/+$/, "");
}
