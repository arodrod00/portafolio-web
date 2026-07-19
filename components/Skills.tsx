"use client"

import { useLanguage } from "@/contexts/LanguageContext"
import { t } from "@/data/translations"
import { portfolio } from "@/data/portfolio"
import { ScrambleText } from "@/components/ScrambleText"

export default function Skills() {
  const { lang } = useLanguage()
  const tx = t[lang].skillsSection

  return (
    <section id="habilidades" className="py-16 sm:py-24 border-t border-gray-100">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div>
            <p className="text-xs tracking-widest text-gray-400 uppercase mb-3">{tx.label}</p>
            <h2 className="text-3xl sm:text-4xl font-medium text-gray-900 mb-6">
              <ScrambleText text={tx.heading[0]} /><br />
              <ScrambleText text={tx.heading[1]} delay={140} />
            </h2>
            <p className="text-gray-500 leading-relaxed text-lg">{tx.bio}</p>
          </div>

          <div className="space-y-8">
            {portfolio.skills.map((group, i) => (
              <div key={i}>
                <p className="text-xs text-gray-400 uppercase tracking-widest mb-3">
                  {tx.skillsLabel[i] ?? group.category}
                </p>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="px-3 py-1.5 text-sm text-gray-600 bg-gray-50 border border-gray-100 rounded-full"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
