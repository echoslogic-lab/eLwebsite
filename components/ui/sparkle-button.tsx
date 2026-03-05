"use client";

import { useEffect, useMemo, useRef, useState, ReactNode } from "react";
import { Sparkle } from "lucide-react";
import { loadFull } from "tsparticles";
import type { ISourceOptions } from "@tsparticles/engine";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { cn } from "@/lib/utils";

// Brand colors: blue #3B8BFF, blue-ultra #0EA5FF, orange #FF6B35, orange-warm #FFB347
const options: ISourceOptions = {
  key: "brand-star",
  name: "BrandStar",
  particles: {
    number: { value: 20, density: { enable: false } },
    color: {
      value: ["#3B8BFF", "#0EA5FF", "#FF6B35", "#FFB347", "#ffffff", "#93c5fd"],
    },
    shape: {
      type: "star",
      options: { star: { sides: 4 } },
    },
    opacity: { value: 0.85 },
    size: { value: { min: 1, max: 4 } },
    rotate: {
      value: { min: 0, max: 360 },
      enable: true,
      direction: "clockwise",
      animation: { enable: true, speed: 10, sync: false },
    },
    links: { enable: false },
    reduceDuplicates: true,
    move: {
      enable: true,
      center: { x: 120, y: 45 },
    },
  },
  interactivity: { events: {} },
  smooth: true,
  fpsLimit: 120,
  background: { color: "transparent", size: "cover" },
  fullScreen: { enable: false },
  detectRetina: true,
  absorbers: [
    {
      enable: true,
      opacity: 0,
      size: { value: 1, density: 1, limit: { radius: 5, mass: 5 } },
      position: { x: 110, y: 45 },
    },
  ],
  emitters: [
    {
      autoPlay: true,
      fill: true,
      life: { wait: true },
      rate: { quantity: 5, delay: 0.5 },
      position: { x: 110, y: 45 },
    },
  ],
};

interface SparkleButtonProps {
  children: ReactNode;
  onClick?: () => void;
  href?: string;
  className?: string;
}

let instanceCounter = 0;

export function SparkleButton({ children, onClick, href, className }: SparkleButtonProps) {
  const particleId = useRef(`sparkle-btn-${++instanceCounter}`).current;
  const [particleState, setParticlesReady] = useState<"loaded" | "ready">();
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadFull(engine);
    }).then(() => {
      setParticlesReady("loaded");
    });
  }, []);

  const modifiedOptions = useMemo(() => {
    options.autoPlay = isHovering;
    return options;
  }, [isHovering]);

  const inner = (
    <span className="relative flex items-center justify-center gap-2 rounded-full text-white font-bold whitespace-nowrap"
      style={{
        background: "linear-gradient(135deg, #1B6CF6 0%, #3B8BFF 45%, #FF6B35 100%)",
        fontFamily: "var(--font-outfit, Outfit, sans-serif)",
        fontSize: "clamp(0.9rem, 1vw, 1.05rem)",
        letterSpacing: "-0.01em",
        padding: "0.75em 1.85em",
      }}
    >
      <Sparkle className="size-5 -translate-y-0.5 animate-sparkle fill-white shrink-0" />
      <Sparkle
        style={{ animationDelay: "1s" }}
        className="absolute bottom-2.5 left-3.5 z-20 size-2 rotate-12 animate-sparkle fill-white"
      />
      <Sparkle
        style={{ animationDelay: "1.5s", animationDuration: "2.5s" }}
        className="absolute left-5 top-2.5 size-1 -rotate-12 animate-sparkle fill-white"
      />
      <Sparkle
        style={{ animationDelay: "0.5s", animationDuration: "2.5s" }}
        className="absolute left-3 top-3 size-1.5 animate-sparkle fill-white"
      />
      <span>{children}</span>
    </span>
  );

  const wrapperClass = cn(
    "group relative rounded-full p-[2px] text-white transition-transform hover:scale-105 active:scale-100",
    className
  );
  const wrapperStyle = {
    background: "linear-gradient(135deg, rgba(27,108,246,0.4) 0%, rgba(59,139,255,0.4) 45%, rgba(255,107,53,0.4) 100%)",
  };

  const particles = !!particleState && (
    <Particles
      id={particleId}
      className={cn(
        "pointer-events-none absolute -bottom-4 -left-4 -right-4 -top-4 z-0 opacity-0 transition-opacity",
        { "group-hover:opacity-100": particleState === "ready" }
      )}
      particlesLoaded={async () => setParticlesReady("ready")}
      options={modifiedOptions}
    />
  );

  if (href) {
    return (
      <a
        href={href}
        className={wrapperClass}
        style={wrapperStyle}
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        {inner}
        {particles}
      </a>
    );
  }

  return (
    <button
      className={wrapperClass}
      style={wrapperStyle}
      onClick={onClick}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      {inner}
      {particles}
    </button>
  );
}
