"use client"

import { useState, useEffect } from "react"

export default function BackToTop() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener("scroll", toggleVisibility)
    return () => window.removeEventListener("scroll", toggleVisibility)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  if (!isVisible) return null

  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-8 right-8 z-40 p-3 rounded-full text-white hover:scale-110 transition-all duration-300 font-bold text-xl"
      style={{
        background: "linear-gradient(to right, #00ff88, #00d9ff)",
        boxShadow: "0 0 20px rgba(0, 255, 136, 0.5), inset 0 0 20px rgba(255, 255, 255, 0.1)",
      }}
      aria-label="Back to top"
    >
      ↑
    </button>
  )
}
