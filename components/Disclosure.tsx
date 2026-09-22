import Link from "next/link";

export function Disclosure() {
  return (
    <aside className="disclosure" aria-label="Content processing disclosure">
      <span className="disclosure-mark" aria-hidden="true">#</span>
      <span>
        <strong>Before you analyze.</strong> MVD sends content only after you request an analysis. Depending on the mode you choose, this may include selected text, text from a chosen element, or visible page text, together with the current page URL and—in full-page mode—the page title. <Link className="text-link" href="/privacy">See our Privacy Policy</Link>.
      </span>
    </aside>
  );
}
