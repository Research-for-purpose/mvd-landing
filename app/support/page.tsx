import type { Metadata } from "next";
import { PageShell } from "@/components/PageShell";

export const metadata: Metadata = {
  title: "Support",
  description: "Get support, report an MVD issue, or find the deletion-request channel.",
  alternates: { canonical: "/support" },
};

export default function SupportPage() {
  return (
    <PageShell eyebrow="Support" title="Questions deserve a clear channel." lede="Use this page for product support, problem reports, privacy questions, and deletion requests once the official contact address is confirmed." sideTitle="Helpful details" sideText="When reporting a product problem, include the Chrome version, the page type, what you selected, and what happened. Avoid sending sensitive page content.">
      <section><h2>Contact support</h2><p className="todo"><strong>TODO before launch:</strong> Confirm and publish the official support and privacy email address. Suggested display: support@[confirmed-domain].</p><p>No form is used on this site. Once confirmed, messages will be sent through your own email provider.</p></section>
      <section><h2>Request deletion</h2><p>Deletion requests will be accepted through the official privacy contact. The final process must identify what records can be matched to a requester, what verification is required, and the expected response timeline.</p><p className="todo"><strong>TODO before launch:</strong> Confirm whether deletion requests are supported, the request address, operator identity, applicable jurisdiction, and record-retention periods.</p></section>
      <section><h2>Report an assessment problem</h2><p>Useful reports describe what appeared incorrect, incomplete, or confusing. If sharing an example is necessary, send only the minimum content needed and remove personal or confidential information.</p><p>MVD results do not determine the truth of a claim. If your concern involves immediate harm, safety, or a regulated professional decision, consult an appropriate qualified professional or authority.</p></section>
    </PageShell>
  );
}
