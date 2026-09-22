import type { Metadata } from "next";
import { PageShell } from "@/components/PageShell";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How MVD processes data when a user requests an analysis.",
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return (
    <PageShell eyebrow="Privacy policy" title="Privacy, in plain English." lede="This draft describes the confirmed MVD data flow and visibly marks every operator or retention detail that still needs confirmation." meta="Draft · Last updated 22 September 2026" sideTitle="Important" sideText="This policy must not be published as final until every orange TODO is replaced with a confirmed fact.">
      <section><h2>Who operates MVD</h2><p className="todo"><strong>TODO before launch:</strong> Add the legal owner name, country or jurisdiction, public website domain, and support/privacy email address.</p><p>In this policy, “MVD,” “we,” and “our” refer to that confirmed operator. Questions about this policy and requests concerning personal data should be sent to the published privacy contact.</p></section>
      <section><h2>What MVD is</h2><p>MVD is a Chrome extension that helps users inspect text for misinformation-related linguistic and rhetorical risk signals. MVD is an assessment aid. It is not a fact-checking service and does not determine whether an individual claim is true or false.</p></section>
      <section><h2>Data processed</h2><ul><li><strong>Content you choose to analyze:</strong> selected text, a chosen page element, or visible article text.</li><li><strong>Relevant page context:</strong> the page URL and title where needed to perform the requested analysis.</li><li><strong>Extension identifiers:</strong> a randomly generated browser installation ID stored locally.</li><li><strong>Authentication data:</strong> a revocable session token stored locally.</li><li><strong>Invite-related records:</strong> records associated with access or invitation to the service.</li></ul><p>MVD does not run a page analysis until the user chooses to initiate one.</p></section>
      <section><h2>Why the data is processed</h2><p>The data is used to provide the analysis a user requests, authenticate and secure access to the service, enforce service quotas, and support operation of the extension.</p></section>
      <section><h2>How processing works</h2><p>The extension sends the chosen content and relevant page context to an authenticated Cloudflare Worker. The service uses Survona for analysis and OpenAI for page-text extraction and translation. Provider API keys do not enter the browser extension.</p><p className="todo"><strong>TODO before launch:</strong> Confirm the complete subprocessor list—Cloudflare, Survona, OpenAI, Vercel, and any additional hosting, logging, analytics, or support providers. Confirm the role of Vercel for this website.</p></section>
      <section><h2>Storage and retention</h2><p>The random installation ID and revocable session token are stored locally in the browser.</p><p className="todo"><strong>TODO before launch:</strong> State whether analyzed page text, URL, or title is retained after processing and, if so, the exact retention period. Also state whether invite and session records are retained and for exactly how long.</p><p>We will not claim a retention period until it has been confirmed.</p></section>
      <section><h2>Sharing</h2><p>Data required to perform an analysis is processed by the service providers identified above for their respective service functions. We will update this section if additional providers are confirmed.</p><p>MVD does not claim that content is never shared, because user-requested analysis requires processing by the described service providers.</p></section>
      <section><h2>Security</h2><p>MVD uses an authenticated service architecture and keeps provider API keys out of the browser extension. No internet service can promise absolute security. This policy does not claim security certifications or guarantees that have not been confirmed.</p></section>
      <section><h2>International transfers</h2><p className="todo"><strong>TODO before launch:</strong> Confirm where the operator and each provider process data, whether international transfers apply, and the relevant transfer safeguards before adding a definitive statement.</p></section>
      <section><h2>Your choices and rights</h2><p>You control whether to initiate an analysis and which available text to analyze. Rights concerning access, correction, objection, restriction, portability, or deletion can depend on where you live and the confirmed operator jurisdiction.</p><p className="todo"><strong>TODO before launch:</strong> Confirm the deletion process, applicable user rights, request email, identity-verification steps, and response process.</p></section>
      <section><h2>Changes to this policy</h2><p>Material changes will be reflected on this page by updating the text and the “last updated” date. If a change requires additional notice or consent, the operator will determine and provide it based on the confirmed legal requirements.</p></section>
      <section><h2>Contact</h2><p className="todo"><strong>TODO before launch:</strong> Privacy contact email, legal owner, postal address if required, public domain, and jurisdiction.</p></section>
    </PageShell>
  );
}
