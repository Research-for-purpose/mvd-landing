import type { Metadata } from "next";
import { PageShell } from "@/components/PageShell";

export const metadata: Metadata = {
  title: "Methodology",
  description: "How MVD describes linguistic and rhetorical risk signals—and how to interpret its results responsibly.",
  alternates: { canonical: "/methodology" },
};

export default function MethodologyPage() {
  return (
    <PageShell eyebrow="Methodology" title="Signals, not verdicts." lede="MVD organizes language patterns that may deserve closer inspection. Its output is a prompt for inquiry, not a determination of truth." sideTitle="Reading principle" sideText="Treat every result as one input. Review the original context, find primary evidence, and apply domain expertise before reaching a conclusion.">
      <section><h2>What MVD assesses</h2><p>MVD examines user-selected or visible page text for linguistic and rhetorical characteristics associated with how information is framed and supported. The assessment may include summary indices, alerts, signal strengths, and a plain-language explanation.</p><p>It does not independently establish the underlying facts, interview sources, inspect every cited document, or decide whether an individual statement is true.</p></section>
      <section><h2>How to read a result</h2><div className="signal-definition"><strong>Risk index</strong><p>A composite orientation measure for detected misinformation-related language patterns. It is not the probability that the text is false.</p></div><div className="signal-definition"><strong>Caution index</strong><p>An additional prompt to slow down where ambiguity, model disagreement, limited context, or other cautionary conditions may matter.</p></div><div className="signal-definition"><strong>Alerts</strong><p>Prominent notices for patterns that may deserve immediate attention. An alert is a reason to inspect—not proof of manipulation.</p></div><div className="signal-definition"><strong>Signals</strong><p>Individual features, such as emotional language, referential support, or antagonistic framing, that help explain the summary assessment.</p></div></section>
      <section><h2>Illustrative signals</h2><h3>Emotional language</h3><p>Language that may intensify fear, anger, enthusiasm, or urgency. Emotion can be appropriate and does not by itself make a claim unreliable.</p><h3>Referential support</h3><p>The extent to which text points to identifiable facts, documents, sources, or evidence. A reference can still be incomplete, mischaracterized, or incorrect.</p><h3>Antagonistic framing</h3><p>Language that divides people into opposing camps or portrays an actor as hostile or deceptive. Conflict framing may also be factually warranted.</p></section>
      <section><h2>Uncertainty and limitations</h2><ul><li>Meaning changes with surrounding context, genre, language, irony, and quotation.</li><li>Scores can vary when text is shortened, translated, or extracted differently.</li><li>Low-signal text can still contain a false claim; high-signal text can still describe real events.</li><li>Automated models can misunderstand, omit, or overemphasize features.</li><li>Not every website exposes content in a form the extension can analyze.</li></ul></section>
      <section><h2>Responsible use</h2><ol><li>Read the signal explanation rather than relying on the index alone.</li><li>Return to the full article and identify the precise claim.</li><li>Look for primary evidence and independent, credible coverage.</li><li>Consider whether relevant context, uncertainty, or attribution is missing.</li><li>Do not use MVD as the sole basis for decisions about people, publication, safety, health, law, or finance.</li></ol></section>
    </PageShell>
  );
}
