"use client";

import { useEffect, useRef } from "react";

interface Props {
  text: string;
  /** CSS class applied to each character (e.g. "grad-blue") */
  className?: string;
}

export default function RollingText({ text, className = "" }: Props) {
  const outRefs = useRef<(HTMLSpanElement | null)[]>([]);
  const inRefs  = useRef<(HTMLSpanElement | null)[]>([]);

  const chars   = text.split("").map((ch) => (ch === " " ? "\u00A0" : ch));
  const n       = chars.length;
  // match original timing formula: cycle = (n-1)*0.06 + 0.63 + 2.0 seconds
  const cycleMs = Math.round(((n - 1) * 0.06 + 0.63 + 2.0) * 1000);

  useEffect(() => {
    function startRoll() {
      // reset
      outRefs.current.forEach((o) => { if (o) o.style.animation = "none"; });
      inRefs.current.forEach((inn) => {
        if (!inn) return;
        inn.style.animation  = "none";
        inn.style.transform  = "translateY(120%)";
        inn.style.opacity    = "0";
      });
      // force reflow so animation resets properly
      void outRefs.current[0]?.offsetHeight;
      // roll out
      outRefs.current.forEach((o, i) => {
        if (o) o.style.animation = `textroll-out 0.4s ease-in ${i * 0.055}s forwards`;
      });
      // roll in
      inRefs.current.forEach((inn, i) => {
        if (!inn) return;
        inn.style.transform = "";
        inn.style.opacity   = "";
        inn.style.animation = `textroll-in 0.4s ease-out ${i * 0.055 + 0.2}s both`;
      });
    }

    let ivId: ReturnType<typeof setInterval>;
    const tId = setTimeout(() => {
      startRoll();
      ivId = setInterval(startRoll, cycleMs);
    }, 1400);

    return () => {
      clearTimeout(tId);
      clearInterval(ivId);
    };
  }, [cycleMs]);

  return (
    <>
      {/* Single clip wrapper — avoids per-char clipping artefacts on descenders */}
      <span style={{ display: "inline-block", overflow: "hidden", verticalAlign: "bottom", lineHeight: "inherit", paddingTop: "0.15em", marginTop: "-0.15em", paddingBottom: "0.45em", marginBottom: "-0.45em" }}>
        {chars.map((ch, i) => (
          <span
            key={i}
            style={{
              position:      "relative",
              display:       "inline-block",
              verticalAlign: "bottom",
              lineHeight:    "inherit",
            }}
          >
            {/* rolling-out span */}
            <span
              ref={(el) => { outRefs.current[i] = el; }}
              className={className}
              style={{ position: "absolute", top: 0, left: 0, display: "inline-block" }}
            >
              {ch}
            </span>
            {/* rolling-in span */}
            <span
              ref={(el) => { inRefs.current[i] = el; }}
              className={className}
              style={{
                position:  "absolute",
                top:       0,
                left:      0,
                display:   "inline-block",
                transform: "translateY(120%)",
                opacity:   0,
              }}
            >
              {ch}
            </span>
            {/* ghost — holds layout width */}
            <span className={className} style={{ display: "inline-block", visibility: "hidden" }}>
              {ch}
            </span>
          </span>
        ))}
      </span>

      <style>{`
        @keyframes textroll-out {
          0%   { transform: translateY(0%);    opacity: 1; }
          100% { transform: translateY(-120%); opacity: 0; }
        }
        @keyframes textroll-in {
          0%   { transform: translateY(120%);  opacity: 0; }
          100% { transform: translateY(0%);    opacity: 1; }
        }
      `}</style>
    </>
  );
}
