import type { Metadata } from "next";
import { Disclosure } from "@/components/Disclosure";
import { PageShell } from "@/components/PageShell";
import { CHROME_STORE_URL } from "@/lib/chrome-store";

export const metadata: Metadata = {
  title: "Install",
  description: "Install MVD for Chrome and learn how to begin an analysis.",
  alternates: { canonical: "/install" },
};

export default function InstallPage() {
  return (
    <PageShell eyebrow="Install" title="Add a pause to Chrome." lede="MVD is built to inspect text on pages you choose. Get the extension from the Chrome Web Store." sideTitle="Compatibility" sideText="Designed for Google Chrome. Other Chromium-based browsers are not currently confirmed or supported.">
      <section><div className="install-card"><h2>Chrome Web Store</h2><p>Get MVD from the Chrome Web Store to start inspecting text in your browser. New users need a beta invite code to activate access.</p><a className="button" href={CHROME_STORE_URL}>Get MVD for Chrome <span aria-hidden="true">↗</span></a></div></section>
      <section><h2>Installation steps</h2><div className="signal-definition"><span className="step-circle">1</span><p>Open the MVD listing in the Chrome Web Store.</p></div><div className="signal-definition"><span className="step-circle">2</span><p>Select <strong>Add to Chrome</strong> and review the browser permissions shown by Chrome.</p></div><div className="signal-definition"><span className="step-circle">3</span><p>Open Chrome’s Extensions menu and pin MVD to the toolbar for quick access.</p></div><div className="signal-definition"><span className="step-circle">4</span><p>On a page you want to inspect, choose to analyze the page or pick specific text.</p></div></section>
      <section><h2>Before the first analysis</h2><Disclosure /></section>
      <section>
        <h2>Why MVD requests browser permissions</h2>
        <div className="signal-definition"><strong>Website access</strong><p>MVD must be available on webpages so you can choose selected text, a page element, or visible page content to inspect. Content is transmitted only after you request an analysis.</p></div>
        <div className="signal-definition"><strong>Local storage</strong><p>MVD stores a random installation identifier, a revocable session token, and the session expiration date. It does not use local storage to maintain a history of pages or analyzed content.</p></div>
        <p>Chrome may describe website access broadly because MVD is designed to work on webpages the user chooses across the web. Chrome internal pages, the Chrome Web Store, and other browser-restricted locations remain inaccessible.</p>
      </section>
      <section><h2>Where it may not work</h2><p>Chrome blocks extensions on certain internal pages and store pages. Some paywalls, image-only documents, embedded viewers, highly dynamic applications, or restricted content may also prevent text access or extraction.</p></section>
    </PageShell>
  );
}
