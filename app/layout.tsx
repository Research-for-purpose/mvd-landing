import type { Metadata } from "next";
import "@fontsource/newsreader/400.css";
import "@fontsource/newsreader/500.css";
import "@fontsource/newsreader/600.css";
import "@fontsource/newsreader/400-italic.css";
import "@fontsource/newsreader/500-italic.css";
import "@fontsource/manrope/400.css";
import "@fontsource/manrope/500.css";
import "@fontsource/manrope/600.css";
import "@fontsource/manrope/800.css";
import "@fontsource/ibm-plex-mono/400.css";
import "@fontsource/ibm-plex-mono/500.css";
import "./globals.css";
import { getSiteUrl } from "@/lib/site-url";

const siteUrl = getSiteUrl();

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: "MVD — Inspect before you share", template: "%s — MVD" },
  description: "MVD helps readers inspect selected text and articles for misinformation-related linguistic and rhetorical risk signals.",
  applicationName: "MVD",
  openGraph: {
    title: "MVD — Inspect before you share",
    description: "Understand risk signals. Verify important claims.",
    url: siteUrl,
    siteName: "Misinformation Virality Detector",
    type: "website",
  },
  twitter: { card: "summary", title: "MVD — Inspect before you share", description: "Understand risk signals. Verify important claims." },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en" data-scroll-behavior="smooth"><body>{children}</body></html>;
}
