"use client"

import { useEffect, useRef } from "react"

export default function WaveformVisualizer() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const animationRef = useRef<number>(0)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    canvas.width = canvas.offsetWidth
    canvas.height = canvas.offsetHeight

    let time = 0

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Draw gradient background
      const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height)
      gradient.addColorStop(0, "rgba(34, 211, 238, 0.1)")
      gradient.addColorStop(1, "rgba(168, 85, 247, 0.1)")
      ctx.fillStyle = gradient
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Draw waveform
      ctx.strokeStyle = "#06b6d4"
      ctx.lineWidth = 3
      ctx.shadowColor = "rgba(6, 182, 212, 0.8)"
      ctx.shadowBlur = 10

      ctx.beginPath()
      for (let x = 0; x < canvas.width; x += 5) {
        const y = canvas.height / 2 + Math.sin((x + time) * 0.01) * 30 + Math.sin((x + time * 0.5) * 0.005) * 20
        if (x === 0) ctx.moveTo(x, y)
        else ctx.lineTo(x, y)
      }
      ctx.stroke()

      // Draw secondary wave
      ctx.strokeStyle = "#a855f7"
      ctx.globalAlpha = 0.6
      ctx.beginPath()
      for (let x = 0; x < canvas.width; x += 5) {
        const y =
          canvas.height / 2 +
          Math.sin((x + time) * 0.01 + Math.PI) * 25 +
          Math.sin((x + time * 0.5) * 0.005 + Math.PI) * 15
        if (x === 0) ctx.moveTo(x, y)
        else ctx.lineTo(x, y)
      }
      ctx.stroke()
      ctx.globalAlpha = 1

      time += 2
      animationRef.current = requestAnimationFrame(animate)
    }

    animate()

    return () => cancelAnimationFrame(animationRef.current)
  }, [])

  return <canvas ref={canvasRef} className="w-full h-full rounded-lg" />
}
