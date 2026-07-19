"use client"

import { useEffect, useRef, useState } from "react"

const CHARS = '!<>─*#?╋▒░$&@%┼╌'

interface Props {
  text: string
  delay?: number
}

export function ScrambleText({ text, delay = 80 }: Props) {
  const orig = useRef(Array.from(text))
  const isFirstMount = useRef(true)

  const [chars, setChars] = useState<{ c: string; done: boolean }[]>(
    () => orig.current.map(c => ({ c, done: false }))
  )
  const [triggered, setTriggered] = useState(false)
  const ref = useRef<HTMLSpanElement>(null)

  // Sync orig and chars when language changes — skip the initial mount
  useEffect(() => {
    if (isFirstMount.current) { isFirstMount.current = false; return }
    orig.current = Array.from(text)
    setChars(orig.current.map(c => ({ c, done: true })))
  }, [text])

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) { setTriggered(true); observer.disconnect() }
      },
      { threshold: 0.1 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!triggered) return
    const arr = orig.current  // snapshot at trigger time — stable across language changes
    const total = 1400, scrambleDur = 340, spread = total - scrambleDur
    let raf: number, t0: number | null = null

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
      if (elapsed < total + 50) { raf = requestAnimationFrame(tick) }
      else { setChars(arr.map(c => ({ c, done: true }))) }
    }

    const timeout = setTimeout(() => { raf = requestAnimationFrame(tick) }, delay)
    return () => { clearTimeout(timeout); cancelAnimationFrame(raf) }
  }, [triggered, delay])  // text removed — language changes handled by the sync effect above

  return (
    <span ref={ref}>
      {chars.map(({ c, done }, i) => {
        const original = orig.current[i]

        // Spaces: render as-is — no overlay needed
        if (original === ' ') return <span key={i}> </span>

        // Non-space: hidden original reserves layout width,
        // visible char floats above absolutely — zero layout shift
        return (
          <span key={i} style={{ position: 'relative', display: 'inline-block' }}>
            <span style={{ visibility: 'hidden', userSelect: 'none' }} aria-hidden="true">
              {original}
            </span>
            <span
              aria-hidden={!done}
              style={{
                position: 'absolute',
                inset: 0,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: done ? 'inherit' : 'rgba(99,102,241,0.4)',
                transition: done ? 'color 0.08s' : 'none',
                userSelect: done ? 'auto' : 'none',
              }}
            >
              {c}
            </span>
          </span>
        )
      })}
    </span>
  )
}
