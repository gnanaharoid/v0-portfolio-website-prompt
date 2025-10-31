"use client"

interface NavigationProps {
  activeSection: string
}

export default function Navigation({ activeSection }: NavigationProps) {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    element?.scrollIntoView({ behavior: "smooth" })
  }

  const sections = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "projects", label: "Projects" },
    { id: "skills", label: "Skills" },
    { id: "contact", label: "Contact" },
  ]

  return (
    <nav className="fixed top-0 w-full z-50 bg-slate-950/80 backdrop-blur-md border-b border-cyan-500/20">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        <div className="text-2xl font-bold glow-text">GHP</div>

        <div className="hidden md:flex gap-8">
          {sections.map(({ id, label }) => (
            <button
              key={id}
              onClick={() => scrollToSection(id)}
              className={`transition-all duration-300 font-medium text-sm ${
                activeSection === id ? "text-cyan-400 border-b-2 border-cyan-400" : "text-slate-300 hover:text-cyan-400"
              }`}
            >
              {label}
            </button>
          ))}
        </div>

        <a href="mailto:harishgnana2021@gmail.com" className="hidden md:block glow-button text-sm">
          Get in Touch
        </a>
      </div>
    </nav>
  )
}
