import type { ReactNode } from "react";
import { Footer } from "./Footer";
import { Sidebar } from "./Sidebar";

export function PageShell({
  eyebrow,
  title,
  lede,
  meta,
  sideTitle,
  sideText,
  children,
}: {
  eyebrow: string;
  title: string;
  lede: string;
  meta?: string;
  sideTitle: string;
  sideText: string;
  children: ReactNode;
}) {
  return (
    <div className="site-shell">
      <Sidebar />
      <main>
        <header className="page-hero">
          <div className="wrap page-hero-grid">
            <span className="eyebrow">{eyebrow}</span>
            <div>
              <h1 className="display">{title}</h1>
              <p className="page-lede">{lede}</p>
              {meta && <p className="page-meta">{meta}</p>}
            </div>
          </div>
        </header>
        <div className="wrap content-layout">
          <aside className="side-note"><strong>{sideTitle}</strong>{sideText}</aside>
          <div className="prose">{children}</div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
