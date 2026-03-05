"use client";

import { useState, useEffect, useRef } from "react";

const slides = [
  {
    badge: "⚠ Before EchosLogic",
    badgeColor: "var(--orange)",
    badgeBg: "rgba(255,107,53,0.12)",
    badgeBorder: "var(--border-orange)",
    title: "Tuesday morning. 7 jobs this week.",
    tasks: [
      { label: "Calling customers to confirm",  time: "45 min" },
      { label: "Writing invoices manually",       time: "30 min" },
      { label: "Texting for reviews",             time: "20 min" },
      { label: "Back-and-forth scheduling",       time: "25 min" },
    ],
    timeColor: "var(--orange)",
    borderColor: "rgba(255,107,53,0.18)",
    stats: [
      { value: "2h+",  label: "admin before lunch" },
      { value: "$0",   label: "billable work" },
      { value: "3",    label: "follow-ups forgotten" },
    ],
    statColor: "var(--orange)",
    cardBg: "linear-gradient(160deg, rgba(255,107,53,0.06) 0%, var(--bg-card) 60%)",
    cardBorder: "rgba(255,107,53,0.25)",
  },
  {
    badge: "+ After EchosLogic",
    badgeColor: "var(--blue-bright)",
    badgeBg: "var(--blue-dim)",
    badgeBorder: "var(--border-blue)",
    title: "Tuesday morning. Same 7 jobs.",
    tasks: [
      { label: "Appointments auto-confirmed",           time: "0 min" },
      { label: "Invoices sent automatically",           time: "0 min" },
      { label: "Review requests fired automatically",   time: "0 min" },
      { label: "New customer booked overnight",         time: "0 min" },
    ],
    timeColor: "var(--green)",
    borderColor: "rgba(34,197,94,0.15)",
    stats: [
      { value: "0 min", label: "admin" },
      { value: "$840",  label: "invoice already paid" },
      { value: "100%",  label: "follow-ups sent" },
    ],
    statColor: "var(--green)",
    cardBg: "linear-gradient(160deg, rgba(27,108,246,0.08) 0%, var(--bg-card) 60%)",
    cardBorder: "rgba(27,108,246,0.3)",
  },
];

export default function BeforeAfterCard() {
  const [active, setActive]   = useState(0);
  const [paused, setPaused]   = useState(false);
  const [visible, setVisible] = useState(true);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const go = (idx: number) => {
    setVisible(false);
    setTimeout(() => {
      setActive(idx);
      setVisible(true);
    }, 220);
  };

  useEffect(() => {
    if (paused) return;
    timerRef.current = setTimeout(() => {
      go((active + 1) % slides.length);
    }, 4000);
    return () => { if (timerRef.current) clearTimeout(timerRef.current); };
  }, [active, paused]);

  const s = slides[active];

  return (
    <div
      style={{
        width: "100%",
        background: s.cardBg,
        border: `1px solid ${s.cardBorder}`,
        borderRadius: "var(--r-xl)",
        padding: "1.75rem",
        transition: "border-color 0.4s",
        boxShadow: "var(--shadow-card)",
      }}
    >
      {/* Badge */}
      <span
        style={{
          display: "inline-flex",
          alignItems: "center",
          padding: "0.3em 0.85em",
          background: s.badgeBg,
          border: `1px solid ${s.badgeBorder}`,
          borderRadius: "999px",
          color: s.badgeColor,
          fontSize: "0.7rem",
          fontWeight: 700,
          letterSpacing: "0.07em",
          textTransform: "uppercase",
          marginBottom: "1rem",
          transition: "all 0.3s",
        }}
      >
        {s.badge}
      </span>

      {/* Title */}
      <p
        style={{
          fontFamily: "var(--font-outfit), sans-serif",
          fontWeight: 700,
          fontSize: "clamp(0.95rem, 1.2vw, 1.05rem)",
          color: "var(--text-primary)",
          marginBottom: "1.25rem",
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(6px)",
          transition: "opacity 0.22s ease, transform 0.22s ease",
        }}
      >
        {s.title}
      </p>

      {/* Task rows */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          borderTop: `1px solid ${s.borderColor}`,
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(6px)",
          transition: "opacity 0.25s ease, transform 0.25s ease",
        }}
      >
        {s.tasks.map((task) => (
          <div
            key={task.label}
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              padding: "0.65rem 0",
              borderBottom: `1px solid ${s.borderColor}`,
              gap: "0.75rem",
            }}
          >
            <span style={{ fontSize: "0.82rem", color: "var(--text-secondary)" }}>
              {task.label}
            </span>
            <span
              style={{
                fontSize: "0.82rem",
                fontWeight: 700,
                color: s.timeColor,
                fontFamily: "var(--font-outfit), sans-serif",
                flexShrink: 0,
              }}
            >
              {task.time}
            </span>
          </div>
        ))}
      </div>

      {/* Stats row */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr",
          gap: "0.5rem",
          marginTop: "1.25rem",
          opacity: visible ? 1 : 0,
          transition: "opacity 0.3s ease",
        }}
      >
        {s.stats.map((stat) => (
          <div key={stat.label} style={{ textAlign: "center" }}>
            <p
              style={{
                fontFamily: "var(--font-outfit), sans-serif",
                fontWeight: 800,
                fontSize: "clamp(1rem, 1.4vw, 1.2rem)",
                color: s.statColor,
                lineHeight: 1.1,
              }}
            >
              {stat.value}
            </p>
            <p style={{ fontSize: "0.68rem", color: "var(--text-muted)", marginTop: "0.2rem", lineHeight: 1.3 }}>
              {stat.label}
            </p>
          </div>
        ))}
      </div>

      {/* Controls */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "0.6rem",
          marginTop: "1.5rem",
        }}
      >
        <button
          aria-label={paused ? "Play slideshow" : "Pause slideshow"}
          onClick={() => setPaused((p) => !p)}
          style={{
            width: 28,
            height: 28,
            borderRadius: "50%",
            background: "var(--bg-surface)",
            border: "1px solid var(--border)",
            color: "var(--text-muted)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {paused ? (
            <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
              <path d="M2 1l7 4-7 4V1z" fill="currentColor" />
            </svg>
          ) : (
            <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
              <rect x="1.5" y="1" width="3" height="8" rx="1" fill="currentColor" />
              <rect x="5.5" y="1" width="3" height="8" rx="1" fill="currentColor" />
            </svg>
          )}
        </button>

        {slides.map((_, i) => (
          <button
            key={i}
            aria-label={`Go to slide ${i + 1}`}
            onClick={() => { setPaused(true); go(i); }}
            style={{
              width: i === active ? 20 : 8,
              height: 8,
              borderRadius: "4px",
              background: i === active ? s.badgeColor : "rgba(255,255,255,0.15)",
              border: "none",
              cursor: "pointer",
              transition: "width 0.3s var(--ease-spring), background 0.3s",
            }}
          />
        ))}
      </div>
    </div>
  );
}
