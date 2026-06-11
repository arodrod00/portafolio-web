"use client"

import { createContext, useContext, useState, useEffect, ReactNode } from "react"
import type { Lang } from "@/data/translations"

interface LangCtx {
  lang: Lang
  toggle: () => void
}

const LanguageContext = createContext<LangCtx>({ lang: "es", toggle: () => {} })

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("es")

  useEffect(() => {
    const saved = localStorage.getItem("lang") as Lang
    if (saved === "en" || saved === "es") setLang(saved)
  }, [])

  const toggle = () => {
    const next: Lang = lang === "es" ? "en" : "es"
    setLang(next)
    localStorage.setItem("lang", next)
  }

  return (
    <LanguageContext.Provider value={{ lang, toggle }}>
      {children}
    </LanguageContext.Provider>
  )
}

export const useLanguage = () => useContext(LanguageContext)
