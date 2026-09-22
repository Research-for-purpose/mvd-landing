import type { Metadata } from "next";
import Link from "next/link";
import { Disclosure } from "@/components/Disclosure";
import { Footer } from "@/components/Footer";
import { Sidebar } from "@/components/Sidebar";
import { SignalDemo } from "@/components/SignalDemo";

export const metadata: Metadata = { alternates: { canonical: "/" } };

const faqs = [
  ["Is MVD a fact-checker?", "No. MVD identifies linguistic and rhetorical risk signals in text. It does not determine whether an individual claim is true or false. Important claims should be checked against reliable primary sources."],
  ["What data is analyzed?", "Only after you request an analysis, MVD sends either selected text, text from a chosen element, or visible page text. The current URL is included; the page title is included for full-page analysis. MVD does not send screenshots, cookies, the page HTML, or your full browsing history."],
  ["Does it work on every website?", "MVD is designed for accessible webpage text. Browser-restricted pages, image-only content, complex applications, and paywalled material may not be available for analysis."],
  ["What does the risk index mean?", "It is a summary indicator of detected language patterns—not a probability that the article is false. Interpret it together with the individual signals, their explanations, and the source itself."],
  ["How can I report a problem or request deletion?", "Visit Support for the current contact process. Contact details and record-retention terms are marked as pending until the operator information is confirmed."],
];

export default function Home() {
  return (
    <div className="site-shell">
      <Sidebar />
      <main>
        <section className="hero">
          <div className="wrap hero-grid">
            <div>
              <span className="eyebrow">A reading aid for the information age</span>
              <h1 className="display">Pause before a claim <em>travels.</em></h1>
              <p className="hero-copy">MVD surfaces linguistic and rhetorical risk signals in the text you choose. Understand the pattern. Check the context. Verify what matters.</p>
              <div className="hero-actions">
                <Link className="button" href="/install">Get MVD for Chrome <span aria-hidden="true">↗</span></Link>
                <a className="button button-secondary" href="#demo">Try the demonstration</a>
              </div>
              <p className="hero-note">Assessment aid · Not a truth verdict · Analysis starts only when you choose</p>
            </div>
            <div className="artifact-wrap" aria-label="Illustration of an MVD result">
              <span className="artifact-label">Product view / 01</span>
              <div className="extension-card">
                <div className="extension-top">
                  <span className="extension-title"><span className="extension-dot">M</span> MVD</span>
                  <span className="window-controls" aria-hidden="true">☰ ··· ×</span>
                </div>
                <div className="result-head"><span className="check" aria-hidden="true">✓</span><h2>Lower signal level</h2></div>
                <p className="result-copy">The passage uses measured language and points to a source that readers can check.</p>
                <div className="pills"><span className="pill safe">Risk · 18/100</span><span className="pill">Caution · 12/100</span></div>
                <p className="reason"><strong>Leading signals:</strong> Referential support · high. Antagonistic framing · low.</p>
                <div className="mini-signal">
                  <div className="mini-signal-row"><span>Referential support</span><span>67%</span></div>
                  <div className="signal-track"><div className="signal-fill" /></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section" id="product">
          <div className="wrap">
            <div className="section-head"><span className="eyebrow">How it works</span><h2 className="display">A closer reading, in three deliberate steps.</h2></div>
            <div className="steps">
              <article className="step"><span className="step-num">01</span><h3>Choose the text</h3><p>Select a sentence, a page element, or the visible article. MVD runs only when you initiate an analysis.</p></article>
              <article className="step"><span className="step-num">02</span><h3>Read the signals</h3><p>See patterns such as emotional language, referential support, and antagonistic framing—along with an explanation.</p></article>
              <article className="step"><span className="step-num">03</span><h3>Verify what matters</h3><p>Return to context, inspect primary sources, and verify consequential claims before relying on or sharing them.</p></article>
            </div>
          </div>
        </section>

        <section className="section demo-section" id="demo">
          <div className="wrap">
            <div className="section-head"><span className="eyebrow">Interactive demonstration</span><h2 className="display">See the language around a claim.</h2></div>
            <SignalDemo />
          </div>
        </section>

        <section className="section">
          <div className="wrap">
            <div className="section-head"><span className="eyebrow">Why MVD</span><h2 className="display">Built for agency, not automatic judgment.</h2></div>
            <div className="proof-grid">
              <article className="proof"><span className="proof-icon">#01</span><h3>User-controlled analysis</h3><p>You decide what to inspect and when. MVD analyzes a selection, element, or page only after you ask it to.</p></article>
              <article className="proof"><span className="proof-icon">#02</span><h3>Protected service access</h3><p>Provider API keys stay in the authenticated service architecture; they are never shipped inside the browser extension.</p></article>
              <article className="proof"><span className="proof-icon">#03</span><h3>Signals with context</h3><p>Results pair summary indices with specific linguistic signals so readers can examine why the assessment was made.</p></article>
              <article className="proof"><span className="proof-icon">#04</span><h3>No truth verdicts</h3><p>MVD supports better questions. It does not replace source checking, subject-matter expertise, or editorial judgment.</p></article>
            </div>
          </div>
        </section>

        <section className="method-band">
          <div className="wrap method-band-inner">
            <h2>Indices summarize.<br /><em>Signals explain.</em></h2>
            <div><p>Risk and caution indices help orient attention. Individual signals show the detected language patterns. Neither should be read as a confidence score that a claim is false, and every result carries model uncertainty.</p><Link className="text-link" href="/methodology">Read the methodology <span aria-hidden="true">→</span></Link></div>
          </div>
        </section>

        <section className="section">
          <div className="wrap">
            <div className="section-head"><span className="eyebrow">Questions, answered</span><h2 className="display">What MVD does—and what it does not.</h2></div>
            <div className="faq-list">
              {faqs.map(([question, answer], index) => <details className="faq-item" key={question} open={index === 0}><summary>{question}</summary><p>{answer}</p></details>)}
            </div>
          </div>
        </section>

        <section className="section">
          <div className="wrap"><Disclosure /></div>
        </section>

        <section className="final-cta">
          <div className="wrap final-cta-inner">
            <div><span className="eyebrow">Read with another lens</span><h2 className="display">Inspect. Consider. Verify.</h2></div>
            <div><p>Add MVD to Chrome and bring a structured pause to the moments when language moves fastest.</p><Link className="button" href="/install">Get MVD for Chrome <span aria-hidden="true">↗</span></Link></div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
