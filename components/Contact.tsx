"use client"

import { useLanguage } from "@/contexts/LanguageContext"
import { t } from "@/data/translations"
import { portfolio } from "@/data/portfolio"

export default function Contact() {
  const { lang } = useLanguage()
  const tx = t[lang].contactSection
  const { contact } = portfolio

  return (
    <section id="contacto" className="py-16 sm:py-24 border-t border-gray-100">
      <div className="max-w-6xl mx-auto px-6">

        <div
          className="rounded-3xl p-10 sm:p-16 mb-16 text-center"
          style={{ background: "#0a0a0a" }}
        >
          <p className="text-xs tracking-widest uppercase mb-4" style={{ color: "rgba(255,255,255,0.3)" }}>
            {tx.badge}
          </p>
          <h2
            className="font-medium text-white leading-tight mb-6"
            style={{ fontSize: "clamp(32px, 5vw, 64px)", letterSpacing: "-0.02em" }}
          >
            {tx.heading[0]}<br />{tx.heading[1]}
            <span style={{ color: "#fbbf24" }}>{tx.heading[2]}</span>
          </h2>
          <p className="text-lg mb-10" style={{ color: "rgba(255,255,255,0.4)" }}>
            {tx.subheading}
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <a
              href={`https://wa.me/${contact.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-7 py-3.5 text-sm font-medium rounded-full transition-all hover:scale-105"
              style={{ background: "#fbbf24", color: "#0a0a0a" }}
            >
              {tx.btnWA}
            </a>
            <a
              href={`mailto:${contact.email}`}
              className="inline-flex items-center gap-2 px-7 py-3.5 text-sm font-medium rounded-full transition-all"
              style={{ border: "0.5px solid rgba(255,255,255,0.15)", color: "rgba(255,255,255,0.65)" }}
            >
              {tx.btnEmail}
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <a
            href={`mailto:${contact.email}`}
            className="group flex items-center gap-4 p-5 border border-gray-100 rounded-2xl hover:border-gray-300 hover:bg-gray-50 transition-all"
          >
            <div className="w-10 h-10 rounded-full bg-gray-100 group-hover:bg-white flex items-center justify-center transition-colors shrink-0">
              <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <div className="min-w-0">
              <p className="text-xs text-gray-400 mb-0.5">{tx.labelEmail}</p>
              <p className="text-sm font-medium text-gray-900 truncate">{contact.email}</p>
            </div>
          </a>

          <a
            href={`tel:${contact.phone.replace(/[\s\(\)\-]/g, "")}`}
            className="group flex items-center gap-4 p-5 border border-gray-100 rounded-2xl hover:border-gray-300 hover:bg-gray-50 transition-all"
          >
            <div className="w-10 h-10 rounded-full bg-gray-100 group-hover:bg-white flex items-center justify-center transition-colors shrink-0">
              <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </div>
            <div>
              <p className="text-xs text-gray-400 mb-0.5">{tx.labelPhone}</p>
              <p className="text-sm font-medium text-gray-900">{contact.phone}</p>
            </div>
          </a>

          <a
            href={`https://wa.me/${contact.whatsapp}`}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-4 p-5 bg-gray-900 rounded-2xl hover:bg-gray-800 transition-all"
          >
            <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center shrink-0">
              <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                <path d="M12 0C5.373 0 0 5.373 0 12c0 2.127.558 4.126 1.533 5.858L.057 23.704a.5.5 0 00.61.633l5.991-1.438A11.942 11.942 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.87 0-3.63-.49-5.155-1.347l-.369-.215-3.826.918.986-3.71-.24-.382A9.963 9.963 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
              </svg>
            </div>
            <div>
              <p className="text-xs text-white/40 mb-0.5">{tx.labelWA}</p>
              <p className="text-sm font-medium text-white">{tx.waText}</p>
            </div>
          </a>
        </div>
      </div>
    </section>
  )
}
