"use client"
import { useRef, useCallback, useEffect } from "react"

interface Props {
  children: React.ReactNode
  strength?: number
  className?: string
  style?: React.CSSProperties
}

export function MagneticButton({ children, strength = 0.38, className, style }: Props) {
  const ref = useRef<HTMLDivElement>(null)
  const rafRef = useRef<number | undefined>(undefined)
  const curX = useRef(0)
  const curY = useRef(0)

  useEffect(() => () => cancelAnimationFrame(rafRef.current!), [])

  const onMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const el = ref.current
    if (!el) return
    const r = el.getBoundingClientRect()
    const tx = (e.clientX - (r.left + r.width / 2)) * strength
    const ty = (e.clientY - (r.top + r.height / 2)) * strength
    cancelAnimationFrame(rafRef.current!)
    const tick = () => {
      curX.current += (tx - curX.current) * 0.18
      curY.current += (ty - curY.current) * 0.18
      if (el) el.style.transform = `translate(${curX.current}px,${curY.current}px)`
      if (Math.abs(tx - curX.current) > 0.05 || Math.abs(ty - curY.current) > 0.05) {
        rafRef.current = requestAnimationFrame(tick)
      }
    }
    rafRef.current = requestAnimationFrame(tick)
  }, [strength])

  const onLeave = useCallback(() => {
    cancelAnimationFrame(rafRef.current!)
    const el = ref.current
    if (!el) return
    el.style.transition = "transform 0.6s cubic-bezier(0.34,1.56,0.64,1)"
    el.style.transform = "translate(0,0)"
    curX.current = 0
    curY.current = 0
    setTimeout(() => { if (ref.current) ref.current.style.transition = "" }, 600)
  }, [])

  return (
    <div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className={className}
      style={{ display: "inline-flex", ...style }}
    >
      {children}
    </div>
  )
}
