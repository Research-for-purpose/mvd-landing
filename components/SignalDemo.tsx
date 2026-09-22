"use client";

import { useState } from "react";

type DemoSignal = {
  name: string;
  level: string;
  value: number;
  detail: string;
};

type DemoSample = {
  label: string;
  excerpt: string;
  score: number;
  caution: number;
  state: string;
  summary: string;
  why: string;
  explanation: string;
  rationale: string;
  tone: "high" | "safe";
  signals: DemoSignal[];
};

const samples: DemoSample[] = [
  {
    label: "Urgent claim",
    excerpt: "The proposal will change the city forever—and officials do not want residents to know until it is too late.",
    score: 80,
    caution: 10,
    state: "Needs review",
    summary: "The text appears very likely to contain misinformation-related signals.",
    why: "Persuasive or directive language · high · Emotional language · high.",
    explanation: "Risk level: 80/100. Caution: 10/100. Both assessment paths agree that the passage shows significant misinformation-related signals.",
    rationale: "Urgency, an absolute prediction, and an unsupported suggestion of concealment contribute most to this assessment. These characteristics do not by themselves prove that the claim is false.",
    tone: "high",
    signals: [
      { name: "Persuasive language", level: "High", value: 84, detail: "The passage directs the reader toward an urgent conclusion." },
      { name: "Emotional language", level: "High", value: 79, detail: "Loaded phrasing may intensify concern before evidence is considered." },
      { name: "Referential support", level: "Low", value: 22, detail: "No checkable source is identified inside the selected passage." },
    ],
  },
  {
    label: "Sourced claim",
    excerpt: "The published proposal allocates €2.4 million to the project, according to section four of the council budget.",
    score: 11,
    caution: 7,
    state: "Looks safe",
    summary: "The text appears very likely to be factual in tone and presentation.",
    why: "Referential support · high · Antagonistic framing · low.",
    explanation: "Risk level: 11/100. Caution: 7/100. Both assessment paths agree that the passage does not show significant misinformation-related signals.",
    rationale: "The passage uses measured language and names a specific, checkable document. The source and the underlying figure still need independent verification.",
    tone: "safe",
    signals: [
      { name: "Referential support", level: "High", value: 84, detail: "The passage points to a specific section of a named public document." },
      { name: "Emotional language", level: "Low", value: 12, detail: "The wording is comparatively neutral and descriptive." },
      { name: "Antagonistic framing", level: "Low", value: 8, detail: "The sentence does not position people or groups as adversaries." },
    ],
  },
];

export function SignalDemo() {
  const [selected, setSelected] = useState(0);
  const sample = samples[selected];

  return (
    <div className="demo-grid">
      <article className="article-panel">
        <div className="article-meta"><span>The Northbank Record</span><span>Fictional example · 08:42</span></div>
        <h3>What the riverfront plan could mean for the city</h3>
        <p className="article-deck">A public proposal has renewed debate about land use, transport, and the future of a growing district.</p>
        <div className="article-body" aria-live="polite">
          <p><mark className="highlight">{sample.excerpt}</mark></p>
          <p>Residents can review the draft and supporting documents before the consultation period closes.</p>
        </div>
        <div className="demo-tabs" aria-label="Choose a fictional passage to inspect">
          {samples.map((item, index) => (
            <button className="demo-tab" type="button" aria-pressed={selected === index} onClick={() => setSelected(index)} key={item.label}>
              {item.label}
            </button>
          ))}
        </div>
      </article>

      <aside className={`analysis-panel analysis-panel-${sample.tone}`} aria-label="Simulated MVD result">
        <div className="analysis-top"><strong>MVD</strong><span><i className="live-dot" />Simulated result</span></div>
        <div className="product-verdict">
          <span className="verdict-icon" aria-hidden="true">{sample.tone === "high" ? "×" : "✓"}</span>
          <h3>{sample.state}</h3>
        </div>
        <p className="result-summary">{sample.summary}</p>
        <div className="result-pills">
          <span className="result-risk">{sample.tone === "high" ? "High risk" : "Low risk"} · {sample.score}/100</span>
          <span>Models agree</span>
        </div>
        <p className="result-why"><strong>Why:</strong> {sample.why}</p>
        <div className="result-translate" aria-label="Illustrative translation controls">
          <strong><span aria-hidden="true">文</span> Translate</strong>
          <span className="active">EN</span><span>FR</span><span>UK</span>
        </div>
        <div className="result-details-title"><span>View details · 5 signals</span><span aria-hidden="true">×</span></div>
        <div className="result-details">
          <h4>Explanation</h4>
          <p>{sample.explanation}</p>
          <h4>Why the model reached this conclusion</h4>
          <p>{sample.rationale}</p>
          <h4>Key signals</h4>
          <div className="result-signal-cards">
            {sample.signals.map((signal) => (
              <article className="result-signal-card" key={signal.name}>
                <div><strong>{signal.name}</strong><span>{signal.level} · {signal.value}%</span></div>
                <p>{signal.detail}</p>
              </article>
            ))}
          </div>
        </div>
        <p className="analysis-disclaimer"><strong>Caution: {sample.caution}/100.</strong> Fictional demonstration—not a live analysis. Signals do not prove that a claim is true or false.</p>
      </aside>
    </div>
  );
}
