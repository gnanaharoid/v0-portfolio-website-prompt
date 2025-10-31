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
    { id: "home", label: "HOME" },
    { id: "about", label: "ABOUT" },
    { id: "projects", label: "PROJECTS" },
    { id: "skills", label: "SKILLS" },
    { id: "contact", label: "CONTACT" },
  ]

  return (
    <nav className="fixed top-0 w-full z-50 bg-slate-950/70 backdrop-blur-lg border-b-2 border-green-500/40">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        <div
          className="text-2xl font-black font-mono text-transparent bg-clip-text"
          style={{
            backgroundImage: "linear-gradient(to right, #00d9ff, #00ff88, #00d9ff)",
          }}
        >
          &lt;GHP /&gt;
        </div>

        <div className="hidden md:flex gap-8 font-mono text-sm">
          {sections.map(({ id, label }) => (
            <button
              key={id}
              onClick={() => scrollToSection(id)}
              className={`transition-all duration-300 font-bold uppercase tracking-wider ${
                activeSection === id
                  ? "text-green-400 border-b-2 border-green-400 pb-1 animate-glow-pulse"
                  : "text-cyan-400 hover:text-green-400 hover:border-b-2 hover:border-green-400 pb-1"
              }`}
            >
              $ {label}
            </button>
          ))}
        </div>

        <a
          href="mailto:harishgnana2021@gmail.com"
          className="hidden md:block px-6 py-3 rounded-lg font-bold transition-all duration-300 uppercase tracking-wider text-slate-950 text-xs"
          style={{
            background: "linear-gradient(to right, #00ff88, #00d9ff)",
            boxShadow: "0 0 20px rgba(0, 255, 136, 0.5), inset 0 0 20px rgba(255, 255, 255, 0.1)",
          }}
        >
          CONNECT
        </a>
      </div>
    </nav>
  )
}
