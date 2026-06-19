"use client"

import { useLanguage } from "@/contexts/LanguageContext"
import { t } from "@/data/translations"
import { portfolio } from "@/data/portfolio"

export default function Hero() {
  const { lang } = useLanguage()
  const tx = t[lang].hero
  const stats = t[lang].stats
  const waMsg = t[lang].whatsapp.message
  const { name, location, availableForWork, contact } = portfolio
  const waHref = `https://wa.me/${contact.whatsapp}?text=${encodeURIComponent(waMsg)}`
  const [first, ...rest] = name.split(" ")
  const last = rest.join(" ")

  return (
    <section
      id="inicio"
      className="min-h-screen flex flex-col pt-16"
      style={{ background: "#0a0a0a" }}
    >
      <div
        className="absolute top-0 left-0 right-0 h-[60vh] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 50% at 20% -10%, rgba(251,191,36,0.08) 0%, transparent 60%)",
        }}
      />

      <div className="flex-1 max-w-6xl mx-auto px-6 py-20 flex flex-col justify-center relative">
        {availableForWork && (
          <div
            className="inline-flex items-center gap-2 mb-10 self-start px-3 py-1.5 rounded-full"
            style={{ background: "rgba(255,255,255,0.05)", border: "0.5px solid rgba(255,255,255,0.1)" }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-xs text-white/40 tracking-wide">{tx.available}</span>
          </div>
        )}

        <div className="flex items-center gap-3 mb-5">
          <span className="text-base sm:text-lg font-medium text-white">
            {first} <span style={{ color: "#fbbf24" }}>{last}</span>
          </span>
          <span className="text-xs uppercase tracking-[0.2em]" style={{ color: "rgba(255,255,255,0.3)" }}>
            {tx.role}
          </span>
        </div>

        <h1
          className="font-medium text-white leading-tight tracking-tight mb-10 max-w-4xl"
          style={{ fontSize: "clamp(34px, 6vw, 80px)", letterSpacing: "-0.02em" }}
        >
          {tx.tagline}
        </h1>

        <div className="flex flex-wrap gap-3">
          <a
            href="#estilos"
            className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium rounded-full transition-all hover:scale-105"
            style={{ background: "#fbbf24", color: "#0a0a0a" }}
          >
            {tx.viewProjects}
          </a>
          <a
            href={waHref}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium rounded-full transition-all"
            style={{ border: "0.5px solid rgba(255,255,255,0.15)", color: "rgba(255,255,255,0.7)" }}
          >
            {tx.whatsapp}
          </a>
        </div>
      </div>

      <div
        className="max-w-6xl mx-auto w-full px-6 py-8 relative"
        style={{ borderTop: "0.5px solid rgba(255,255,255,0.08)" }}
      >
        <div className="flex flex-wrap items-center gap-x-8 sm:gap-x-12 gap-y-4">
          {portfolio.stats.map((s, i) => (
            <div key={i} className="flex items-baseline gap-2">
              <span className="text-3xl font-medium text-white">{s.number}</span>
              <span className="text-sm" style={{ color: "rgba(255,255,255,0.3)" }}>
                {stats[i]?.label ?? s.label}
              </span>
            </div>
          ))}
          <div
            className="ml-auto flex items-center gap-1.5 text-sm"
            style={{ color: "rgba(255,255,255,0.2)" }}
          >
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            {location}
          </div>
        </div>
      </div>
    </section>
  )
}
