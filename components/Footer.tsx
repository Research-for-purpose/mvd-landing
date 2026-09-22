import Link from "next/link";
import { BrandMark } from "./BrandMark";

export function Footer() {
  return (
    <footer className="footer">
      <div className="wrap">
        <div className="footer-main">
          <div className="footer-signature">
            <Link className="brand" href="/" aria-label="MVD home"><BrandMark size={32} /> <span>MVD</span></Link>
            <p className="footer-intro">A calmer way to inspect the language around a claim—before it travels further.</p>
          </div>
          <nav className="footer-links" aria-label="Footer navigation">
            <Link href="/#product">Product</Link>
            <Link href="/methodology">Methodology</Link>
            <Link href="/install">Install</Link>
            <Link href="/privacy">Privacy</Link>
            <Link href="/terms">Terms</Link>
            <Link href="/support">Support</Link>
          </nav>
        </div>
        <div className="footer-bottom">
          <span>© [TODO: YEAR AND LEGAL OWNER] MVD</span>
          <span>Assessment aid · Not a fact-checking service</span>
        </div>
      </div>
    </footer>
  );
}
