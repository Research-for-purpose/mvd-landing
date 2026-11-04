import type { Metadata } from "next";
import { PageShell } from "@/components/PageShell";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How MVD processes data when a user requests an analysis.",
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return (
    <PageShell
      eyebrow="Privacy policy"
      title="Privacy, in plain English."
      lede="This policy explains what MVD processes when you request an analysis, why that processing is necessary, and where information may be retained."
      meta="Last updated 4 November 2026"
      sideTitle="How MVD handles data"
      sideText="MVD analyzes page content only after you request an analysis. This policy explains what information is used, which services help process it, and how to contact us about your data."
    >
      <section>
        <h2>Operator and scope</h2>
        <p>
          MVD is operated by <strong>AI for the Mission Inc.</strong> in Québec, Canada. It is offered as an add-on through the <strong>Survona</strong> platform at <a href="https://www.survona.com/">survona.com</a>. Survona is hosted on Microsoft Azure. The MVD landing page is hosted on Vercel and directs users to the Google Chrome Web Store to download the extension. This policy applies to the MVD extension and its supporting analysis service.
        </p>
        <p className="todo">
          <strong>TODO:</strong> Add MVD’s final public domain here once it is selected.
        </p>
        <p>References to “MVD,” “we,” and “our” mean AI for the Mission Inc.</p>
      </section>

      <section>
        <h2>When processing begins</h2>
        <p>MVD does not analyze a page merely because the extension is installed, a page is opened, or text is highlighted.</p>
        <p>
          Processing begins only after you request an analysis—for example, by selecting <strong>Analyze</strong>, choosing a page element, or selecting <strong>Analyze page</strong>. If access requires an invite code, MVD may automatically continue the same action after the code is accepted.
        </p>
      </section>

      <section>
        <h2>Information processed</h2>
        <h3>Content and page context</h3>
        <ul>
          <li><strong>Selected-text analysis:</strong> the text you selected and the current page URL.</li>
          <li><strong>Element analysis:</strong> the text of the page element you chose and the current page URL.</li>
          <li><strong>Full-page analysis:</strong> up to 60 visible text blocks, subject to a combined limit of 120,000 characters, together with each block’s identifier and HTML tag name, the current page URL, and page title.</li>
        </ul>
        <p>MVD sends text and limited structural labels for full-page analysis; it does not send the page’s HTML or DOM.</p>

        <h3>Identifiers and access records</h3>
        <ul>
          <li>a randomly generated installation identifier;</li>
          <li>a revocable session token and its expiration date;</li>
          <li>invite and session status, activation, access, expiration, and revocation timestamps;</li>
          <li>daily request counts by service endpoint.</li>
        </ul>

        <h3>Network and operational data</h3>
        <p>
          Cloudflare may process standard network information such as an IP address and user-agent header when delivering and securing a request. MVD application logs may contain a route, date, trace identifier, request duration, HTTP status, text length, error category, and risk index.
        </p>
        <p>Application logs are designed not to contain analyzed text, the page URL, or page title.</p>

        <h3>Information MVD does not request</h3>
        <p>
          MVD does not request screenshots, webpage cookies, the full browser history, or page HTML. It does not use an advertising analytics SDK. The current page URL is processed only as context for the page the user has chosen to analyze.
        </p>
      </section>

      <section>
        <h2>Why information is processed</h2>
        <p>MVD processes the information described above only as needed to:</p>
        <ul>
          <li>perform the analysis, extraction, or translation you requested;</li>
          <li>return and explain the resulting linguistic and rhetorical signals;</li>
          <li>authenticate access and maintain revocable sessions;</li>
          <li>apply service quotas and protect the service from abuse;</li>
          <li>diagnose errors and maintain the security and reliability of the service.</li>
        </ul>
        <p>MVD does not personalize analyses or the product experience based on a user profile.</p>
      </section>

      <section>
        <h2>Service providers and disclosures</h2>
        <p>The main services involved in MVD’s current request flow are:</p>
        <ul>
          <li><strong>Microsoft Azure</strong> hosts the Survona platform and provides Azure Communication Services for notification emails.</li>
          <li><strong>Vercel</strong> hosts the separate MVD marketing landing page. Its download link directs visitors to the Google Chrome Web Store; it does not host the Survona platform or MVD analysis service. As the landing-page host, Vercel may process basic connection data when the page is visited.</li>
          <li><strong>Cloudflare Workers</strong> operates the authenticated MVD API and performs an initial request-filtering step; <strong>Cloudflare D1</strong> stores invite, session, installation, and quota records; and Cloudflare’s network and security systems process request metadata.</li>
          <li><strong>OpenAI API</strong> performs an initial content-filtering and text-structuring step before Survona analysis, and translates selected text or completed analysis fields. For full-page analysis, OpenAI receives the page URL, title, and visible text blocks.</li>
          <li><strong>Survona FakeSpotter API</strong> receives text after the initial filtering steps for misinformation-signal analysis and the required model, language, and run parameters. MVD does not send Survona the page URL, page title, installation identifier, or MVD session token.</li>
        </ul>
        <p>MVD does not sell user data or disclose it to advertising platforms, data brokers, or third parties for marketing profiling.</p>
        <p>Each provider processes information to provide its part of the service and under the settings and terms that apply to that provider.</p>
      </section>

      <section>
        <h2>Storage and retention</h2>
        <h3>In the browser</h3>
        <p>
          The extension stores the random installation identifier, revocable session token, and session expiration date in <code>chrome.storage.local</code>. The installation identifier remains until the extension is removed or its storage is cleared. A session token is valid for 30 days unless revoked earlier.
        </p>
        <p>Page text, URLs, titles, browsing history, and completed analysis results are not kept as a persistent history by the extension. Results remain in the tab’s memory. Markdown or PDF exports are created locally only when you request them.</p>

        <h3>In MVD infrastructure</h3>
        <p>
          MVD’s Cloudflare D1 database stores a hashed invite code, installation identifier, hashed session token, invite and session status and timestamps, and daily usage counters. It does not store analyzed text, page URLs, page titles, or analysis results.
        </p>
        <p>
          These records are kept to manage access, quotas, security, and service operation. Session tokens expire after 30 days, but expiration does not itself delete the related database record. Some database records do not currently have automatic deletion periods. Cloudflare network and security logs and provider-managed backups are handled under the settings and retention terms that apply to those services.
        </p>

        <h3>At service providers</h3>
        <p>
          MVD’s launch configuration applies Zero Data Retention to its service-side model processing and Survona’s model processing. OpenAI performs an earlier filtering and text-structuring step. Retention for information sent to OpenAI follows the data controls enabled for the MVD API project and the terms that apply to that API service.
        </p>
      </section>

      <section>
        <h2>Limited use and human access</h2>
        <p>
          MVD uses user-requested content only to provide and maintain its analysis, extraction, translation, access-control, security, and support functions. It does not use or transfer that content for personalized advertising, marketing profiles, credit decisions, or sale to data brokers.
        </p>
        <p>MVD does not provide the team with a routine interface for reading analyzed text and does not store that text in D1 or application logs.</p>
        <p>MVD does not provide a routine interface for its team to read submitted page content. If access is necessary to respond to a support request, investigate a security or abuse issue, or meet a legal obligation, it is limited to what is needed for that purpose. Provider processing is subject to the provider’s own service terms and controls.</p>
      </section>

      <section>
        <h2>Security</h2>
        <p>
          MVD uses an authenticated service architecture, stores session tokens in hashed form in its database, and keeps provider API keys out of the browser extension. No internet service can guarantee absolute security, and this policy does not claim certifications that have not been confirmed.
        </p>
      </section>

      <section>
        <h2>International processing</h2>
        <p>MVD is planned to be available to users in Canada and the European Union. Cloudflare operates a global network, and other providers may process information in countries outside the user’s country of residence. The specific processing location depends on the provider and service configuration.</p>
      </section>

      <section>
        <h2>Your choices and deletion requests</h2>
        <p>You choose whether to initiate an analysis and which available content to submit. You may remove the extension or clear its local storage to remove locally stored MVD identifiers and session information.</p>
        <p>
          You may request deletion by emailing either address in the Contact section. We will use the information you provide to identify the associated records and may ask for additional details if needed. Never send an active session token by email. The extension does not currently provide self-service deletion or display the installation identifier needed to match a request. MVD can delete identifiable invite, session, usage, installation, and timestamp records from D1; provider-held records are handled under the provider’s terms and controls. We respond to privacy requests within the time required by applicable law.
        </p>
      </section>

      <section>
        <h2>Changes to this policy</h2>
        <p>Material changes will be reflected on this page by updating the text and the “last updated” date. Where applicable law or a material change in data use requires additional notice or consent, the operator will provide it before the new practice begins.</p>
      </section>

      <section>
        <h2>Contact</h2>
        <p>AI for the Mission Inc. handles MVD privacy and deletion requests. Email either <a href="mailto:javad@ai4mission.com">javad@ai4mission.com</a> or <a href="mailto:javad@aiformission.com">javad@aiformission.com</a>.</p>
      </section>
    </PageShell>
  );
}
