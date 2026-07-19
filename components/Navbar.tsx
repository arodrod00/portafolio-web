"use client"

import { useEffect, useState } from "react"
import { useLanguage } from "@/contexts/LanguageContext"
import { t } from "@/data/translations"

export default function Navbar({ name }: { name: string }) {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const { lang, toggle } = useLanguage()
  const tx = t[lang].nav

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 80)
      setMenuOpen(false)
    }
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  const dark = !scrolled
  const close = () => setMenuOpen(false)

  const navLinks: [string, string][] = [
    ["#servicios", tx.services],
    ["#proyectos", tx.work],
    ["#about",     tx.about],
    ["#towme",     tx.towme],
  ]

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
      style={{
        background: scrolled ? "rgba(255,255,255,0.95)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(0,0,0,0.06)" : "none",
      }}
    >
      <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a
          href="#inicio"
          onClick={close}
          className="text-sm font-medium tracking-wide transition-colors duration-300"
          style={{ color: dark ? "rgba(255,255,255,0.8)" : "#111" }}
        >
          {name}
        </a>

        {/* Desktop navigation */}
        <div className="hidden sm:flex items-center gap-6 sm:gap-8">
          {navLinks.map(([href, label]) => (
            <a
              key={href}
              href={href}
              className="text-sm transition-colors duration-300"
              style={{ color: dark ? "rgba(255,255,255,0.45)" : "#6b7280" }}
              onMouseEnter={(e) => { (e.target as HTMLElement).style.color = dark ? "rgba(255,255,255,0.9)" : "#111" }}
              onMouseLeave={(e) => { (e.target as HTMLElement).style.color = dark ? "rgba(255,255,255,0.45)" : "#6b7280" }}
            >
              {label}
            </a>
          ))}

          <button
            onClick={toggle}
            className="text-xs font-medium px-2.5 py-1 rounded-full transition-all duration-300 flex items-center gap-1"
            style={
              dark
                ? { border: "0.5px solid rgba(255,255,255,0.2)", color: "rgba(255,255,255,0.5)" }
                : { border: "0.5px solid rgba(0,0,0,0.12)", color: "#9ca3af" }
            }
          >
            {lang === "es" ? "EN" : "ES"}
          </button>

          <a
            href="#contacto"
            className="text-sm font-medium px-4 py-2 rounded-full transition-all duration-300"
            style={
              dark
                ? { background: "rgba(255,255,255,0.1)", color: "rgba(255,255,255,0.85)", border: "0.5px solid rgba(255,255,255,0.15)" }
                : { background: "#0a0a0a", color: "#fff" }
            }
          >
            {tx.cta}
          </a>
        </div>

        {/* Mobile: language toggle + hamburger */}
        <div className="flex sm:hidden items-center gap-3">
          <button
            onClick={toggle}
            aria-label={`Cambiar a ${lang === "es" ? "inglés" : "español"}`}
            className="text-xs font-medium px-2.5 py-1 rounded-full transition-all duration-300"
            style={
              dark
                ? { border: "0.5px solid rgba(255,255,255,0.2)", color: "rgba(255,255,255,0.5)" }
                : { border: "0.5px solid rgba(0,0,0,0.12)", color: "#9ca3af" }
            }
          >
            {lang === "es" ? "EN" : "ES"}
          </button>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={menuOpen}
            className="flex flex-col justify-center items-center w-8 h-8 gap-1.5"
          >
            <span className="block w-5 h-px transition-all duration-300" style={{ background: dark ? "rgba(255,255,255,0.75)" : "#111", transform: menuOpen ? "translateY(7px) rotate(45deg)" : "none" }} />
            <span className="block w-5 h-px transition-all duration-300" style={{ background: dark ? "rgba(255,255,255,0.75)" : "#111", opacity: menuOpen ? 0 : 1 }} />
            <span className="block w-5 h-px transition-all duration-300" style={{ background: dark ? "rgba(255,255,255,0.75)" : "#111", transform: menuOpen ? "translateY(-7px) rotate(-45deg)" : "none" }} />
          </button>
        </div>
      </nav>

      {/* Mobile dropdown — always mounted, animated via max-height */}
      <div
        className="sm:hidden border-t overflow-hidden"
        style={{
          maxHeight: menuOpen ? "400px" : "0px",
          opacity: menuOpen ? 1 : 0,
          pointerEvents: menuOpen ? "auto" : "none",
          transition: "max-height 0.35s cubic-bezier(0.4,0,0.2,1), opacity 0.25s ease",
          background: dark ? "rgba(8,8,8,0.97)" : "rgba(255,255,255,0.97)",
          borderColor: menuOpen ? (dark ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.06)") : "transparent",
          backdropFilter: "blur(16px)",
        }}
      >
        <div className="max-w-6xl mx-auto px-6 py-4 flex flex-col gap-1">
          {navLinks.map(([href, label]) => (
            <a
              key={href}
              href={href}
              onClick={close}
              className="py-3 text-sm font-medium transition-colors border-b"
              style={{
                color: dark ? "rgba(255,255,255,0.65)" : "#374151",
                borderColor: dark ? "rgba(255,255,255,0.05)" : "rgba(0,0,0,0.05)",
              }}
            >
              {label}
            </a>
          ))}
          <a
            href="#contacto"
            onClick={close}
            className="mt-3 inline-flex items-center justify-center text-sm font-medium rounded-full py-3 transition-all"
            style={
              dark
                ? { background: "#fbbf24", color: "#0a0a0a" }
                : { background: "#0a0a0a", color: "#fff" }
            }
          >
            {tx.cta}
          </a>
        </div>
      </div>
    </header>
  )
}
