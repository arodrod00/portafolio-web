"use client"

import { useEffect, useRef } from "react"
import { useLanguage } from "@/contexts/LanguageContext"
import { t } from "@/data/translations"
import { portfolio } from "@/data/portfolio"

function GradientCanvas() {
  const ref = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = ref.current
    if (!canvas) return
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const orbs = [
      { x: 0.15, y: 0.4,  vx: 0.00022, vy: 0.00014, r: 0.58, rgb: "99,102,241"  },
      { x: 0.78, y: 0.55, vx: -0.00018, vy: 0.00022, r: 0.48, rgb: "124,58,237" },
      { x: 0.5,  y: 0.08, vx: 0.00028,  vy: -0.0002, r: 0.52, rgb: "37,99,235"  },
    ]

    let mouseX = 0.5
    let mouseY = 0.5
    let raf: number

    const onMouse = (e: MouseEvent) => {
      mouseX = e.clientX / window.innerWidth
      mouseY = e.clientY / window.innerHeight
    }

    const resize = () => {
      canvas.width = canvas.offsetWidth
      canvas.height = canvas.offsetHeight
    }

    const draw = () => {
      const w = canvas.width
      const h = canvas.height
      if (!w || !h) { raf = requestAnimationFrame(draw); return }

      ctx.clearRect(0, 0, w, h)

      for (const orb of orbs) {
        orb.x += orb.vx
        orb.y += orb.vy
        if (orb.x < -0.1 || orb.x > 1.1) orb.vx *= -1
        if (orb.y < -0.1 || orb.y > 1.1) orb.vy *= -1

        const cx = (orb.x + (mouseX - 0.5) * 0.06) * w
        const cy = (orb.y + (mouseY - 0.5) * 0.06) * h
        const r  = orb.r * Math.max(w, h)

        const grad = ctx.createRadialGradient(cx, cy, 0, cx, cy, r)
        grad.addColorStop(0, `rgba(${orb.rgb},0.38)`)
        grad.addColorStop(1, `rgba(${orb.rgb},0)`)

        ctx.globalCompositeOperation = "screen"
        ctx.beginPath()
        ctx.arc(cx, cy, r, 0, Math.PI * 2)
        ctx.fillStyle = grad
        ctx.fill()
      }

      ctx.globalCompositeOperation = "source-over"
      raf = requestAnimationFrame(draw)
    }

    resize()
    window.addEventListener("resize", resize)
    window.addEventListener("mousemove", onMouse)
    draw()

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener("resize", resize)
      window.removeEventListener("mousemove", onMouse)
    }
  }, [])

  return <canvas ref={ref} className="absolute inset-0 w-full h-full" />
}

export default function Hero() {
  const { lang } = useLanguage()
  const tx    = t[lang].hero
  const stats = t[lang].stats
  const waMsg = t[lang].whatsapp.message
  const { location, availableForWork, contact } = portfolio
  const waHref = `https://wa.me/${contact.whatsapp}?text=${encodeURIComponent(waMsg)}`

  return (
    <section
      id="inicio"
      className="relative min-h-screen flex flex-col overflow-hidden"
      style={{ background: "#060812" }}
    >
      {/* Animated shader-like gradient */}
      <GradientCanvas />

      {/* Dot grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.07) 1px, transparent 1px)",
          backgroundSize: "36px 36px",
        }}
      />

      {/* Bottom vignette so content doesn't bleed */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 120% 80% at 50% 0%, transparent 30%, #060812 85%)",
        }}
      />

      {/* Floating geometric accents */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute rounded-sm"
          style={{
            width: 90, height: 90,
            top: "18%", right: "12%",
            border: "0.5px solid rgba(99,102,241,0.2)",
            transform: "rotate(15deg)",
            animation: "float1 9s ease-in-out infinite",
          }}
        />
        <div
          className="absolute rounded-sm"
          style={{
            width: 48, height: 48,
            top: "62%", right: "22%",
            border: "0.5px solid rgba(124,58,237,0.2)",
            transform: "rotate(40deg)",
            animation: "float2 12s ease-in-out infinite",
          }}
        />
        <div
          className="absolute rounded-full"
          style={{
            width: 6, height: 6,
            top: "30%", left: "8%",
            background: "rgba(99,102,241,0.5)",
            animation: "float1 7s ease-in-out infinite",
          }}
        />
        <div
          className="absolute rounded-full"
          style={{
            width: 4, height: 4,
            top: "70%", left: "15%",
            background: "rgba(124,58,237,0.4)",
            animation: "float2 10s ease-in-out infinite",
          }}
        />
      </div>

      <style>{`
        @keyframes float1 {
          0%, 100% { transform: rotate(15deg) translateY(0px); }
          50% { transform: rotate(15deg) translateY(-14px); }
        }
        @keyframes float2 {
          0%, 100% { transform: rotate(40deg) translateY(0px); }
          50% { transform: rotate(40deg) translateY(10px); }
        }
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(24px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>

      {/* Main content */}
      <div className="relative flex-1 max-w-6xl mx-auto px-6 py-24 flex flex-col justify-center">

        {/* Top badges */}
        <div
          className="flex flex-wrap items-center gap-2.5 mb-10"
          style={{ animation: "fadeUp 0.6s ease both", animationDelay: "0.05s" }}
        >
          <span
            className="px-3 py-1 rounded-full text-xs font-semibold tracking-[0.18em] uppercase"
            style={{
              background: "rgba(99,102,241,0.14)",
              border: "0.5px solid rgba(99,102,241,0.35)",
              color: "#a5b4fc",
            }}
          >
            Relift LLC
          </span>
          {availableForWork && (
            <span
              className="flex items-center gap-1.5 px-3 py-1 rounded-full text-xs"
              style={{
                background: "rgba(255,255,255,0.05)",
                border: "0.5px solid rgba(255,255,255,0.08)",
                color: "rgba(255,255,255,0.4)",
              }}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              {tx.available}
            </span>
          )}
        </div>

        {/* Headline */}
        <h1
          className="font-semibold text-white leading-[1.04] tracking-tight mb-6 max-w-4xl"
          style={{
            fontSize: "clamp(36px, 6.5vw, 86px)",
            letterSpacing: "-0.03em",
            textShadow: "0 0 120px rgba(99,102,241,0.25)",
            animation: "fadeUp 0.7s ease both",
            animationDelay: "0.15s",
          }}
        >
          {tx.tagline}
        </h1>

        {/* Sub */}
        <p
          className="text-base sm:text-lg mb-12 max-w-lg leading-relaxed"
          style={{
            color: "rgba(255,255,255,0.42)",
            animation: "fadeUp 0.7s ease both",
            animationDelay: "0.25s",
          }}
        >
          {tx.sub}
        </p>

        {/* CTAs */}
        <div
          className="flex flex-wrap gap-3"
          style={{ animation: "fadeUp 0.7s ease both", animationDelay: "0.35s" }}
        >
          <a
            href="#contacto"
            className="inline-flex items-center gap-2 px-7 py-3.5 text-sm font-medium rounded-full transition-all duration-300 hover:scale-105"
            style={{
              background: "linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)",
              color: "#fff",
              boxShadow: "0 0 0 0 rgba(99,102,241,0.4)",
            }}
            onMouseEnter={e => (e.currentTarget.style.boxShadow = "0 0 28px rgba(99,102,241,0.5)")}
            onMouseLeave={e => (e.currentTarget.style.boxShadow = "0 0 0 0 rgba(99,102,241,0.4)")}
          >
            {tx.startProject}
          </a>
          <a
            href="#proyectos"
            className="inline-flex items-center gap-2 px-7 py-3.5 text-sm font-medium rounded-full transition-all duration-300 hover:bg-white/[0.07]"
            style={{
              border: "0.5px solid rgba(255,255,255,0.13)",
              color: "rgba(255,255,255,0.6)",
            }}
          >
            {tx.viewWork}
          </a>
          <a
            href={waHref}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-7 py-3.5 text-sm font-medium rounded-full transition-all duration-300 hover:bg-white/[0.07]"
            style={{
              border: "0.5px solid rgba(255,255,255,0.08)",
              color: "rgba(255,255,255,0.38)",
            }}
          >
            {tx.whatsapp}
          </a>
        </div>
      </div>

      {/* Stats bar */}
      <div
        className="relative max-w-6xl mx-auto w-full px-6 py-8"
        style={{
          borderTop: "0.5px solid rgba(255,255,255,0.07)",
          animation: "fadeUp 0.7s ease both",
          animationDelay: "0.45s",
        }}
      >
        <div className="flex flex-wrap items-center gap-x-10 gap-y-4">
          {portfolio.stats.map((s, i) => (
            <div key={i} className="flex items-baseline gap-2">
              <span className="text-3xl font-semibold" style={{ color: "#a5b4fc" }}>
                {s.number}
              </span>
              <span className="text-sm" style={{ color: "rgba(255,255,255,0.28)" }}>
                {stats[i]?.label ?? s.label}
              </span>
            </div>
          ))}
          <div
            className="ml-auto flex items-center gap-1.5 text-sm"
            style={{ color: "rgba(255,255,255,0.2)" }}
          >
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            {location}
          </div>
        </div>
      </div>
    </section>
  )
}
