import type React from "react"
import type { Metadata } from "next"
import { Poppins, Orbitron } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const poppins = Poppins({ weight: ["300", "400", "500", "600", "700"], subsets: ["latin"] })
const orbitron = Orbitron({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Gnana Harish G P - AI/ML Portfolio",
  description: "Portfolio of Gnana Harish G P, B.Tech Computer Science Engineering (AI & ML) student at VIT Chennai",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <head>
        <style>{`
          @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&family=Orbitron:wght@400;700;900&display=swap');
        `}</style>
      </head>
      <body className={`${poppins.className} antialiased bg-slate-950 text-slate-100 overflow-x-hidden`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
