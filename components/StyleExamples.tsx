"use client"

import { useState, useRef, useEffect } from "react"
import { useLanguage } from "@/contexts/LanguageContext"
import { t } from "@/data/translations"
import { portfolio } from "@/data/portfolio"

function BrowserFrame({ children, dark = false }: { children: React.ReactNode; dark?: boolean }) {
  return (
    <div className="rounded-lg overflow-hidden border border-gray-100 shadow-sm">
      <div
        className="flex items-center gap-1.5 px-3 py-2"
        style={{ background: dark ? "#1a1a1a" : "#f5f5f5" }}
      >
        <div className="w-2 h-2 rounded-full bg-red-400" />
        <div className="w-2 h-2 rounded-full bg-yellow-400" />
        <div className="w-2 h-2 rounded-full bg-green-400" />
        <div
          className="flex-1 ml-2 rounded text-center"
          style={{
            background: dark ? "#2a2a2a" : "#e8e8e8",
            height: 12,
            fontSize: 7,
            lineHeight: "12px",
            color: dark ? "#555" : "#aaa",
          }}
        >
          tunegocio.com
        </div>
      </div>
      <div className="relative overflow-hidden" style={{ height: 170 }}>
        {children}
      </div>
    </div>
  )
}

// ── Interactive previews ────────────────────────────────────────────────────

function Preview9() {
  const [tilt, setTilt] = useState({ x: 0, y: 0 })
  const ref = useRef<HTMLDivElement>(null)

  const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return
    const r = ref.current.getBoundingClientRect()
    setTilt({
      x: ((e.clientX - r.left) / r.width - 0.5) * 20,
      y: ((e.clientY - r.top) / r.height - 0.5) * -20,
    })
  }

  return (
    <BrowserFrame dark>
      <div
        ref={ref}
        onMouseMove={handleMove}
        onMouseLeave={() => setTilt({ x: 0, y: 0 })}
        style={{ background: "linear-gradient(135deg,#0f0f1a,#1a1a2e)", height: "100%", display: "flex", alignItems: "center", justifyContent: "center", perspective: 600, cursor: "pointer", fontFamily: "sans-serif", position: "relative" }}
      >
        <div style={{
          transform: `rotateX(${tilt.y}deg) rotateY(${tilt.x}deg)`,
          transition: "transform 0.1s ease",
          transformStyle: "preserve-3d",
          width: 140, height: 96,
          background: "linear-gradient(135deg,#1e1e3f,#2d2d5a)",
          borderRadius: 12,
          border: "1px solid rgba(100,100,255,0.25)",
          boxShadow: `${tilt.x * 0.5}px ${tilt.y * 0.5}px 30px rgba(80,80,200,0.35)`,
          padding: "14px 16px",
          display: "flex", flexDirection: "column", justifyContent: "space-between",
        }}>
          <div>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
              <div style={{ width: 20, height: 20, borderRadius: 4, background: "linear-gradient(135deg,#6366f1,#8b5cf6)" }} />
              <span style={{ fontSize: 6, color: "rgba(255,255,255,0.3)", letterSpacing: 1 }}>3D CARD</span>
            </div>
            <div style={{ fontSize: 11, fontWeight: 500, color: "#fff", marginTop: 10, lineHeight: 1.3 }}>Interacción<br />tridimensional</div>
          </div>
          <div style={{ display: "flex", gap: 4 }}>
            {["#6366f1", "#8b5cf6", "#a78bfa"].map(c => (
              <div key={c} style={{ width: 6, height: 6, borderRadius: "50%", background: c }} />
            ))}
          </div>
        </div>
        <div style={{ position: "absolute", bottom: 8, left: 0, right: 0, textAlign: "center", fontSize: 6, color: "rgba(255,255,255,0.2)", letterSpacing: 1 }}>MUEVE EL CURSOR</div>
      </div>
    </BrowserFrame>
  )
}

function Preview10() {
  const [active, setActive] = useState<number | null>(null)
  const photos = [
    { bg: "linear-gradient(135deg,#667eea,#764ba2)", label: "Arquitectura" },
    { bg: "linear-gradient(135deg,#f093fb,#f5576c)", label: "Retratos" },
    { bg: "linear-gradient(135deg,#4facfe,#00f2fe)", label: "Naturaleza" },
    { bg: "linear-gradient(135deg,#43e97b,#38f9d7)", label: "Viajes" },
    { bg: "linear-gradient(135deg,#fa709a,#fee140)", label: "Moda" },
    { bg: "linear-gradient(135deg,#a18cd1,#fbc2eb)", label: "Urbano" },
  ]

  return (
    <BrowserFrame>
      <div style={{ background: "#fff", height: "100%", position: "relative", fontFamily: "sans-serif" }}>
        {active === null ? (
          <div style={{ padding: "10px 12px" }}>
            <div style={{ fontSize: 8, fontWeight: 500, color: "#111", marginBottom: 8 }}>Galería — toca para expandir</div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 5 }}>
              {photos.map((p, i) => (
                <div
                  key={i}
                  onClick={() => setActive(i)}
                  onMouseEnter={e => (e.currentTarget.style.transform = "scale(1.05)")}
                  onMouseLeave={e => (e.currentTarget.style.transform = "scale(1)")}
                  style={{ height: 44, background: p.bg, borderRadius: 5, cursor: "pointer", display: "flex", alignItems: "flex-end", padding: "3px 5px", transition: "transform 0.15s" }}
                >
                  <span style={{ fontSize: 5.5, color: "rgba(255,255,255,0.85)" }}>{p.label}</span>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div style={{ height: "100%", background: photos[active].bg, position: "relative", display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column" }}>
            <button
              onClick={() => setActive(null)}
              style={{ position: "absolute", top: 8, right: 10, fontSize: 12, color: "rgba(255,255,255,0.85)", background: "rgba(0,0,0,0.3)", border: "none", borderRadius: "50%", width: 22, height: 22, cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", lineHeight: 1 }}
            >×</button>
            <div style={{ fontSize: 20, color: "rgba(255,255,255,0.9)", marginBottom: 5 }}>🖼</div>
            <div style={{ fontSize: 10, color: "#fff", fontWeight: 500 }}>{photos[active].label}</div>
            <div style={{ fontSize: 6.5, color: "rgba(255,255,255,0.6)", marginTop: 2 }}>Vista completa</div>
          </div>
        )}
      </div>
    </BrowserFrame>
  )
}

function Preview11() {
  const [playing, setPlaying] = useState(false)
  const [progress, setProgress] = useState(0)
  const timer = useRef<ReturnType<typeof setInterval> | null>(null)

  useEffect(() => {
    return () => { if (timer.current) clearInterval(timer.current) }
  }, [])

  const toggle = () => {
    if (playing) {
      if (timer.current) clearInterval(timer.current)
      timer.current = null
      setPlaying(false)
    } else {
      setPlaying(true)
      timer.current = setInterval(() => {
        setProgress(p => (p >= 100 ? 0 : p + 1))
      }, 60)
    }
  }

  return (
    <BrowserFrame dark>
      <div
        onClick={toggle}
        style={{ background: "#000", height: "100%", position: "relative", cursor: "pointer", overflow: "hidden", fontFamily: "sans-serif", userSelect: "none" }}
      >
        <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 18, background: "#000", zIndex: 2 }} />
        <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: 30, background: "#000", zIndex: 2, display: "flex", flexDirection: "column", justifyContent: "flex-end", padding: "0 10px 6px" }}>
          <div style={{ height: 1.5, background: "rgba(255,255,255,0.12)", marginBottom: 5, borderRadius: 1 }}>
            <div style={{ height: "100%", width: `${progress}%`, background: "#fbbf24", transition: "width 0.06s linear", borderRadius: 1 }} />
          </div>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <span style={{ fontSize: 6, color: "rgba(255,255,255,0.4)", fontFamily: "monospace" }}>0:{String(Math.floor(progress * 0.6)).padStart(2, "0")}</span>
            <span style={{ fontSize: 6, color: "rgba(255,255,255,0.4)", fontFamily: "monospace" }}>1:00</span>
          </div>
        </div>
        <div style={{ position: "absolute", top: 18, bottom: 30, left: 0, right: 0, display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column", background: "linear-gradient(180deg,#0a0a14,#141428)" }}>
          <div style={{ fontSize: 6, letterSpacing: 6, color: "rgba(255,255,255,0.25)", marginBottom: 8 }}>CINEMATIC</div>
          <div style={{ fontSize: 12, fontWeight: 300, color: "#fff", letterSpacing: 2, textAlign: "center", lineHeight: 1.4 }}>Una historia<br />que emociona</div>
          <div style={{ width: 28, height: 28, borderRadius: "50%", border: "1px solid rgba(255,255,255,0.25)", display: "flex", alignItems: "center", justifyContent: "center", marginTop: 8, background: "rgba(255,255,255,0.06)" }}>
            <span style={{ fontSize: 9, color: "#fff", marginLeft: playing ? 0 : 2 }}>{playing ? "⏸" : "▶"}</span>
          </div>
        </div>
      </div>
    </BrowserFrame>
  )
}

function Preview12() {
  const [tab, setTab] = useState(0)
  const tabs = ["Overview", "Analytics", "Users"]
  const datasets = [
    [65, 80, 45, 90, 70, 55, 85],
    [40, 60, 75, 50, 85, 65, 95],
    [80, 40, 60, 70, 45, 80, 60],
  ]
  const colors = ["#6366f1", "#f59e0b", "#10b981"]

  return (
    <BrowserFrame>
      <div style={{ background: "#fff", height: "100%", display: "flex", flexDirection: "column", fontFamily: "sans-serif" }}>
        <div style={{ padding: "7px 12px", borderBottom: "0.5px solid #f0f0f0", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <span style={{ fontSize: 8, fontWeight: 600, color: "#111" }}>Dashboard</span>
          <div style={{ display: "flex", gap: 8 }}>
            {[{ label: "2.4k", sub: "Visitas" }, { label: "89%", sub: "Tasa" }].map(s => (
              <div key={s.label} style={{ textAlign: "center" }}>
                <div style={{ fontSize: 8, fontWeight: 600, color: colors[tab], transition: "color 0.2s" }}>{s.label}</div>
                <div style={{ fontSize: 5, color: "#bbb" }}>{s.sub}</div>
              </div>
            ))}
          </div>
        </div>
        <div style={{ display: "flex", borderBottom: "0.5px solid #f0f0f0" }}>
          {tabs.map((name, i) => (
            <button
              key={i}
              onClick={() => setTab(i)}
              style={{ flex: 1, padding: "5px 4px", fontSize: 6.5, color: tab === i ? colors[i] : "#bbb", background: "none", border: "none", cursor: "pointer", borderBottom: `1.5px solid ${tab === i ? colors[i] : "transparent"}`, transition: "all 0.2s" }}
            >{name}</button>
          ))}
        </div>
        <div style={{ flex: 1, padding: "8px 10px 4px", display: "flex", alignItems: "flex-end", gap: 4 }}>
          {datasets[tab].map((h, i) => (
            <div key={i} style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", gap: 2 }}>
              <div style={{ width: "100%", background: colors[tab], borderRadius: "2px 2px 0 0", height: h * 0.62, opacity: 0.65 + (i % 2) * 0.35, transition: "height 0.4s ease, background 0.2s" }} />
              <span style={{ fontSize: 5, color: "#ccc" }}>{["L","M","X","J","V","S","D"][i]}</span>
            </div>
          ))}
        </div>
      </div>
    </BrowserFrame>
  )
}

function Preview13() {
  const [hovered, setHovered] = useState<number | null>(null)
  const cells = [
    { col: "1/3", row: "1/3", bg: "#0f0f0f", label: "Hero Principal", sub: "Full impact", accent: "#fbbf24" },
    { col: "3/4", row: "1/2", bg: "#1a1a2e", label: "Stats", sub: "KPIs", accent: "#6366f1" },
    { col: "4/5", row: "1/4", bg: "#1f0d0d", label: "Feed", sub: "Live", accent: "#f43f5e" },
    { col: "3/4", row: "2/3", bg: "#0d1f0d", label: "Social", sub: "Posts", accent: "#10b981" },
    { col: "1/4", row: "3/4", bg: "#0d1a1f", label: "Analytics", sub: "Data", accent: "#06b6d4" },
  ]

  return (
    <BrowserFrame dark>
      <div style={{ background: "#080808", height: "100%", padding: 6, display: "grid", gridTemplateColumns: "repeat(4,1fr)", gridTemplateRows: "repeat(3,1fr)", gap: 4, fontFamily: "sans-serif" }}>
        {cells.map((c, i) => (
          <div
            key={i}
            onMouseEnter={() => setHovered(i)}
            onMouseLeave={() => setHovered(null)}
            style={{
              gridColumn: c.col, gridRow: c.row,
              background: c.bg, borderRadius: 6,
              border: `1px solid ${hovered === i ? c.accent : "rgba(255,255,255,0.06)"}`,
              padding: "6px 8px", display: "flex", flexDirection: "column", justifyContent: "flex-end",
              cursor: "pointer", transition: "border-color 0.2s", position: "relative", overflow: "hidden",
            }}
          >
            {hovered === i && (
              <div style={{ position: "absolute", top: 0, left: 0, right: 0, bottom: 0, background: `radial-gradient(circle at 50% 50%,${c.accent}1a 0%,transparent 70%)` }} />
            )}
            <div style={{ position: "relative" }}>
              <div style={{ fontSize: 5.5, color: hovered === i ? c.accent : "rgba(255,255,255,0.25)", marginBottom: 1, transition: "color 0.2s" }}>{c.sub}</div>
              <div style={{ fontSize: 7, fontWeight: 500, color: "#fff" }}>{c.label}</div>
            </div>
          </div>
        ))}
      </div>
    </BrowserFrame>
  )
}

function Preview14() {
  const [mouse, setMouse] = useState({ x: 0.5, y: 0.5 })
  const ref = useRef<HTMLDivElement>(null)

  const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return
    const r = ref.current.getBoundingClientRect()
    setMouse({ x: (e.clientX - r.left) / r.width, y: (e.clientY - r.top) / r.height })
  }

  const shift = (f: number) => `translate(${(mouse.x - 0.5) * f}px,${(mouse.y - 0.5) * f}px)`

  return (
    <BrowserFrame dark>
      <div
        ref={ref}
        onMouseMove={handleMove}
        onMouseLeave={() => setMouse({ x: 0.5, y: 0.5 })}
        style={{ background: "#060c12", height: "100%", position: "relative", overflow: "hidden", cursor: "crosshair", fontFamily: "sans-serif" }}
      >
        <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: 65, background: "#0d2135", clipPath: "polygon(0 100%,0 48%,12% 26%,24% 52%,36% 18%,48% 44%,60% 22%,72% 50%,84% 30%,96% 54%,100% 38%,100% 100%)", transform: shift(8), transition: "transform 0.1s ease" }} />
        <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: 45, background: "#112d45", clipPath: "polygon(0 100%,0 55%,15% 35%,30% 62%,45% 28%,60% 55%,75% 38%,90% 60%,100% 44%,100% 100%)", transform: shift(16), transition: "transform 0.1s ease" }} />
        <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: 28, background: "#071825", clipPath: "polygon(0 100%,0 70%,20% 48%,40% 72%,60% 44%,80% 66%,100% 54%,100% 100%)", transform: shift(24), transition: "transform 0.1s ease" }} />
        {[{t:12,l:18},{t:22,l:55},{t:8,l:78},{t:32,l:38},{t:18,l:88},{t:28,l:8}].map((s, i) => (
          <div key={i} style={{ position: "absolute", top: `${s.t}%`, left: `${s.l}%`, width: 2, height: 2, borderRadius: "50%", background: "#fff", opacity: 0.55, transform: shift(4), transition: "transform 0.1s ease" }} />
        ))}
        <div style={{ position: "absolute", top: "14%", right: "16%", width: 16, height: 16, borderRadius: "50%", background: "radial-gradient(circle,#fffbe6,#fef3c7,transparent)", boxShadow: "0 0 12px 4px rgba(254,243,199,0.3)", transform: shift(6), transition: "transform 0.1s ease" }} />
        <div style={{ position: "absolute", top: 0, left: 0, right: 0, bottom: 0, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", paddingBottom: 18 }}>
          <div style={{ fontSize: 6.5, letterSpacing: 6, color: "rgba(255,255,255,0.25)", marginBottom: 5 }}>PARALLAX</div>
          <div style={{ fontSize: 13, fontWeight: 300, color: "#fff", letterSpacing: 2, textAlign: "center", lineHeight: 1.4, textShadow: "0 2px 20px rgba(0,0,0,0.9)", transform: shift(10), transition: "transform 0.1s ease" }}>Profundidad<br />real</div>
        </div>
        <div style={{ position: "absolute", bottom: 6, left: 0, right: 0, textAlign: "center", fontSize: 5.5, color: "rgba(255,255,255,0.18)", letterSpacing: 1 }}>MUEVE EL CURSOR</div>
      </div>
    </BrowserFrame>
  )
}

// ── Static previews ─────────────────────────────────────────────────────────
const previews: Record<number, React.ReactNode> = {
  1: (
    <BrowserFrame>
      <div style={{ background: "#fff", height: "100%", padding: "14px 16px", fontFamily: "sans-serif" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 16 }}>
          <span style={{ fontSize: 9, fontWeight: 500, letterSpacing: 2, color: "#111" }}>MAREN</span>
          <div style={{ display: "flex", gap: 10 }}>
            {["Work", "About", "Contact"].map(t => <span key={t} style={{ fontSize: 7, color: "#aaa" }}>{t}</span>)}
          </div>
        </div>
        <div style={{ marginBottom: 6 }}>
          <div style={{ fontSize: 7, letterSpacing: 3, color: "#bbb", marginBottom: 6, textTransform: "uppercase" }}>Product Design</div>
          <div style={{ fontSize: 20, fontWeight: 300, color: "#111", lineHeight: 1.2, marginBottom: 8 }}>Designing things<br />that matter.</div>
          <div style={{ fontSize: 7, color: "#aaa", lineHeight: 1.7, maxWidth: 140 }}>Independent designer based in Berlin. Focused on clarity, function, and the space between.</div>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 4, marginTop: 10 }}>
          <span style={{ fontSize: 7, color: "#111", borderBottom: "0.5px solid #111" }}>View work</span>
          <span style={{ fontSize: 8, color: "#111" }}>→</span>
        </div>
      </div>
    </BrowserFrame>
  ),

  2: (
    <BrowserFrame dark>
      <div style={{ background: "#0a1628", height: "100%", padding: "12px 16px", fontFamily: "sans-serif" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 12 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 4 }}>
            <div style={{ width: 12, height: 12, background: "#1e6fff", borderRadius: 2 }} />
            <span style={{ fontSize: 8, fontWeight: 600, color: "#fff", letterSpacing: 1 }}>NEXCORP</span>
          </div>
          <span style={{ fontSize: 7, color: "#fff", background: "#1e6fff", padding: "3px 8px", borderRadius: 2 }}>Contact</span>
        </div>
        <div style={{ fontSize: 7, letterSpacing: 3, color: "#1e6fff", marginBottom: 4, textTransform: "uppercase" }}>Global Consulting</div>
        <div style={{ fontSize: 15, fontWeight: 500, color: "#fff", lineHeight: 1.2, marginBottom: 6 }}>Delivering<br />measurable results.</div>
        <p style={{ fontSize: 7, color: "rgba(255,255,255,.45)", lineHeight: 1.7, maxWidth: 160, marginBottom: 10 }}>We partner with Fortune 500 companies to drive strategic transformation.</p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 6 }}>
          {[["98%","Retention"],["140+","Offices"],["$4.2B","Revenue"]].map(([n, l]) => (
            <div key={l} style={{ background: "rgba(255,255,255,.05)", borderRadius: 3, padding: "5px 6px" }}>
              <div style={{ fontSize: 10, fontWeight: 600, color: "#fff" }}>{n}</div>
              <div style={{ fontSize: 6, color: "rgba(255,255,255,.35)", marginTop: 1 }}>{l}</div>
            </div>
          ))}
        </div>
      </div>
    </BrowserFrame>
  ),

  3: (
    <BrowserFrame dark>
      <div style={{ background: "#0d0d0d", height: "100%", padding: "12px 16px", fontFamily: "sans-serif", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", top: -20, right: -20, width: 100, height: 100, background: "#ff3c00", borderRadius: "50%", opacity: .12 }} />
        <div style={{ position: "absolute", bottom: -10, left: 20, width: 60, height: 60, background: "#7c3aed", borderRadius: "50%", opacity: .18 }} />
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 10, position: "relative" }}>
          <span style={{ fontSize: 9, fontWeight: 500, color: "#fff" }}>Sofia.K</span>
          <span style={{ fontSize: 7, color: "#fff", border: "0.5px solid rgba(255,255,255,.25)", padding: "3px 8px", borderRadius: 20 }}>Hire me ↗</span>
        </div>
        <div style={{ display: "flex", gap: 5, marginBottom: 8, position: "relative" }}>
          {[["#ff3c00","Motion"],["#7c3aed","3D"],["transparent","Brand"]].map(([bg, label]) => (
            <span key={label} style={{ fontSize: 6, background: bg, color: "#fff", padding: "2px 7px", borderRadius: 20, border: bg === "transparent" ? "0.5px solid rgba(255,255,255,.2)" : "none" }}>{label}</span>
          ))}
        </div>
        <div style={{ fontSize: 22, fontWeight: 500, color: "#fff", lineHeight: 1.1, letterSpacing: -0.5, marginBottom: 10, position: "relative" }}>
          Creative <span style={{ color: "#ff3c00" }}>Director</span><br />&amp; Designer.
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 5, position: "relative" }}>
          {[["#ff3c0022","Brandify"],["#7c3aed22","Volta"],["#0891b222","Lumis"]].map(([bg, name]) => (
            <div key={name} style={{ background: bg, borderRadius: 5, aspectRatio: "4/3", display: "flex", alignItems: "flex-end", padding: "4px 5px" }}>
              <span style={{ fontSize: 6, color: "rgba(255,255,255,.5)" }}>{name}</span>
            </div>
          ))}
        </div>
      </div>
    </BrowserFrame>
  ),

  4: (
    <BrowserFrame>
      <div style={{ background: "#fafaf9", height: "100%", fontFamily: "sans-serif" }}>
        <div style={{ background: "#fff", borderBottom: "0.5px solid #e8e6e1", padding: "6px 14px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          {["New","Women","Men","Sale"].map(t => <span key={t} style={{ fontSize: 6, color: "#888" }}>{t}</span>)}
          <span style={{ fontSize: 8, fontWeight: 600, color: "#1a1a1a", letterSpacing: 2 }}>ARLOU</span>
          <span style={{ fontSize: 10, color: "#555" }}>🛍</span>
        </div>
        <div style={{ background: "#f0ece4", padding: "12px 14px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div>
            <div style={{ fontSize: 6, letterSpacing: 3, color: "#aaa", marginBottom: 4, textTransform: "uppercase" }}>SS 2025</div>
            <div style={{ fontSize: 13, fontWeight: 400, color: "#1a1a1a", lineHeight: 1.2, marginBottom: 6 }}>Effortless<br />everyday luxury.</div>
            <span style={{ fontSize: 6, color: "#1a1a1a", borderBottom: "0.5px solid #1a1a1a" }}>Shop →</span>
          </div>
          <div style={{ display: "flex", gap: 4 }}>
            {["#d5ccbc","#c8c0b0"].map(bg => (
              <div key={bg} style={{ width: 30, height: 44, background: bg, borderRadius: 3 }} />
            ))}
          </div>
        </div>
        <div style={{ padding: "8px 14px", display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 5 }}>
          {[["#ede8e0","$189"],["#e8e4db","$124"],["#ede8e0","$89"],["#e8e4db","$68"]].map(([bg, price], i) => (
            <div key={i} style={{ background: "#fff", borderRadius: 3, border: "0.5px solid #e8e6e1", overflow: "hidden" }}>
              <div style={{ height: 28, background: bg }} />
              <div style={{ padding: "3px 4px" }}>
                <div style={{ fontSize: 6, color: "#888" }}>{price}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </BrowserFrame>
  ),

  5: (
    <BrowserFrame dark>
      <div style={{ background: "#0f0a1e", height: "100%", padding: "12px 16px", fontFamily: "sans-serif", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", top: 10, left: "50%", transform: "translateX(-50%)", width: 140, height: 140, background: "radial-gradient(circle,rgba(124,58,237,.35) 0%,transparent 70%)", pointerEvents: "none" }} />
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 10, position: "relative" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 4 }}>
            <div style={{ width: 5, height: 5, background: "#a855f7", borderRadius: "50%" }} />
            <span style={{ fontSize: 8, fontWeight: 500, color: "#fff" }}>Orion AI</span>
          </div>
          <span style={{ fontSize: 7, color: "#fff", background: "#7c3aed", padding: "3px 8px", borderRadius: 20 }}>Start free</span>
        </div>
        <div style={{ textAlign: "center", position: "relative" }}>
          <span style={{ fontSize: 6, color: "#a855f7", background: "rgba(168,85,247,.1)", padding: "2px 8px", borderRadius: 20, border: "0.5px solid rgba(168,85,247,.3)" }}>NOW IN BETA</span>
          <div style={{ fontSize: 16, fontWeight: 500, color: "#fff", lineHeight: 1.15, margin: "8px 0 6px", letterSpacing: -0.3 }}>
            Write 10x faster<br />with <span style={{ color: "#a855f7" }}>AI</span> that<br />thinks like you.
          </div>
          <p style={{ fontSize: 6.5, color: "rgba(255,255,255,.4)", marginBottom: 10, lineHeight: 1.6 }}>Orion learns your voice. Draft in seconds.</p>
          <div style={{ display: "flex", gap: 5, justifyContent: "center" }}>
            <div style={{ background: "rgba(255,255,255,.05)", border: "0.5px solid rgba(255,255,255,.1)", borderRadius: 20, padding: "5px 10px", width: 90, height: 20 }} />
            <span style={{ fontSize: 7, color: "#fff", background: "#7c3aed", padding: "5px 10px", borderRadius: 20, lineHeight: "10px" }}>Get access</span>
          </div>
          <p style={{ fontSize: 6, color: "rgba(255,255,255,.2)", marginTop: 5 }}>No credit card · 14-day free</p>
        </div>
      </div>
    </BrowserFrame>
  ),

  6: (
    <BrowserFrame>
      <div style={{ background: "#fffdf8", height: "100%", fontFamily: "Georgia, serif" }}>
        <div style={{ borderBottom: "1.5px solid #1a1a1a", padding: "7px 14px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ display: "flex", gap: 10 }}>
            {["Politics","Culture","Science"].map(t => <span key={t} style={{ fontSize: 6, fontFamily: "sans-serif", color: "#888" }}>{t}</span>)}
          </div>
          <span style={{ fontSize: 10, fontWeight: 700, letterSpacing: 3, color: "#1a1a1a", fontFamily: "sans-serif" }}>THE DISPATCH</span>
          <span style={{ fontSize: 6, fontFamily: "sans-serif", color: "#fff", background: "#1a1a1a", padding: "3px 8px", borderRadius: 2 }}>Subscribe</span>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "1.6fr 0.5px 1fr", padding: "10px 14px", gap: 0 }}>
          <div style={{ paddingRight: 10 }}>
            <span style={{ fontSize: 6, letterSpacing: 2, color: "#c0392b", fontFamily: "sans-serif", textTransform: "uppercase" }}>Breaking</span>
            <div style={{ fontSize: 11, fontWeight: 700, lineHeight: 1.25, color: "#1a1a1a", margin: "4px 0 5px" }}>Global summit reaches landmark climate agreement</div>
            <p style={{ fontSize: 7, color: "#555", lineHeight: 1.7, fontFamily: "sans-serif" }}>World leaders concluded a three-day session with a binding $150B commitment.</p>
            <span style={{ fontSize: 6, color: "#888", fontFamily: "sans-serif", marginTop: 5, display: "block" }}>Elena Marchetti · 4 min</span>
          </div>
          <div style={{ background: "#ddd" }} />
          <div style={{ paddingLeft: 10, display: "flex", flexDirection: "column", gap: 8 }}>
            {[["SCIENCE","Solar energy stored for months"],["CULTURE","The rise of indie bookstores"]].map(([cat, title]) => (
              <div key={cat} style={{ borderBottom: "0.5px solid #eee", paddingBottom: 7 }}>
                <span style={{ fontSize: 6, color: "#888", letterSpacing: 2, fontFamily: "sans-serif" }}>{cat}</span>
                <p style={{ fontSize: 8, fontWeight: 700, lineHeight: 1.3, color: "#1a1a1a", marginTop: 2 }}>{title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </BrowserFrame>
  ),

  7: (
    <BrowserFrame dark>
      <div style={{ fontFamily: "sans-serif", height: "100%", overflow: "hidden" }}>
        <div style={{ background: "#1a3a2a", height: 90, position: "relative", display: "flex", alignItems: "center", justifyContent: "center", overflow: "hidden" }}>
          <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: 28, background: "#2d5a3d", clipPath: "polygon(0 100%,0 55%,8% 35%,16% 50%,24% 25%,32% 45%,40% 18%,48% 42%,56% 12%,64% 38%,72% 22%,80% 48%,88% 32%,96% 52%,100% 38%,100% 100%)" }} />
          <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: 18, background: "#1f4230", clipPath: "polygon(0 100%,0 65%,10% 48%,20% 62%,30% 42%,40% 58%,50% 38%,60% 52%,70% 32%,80% 50%,90% 45%,100% 60%,100% 100%)" }} />
          <div style={{ position: "absolute", top: 8, left: "50%", transform: "translateX(-50%)", width: 18, height: 18, background: "#f59e0b", borderRadius: "50%", opacity: .9 }} />
          <div style={{ textAlign: "center", position: "relative", zIndex: 2, paddingBottom: 14 }}>
            <div style={{ fontSize: 14, fontWeight: 300, color: "#fff", letterSpacing: 5, textShadow: "0 1px 8px rgba(0,0,0,.5)" }}>WILDERNESS</div>
            <div style={{ fontSize: 6, letterSpacing: 5, color: "rgba(255,255,255,.6)", marginTop: 2 }}>SCROLL TO EXPLORE</div>
            <div style={{ fontSize: 8, color: "rgba(255,255,255,.4)", marginTop: 3 }}>↓</div>
          </div>
        </div>
        <div style={{ background: "#f5f0e8", padding: "10px 14px", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10, alignItems: "center" }}>
          <div>
            <div style={{ fontSize: 6, letterSpacing: 2, color: "#7c6b4a", marginBottom: 4, textTransform: "uppercase" }}>Chapter One</div>
            <div style={{ fontSize: 10, fontWeight: 400, color: "#2c2416", lineHeight: 1.3, marginBottom: 5 }}>The mountains that move with you</div>
            <p style={{ fontSize: 6.5, color: "#6b5d45", lineHeight: 1.7 }}>As you scroll, the landscape shifts — creating a world with real depth.</p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 4 }}>
            {["#8faa7a","#6b8a5e","#4a6741","#3b5233"].map((bg, i) => (
              <div key={i} style={{ background: bg, borderRadius: 3, aspectRatio: "1" }} />
            ))}
          </div>
        </div>
      </div>
    </BrowserFrame>
  ),

  9:  <Preview9 />,
  10: <Preview10 />,
  11: <Preview11 />,
  12: <Preview12 />,
  13: <Preview13 />,
  14: <Preview14 />,

  8: (
    <BrowserFrame>
      <div style={{ display: "grid", gridTemplateColumns: "72px 1fr", height: "100%", fontFamily: "sans-serif" }}>
        <div style={{ background: "#1a1a1a", padding: "12px 10px" }}>
          <div style={{ width: 28, height: 28, borderRadius: "50%", background: "#333", border: "1.5px solid #444", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 6px", fontSize: 9, fontWeight: 500, color: "#fff" }}>AJ</div>
          <div style={{ fontSize: 7.5, fontWeight: 500, color: "#fff", textAlign: "center" }}>Alex Jordan</div>
          <div style={{ fontSize: 6, color: "#666", textAlign: "center", marginTop: 2, lineHeight: 1.5 }}>Designer<br />&amp; Dev</div>
          <div style={{ height: "0.5px", background: "#333", margin: "8px 0" }} />
          <div style={{ display: "flex", flexDirection: "column", gap: 3 }}>
            {[["About", true],["Work", false],["Skills", false],["Contact", false]].map(([label, active]) => (
              <span key={String(label)} style={{ fontSize: 6.5, color: active ? "#e8e349" : "#666", background: active ? "rgba(232,227,73,.08)" : "transparent", padding: "3px 6px", borderRadius: 2, borderLeft: active ? "1.5px solid #e8e349" : "none" }}>{String(label)}</span>
            ))}
          </div>
        </div>
        <div style={{ background: "#f8f7f4", padding: "12px 12px", overflowY: "hidden" }}>
          <div style={{ fontSize: 6, letterSpacing: 2, color: "#aaa", marginBottom: 4, textTransform: "uppercase" }}>About</div>
          <div style={{ fontSize: 11, fontWeight: 400, color: "#1a1a1a", lineHeight: 1.3, marginBottom: 6 }}>Building digital<br />experiences that last.</div>
          <p style={{ fontSize: 6.5, color: "#666", lineHeight: 1.7, marginBottom: 8 }}>5 years designing and building products for startups and agencies.</p>
          <div style={{ fontSize: 6, letterSpacing: 2, color: "#aaa", marginBottom: 5, textTransform: "uppercase" }}>Experience</div>
          <div style={{ borderLeft: "1.5px solid #e8e349", paddingLeft: 6, marginBottom: 5 }}>
            <div style={{ fontSize: 7.5, fontWeight: 500, color: "#1a1a1a" }}>Lead Designer — Lumio</div>
            <div style={{ fontSize: 6, color: "#aaa", marginTop: 1 }}>2023–now</div>
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 3 }}>
            {["Figma","React","CSS","Motion"].map(s => (
              <span key={s} style={{ fontSize: 6, background: "#1a1a1a", color: "#fff", padding: "2px 6px", borderRadius: 2 }}>{s}</span>
            ))}
          </div>
        </div>
      </div>
    </BrowserFrame>
  ),
}

import { ScrambleText } from "@/components/ScrambleText"

export default function StyleExamples() {
  const { lang } = useLanguage()
  const tx = t[lang].stylesSection
  const styleTranslations = t[lang].styleExamples
  const { styleExamples } = portfolio

  return (
    <section id="estilos" className="py-16 sm:py-24 border-t border-gray-100">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10 sm:mb-16">
          <div>
            <p className="text-xs tracking-widest text-gray-400 uppercase mb-3">{tx.label}</p>
            <h2 className="text-3xl sm:text-4xl font-medium text-gray-900 leading-tight">
              <ScrambleText text={tx.heading[0]} /><br />
              <ScrambleText text={tx.heading[1]} delay={160} />
            </h2>
          </div>
          <a
            href="#contacto"
            className="text-sm text-gray-500 hover:text-gray-900 transition-colors underline underline-offset-4 self-start sm:self-auto"
          >
            {tx.cta}
          </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {styleExamples.map((style, i) => {
            const styleTx = styleTranslations[i] ?? style
            return (
              <div key={style.id} className="group">
                <div className="mb-3 transition-transform duration-300 group-hover:-translate-y-1">
                  {previews[style.id]}
                </div>
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <h3 className="text-sm font-medium text-gray-900">{styleTx.name}</h3>
                    <span className="text-xs text-gray-300">{String(style.id).padStart(2, "0")}</span>
                  </div>
                  <p className="text-xs text-gray-400 leading-relaxed mb-1.5">{styleTx.description}</p>
                  <p className="text-xs text-gray-300">{style.palette}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
