"use client";

import { useState, useMemo } from "react";

export default function RoiCalculator() {
  const [jobs,   setJobs]   = useState(20);
  const [jobVal, setJobVal] = useState(350);
  const [hours,  setHours]  = useState(8);

  const results = useMemo(() => {
    const jobsLost  = Math.round(jobs * jobVal * 0.15);
    const adminCost = Math.round(hours * 300);
    const total     = jobsLost + adminCost;
    return { jobsLost, adminCost, total };
  }, [jobs, jobVal, hours]);

  const fmtUSD = (n: number) =>
    n.toLocaleString("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 });

  return (
    <section id="roi" className="section" style={{ background: "var(--bg-surface)" }}>
      <div className="container">

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 380px), 1fr))",
            gap: "clamp(2rem, 4vw, 4rem)",
            alignItems: "center",
          }}
        >
        {/* Header */}
        <div>
          <span className="section-tag-orange">Calculator</span>
          <h2 className="display-xl" style={{ maxWidth: "560px" }}>
            <span className="grad-blue">How much money are you</span>{" "}
            <span className="grad-orange">losing every month</span>{" "}
            <span className="grad-blue">from manual work?</span>
          </h2>
          <p className="body-lg" style={{ color: "var(--text-secondary)", marginTop: "0.75rem" }}>
            Adjust the sliders to estimate your monthly lost revenue.
          </p>
        </div>

        {/* Calculator card */}
        <div
          className="card"
          style={{
            padding: "2rem",
          }}
        >
          {/* Card title */}
          <p style={{ fontFamily: "var(--font-outfit), sans-serif", fontWeight: 700, fontSize: "1rem", color: "var(--text-primary)", marginBottom: "1.75rem" }}>
            🧮 Your Monthly Loss Estimator
          </p>

          {/* Sliders */}
          <SliderField
            label="Jobs per month"
            value={jobs}
            min={1} max={100} step={1}
            display={String(jobs)}
            onChange={setJobs}
          />
          <SliderField
            label="Average job value"
            value={jobVal}
            min={50} max={5000} step={25}
            display={fmtUSD(jobVal)}
            onChange={setJobVal}
          />
          <SliderField
            label="Hours/week on admin"
            value={hours}
            min={1} max={40} step={1}
            display={String(hours)}
            onChange={setHours}
          />

          {/* Result box */}
          <div
            style={{
              background: "var(--bg-base)",
              borderRadius: "var(--r-md)",
              padding: "1.5rem",
              textAlign: "center",
              marginBottom: "1.25rem",
            }}
          >
            <p style={{ fontSize: "0.8rem", color: "var(--text-muted)", marginBottom: "0.5rem" }}>
              You&apos;re leaving this on the table every month
            </p>
            <p
              style={{
                fontFamily: "var(--font-outfit), sans-serif",
                fontWeight: 800,
                fontSize: "clamp(2.6rem, 6vw, 3.4rem)",
                lineHeight: 1,
                color: "var(--orange)",
                marginBottom: "0.5rem",
              }}
            >
              {fmtUSD(results.total)}
            </p>
            <p style={{ fontSize: "0.8rem", color: "var(--text-muted)" }}>
              Here&apos;s where it&apos;s going 👇
            </p>
          </div>

          {/* Breakdown rows */}
          <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
            <BreakdownRow
              label="Jobs lost because you replied too slow"
              value={`${fmtUSD(results.jobsLost)}/mo gone`}
              valueColor="var(--orange)"
              bold={false}
            />
            <BreakdownRow
              label="Hours spent on admin instead of billable work"
              value={`${fmtUSD(results.adminCost)}/mo gone`}
              valueColor="var(--orange)"
              bold={false}
            />
            <BreakdownRow
              label="EchosLogic gets this back for you"
              value={`${fmtUSD(results.total)}/mo recovered`}
              valueColor="var(--green)"
              bold={true}
            />
          </div>
        </div>

        </div>{/* end grid */}
      </div>
    </section>
  );
}

function BreakdownRow({ label, value, valueColor, bold }: {
  label: string; value: string; valueColor: string; bold: boolean;
}) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "0.7rem 0",
        borderTop: "1px solid var(--border)",
        gap: "1rem",
      }}
    >
      <span style={{ fontSize: "0.83rem", color: bold ? "var(--text-primary)" : "var(--text-secondary)", fontWeight: bold ? 700 : 400 }}>
        {label}
      </span>
      <span style={{ fontSize: "0.83rem", fontWeight: 700, color: valueColor, fontFamily: "var(--font-outfit), sans-serif", flexShrink: 0 }}>
        {value}
      </span>
    </div>
  );
}

function SliderField({
  label, value, min, max, step, display, onChange,
}: {
  label: string; value: number; min: number; max: number;
  step: number; display: string;
  onChange: (v: number) => void;
}) {
  const color = "var(--blue-bright)";
  const pct = ((value - min) / (max - min)) * 100;
  return (
    <div style={{ marginBottom: "1.4rem" }}>
      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "0.45rem" }}>
        <label style={{ fontSize: "0.83rem", color: "var(--text-secondary)" }}>{label}</label>
        <span style={{ fontSize: "0.85rem", fontWeight: 700, color, fontFamily: "var(--font-outfit), sans-serif" }}>
          {display}
        </span>
      </div>
      <input
        type="range"
        min={min} max={max} step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        aria-label={label}
        style={{
          width: "100%",
          appearance: "none",
          height: "4px",
          borderRadius: "2px",
          background: `linear-gradient(to right, ${color} 0%, ${color} ${pct}%, rgba(255,255,255,0.1) ${pct}%, rgba(255,255,255,0.1) 100%)`,
          outline: "none",
          cursor: "pointer",
        }}
      />
      <style>{`
        input[type=range]::-webkit-slider-thumb {
          -webkit-appearance: none;
          width: 18px; height: 18px;
          border-radius: 50%;
          background: ${color};
          box-shadow: 0 0 0 3px rgba(27,108,246,0.2);
          cursor: pointer;
        }
      `}</style>
    </div>
  );
}
