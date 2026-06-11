"use client"

import { useLanguage } from "@/contexts/LanguageContext"
import { t } from "@/data/translations"
import { portfolio } from "@/data/portfolio"

export default function Footer() {
  const { lang } = useLanguage()
  const tx = t[lang].footer
  const { name, role } = portfolio
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-gray-100 py-8">
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-gray-400">© {year} {name}</p>
        <p className="text-sm text-gray-300">{t[lang].hero.role}</p>
        <a href="#inicio" className="text-sm text-gray-400 hover:text-gray-900 transition-colors">
          {tx.backToTop}
        </a>
      </div>
    </footer>
  )
}
