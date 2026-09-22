import type { Metadata } from "next";
import { PageShell } from "@/components/PageShell";

export const metadata: Metadata = {
  title: "Terms of Use",
  description: "Terms and limitations for use of MVD.",
  alternates: { canonical: "/terms" },
};

export default function TermsPage() {
  return (
    <PageShell
      eyebrow="Terms of use"
      title="Use MVD as an aid—not an authority."
      lede="These terms describe MVD’s intended function, responsible-use boundaries, and the limits of its automated assessments."
      meta="Draft · Last updated 22 September 2026"
      sideTitle="Draft status"
      sideText="The product terms are documented, but the legal operator, jurisdiction, contact details, and jurisdiction-specific provisions must be confirmed before launch."
    >
      <section>
        <h2>About these terms</h2>
        <p>MVD is presented under the public name <strong>Research for Purpose</strong>. By installing or using MVD, you agree to comply with these Terms of Use.</p>
        <p className="todo">
          <strong>TODO before launch:</strong> Identify the legal person or entity offering MVD, its jurisdiction and address, the effective date, eligibility or minimum-age requirements, and the official legal contact.
        </p>
      </section>

      <section>
        <h2>What MVD provides</h2>
        <p>
          MVD is a Chrome extension that helps users inspect selected text, chosen page elements, or visible webpage content for linguistic and rhetorical patterns that may merit closer review. It may provide risk and caution indices, signal descriptions, explanations, extraction, translation, and local export features.
        </p>
        <p>MVD is an assessment aid. It is not a fact-checking service, a source-verification service, or a determination that any person, publication, or claim is truthful or deceptive.</p>
      </section>

      <section>
        <h2>User-initiated analysis</h2>
        <p>MVD begins an analysis only after you request one. You are responsible for choosing the content submitted and for ensuring that you are permitted to process it.</p>
        <p>You must not use MVD to process content unlawfully, infringe intellectual-property or privacy rights, bypass access restrictions, or expose confidential information without authorization.</p>
      </section>

      <section>
        <h2>Access and sessions</h2>
        <p>Access may require an invite code and a revocable session token. You must not share, sell, misuse, or attempt to circumvent invite codes, tokens, quotas, rate limits, or other access controls.</p>
        <p>The operator may revoke access or restrict requests where reasonably necessary to protect the service, investigate abuse, comply with law, or maintain fair use of available capacity.</p>
      </section>

      <section>
        <h2>Responsible interpretation</h2>
        <p>
          Automated results may be incomplete, inaccurate, inconsistent, or affected by missing context, language, irony, quotation, page extraction, translation, or model limitations. A low signal level does not prove that content is accurate, and a high signal level does not prove that content is false.
        </p>
        <p>You remain responsible for reviewing the original context, consulting primary evidence, and applying appropriate subject-matter expertise before reaching or publishing a conclusion.</p>
      </section>

      <section>
        <h2>No high-stakes reliance</h2>
        <p>Do not use MVD as the sole or determinative basis for decisions involving health, safety, law, finance, employment, education, housing, insurance, public benefits, eligibility, or other consequential matters. Seek qualified professional advice where appropriate.</p>
      </section>

      <section>
        <h2>Acceptable use</h2>
        <p>You must not:</p>
        <ul>
          <li>interfere with, overload, reverse engineer, or probe the service except where applicable law expressly permits it;</li>
          <li>attempt to obtain another user’s invite, session, or service records;</li>
          <li>use the service to distribute malware, violate law, or infringe the rights of others;</li>
          <li>misrepresent MVD output as a verified fact, professional opinion, or final adjudication.</li>
        </ul>
      </section>

      <section>
        <h2>Third-party services</h2>
        <p>MVD relies on third-party infrastructure and analysis providers to perform requested features. Their availability, security measures, and processing practices may affect the service. The MVD Privacy Policy identifies the providers and data flows currently confirmed.</p>
      </section>

      <section>
        <h2>Availability and changes</h2>
        <p>MVD may not work on every website, document, language, browser configuration, paywall, image-only page, embedded viewer, or dynamic application. Features, providers, supported environments, quotas, and access arrangements may change.</p>
        <p>The operator may update or discontinue all or part of the service. Material changes to these terms will be reflected by updating the text and effective date.</p>
      </section>

      <section>
        <h2>Intellectual property</h2>
        <p>MVD and its site, interface, branding, documentation, and software are protected by applicable intellectual-property laws. These terms do not transfer ownership. Rights in third-party webpages, publications, and submitted content remain with their respective owners.</p>
      </section>

      <section>
        <h2>Disclaimers and liability</h2>
        <p>MVD outputs are generated assessments and may contain errors or omissions. The service is provided for informational and research-support purposes and must be evaluated in context.</p>
        <p className="todo">
          <strong>TODO before launch:</strong> Add jurisdiction-appropriate warranty disclaimers, liability limits, indemnity provisions, termination rights, consumer-rights notices, governing law, and dispute-resolution terms after the legal operator and target jurisdictions are confirmed.
        </p>
      </section>

      <section>
        <h2>Contact</h2>
        <p className="todo">
          <strong>TODO before launch:</strong> Publish the official legal and support contact information and final MVD domain.
        </p>
      </section>
    </PageShell>
  );
}
