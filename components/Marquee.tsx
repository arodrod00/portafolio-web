"use client"

import { useLanguage } from "@/contexts/LanguageContext"
import { t } from "@/data/translations"

const Dot = () => (
  <span className="text-amber-400 mx-5 text-xs select-none" aria-hidden>✦</span>
)

export default function Marquee() {
  const { lang } = useLanguage()
  const items = t[lang].marqueeItems
  const doubled = [...items, ...items]

  return (
    <div className="overflow-hidden border-y border-gray-100 py-3.5 bg-gray-50">
      <div
        style={{
          animation: "ticker 35s linear infinite",
          display: "flex",
          width: "max-content",
          alignItems: "center",
        }}
      >
        {doubled.map((item, i) => (
          <span key={i} className="flex items-center whitespace-nowrap">
            <span className="text-sm text-gray-400">{item}</span>
            <Dot />
          </span>
        ))}
      </div>
    </div>
  )
}
