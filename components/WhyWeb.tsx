"use client"

import { useLanguage } from "@/contexts/LanguageContext"
import { t } from "@/data/translations"
import { ScrambleText } from "@/components/ScrambleText"

export default function WhyWeb() {
  const { lang } = useLanguage()
  const tx = t[lang].whySection
  const reasons = t[lang].reasons

  return (
    <section id="por-que" className="py-16 sm:py-24 border-t border-gray-100">
      <div className="max-w-6xl mx-auto px-6">

        <div className="max-w-2xl mb-10 sm:mb-16">
          <p className="text-xs tracking-widest text-gray-400 uppercase mb-3">{tx.label}</p>
          <h2 className="text-3xl sm:text-4xl font-medium text-gray-900 leading-tight">
            <ScrambleText text={tx.heading[0]} /><br />
            <ScrambleText text={tx.heading[1]} delay={160} />
          </h2>
          <p className="mt-4 text-gray-500 text-lg leading-relaxed">{tx.body}</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-gray-100 mb-10 sm:mb-16">
          {reasons.map((r, i) => (
            <div key={i} className="bg-white p-6 sm:p-8 group hover:bg-gray-50 transition-colors">
              <p className="text-xs text-gray-300 font-mono mb-5">0{i + 1}</p>
              <div className="flex items-baseline gap-2 mb-1">
                <span className="text-4xl font-medium text-gray-900">{r.stat}</span>
              </div>
              <p className="text-xs text-gray-400 mb-5 leading-relaxed">{r.statLabel}</p>
              <h3 className="text-base font-medium text-gray-900 mb-2">{r.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">{r.body}</p>
            </div>
          ))}
        </div>

        <div className="border border-gray-100 rounded-2xl p-8 sm:p-12 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div className="max-w-lg">
            <p className="text-xs tracking-widest text-gray-400 uppercase mb-2">{tx.ctaLabel}</p>
            <h3 className="text-2xl font-medium text-gray-900 leading-snug">
              {tx.ctaTitle[0]}<br />{tx.ctaTitle[1]}
            </h3>
            <p className="mt-3 text-gray-500 text-sm leading-relaxed">{tx.ctaBody}</p>
          </div>
          <a
            href="#contacto"
            className="shrink-0 inline-flex items-center gap-2 px-6 py-3 bg-gray-900 text-white text-sm font-medium rounded-full hover:bg-gray-700 transition-colors"
          >
            {tx.ctaBtn}
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>

      </div>
    </section>
  )
}
