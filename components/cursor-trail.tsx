"use client"

import { useEffect, useRef } from "react"

export default function CursorTrail() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const mousePos = useRef({ x: 0, y: 0 })
  const particles = useRef<Array<{ x: number; y: number; life: number }>>([])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    const handleMouseMove = (e: MouseEvent) => {
      mousePos.current = { x: e.clientX, y: e.clientY }
      particles.current.push({
        x: e.clientX,
        y: e.clientY,
        life: 1,
      })
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      particles.current = particles.current.filter((p) => p.life > 0)

      particles.current.forEach((particle) => {
        const alpha = particle.life
        ctx.fillStyle = `rgba(34, 211, 238, ${alpha * 0.6})`
        ctx.beginPath()
        ctx.arc(particle.x, particle.y, 3 * alpha, 0, Math.PI * 2)
        ctx.fill()

        particle.life -= 0.02
      })

      requestAnimationFrame(animate)
    }

    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    window.addEventListener("mousemove", handleMouseMove)
    window.addEventListener("resize", handleResize)
    animate()

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  return <canvas ref={canvasRef} className="fixed top-0 left-0 w-full h-full pointer-events-none z-50" />
}
