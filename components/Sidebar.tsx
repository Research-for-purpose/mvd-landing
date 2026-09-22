"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { BrandMark } from "./BrandMark";

const primaryLinks = [
  ["01", "Home", "/"],
  ["02", "Product", "/#product"],
  ["03", "Methodology", "/methodology"],
  ["04", "Install", "/install"],
];

const infoLinks = [
  ["Privacy", "/privacy"],
  ["Terms", "/terms"],
  ["Support", "/support"],
];

export function Sidebar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [nearFooter, setNearFooter] = useState(false);

  useEffect(() => {
    const boundary = document.querySelector(".final-cta") ?? document.querySelector(".footer");
    if (!boundary) return;

    const observer = new IntersectionObserver(
      ([entry]) => setNearFooter(entry.isIntersecting),
      { threshold: 0.08 },
    );

    observer.observe(boundary);
    return () => observer.disconnect();
  }, [pathname]);

  return (
    <aside className={`side-nav${open ? " side-nav-open" : ""}${nearFooter ? " side-nav-away" : ""}`}>
      <div className="side-nav-inner">
        <div className="side-nav-top">
          <Link className="side-brand" href="/" aria-label="MVD home" onClick={() => setOpen(false)}>
            <BrandMark size={34} />
            <span><strong>MVD</strong><small>read before you share</small></span>
          </Link>
          <button
            className="side-menu-toggle"
            type="button"
            aria-expanded={open}
            aria-controls="side-navigation"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((value) => !value)}
          >
            <span>{open ? "Close" : "Menu"}</span>
            <i aria-hidden="true" />
          </button>
        </div>

        <div className="side-nav-content" id="side-navigation">
          <nav aria-label="Main navigation">
            <p className="side-nav-label">Explore</p>
            <div className="side-nav-primary">
              {primaryLinks.map(([number, label, href]) => {
                const targetPath = href.split("#")[0];
                const active = href === "/" ? pathname === "/" : targetPath !== "/" && pathname === targetPath;
                return (
                  <Link
                    className="side-nav-link"
                    href={href}
                    key={label}
                    aria-current={active ? "page" : undefined}
                    onClick={() => setOpen(false)}
                  >
                    <span>{label}</span><small>{number}</small>
                  </Link>
                );
              })}
            </div>

            <p className="side-nav-label side-nav-label-spaced">Information</p>
            <div className="side-nav-secondary">
              {infoLinks.map(([label, href]) => (
                <Link
                  href={href}
                  key={label}
                  aria-current={pathname === href ? "page" : undefined}
                  onClick={() => setOpen(false)}
                >
                  {label}
                </Link>
              ))}
            </div>
          </nav>

          <div className="side-nav-bottom">
            <div className="side-status"><span aria-hidden="true" /> Chrome extension</div>
            <Link className="side-nav-cta" href="/install" onClick={() => setOpen(false)}>
              Get MVD <span aria-hidden="true">↗</span>
            </Link>
            <p>Assessment aid<br />Not a truth verdict</p>
          </div>
        </div>
      </div>
    </aside>
  );
}
