"use client"

import { useLanguage } from "@/contexts/LanguageContext"
import { t } from "@/data/translations"
import { portfolio } from "@/data/portfolio"

export default function Services() {
  const { lang } = useLanguage()
  const tx = t[lang].servicesSection
  const services = t[lang].services

  return (
    <section id="servicios" className="py-16 sm:py-24 border-t border-gray-100">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10 sm:mb-16">
          <div>
            <p className="text-xs tracking-widest text-gray-400 uppercase mb-3">{tx.label}</p>
            <h2 className="text-3xl sm:text-4xl font-medium text-gray-900 leading-tight">
              {tx.heading[0]}<br />{tx.heading[1]}
            </h2>
          </div>
          <a
            href="#contacto"
            className="text-sm text-gray-400 hover:text-amber-500 transition-colors underline underline-offset-4 self-start sm:self-auto"
          >
            {tx.cta}
          </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-gray-100">
          {portfolio.services.map((service, i) => {
            const s = services[i] ?? service
            return (
              <div
                key={service.number}
                className={`bg-white p-6 sm:p-8 group hover:bg-gray-900 transition-colors duration-300 cursor-default${i === portfolio.services.length - 1 && portfolio.services.length % 2 !== 0 ? " sm:col-span-2" : ""}`}
              >
                <div className="flex items-start justify-between mb-8">
                  <span className="text-4xl font-medium text-amber-400 leading-none">{service.number}</span>
                  <svg
                    className="w-5 h-5 text-gray-200 group-hover:text-amber-400 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300"
                    fill="none" stroke="currentColor" viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </div>
                <h3 className="text-xl font-medium text-gray-900 group-hover:text-white mb-3 transition-colors duration-300">
                  {s.title}
                </h3>
                <p className="text-gray-500 group-hover:text-gray-400 text-sm leading-relaxed transition-colors duration-300">
                  {s.description}
                </p>
                {"tags" in s && s.tags && (
                  <div className="flex flex-wrap gap-2 mt-4">
                    {s.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-2.5 py-1 rounded-full border border-gray-200 text-gray-500 group-hover:border-white/15 group-hover:text-gray-300 transition-colors duration-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            )
          })}
        </div>

        <div className="mt-6 flex items-start gap-3 px-1">
          <svg className="w-4 h-4 shrink-0 mt-0.5" style={{ color: "#fbbf24" }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <p className="text-xs text-gray-400 leading-relaxed">{tx.disclaimer}</p>
        </div>

      </div>
    </section>
  )
}
