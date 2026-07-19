"use client"

import { useLanguage } from "@/contexts/LanguageContext"
import { t } from "@/data/translations"
import { portfolio } from "@/data/portfolio"
import { ScrambleText } from "@/components/ScrambleText"

export default function AboutRelift() {
  const { lang } = useLanguage()
  const tx = t[lang].aboutSection
  const stats = t[lang].stats

  return (
    <section
      id="about"
      className="py-20 sm:py-32 relative overflow-hidden"
      style={{ background: "#080c1a" }}
    >
      {/* Subtle background glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 50% at 80% 50%, rgba(99,102,241,0.07) 0%, transparent 70%)",
        }}
      />

      <div className="relative max-w-6xl mx-auto px-6">

        {/* Label */}
        <p
          className="text-xs tracking-widest uppercase mb-14"
          style={{ color: "rgba(165,180,252,0.5)" }}
        >
          {tx.label}
        </p>

        {/* Main grid */}
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 mb-20">

          {/* Left: headline + bio + founder */}
          <div>
            <h2
              className="text-4xl sm:text-5xl font-semibold text-white leading-[1.1] tracking-tight mb-8"
              style={{ letterSpacing: "-0.02em" }}
            >
              <ScrambleText text={tx.headline[0]} /><br />
              <span style={{ color: "#a5b4fc" }}>
                <ScrambleText text={tx.headline[1]} delay={180} />
              </span>
            </h2>

            <p
              className="text-base leading-relaxed mb-10"
              style={{ color: "rgba(255,255,255,0.48)" }}
            >
              {tx.bio}
            </p>

            {/* Founder card */}
            <div
              className="inline-flex items-center gap-4 px-5 py-4 rounded-2xl"
              style={{
                background: "rgba(255,255,255,0.04)",
                border: "0.5px solid rgba(255,255,255,0.08)",
              }}
            >
              <div
                className="w-11 h-11 rounded-full flex items-center justify-center text-sm font-semibold shrink-0"
                style={{ background: "rgba(99,102,241,0.18)", color: "#a5b4fc" }}
              >
                AR
              </div>
              <div>
                <p className="text-white text-sm font-medium leading-snug">
                  {portfolio.founder}
                </p>
                <p className="text-xs mt-0.5" style={{ color: "rgba(255,255,255,0.35)" }}>
                  {tx.founderRole}
                </p>
              </div>
            </div>
          </div>

          {/* Right: differentiators */}
          <div className="lg:pt-2">
            <p
              className="text-xs tracking-widest uppercase mb-8"
              style={{ color: "rgba(255,255,255,0.25)" }}
            >
              {tx.diffLabel}
            </p>

            <div className="space-y-8">
              {tx.diff.map(({ title, body }) => (
                <div key={title} className="flex gap-4">
                  <span
                    className="mt-0.5 shrink-0 text-sm"
                    style={{ color: "#6366f1" }}
                  >
                    →
                  </span>
                  <div>
                    <p className="text-white text-sm font-medium mb-1.5">{title}</p>
                    <p
                      className="text-sm leading-relaxed"
                      style={{ color: "rgba(255,255,255,0.38)" }}
                    >
                      {body}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Stats row */}
        <div
          className="grid grid-cols-3 gap-6 sm:gap-10 pt-10"
          style={{ borderTop: "0.5px solid rgba(255,255,255,0.07)" }}
        >
          {portfolio.stats.map((s, i) => (
            <div key={i}>
              <p
                className="text-3xl sm:text-4xl font-semibold mb-1"
                style={{ color: "#a5b4fc" }}
              >
                {s.number}
              </p>
              <p className="text-xs leading-snug" style={{ color: "rgba(255,255,255,0.28)" }}>
                {stats[i]?.label ?? s.label}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
