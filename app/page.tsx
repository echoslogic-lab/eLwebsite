import Image from "next/image";
import Nav from "./components/Nav";
import RoiCalculator from "./components/RoiCalculator";
import Faq from "./components/Faq";
import BeforeAfterCard from "./components/BeforeAfterCard";
import RollingText from "./components/RollingText";
import { AuroraBackground } from "./components/ui/aurora-background";
import { GlowCard } from "../components/ui/spotlight-card";
import { SparkleButton } from "../components/ui/sparkle-button";

/* ================================================================
   ECHOSLOGIC LANDING PAGE
   Trade-business automation platform
================================================================ */

export default function Page() {
  return (
    <>
      <Nav />
      <main>
        <HeroSection />
        <PainSection />
        <RoiCalculator />
        <BenefitsSection />
        <HowItWorksSection />
        <Faq />
        <CtaSection />
      </main>
      <Footer />
    </>
  );
}

/* ── Hero ───────────────────────────────────────────────────────── */
function HeroSection() {
  return (
    <section
      aria-label="Hero"
      style={{
        position: "relative",
        marginTop: "68px",
        paddingBlock: "clamp(3rem, 6vw, 5rem)",
        background: "var(--bg-surface)",
        overflow: "hidden",
      }}
    >
      <div style={{ position: "relative", zIndex: 1, width: "100%", maxWidth: "1600px", marginInline: "auto", paddingInline: "clamp(1.25rem, 3vw, 3rem)" }}>
        <div className="hero-grid">
          {/* Text content */}
          <div>

            {/* Badge */}
            <div style={{ marginBottom: "1.25rem" }}>
              <span
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.5em",
                  padding: "0.4em 1em",
                  background: "#0f1420",
                  border: "1px solid rgba(255,107,53,0.35)",
                  borderRadius: "999px",
                  fontSize: "0.72rem",
                  fontWeight: 700,
                  letterSpacing: "0.09em",
                  textTransform: "uppercase",
                  color: "var(--text-secondary)",
                  boxShadow: "0 0 16px rgba(255,107,53,0.12)",
                }}
              >
                <span style={{ color: "var(--orange)" }}>✦</span>
                Done for you — We build it, you run it
              </span>
            </div>

            {/* Headline */}
            <h1
              className="display-2xl"
              style={{
                marginBottom: "1.25rem",
                fontSize: "clamp(2rem, 3.2vw + 0.6rem, 4.2rem)",
              }}
            >
              <span className="grad-orange">Stop doing admin,</span>{" "}
              <span style={{ whiteSpace: "nowrap" }}><span className="grad-blue">Start </span><RollingText text="growing revenue" className="grad-blue" /><span className="grad-blue">.</span></span>
            </h1>

            {/* Sub-headline */}
            <p
              className="body-lg"
              style={{
                color: "var(--text-primary)",
                marginBottom: "0.5rem",
                fontWeight: 700,
              }}
            >
              Every missed call is a job going to your competitor.
            </p>
            <p
              className="body-lg"
              style={{
                color: "var(--text-secondary)",
                marginBottom: "2rem",
              }}
            >
              Stop losing jobs to slow replies, missed invoices, and admin overload.
              EchosLogic works with the tools you already use to handle your scheduling,
              invoices, and customer messages automatically — so you can stay on the job
              instead of buried in your phone.
            </p>

            {/* Outcome chips */}
            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem", marginBottom: "2rem" }}>
              {[
                "✓ Booking confirmations",
                "✓ Invoice automation",
                "✓ Follow-up sequences",
                "✓ Review requests",
              ].map((c) => (
                <span
                  key={c}
                  style={{
                    padding: "0.3em 0.75em",
                    background: "var(--bg-card)",
                    border: "1px solid var(--border)",
                    borderRadius: "999px",
                    fontSize: "0.8rem",
                    color: "var(--text-secondary)",
                  }}
                >
                  {c}
                </span>
              ))}
            </div>

            {/* CTAs */}
            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.75rem" }}>
              <SparkleButton href="#pricing">Book a Free Call</SparkleButton>
            </div>
          </div>

          {/* Before / After card */}
          <BeforeAfterCard />

        </div>
      </div>

      <style>{`
        .hero-grid {
          display: grid;
          grid-template-columns: minmax(0, 1fr) 440px;
          gap: clamp(2rem, 4vw, 3.5rem);
          align-items: center;
        }
        @media (max-width: 820px) {
          .hero-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </section>
  );
}

/* ── Proof Bar ──────────────────────────────────────────────────── */
function ProofBar() {
  const metrics = [
    { num: "4,200+",  label: "Active contractors" },
    { num: "12 hrs",  label: "Saved per person / week" },
    { num: "$1.4M",   label: "In late invoices recovered" },
    { num: "< 10 min", label: "Average setup time" },
  ];

  return (
    <div style={{ background: "var(--bg-surface)", borderTop: "1px solid var(--border)", borderBottom: "1px solid var(--border)" }}>
      <div className="container">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
            paddingBlock: "2rem",
          }}
        >
          {metrics.map((m, i) => (
            <div
              key={m.label}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textAlign: "center",
                padding: "1rem",
                borderRight: i < metrics.length - 1 ? "1px solid var(--border)" : "none",
              }}
            >
              <span
                style={{
                  fontFamily: "var(--font-outfit), sans-serif",
                  fontWeight: 800,
                  fontSize: "clamp(1.6rem, 2.5vw, 2.4rem)",
                  lineHeight: 1,
                  color: "var(--text-primary)",
                  letterSpacing: "-0.02em",
                }}
              >
                {m.num}
              </span>
              <span style={{ fontSize: "0.8rem", color: "var(--text-muted)", marginTop: "0.35rem" }}>
                {m.label}
              </span>
            </div>
          ))}
        </div>

        {/* Placeholder logo strip */}
        <div
          style={{
            borderTop: "1px solid var(--border)",
            paddingBlock: "1.25rem",
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "center",
            gap: "1.5rem 2.5rem",
          }}
        >
          <span style={{ fontSize: "0.72rem", color: "var(--text-muted)", letterSpacing: "0.08em", textTransform: "uppercase" }}>
            Works with
          </span>
          {["QuickBooks", "Google Calendar", "Jobber", "Stripe", "ServiceTitan"].map((brand) => (
            <span
              key={brand}
              style={{
                fontSize: "0.85rem",
                fontWeight: 600,
                color: "var(--text-muted)",
                letterSpacing: "0.02em",
              }}
            >
              {brand}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ── Pain Section ───────────────────────────────────────────────── */
function PainSection() {
  const pains = [
    {
      stat: "3–6",
      label: "Jobs lost per month to slow replies",
      body: "Customers move on fast. If you don't respond within 5–10 minutes, you've likely lost the job to someone who did.",
    },
    {
      stat: "23%",
      label: "of Invoices go unpaid past 30 days",
      body: "Most unpaid invoices aren't disputes — they're forgotten. An automated nudge gets you paid without the awkward call.",
    },
    {
      stat: "400+",
      label: "Hours per year on admin work",
      body: "That's 10 full work weeks — gone. Spent on tasks a system could handle while you're on the site doing actual work.",
    },
  ];

  return (
    <AuroraBackground className="w-full items-start justify-start" showRadialGradient={false}>
    <section className="section" style={{ width: "100%" }}>
      <div className="container">
        <div style={{ textAlign: "center", marginBottom: "3rem" }}>
          <span className="section-tag-orange">The real cost of doing it manually</span>
          <h2 className="display-xl" style={{ maxWidth: "700px", margin: "0 auto" }}>
            <span className="grad-blue">Admin is quietly</span>{" "}
            <span className="grad-orange">draining your margin</span>
          </h2>
          <p
            className="body-lg"
            style={{ color: "var(--text-secondary)", marginTop: "1rem", maxWidth: "540px", margin: "1rem auto 0" }}
          >
            Every minute you spend on scheduling, chasing invoices, or typing follow-ups is money out of your pocket.
            Here&apos;s what it is actually costing you.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 300px), 1fr))",
            gap: "1.5rem",
          }}
        >
          {pains.map((p) => (
            <div
              key={p.stat}
              className="card"
              style={{
                padding: "1.75rem",
                borderColor: "var(--border-orange)",
                background: "linear-gradient(160deg, rgba(255,107,53,0.05) 0%, var(--bg-card) 50%)",
              }}
            >
              <p
                style={{
                  fontFamily: "var(--font-outfit), sans-serif",
                  fontWeight: 800,
                  fontSize: "clamp(2.4rem, 4vw, 3rem)",
                  lineHeight: 1,
                  color: "var(--orange)",
                  marginBottom: "0.6rem",
                }}
              >
                {p.stat}
              </p>
              <p
                style={{
                  fontFamily: "var(--font-outfit), sans-serif",
                  fontWeight: 700,
                  fontSize: "1rem",
                  color: "var(--text-primary)",
                  marginBottom: "0.85rem",
                  lineHeight: 1.3,
                }}
              >
                {p.label}
              </p>
              <p style={{ color: "var(--text-secondary)", fontSize: "0.9rem", lineHeight: 1.65 }}>
                {p.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
    </AuroraBackground>
  );
}

/* ── Benefits ───────────────────────────────────────────────────── */
function BenefitsSection() {
  const cards = [
    {
      icon: "📅",
      headline: "Automated Scheduling",
      body: "Customers book online. Your calendar updates instantly. Confirmations and reminders go out automatically — no back-and-forth texting.",
    },
    {
      icon: "🧾",
      headline: "Automatic Invoicing",
      body: "Invoices send the moment a job is marked complete. Payment reminders follow up for you. You get paid faster without lifting a finger.",
    },
    {
      icon: "💬",
      headline: "Customer Follow-Ups",
      body: "Review requests, seasonal reminders, and re-engagement messages go out automatically — keeping your pipeline full while you're on site.",
    },
    {
      icon: "⚡",
      headline: "Instant Lead Response",
      body: "New inquiry comes in — they get an immediate, professional reply. Even at 10pm. You never lose a lead to silence again.",
    },
    {
      icon: "🔗",
      headline: "Tool Integrations",
      body: "We wire into the tools you already use — Google Calendar, QuickBooks, Stripe, Jobber, HouseCall Pro and more. Nothing gets replaced.",
    },
    {
      icon: "🔧",
      headline: "Ongoing Support",
      body: "We don't build it and disappear. Your system gets maintained and adjusted as your business grows and changes.",
    },
  ];

  return (
    <section id="features" className="section" style={{ background: "var(--bg-base)" }}>
      <div className="container">
        {/* Header */}
        <div style={{ marginBottom: "3rem" }}>
          <span className="section-tag-orange">What we build for you</span>
          <h2 className="display-xl" style={{ maxWidth: "680px" }}>
            <span className="grad-blue">One system.</span>{" "}
            <span className="grad-orange">Everything automated.</span>
          </h2>
          <p className="body-lg" style={{ color: "var(--text-secondary)", marginTop: "1rem", maxWidth: "520px" }}>
            We connect your existing tools and build automations around your specific workflow.
            Nothing generic. Built for how you actually work.
          </p>
        </div>

        {/* 3×2 card grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 280px), 1fr))",
            gap: "1.25rem",
          }}
        >
          {cards.map((c) => (
            <GlowCard key={c.headline} style={{ padding: "1.5rem" }}>
              <div
                style={{
                  width: 40, height: 40,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  background: "rgba(255,107,53,0.10)",
                  border: "1px solid var(--border-orange)",
                  borderRadius: "var(--r-md)",
                  fontSize: "1.1rem",
                  marginBottom: "1rem",
                }}
              >
                {c.icon}
              </div>
              <p style={{ fontFamily: "var(--font-outfit), sans-serif", fontWeight: 700, fontSize: "0.95rem", color: "var(--text-primary)", marginBottom: "0.5rem" }}>
                {c.headline}
              </p>
              <p style={{ fontSize: "0.85rem", color: "var(--text-secondary)", lineHeight: 1.65 }}>
                {c.body}
              </p>
            </GlowCard>
          ))}
        </div>
      </div>
    </section>
  );
}


/* ── How it Works ───────────────────────────────────────────────── */
function HowItWorksSection() {
  const steps = [
    {
      num: "1",
      title: "Book a Free Strategy Call",
      desc: "30 minutes. We learn how your business runs, where time is being lost, and what tools you're already using.",
      subLabel: "What we cover",
      subBody: "Your current workflow, biggest pain points, tools you use, and exactly what a custom system would look like for you.",
    },
    {
      num: "2",
      title: "We Build Your System",
      desc: "We configure and connect everything. No work on your end. You don't learn new software or change how you work.",
      subLabel: "What we build",
      subBody: "Custom automations wired directly into your existing tools — scheduling, invoicing, follow-ups — all set up to match your workflow.",
    },
    {
      num: "3",
      title: "Go Back to Running Jobs",
      desc: "Your system runs 24/7 in the background. Jobs get booked, invoices go out, customers get followed up with — without you touching a thing.",
      subLabel: "What you get back",
      subBody: "Hours every week, faster payments, fewer missed jobs, and a business that keeps moving even when you're on a roof or under a sink.",
    },
  ];

  return (
    <AuroraBackground className="w-full items-start justify-start" showRadialGradient={false}>
    <section id="how-it-works" className="section" style={{ width: "100%" }}>
      <div className="container">
        <div style={{ marginBottom: "3.5rem" }}>
          <span className="section-tag-orange">How it works</span>
          <h2 className="display-xl" style={{ maxWidth: "700px" }}>
            <span className="grad-blue">Up and running in</span>{" "}
            <span className="grad-orange">under 48 hours.</span>
          </h2>
          <p className="body-lg" style={{ color: "var(--text-secondary)", marginTop: "0.75rem" }}>
            You have one call with us. We handle everything else.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 280px), 1fr))",
            gap: "1.5rem",
          }}
        >
          {steps.map((s) => (
            <div key={s.num} style={{ display: "flex", flexDirection: "column" }}>
              {/* Number badge */}
              <div
                style={{
                  width: 44,
                  height: 44,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  background: "linear-gradient(135deg, var(--orange) 0%, var(--orange-warm) 100%)",
                  borderRadius: "var(--r-md)",
                  fontFamily: "var(--font-outfit), sans-serif",
                  fontWeight: 800,
                  fontSize: "1.2rem",
                  color: "#fff",
                  boxShadow: "var(--shadow-orange)",
                  marginBottom: "1.25rem",
                  flexShrink: 0,
                }}
              >
                {s.num}
              </div>

              <h3 style={{ fontFamily: "var(--font-outfit), sans-serif", fontWeight: 700, fontSize: "1.05rem", color: "var(--text-primary)", marginBottom: "0.6rem" }}>
                {s.title}
              </h3>
              <p style={{ color: "var(--text-secondary)", fontSize: "0.88rem", lineHeight: 1.65, marginBottom: "1rem" }}>
                {s.desc}
              </p>

              {/* Sub-card */}
              <div
                style={{
                  marginTop: "auto",
                  padding: "0.9rem 1rem",
                  background: "rgba(255,107,53,0.06)",
                  border: "1px solid var(--border-orange)",
                  borderRadius: "var(--r-md)",
                }}
              >
                <p style={{ fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--orange)", marginBottom: "0.4rem" }}>
                  {s.subLabel}
                </p>
                <p style={{ fontSize: "0.82rem", color: "var(--text-secondary)", lineHeight: 1.6 }}>
                  {s.subBody}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
    </AuroraBackground>
  );
}

/* ── Testimonials ───────────────────────────────────────────────── */
function TestimonialsSection() {
  const testimonials = [
    {
      quote: "I was spending Sunday nights doing invoices. With EchosLogic, they go out automatically the second I mark a job done. Collected $8,400 in late invoices in the first month.",
      name: "[REPLACE: Contractor Name]",
      trade: "HVAC · [REPLACE: City, State]",
      metric: "Payment time: 18 days → 4 days",
    },
    {
      quote: "I almost hired a part-time admin. Instead I signed up for EchosLogic. It handles follow-ups, confirmations, and review requests. I got 23 new Google reviews in 6 weeks.",
      name: "[REPLACE: Contractor Name]",
      trade: "Plumbing · [REPLACE: City, State]",
      metric: "Google rating: 3.9 → 4.8 ★",
    },
    {
      quote: "Setup was 8 minutes. Connected to Google Calendar, QuickBooks, and Stripe. Within 48 hours I had automated reminders running and my first invoice paid through the platform.",
      name: "[REPLACE: Contractor Name]",
      trade: "Electrical · [REPLACE: City, State]",
      metric: "Setup time: 8 minutes flat",
    },
  ];

  return (
    <section className="section" style={{ background: "var(--bg-surface)" }}>
      <div className="container">
        <div style={{ textAlign: "center", marginBottom: "3rem" }}>
          <span className="section-tag">Proof</span>
          <h2 className="display-xl" style={{ maxWidth: "640px", margin: "0 auto" }}>
            Real contractors.{" "}
            <span className="grad-blue">Real numbers.</span>
          </h2>
          <p style={{ color: "var(--text-secondary)", marginTop: "0.75rem", fontSize: "0.82rem" }}>
            ⚠️ Testimonials marked <strong>[REPLACE]</strong> are placeholders — swap with real customer quotes before launch.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 300px), 1fr))",
            gap: "1.5rem",
          }}
        >
          {testimonials.map((t, i) => (
            <div key={i} className="card" style={{ padding: "1.75rem" }}>
              <div style={{ display: "flex", gap: "2px", marginBottom: "1rem" }}>
                {[1,2,3,4,5].map((s) => (
                  <span key={s} aria-hidden="true" style={{ color: "#F59E0B", fontSize: "0.9rem" }}>★</span>
                ))}
                <span className="sr-only">5 out of 5 stars</span>
              </div>
              <p style={{ color: "var(--text-primary)", lineHeight: 1.65, fontSize: "0.92rem", marginBottom: "1.25rem", fontStyle: "italic" }}>
                &ldquo;{t.quote}&rdquo;
              </p>
              <div style={{ paddingTop: "1rem", borderTop: "1px solid var(--border)" }}>
                <p style={{ fontFamily: "var(--font-outfit), sans-serif", fontWeight: 700, fontSize: "0.9rem" }}>{t.name}</p>
                <p style={{ fontSize: "0.78rem", color: "var(--text-muted)", marginTop: "0.2rem" }}>{t.trade}</p>
                <div
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    marginTop: "0.75rem",
                    padding: "0.25em 0.65em",
                    background: "var(--blue-dim)",
                    border: "1px solid var(--border-blue)",
                    borderRadius: "999px",
                    fontSize: "0.75rem",
                    color: "var(--blue-bright)",
                    fontWeight: 600,
                  }}
                >
                  {t.metric}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── Pricing ────────────────────────────────────────────────────── */
function PricingSection() {
  const tiers = [
    {
      name: "Starter",
      price: "$49",
      tagline: "Perfect for solo operators",
      features: [
        "1 user",
        "Unlimited automations",
        "3 core integrations",
        "Invoice automation",
        "Booking confirmations",
        "Email + SMS follow-ups",
        "Community support",
      ],
      cta: "Start free trial",
      featured: false,
    },
    {
      name: "Pro",
      price: "$99",
      tagline: "For growing crews — most popular",
      features: [
        "Up to 5 users",
        "Everything in Starter",
        "All 40+ integrations",
        "Custom workflow builder",
        "Review request sequences",
        "Reporting dashboard",
        "Priority support (4hr)",
      ],
      cta: "Start free trial",
      featured: true,
      badge: "Most popular",
    },
    {
      name: "Team",
      price: "$199",
      tagline: "Multi-location or enterprise",
      features: [
        "Unlimited users",
        "Everything in Pro",
        "White-label client portal",
        "API access",
        "Custom onboarding",
        "Dedicated account manager",
        "SLA guarantee",
      ],
      cta: "Talk to sales",
      featured: false,
    },
  ];

  return (
    <section id="pricing" className="section">
      <div className="container">
        <div style={{ textAlign: "center", marginBottom: "3rem" }}>
          <span className="section-tag">Pricing</span>
          <h2 className="display-xl" style={{ maxWidth: "680px", margin: "0 auto" }}>
            Pays for itself with{" "}
            <span className="grad-blue">one recovered invoice</span>
          </h2>
          <p className="body-lg" style={{ color: "var(--text-secondary)", marginTop: "1rem" }}>
            14-day free trial on all plans. No credit card required.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 280px), 1fr))",
            gap: "1.5rem",
            alignItems: "start",
          }}
        >
          {tiers.map((t) => (
            <div
              key={t.name}
              className="pricing-card"
              style={t.featured ? { transform: "scale(1.02)" } : {}}
            >
              {t.badge && (
                <div
                  style={{
                    position: "absolute",
                    top: "-12px",
                    left: "50%",
                    transform: "translateX(-50%)",
                    padding: "0.25em 1em",
                    background: "linear-gradient(135deg, var(--blue) 0%, var(--blue-bright) 100%)",
                    borderRadius: "999px",
                    fontSize: "0.72rem",
                    fontWeight: 700,
                    color: "#fff",
                    whiteSpace: "nowrap",
                  }}
                >
                  {t.badge}
                </div>
              )}

              <p style={{ fontFamily: "var(--font-outfit), sans-serif", fontWeight: 700, fontSize: "0.9rem", color: "var(--text-secondary)", marginBottom: "0.5rem" }}>
                {t.name}
              </p>
              <div style={{ display: "flex", alignItems: "baseline", gap: "0.1em", marginBottom: "0.35rem" }}>
                <span
                  style={{
                    fontFamily: "var(--font-outfit), sans-serif",
                    fontWeight: 800,
                    fontSize: "clamp(2.2rem, 3vw, 2.8rem)",
                    lineHeight: 1,
                    color: t.featured ? "var(--blue-bright)" : "var(--text-primary)",
                  }}
                >
                  {t.price}
                </span>
                <span style={{ color: "var(--text-muted)", fontSize: "0.9rem" }}>/mo</span>
              </div>
              <p style={{ fontSize: "0.82rem", color: "var(--text-muted)", marginBottom: "1.5rem" }}>{t.tagline}</p>

              <ul style={{ display: "flex", flexDirection: "column", gap: "0.6rem", marginBottom: "1.75rem" }}>
                {t.features.map((f) => (
                  <li key={f} style={{ display: "flex", alignItems: "flex-start", gap: "0.5rem", fontSize: "0.88rem", color: "var(--text-secondary)" }}>
                    <span style={{ color: "var(--green)", flexShrink: 0, marginTop: "1px" }}>✓</span>
                    {f}
                  </li>
                ))}
              </ul>

              <a
                href="#"
                className={t.featured ? "btn-primary" : "btn-ghost"}
                style={{ width: "100%", justifyContent: "center" }}
              >
                {t.cta}
              </a>
            </div>
          ))}
        </div>

        <div
          style={{
            marginTop: "2.5rem",
            padding: "1.25rem 1.75rem",
            background: "var(--bg-surface)",
            border: "1px solid var(--border)",
            borderRadius: "var(--r-lg)",
            display: "flex",
            flexWrap: "wrap",
            gap: "1rem",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
          }}
        >
          {["🔒 No credit card for trial", "⚡ Setup in under 10 min", "↩ Cancel anytime, no fees", "🛡 30-day money-back guarantee"].map((item) => (
            <span key={item} style={{ fontSize: "0.82rem", color: "var(--text-secondary)" }}>{item}</span>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── Final CTA ──────────────────────────────────────────────────── */
function CtaSection() {
  return (
    <section className="section" style={{ background: "var(--bg-surface)" }}>
      <div className="container">
        <div
          style={{
            position: "relative",
            background: "linear-gradient(135deg, #0a1a3d 0%, #0c1225 50%, #120820 100%)",
            border: "1px solid var(--border-blue)",
            borderRadius: "var(--r-xl)",
            padding: "clamp(2.5rem, 6vw, 5rem)",
            textAlign: "center",
            overflow: "hidden",
          }}
        >
          <div className="blob-blue" style={{ width: "400px", height: "400px", top: "-100px", left: "-100px" }} />
          <div className="blob-orange" style={{ width: "300px", height: "300px", bottom: "-80px", right: "-60px" }} />

          <div style={{ position: "relative", zIndex: 1 }}>
            <h2 className="display-xl" style={{ maxWidth: "700px", margin: "0 auto 1rem" }}>
              <span className="grad-orange">Start reclaiming your week</span>{" "}
              <span className="grad-blue">today</span>
            </h2>
            <p className="body-lg" style={{ color: "var(--text-secondary)", maxWidth: "520px", margin: "0 auto 2.5rem" }}>
              Book a free 30-minute call. We&apos;ll map out exactly what we&apos;d automate for your
              business — no obligation, no fluff.
            </p>
            <div className="cta-btn-group" style={{ display: "flex", flexWrap: "wrap", gap: "1rem", justifyContent: "center", marginBottom: "2rem" }}>
              <SparkleButton href="#">Book a Free Call</SparkleButton>
            </div>
            <p style={{ fontSize: "0.85rem", color: "var(--text-muted)" }}>
              Free call · No commitment · Built specifically for your business
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── Footer ─────────────────────────────────────────────────────── */
function Footer() {
  const footerCols = [
    { heading: "Company", links: ["About", "Blog", "Contact"] },
    { heading: "Legal",   links: ["Privacy Policy", "Terms of Service", "Security"] },
  ];

  return (
    <footer style={{ background: "var(--bg-base)", borderTop: "1px solid var(--border)", paddingBlock: "3rem" }}>
      <div className="container">
        <div style={{ display: "flex", flexWrap: "wrap", gap: "2rem", justifyContent: "space-between", marginBottom: "2rem" }}>
          <div style={{ maxWidth: "280px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "0.75rem" }}>
              <Image src="/el-logo.png" alt="EchosLogic" width={48} height={48} style={{ borderRadius: "6px", display: "block", marginTop: "2px" }} />
              <span style={{ fontFamily: "var(--font-outfit), sans-serif", fontWeight: 800, fontSize: "1rem" }}>
                Echos<span style={{ color: "var(--blue-bright)" }}>Logic</span>
              </span>
            </div>
            <p style={{ fontSize: "0.82rem", color: "var(--text-muted)", lineHeight: 1.6 }}>
              Automation for HVAC, plumbing, electrical, cleaning, and landscaping.
              Less admin. More revenue.
            </p>
          </div>
          {footerCols.map((col) => (
            <div key={col.heading}>
              <p style={{ fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--text-muted)", marginBottom: "0.85rem" }}>
                {col.heading}
              </p>
              <ul style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                {col.links.map((l) => (
                  <li key={l}>
                    <a href="#" className="footer-link">{l}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div style={{ height: "1px", background: "var(--border)" }} />
        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "center", gap: "1rem", paddingTop: "1.5rem", fontSize: "0.78rem", color: "var(--text-muted)" }}>
          <p>© {new Date().getFullYear()} EchosLogic. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

/* ── Helpers ────────────────────────────────────────────────────── */
function ArrowRight() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

function Stars() {
  return (
    <span aria-hidden="true" style={{ display: "flex", gap: "1px" }}>
      {[1,2,3,4,5].map((s) => (
        <svg key={s} width="14" height="14" viewBox="0 0 14 14" fill="#F59E0B">
          <path d="M7 1l1.8 3.6 4 .6-2.9 2.8.7 4L7 10 3.4 12l.7-4L1.2 5.2l4-.6z"/>
        </svg>
      ))}
    </span>
  );
}
