"use client"

import { useEffect, useRef } from "react"

interface FloatingIcon {
  id: number
  x: number
  y: number
  vx: number
  vy: number
  icon: string
  label: string
}

export default function FloatingIcons() {
  const containerRef = useRef<HTMLDivElement>(null)
  const iconsRef = useRef<FloatingIcon[]>([
    { id: 1, x: 50, y: 50, vx: 0.5, vy: 0.3, icon: "🤖", label: "AI" },
    { id: 2, x: 80, y: 30, vx: -0.4, vy: 0.6, icon: "💻", label: "Code" },
    { id: 3, x: 60, y: 80, vx: 0.6, vy: -0.4, icon: "⚡", label: "Innovation" },
  ])

  useEffect(() => {
    const interval = setInterval(() => {
      if (!containerRef.current) return

      const width = containerRef.current.offsetWidth
      const height = containerRef.current.offsetHeight

      iconsRef.current.forEach((icon) => {
        icon.x += icon.vx
        icon.y += icon.vy

        if (icon.x < 0 || icon.x > 100) icon.vx *= -1
        if (icon.y < 0 || icon.y > 100) icon.vy *= -1
      })
    }, 50)

    return () => clearInterval(interval)
  }, [])

  return (
    <div ref={containerRef} className="absolute inset-0 overflow-hidden opacity-20">
      {iconsRef.current.map((icon) => (
        <div
          key={icon.id}
          className="absolute text-5xl animate-pulse"
          style={{
            left: `${icon.x}%`,
            top: `${icon.y}%`,
            transform: "translate(-50%, -50%)",
            transition: "all 0.1s linear",
          }}
        >
          {icon.icon}
        </div>
      ))}
    </div>
  )
}
