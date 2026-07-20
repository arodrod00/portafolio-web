"use client"

import { useState } from "react"
import { useLanguage } from "@/contexts/LanguageContext"
import { t } from "@/data/translations"
import { portfolio } from "@/data/portfolio"
import { ScrambleText } from "@/components/ScrambleText"

export default function Services() {
  const { lang } = useLanguage()
  const tx = t[lang].servicesSection
  const services = t[lang].services

  const [active, setActive] = useState(0)
  const [openMobile, setOpenMobile] = useState<number | null>(0)
  const [visible, setVisible] = useState(true)

  const handleSelect = (i: number) => {
    if (i === active) return
    setVisible(false)
    setTimeout(() => { setActive(i); setVisible(true) }, 160)
  }

  const current = services[active]
  const currentNum = portfolio.services[active]?.number ?? String(active + 1).padStart(2, "0")

  return (
    <section id="servicios" className="py-16 sm:py-24 border-t border-gray-100">
      <div className="max-w-6xl mx-auto px-6">

        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10 sm:mb-14">
          <div>
            <p className="text-xs tracking-widest text-gray-400 uppercase mb-3">{tx.label}</p>
            <h2 className="text-3xl sm:text-4xl font-medium text-gray-900 leading-tight">
              <ScrambleText text={tx.heading[0]} /><br />
              <ScrambleText text={tx.heading[1]} delay={160} />
            </h2>
          </div>
          <a
            href="#contacto"
            className="text-sm text-gray-400 hover:text-amber-500 transition-colors underline underline-offset-4 self-start sm:self-auto"
          >
            {tx.cta}
          </a>
        </div>

        {/* ── Mobile: Accordion (< md) ── */}
        <div className="md:hidden border-t border-gray-100">
          {services.map((s, i) => {
            const num = portfolio.services[i]?.number ?? String(i + 1).padStart(2, "0")
            const isOpen = openMobile === i
            return (
              <div key={i} className="border-b border-gray-100">
                <button
                  onClick={() => setOpenMobile(isOpen ? null : i)}
                  className="w-full flex items-center gap-4 py-4 text-left"
                >
                  <span className="text-base font-light text-amber-400 tabular-nums min-w-[32px]">{num}</span>
                  <span className="flex-1 text-sm font-semibold text-gray-900">{s.title}</span>
                  <svg
                    className={`w-4 h-4 text-gray-300 flex-shrink-0 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
                    fill="none" stroke="currentColor" viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? "max-h-96 pb-5" : "max-h-0"}`}>
                  <div className="pl-[48px] pr-2">
                    <p className="text-sm text-gray-500 leading-relaxed mb-4">{s.description}</p>
                    {"tags" in s && s.tags && (
                      <div className="flex flex-wrap gap-2 mb-4">
                        {s.tags.map(tag => (
                          <span key={tag} className="text-xs px-2.5 py-1 rounded-full border border-gray-200 text-gray-400">
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}
                    <a
                      href="#contacto"
                      className="inline-flex items-center gap-1.5 text-xs font-medium text-gray-900 hover:text-amber-500 transition-colors"
                    >
                      {tx.cta}
                    </a>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* ── Tablet / Desktop: Split Panel (≥ md) ── */}
        <div className="hidden md:grid md:grid-cols-[220px_1fr] lg:grid-cols-[260px_1fr] border border-gray-100 rounded-xl overflow-hidden">

          {/* Left nav */}
          <nav className="border-r border-gray-100">
            {services.map((s, i) => {
              const num = portfolio.services[i]?.number ?? String(i + 1).padStart(2, "0")
              const isActive = active === i
              return (
                <button
                  key={i}
                  onClick={() => handleSelect(i)}
                  className={`w-full flex items-center gap-3 px-5 py-[14px] text-left border-b border-gray-100 last:border-b-0 transition-colors duration-200 ${
                    isActive ? "bg-gray-900" : "hover:bg-gray-50"
                  }`}
                >
                  <span className={`text-sm font-light tabular-nums min-w-[24px] transition-colors ${isActive ? "text-amber-400" : "text-gray-300"}`}>
                    {num}
                  </span>
                  <span className={`text-[13px] font-medium leading-snug flex-1 transition-colors ${isActive ? "text-white" : "text-gray-700"}`}>
                    {s.title}
                  </span>
                  <span className={`text-base leading-none transition-colors ${isActive ? "text-white" : "text-transparent"}`}>›</span>
                </button>
              )
            })}
          </nav>

          {/* Right detail */}
          <div className="p-8 lg:p-12 bg-gray-50 flex flex-col justify-center min-h-[360px] lg:min-h-[400px]">
            <div
              className="transition-opacity duration-150"
              style={{ opacity: visible ? 1 : 0 }}
            >
              <span className="block text-5xl lg:text-6xl font-light text-amber-400 leading-none tabular-nums tracking-tight mb-6">
                {currentNum}
              </span>
              <h3 className="text-xl lg:text-2xl font-semibold text-gray-900 mb-3">
                {current.title}
              </h3>
              <p className="text-sm text-gray-500 leading-relaxed mb-6 max-w-md lg:max-w-lg">
                {current.description}
              </p>
              {"tags" in current && current.tags && (
                <div className="flex flex-wrap gap-2 mb-6">
                  {current.tags.map(tag => (
                    <span key={tag} className="text-xs px-3 py-1.5 rounded-full border border-gray-200 text-gray-500">
                      {tag}
                    </span>
                  ))}
                </div>
              )}
              <a
                href="#contacto"
                className="inline-flex items-center gap-2 text-sm font-medium text-gray-900 hover:text-amber-500 transition-colors"
              >
                {tx.cta}
              </a>
            </div>
          </div>

        </div>

        {/* Disclaimer */}
        <div className="mt-6 flex items-start gap-3 px-1">
          <svg className="w-4 h-4 shrink-0 mt-0.5 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <p className="text-xs text-gray-400 leading-relaxed">{tx.disclaimer}</p>
        </div>

      </div>
    </section>
  )
}
