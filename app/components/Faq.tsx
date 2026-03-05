"use client";

import { useState } from "react";

const faqs = [
  {
    q: "Do I have to learn new software?",
    a: "No. We build everything inside the tools you already use. Google Calendar, Jobber, QuickBooks, whatever you have — we wire the automations into those. You don't change how you work, you just stop doing the repetitive parts manually.",
  },
  {
    q: "What happens on the strategy call?",
    a: "It's a free 30-minute conversation. We ask about your current workflow, what's eating your time, and what tools you use. From there we tell you exactly what we'd build for your business and what it would cost. No hard sell — just an honest plan.",
  },
  {
    q: "Will automated messages sound like a robot talking to my customers?",
    a: "Not when we set it up right. We write the messages to sound like you — your tone, your name, your business. Most customers can't tell the difference. The speed of the reply actually makes you look more professional, not less personal.",
  },
  {
    q: "How long does setup take?",
    a: "Most systems are fully built and running within 48 hours of the strategy call. You don't have to do anything during setup — we handle it entirely.",
  },
  {
    q: "What if I need changes down the road?",
    a: "We don't disappear after setup. If you add services, change your pricing, or just want something tweaked — we adjust it. Think of us as your back-office automation team.",
  },
  {
    q: "What kinds of businesses do you work with?",
    a: "Home service businesses — HVAC, plumbing, electrical, roofing, landscaping, cleaning, general contracting. If you're running jobs and dealing with scheduling, invoicing, and customer communication, we can help.",
  },
];

export default function Faq() {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  return (
    <section id="faq" className="section">
      <div className="container">
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", marginBottom: "3rem" }}>
          <span className="section-tag">FAQ</span>
          <h2 className="display-xl" style={{ maxWidth: "680px" }}>
            <span className="grad-orange">Honest answers to real</span>{" "}
            <span className="grad-blue">hesitations</span>
          </h2>
        </div>

        <div style={{ maxWidth: "760px", margin: "0 auto", display: "flex", flexDirection: "column", gap: "0.75rem" }}>
          {faqs.map((item, i) => {
            const isOpen = openIdx === i;
            return (
              <div
                key={i}
                style={{
                  background: "var(--bg-card)",
                  border: `1px solid ${isOpen ? "var(--border-blue)" : "var(--border)"}`,
                  borderRadius: "var(--r-lg)",
                  overflow: "hidden",
                  transition: "border-color 0.25s",
                }}
              >
                <button
                  onClick={() => setOpenIdx(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  style={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    gap: "1rem",
                    padding: "1.25rem 1.5rem",
                    textAlign: "left",
                    color: "var(--text-primary)",
                    fontFamily: "var(--font-outfit), sans-serif",
                    fontWeight: 700,
                    fontSize: "clamp(0.95rem, 1.1vw, 1.05rem)",
                  }}
                >
                  {item.q}
                  <span
                    aria-hidden="true"
                    style={{
                      flexShrink: 0,
                      width: 24,
                      height: 24,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      background: isOpen ? "var(--blue-dim)" : "rgba(255,255,255,0.05)",
                      border: `1px solid ${isOpen ? "var(--border-blue)" : "var(--border)"}`,
                      borderRadius: "50%",
                      color: isOpen ? "var(--blue-bright)" : "var(--text-muted)",
                      transition: "transform 0.3s var(--ease-spring), background 0.2s, color 0.2s, border-color 0.2s",
                      transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
                    }}
                  >
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                      <path d="M2 4l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </span>
                </button>

                <div
                  style={{
                    maxHeight: isOpen ? "600px" : "0",
                    overflow: "hidden",
                    transition: "max-height 0.4s var(--ease-spring)",
                  }}
                >
                  <p
                    style={{
                      padding: "0 1.5rem 1.25rem",
                      color: "var(--text-secondary)",
                      lineHeight: 1.7,
                      fontSize: "0.93rem",
                    }}
                  >
                    {item.a}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
