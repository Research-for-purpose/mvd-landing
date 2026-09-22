import type { Metadata } from "next";
import { PageShell } from "@/components/PageShell";

export const metadata: Metadata = {
  title: "Support",
  description: "Get support, report an MVD issue, or learn about deletion requests.",
  alternates: { canonical: "/support" },
};

export default function SupportPage() {
  return (
    <PageShell
      eyebrow="Support"
      title="Questions deserve a clear channel."
      lede="Use this page to prepare a product report, understand what information is useful, and find the current contact options for MVD."
      sideTitle="Protect your information"
      sideText="Share only the minimum information needed to explain a problem. Do not send an active session token, private webpage content, or unnecessary personal data."
    >
      <section>
        <h2>Contact support</h2>
        <p>A dedicated MVD support address has not yet been confirmed. Research for Purpose currently provides a general organizational contact page for public inquiries.</p>
        <p>
          <a className="text-link" href="https://www.researchforpurpose.com/contact-us/" target="_blank" rel="noreferrer">
            Visit the Research for Purpose contact page ↗
          </a>
        </p>
        <p className="todo">
          <strong>TODO before launch:</strong> Confirm whether the existing contact is authorized to handle MVD support and privacy requests, or publish dedicated support and privacy email addresses.
        </p>
      </section>

      <section>
        <h2>Report a product problem</h2>
        <p>A useful report should include:</p>
        <ul>
          <li>your Chrome version and operating system;</li>
          <li>whether you analyzed selected text, an element, or a full page;</li>
          <li>the type of webpage involved and the steps that produced the problem;</li>
          <li>the visible error message, if any.</li>
        </ul>
        <p>If an example is necessary, remove personal, confidential, or copyrighted content that is not essential to the report.</p>
      </section>

      <section>
        <h2>Assessment concerns</h2>
        <p>Explain which result appeared incorrect, incomplete, or difficult to understand and why. MVD results are not truth determinations, so include relevant context or primary evidence where possible.</p>
        <p>If the concern involves immediate harm or a regulated professional decision, consult an appropriate qualified professional or authority rather than relying on MVD support.</p>
      </section>

      <section>
        <h2>Deletion requests</h2>
        <p>
          MVD can technically remove identifiable invite, session, usage, installation, and timestamp records from its database. Analyzed text, page URLs, titles, and results are not stored in that database. The extension does not yet provide self-service deletion or show the installation identifier needed to match a request.
        </p>
        <p>Never send an active session token by email.</p>
        <p className="todo">
          <strong>TODO before launch:</strong> Establish the official deletion-request address, a safe way to identify the relevant installation without exposing a session token, the response period, and the treatment of provider logs and retained content.
        </p>
      </section>
    </PageShell>
  );
}
