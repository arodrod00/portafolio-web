"use client"

import { useEffect, useRef, useState } from "react"

const CHARS = '!<>─*#?╋▒░$&@%┼╌'

interface Props {
  text: string
  delay?: number   // ms after intersection before starting
}

export function ScrambleText({ text, delay = 80 }: Props) {
  const [chars, setChars] = useState<{ c: string; done: boolean }[]>(
    () => Array.from(text).map(c => ({ c, done: false }))
  )
  const [triggered, setTriggered] = useState(false)
  const ref = useRef<HTMLSpanElement>(null)

  // Fire once when the element enters the viewport
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTriggered(true)
          observer.disconnect()
        }
      },
      { threshold: 0.1 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  // Run scramble animation after trigger
  useEffect(() => {
    if (!triggered) return
    const arr = Array.from(text)
    const total = 1400
    const scrambleDur = 340
    const spread = total - scrambleDur
    let raf: number
    let t0: number | null = null

    const tick = (ts: number) => {
      if (!t0) t0 = ts
      const elapsed = ts - t0

      setChars(arr.map((ch, i) => {
        if (ch === ' ') return { c: ' ', done: true }
        const start = (i / arr.length) * spread
        const end = start + scrambleDur
        if (elapsed >= end) return { c: ch, done: true }
        return { c: CHARS[Math.floor(Math.random() * CHARS.length)], done: false }
      }))

      if (elapsed < total + 50) {
        raf = requestAnimationFrame(tick)
      } else {
        setChars(arr.map(c => ({ c, done: true })))
      }
    }

    const timeout = setTimeout(() => { raf = requestAnimationFrame(tick) }, delay)
    return () => { clearTimeout(timeout); cancelAnimationFrame(raf) }
  }, [triggered, text, delay])

  return (
    <span ref={ref}>
      {chars.map(({ c, done }, i) => (
        <span
          key={i}
          style={{
            color: done ? 'inherit' : 'rgba(99,102,241,0.4)',
            transition: done ? 'color 0.08s' : 'none',
          }}
        >
          {c}
        </span>
      ))}
    </span>
  )
}
