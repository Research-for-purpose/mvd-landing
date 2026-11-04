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
      meta="Draft · Updated 4 November 2026"
      sideTitle="Draft status"
      sideText="The technical data flow is documented below. The remaining orange notices identify decisions and production settings that still need confirmation before publication."
    >
      <section>
        <h2>Operator and scope</h2>
        <p>
          MVD is a browser extension offered as an add-on through the <strong>Survona</strong> platform at <a href="https://www.survona.com/">survona.com</a>. Survona is hosted on Microsoft Azure. MVD will have its own public domain; its Vercel-hosted landing page will direct users to the Google Chrome Web Store to download the extension. This policy applies to the MVD extension and its supporting analysis service.
        </p>
        <p className="todo">
          <strong>TODO before launch:</strong> Confirm the exact registered name of the operator, the extension’s final domain, and the official privacy contact. The answer sheet identifies IA pour la Mission inc. in Québec, Canada, and provides a postal address; confirm the published legal details before launch.
        </p>
        <p>Until those details are confirmed, references to “MVD,” “we,” and “our” in this draft mean the future confirmed operator of the service.</p>
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
        <p>MVD currently relies on the following services to provide its user-requested functionality:</p>
        <ul>
          <li><strong>Microsoft Azure</strong> hosts the Survona platform and provides Azure Communication Services for notification emails.</li>
          <li><strong>Vercel</strong> hosts the separate MVD marketing landing page. Its download link directs visitors to the Google Chrome Web Store; it does not host the Survona platform or MVD analysis service.</li>
          <li><strong>Cloudflare Workers</strong> operates the authenticated MVD API and performs an initial request-filtering step; <strong>Cloudflare D1</strong> stores invite, session, installation, and quota records; and Cloudflare’s network and security systems process request metadata.</li>
          <li><strong>OpenAI API</strong> performs an initial content-filtering and text-structuring step before Survona analysis, and translates selected text or completed analysis fields. For full-page analysis, OpenAI receives the page URL, title, and visible text blocks.</li>
          <li><strong>Survona FakeSpotter API</strong> receives text after the initial filtering steps for misinformation-signal analysis and the required model, language, and run parameters. MVD does not send Survona the page URL, page title, installation identifier, or MVD session token.</li>
        </ul>
        <p>MVD does not sell user data or disclose it to advertising platforms, data brokers, or third parties for marketing profiling.</p>
        <p className="todo">
          <strong>TODO before launch:</strong> Confirm any additional or backup providers, the email/support provider, and Survona’s retention, training, human-review, and processing-location terms.
        </p>
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
        <p className="todo">
          <strong>TODO before launch:</strong> Adopt deletion schedules for expired session hashes, invite records, installation identifiers, usage counters, Cloudflare logs, and backups. These records currently do not all have automatic deletion periods.
        </p>

        <h3>At service providers</h3>
        <p>
          Zero Data Retention is the required launch configuration on the MVD service side and for Survona’s model processing. OpenAI handles an earlier filtering step, so its retention controls must be verified separately. Until those controls are confirmed, standard OpenAI abuse-monitoring settings may retain API content for up to 30 days; every applicable Responses API request must also be checked for <code>store: false</code>.
        </p>
        <p className="todo">
          <strong>TODO before launch:</strong> Verify what data Cloudflare, OpenAI, and Survona each receive; confirm Zero Data Retention is enabled on the MVD and Survona model paths; verify OpenAI’s effective Data Controls and <code>store: false</code> on every applicable request; and obtain written retention, training, human-review, and processing-location terms from Survona. Confirm Cloudflare log retention.
        </p>
      </section>

      <section>
        <h2>Limited use and human access</h2>
        <p>
          MVD uses user-requested content only to provide and maintain its analysis, extraction, translation, access-control, security, and support functions. It does not use or transfer that content for personalized advertising, marketing profiles, credit decisions, or sale to data brokers.
        </p>
        <p>MVD does not provide the team with a routine interface for reading analyzed text and does not store that text in D1 or application logs.</p>
        <p className="todo">
          <strong>TODO before launch:</strong> Formally adopt a human-access policy limited to user-authorized support, security or abuse investigation, legal obligations, and appropriately aggregated internal operations. Confirm compatible human-review terms with Survona and OpenAI before making the Chrome Web Store Limited Use certification.
        </p>
      </section>

      <section>
        <h2>Security</h2>
        <p>
          MVD uses an authenticated service architecture, stores session tokens in hashed form in its database, and keeps provider API keys out of the browser extension. No internet service can guarantee absolute security, and this policy does not claim certifications that have not been confirmed.
        </p>
      </section>

      <section>
        <h2>International processing</h2>
        <p>The current launch plan includes users in Canada and the European Union, subject to final confirmation.</p>
        <p>Cloudflare operates a global edge network, and other providers may process information outside the user’s country.</p>
        <p className="todo">
          <strong>TODO before launch:</strong> Confirm the final launch scope; resolve whether an EU representative is needed and who will serve; and confirm the Cloudflare D1 location, provider processing regions, international transfers, and transfer safeguards.
        </p>
      </section>

      <section>
        <h2>Your choices and deletion requests</h2>
        <p>You choose whether to initiate an analysis and which available content to submit. You may remove the extension or clear its local storage to remove locally stored MVD identifiers and session information.</p>
        <p>
          MVD can technically delete associated invite, session, usage, installation, and timestamp records from D1 when a record can be identified. An active session token should never be sent by email. The extension does not currently provide self-service deletion or display the installation identifier needed to match a request.
        </p>
        <p className="todo">
          <strong>TODO before launch:</strong> Establish the request channel, safe identity-verification method, response period, deletion workflow, and jurisdiction-specific rights. Confirm how provider logs and retained content are handled when a deletion request is received.
        </p>
      </section>

      <section>
        <h2>Changes to this policy</h2>
        <p>Material changes will be reflected on this page by updating the text and the “last updated” date. Where applicable law or a material change in data use requires additional notice or consent, the operator will provide it before the new practice begins.</p>
      </section>

      <section>
        <h2>Contact</h2>
        <p className="todo">
          <strong>TODO before launch:</strong> Publish the confirmed privacy and deletion-request email, legal operator, jurisdiction, final MVD domain, and any legally required postal address. The existing Research for Purpose contact must not be presented as the MVD privacy channel until the operator confirms that role.
        </p>
      </section>
    </PageShell>
  );
}
