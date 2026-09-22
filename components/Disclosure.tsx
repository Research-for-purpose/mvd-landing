import Link from "next/link";

export function Disclosure() {
  return (
    <aside className="disclosure" aria-label="Content processing disclosure">
      <span className="disclosure-mark" aria-hidden="true">#</span>
      <span>
        <strong>Before you analyze.</strong> When you choose to analyze content, MVD sends the selected or visible page text and relevant page context to our secure analysis service to generate your result. <Link className="text-link" href="/privacy">See our Privacy Policy</Link>.
      </span>
    </aside>
  );
}
