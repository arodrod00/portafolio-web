"use client"

import { useEffect } from "react"
import { useLanguage } from "@/contexts/LanguageContext"

export function HtmlLangSync() {
  const { lang } = useLanguage()
  useEffect(() => {
    document.documentElement.lang = lang
  }, [lang])
  return null
}
