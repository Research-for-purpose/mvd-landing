import type { Metadata } from "next";
import { PageShell } from "@/components/PageShell";

export const metadata: Metadata = {
  title: "Terms of Use",
  description: "Basic terms and limitations for use of MVD.",
  alternates: { canonical: "/terms" },
};

export default function TermsPage() {
  return (
    <PageShell eyebrow="Terms of use" title="Use MVD as an aid—not an authority." lede="These draft terms describe the intended product boundaries. Operator, jurisdiction, and contact details remain to be confirmed." meta="Draft · Last updated 22 September 2026" sideTitle="Draft status" sideText="These terms require operator review and completion before public launch. They are not a substitute for jurisdiction-specific legal advice.">
      <section><h2>Agreement and operator</h2><p>By installing or using MVD, you agree to these Terms of Use.</p><p className="todo"><strong>TODO before launch:</strong> Add the legal owner, jurisdiction, contact address, effective date, eligibility requirements, and governing-law and dispute provisions after appropriate review.</p></section>
      <section><h2>What the service provides</h2><p>MVD helps users inspect selected text or visible page content for linguistic and rhetorical risk signals. It may provide indices, signals, alerts, explanations, extraction, and translation features.</p><p>MVD is not a fact-checking service. It does not determine whether claims are true or false and does not replace independent research, primary sources, professional expertise, or editorial judgment.</p></section>
      <section><h2>Responsible use</h2><p>You agree to use MVD lawfully and not to interfere with the service, bypass access controls or quotas, probe its security, misuse credentials, or use the service to infringe the rights of others.</p><p>You are responsible for ensuring that you are permitted to process the content you choose and for evaluating any result in its full context.</p></section>
      <section><h2>No high-stakes reliance</h2><p>Do not rely on MVD as the sole basis for decisions involving health, safety, law, finance, employment, education access, housing, public benefits, or other consequential matters. Seek qualified advice where appropriate.</p></section>
      <section><h2>Availability and changes</h2><p>The service may not work on every website or with every format. Features, supported browsers, quotas, and access arrangements may change. The operator does not promise uninterrupted or error-free availability.</p></section>
      <section><h2>Intellectual property</h2><p>MVD and its site, interface, branding, and software are protected by applicable intellectual-property laws. These terms do not transfer ownership. Rights in third-party webpages and content remain with their respective owners.</p></section>
      <section><h2>Disclaimer</h2><p>MVD outputs are generated assessments and may be incomplete, inaccurate, or misleading. Indices are not probabilities of falsity. Signals may appear in accurate reporting, and misleading content may receive a low result.</p><p className="todo"><strong>TODO before launch:</strong> Add jurisdiction-appropriate warranty, liability, indemnity, termination, and consumer-rights language only after the operator and governing law are confirmed.</p></section>
      <section><h2>Contact</h2><p className="todo"><strong>TODO before launch:</strong> Publish the official legal and support contact information.</p></section>
    </PageShell>
  );
}
