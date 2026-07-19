"use client"

import { useLanguage } from "@/contexts/LanguageContext"
import { t } from "@/data/translations"
import { portfolio } from "@/data/portfolio"
import { ScrambleText } from "@/components/ScrambleText"
import { MagneticButton } from "@/components/ui/magnetic-button"

export default function Towme() {
  const { lang } = useLanguage()
  const tx = t[lang].towmeSection
  const waMsg = encodeURIComponent(
    lang === "es"
      ? "Hola! Quiero que me avisen cuando Towme esté disponible. 🙂"
      : "Hi! I'd like to be notified when Towme is available. 🙂"
  )
  const waHref = `https://wa.me/${portfolio.contact.whatsapp}?text=${waMsg}`

  return (
    <section id="towme" className="py-16 sm:py-24 border-t border-gray-100">
      <div className="max-w-6xl mx-auto px-6">

        <p className="text-xs tracking-widest text-gray-400 uppercase mb-10">
          {tx.label}
        </p>

        {/* Product card */}
        <div
          className="relative rounded-3xl overflow-hidden px-8 py-14 sm:px-16 sm:py-20"
          style={{
            background: "linear-gradient(135deg, #0d0a2e 0%, #1e1b4b 40%, #0f172a 100%)",
          }}
        >
          {/* Subtle grid pattern */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              backgroundImage:
                "linear-gradient(rgba(99,102,241,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(99,102,241,0.06) 1px, transparent 1px)",
              backgroundSize: "48px 48px",
            }}
          />

          {/* Glow orb */}
          <div
            className="absolute pointer-events-none"
            style={{
              width: 480,
              height: 480,
              borderRadius: "50%",
              background: "radial-gradient(circle, rgba(99,102,241,0.18) 0%, transparent 70%)",
              right: -80,
              top: -80,
            }}
          />

          <div className="relative">
            {/* Badge */}
            <span
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium mb-10"
              style={{
                background: "rgba(99,102,241,0.15)",
                border: "0.5px solid rgba(99,102,241,0.35)",
                color: "#a5b4fc",
              }}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 animate-pulse" />
              {tx.badge}
            </span>

            {/* Product name */}
            <h2
              className="text-6xl sm:text-8xl font-bold text-white mb-4"
              style={{ letterSpacing: "-0.035em", lineHeight: 1 }}
            >
              <ScrambleText text="Towme" delay={120} />
            </h2>

            {/* Tagline */}
            <p
              className="text-lg sm:text-xl font-medium mb-4"
              style={{ color: "rgba(255,255,255,0.55)" }}
            >
              {tx.tagline}
            </p>

            {/* Description */}
            <p
              className="text-sm leading-relaxed max-w-md mb-10"
              style={{ color: "rgba(255,255,255,0.35)" }}
            >
              {tx.description}
            </p>

            {/* CTA */}
            <div className="flex flex-wrap items-center gap-4">
              <MagneticButton>
                <a
                  href={waHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-medium transition-all duration-300"
                  style={{
                    background: "linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)",
                    color: "#fff",
                    boxShadow: "0 0 0 0 rgba(99,102,241,0.4)",
                  }}
                  onMouseEnter={e => (e.currentTarget.style.boxShadow = "0 0 28px rgba(99,102,241,0.45)")}
                  onMouseLeave={e => (e.currentTarget.style.boxShadow = "0 0 0 0 rgba(99,102,241,0.4)")}
                >
                  {tx.notify}
                </a>
              </MagneticButton>

              <span
                className="text-xs"
                style={{ color: "rgba(255,255,255,0.2)" }}
              >
                {tx.by}
              </span>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
