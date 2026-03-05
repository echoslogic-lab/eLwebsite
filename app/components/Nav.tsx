"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const links = [
  { label: "What we build", href: "#features" },
  { label: "How it Works", href: "#how-it-works" },
  { label: "Calculator",    href: "#roi" },
  { label: "FAQ",          href: "#faq" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open,     setOpen]     = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll when menu open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <>
      <header
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          height: "68px",
          display: "flex",
          alignItems: "center",
          transition: "background 0.3s, backdrop-filter 0.3s, border-color 0.3s",
          background: scrolled ? "rgba(7,10,24,0.88)" : "transparent",
          backdropFilter: scrolled ? "blur(16px)" : "none",
          WebkitBackdropFilter: scrolled ? "blur(16px)" : "none",
          borderBottom: scrolled ? "1px solid var(--border)" : "1px solid transparent",
        }}
      >
        <div className="container" style={{ display: "flex", alignItems: "center", gap: "2rem" }}>
          {/* Logo */}
          <a href="#" style={{ display: "flex", alignItems: "center", gap: "0.5rem", flexShrink: 0 }}>
            <Image src="/el-logo.png" alt="EchosLogic" width={48} height={48} style={{ borderRadius: "6px", display: "block", position: "relative", top: "4px" }} />
            <span
              style={{
                fontFamily: "var(--font-outfit), Outfit, sans-serif",
                fontWeight: 800,
                fontSize: "1.1rem",
                letterSpacing: "-0.02em",
                color: "var(--text-primary)",
              }}
            >
              Echos<span style={{ color: "var(--blue-bright)" }}>Logic</span>
            </span>
          </a>

          {/* Desktop nav links */}
          <nav style={{ display: "flex", gap: "0.25rem", marginLeft: "auto" }} aria-label="Main navigation">
            {links.map((l) => (
              <a key={l.href} href={l.href} className="nav-link" style={{ padding: "0.5em 0.85em", borderRadius: "var(--r-sm)" }}>
                {l.label}
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <a href="#pricing" className="btn-primary nav-desktop-cta" style={{ fontSize: "0.88rem", padding: "0.65em 1.4em" }}>
            Contact Us
          </a>

          {/* Mobile hamburger */}
          <button
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen(!open)}
            style={{
              display: "none",
              width: 36,
              height: 36,
              alignItems: "center",
              justifyContent: "center",
              borderRadius: "var(--r-sm)",
              background: "var(--bg-card)",
              border: "1px solid var(--border)",
              color: "var(--text-primary)",
              flexShrink: 0,
            }}
            className="mobile-hamburger"
          >
            {open ? (
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                <path d="M1 1l16 16M17 1L1 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            ) : (
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                <path d="M1 4h16M1 9h16M1 14h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            )}
          </button>
        </div>

        <style>{`
          @media (max-width: 768px) {
            nav { display: none !important; }
            .nav-desktop-cta { display: none !important; }
            .mobile-hamburger { display: flex !important; }
          }
        `}</style>
      </header>

      {/* Mobile overlay panel */}
      <div
        aria-hidden={!open}
        style={{
          position: "fixed",
          inset: 0,
          zIndex: 99,
          background: "var(--bg-base)",
          padding: "calc(68px + 2rem) 1.5rem 2rem",
          display: "flex",
          flexDirection: "column",
          gap: "0.5rem",
          transform: open ? "translateX(0)" : "translateX(100%)",
          transition: "transform 0.35s var(--ease-spring)",
          overflowY: "auto",
        }}
      >
        {links.map((l) => (
          <a
            key={l.href}
            href={l.href}
            onClick={() => setOpen(false)}
            style={{
              display: "block",
              padding: "1rem 1.25rem",
              fontSize: "1.15rem",
              fontFamily: "var(--font-outfit), sans-serif",
              fontWeight: 700,
              color: "var(--text-primary)",
              borderRadius: "var(--r-md)",
              background: "var(--bg-card)",
              border: "1px solid var(--border)",
            }}
          >
            {l.label}
          </a>
        ))}
        <a
          href="#pricing"
          onClick={() => setOpen(false)}
          className="btn-primary"
          style={{ marginTop: "1rem", justifyContent: "center" }}
        >
          Contact Us
        </a>
      </div>
    </>
  );
}
