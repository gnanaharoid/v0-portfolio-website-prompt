export default function Projects() {
  const projects = [
    {
      id: 1,
      title: "Noise Detection in Places",
      category: "Multidisciplinary Project",
      description:
        "An intelligent system for detecting and analyzing noise pollution in different environments using sensor data and machine learning algorithms.",
      tags: ["Python", "ML", "Data Analysis", "IoT"],
      icon: "📊",
    },
    {
      id: 2,
      title: "Future Project",
      category: "Coming Soon",
      description: "More exciting projects in development. Stay tuned for innovative solutions in AI and ML.",
      tags: ["AI", "ML", "Innovation"],
      icon: "🚀",
      disabled: true,
    },
    {
      id: 3,
      title: "Another Project",
      category: "Coming Soon",
      description: "Groundbreaking work combining cutting-edge technology with practical applications.",
      tags: ["Tech", "Development", "Innovation"],
      icon: "✨",
      disabled: true,
    },
  ]

  return (
    <section className="relative py-20 px-4 md:px-8 max-w-6xl mx-auto">
      <div className="space-y-12">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-4">
            <span className="glow-text">Projects</span>
          </h2>
          <p className="text-slate-400 text-lg">Showcase of my work and innovations</p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div
              key={project.id}
              className={`group glow-box p-6 rounded-lg transition-all duration-300 ${
                !project.disabled && "hover:scale-105 hover:glow-pulse cursor-pointer"
              } ${project.disabled ? "opacity-60" : ""}`}
            >
              <div className="text-4xl mb-4">{project.icon}</div>
              <h3 className="text-2xl font-bold text-cyan-400 mb-2">{project.title}</h3>
              <p className="text-sm text-purple-400 mb-3 font-semibold">{project.category}</p>
              <p className="text-slate-300 mb-6 leading-relaxed">{project.description}</p>

              <div className="flex flex-wrap gap-2 mt-4">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/30"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {!project.disabled && (
                <button className="mt-6 w-full py-2 rounded border border-cyan-500 text-cyan-400 hover:bg-cyan-500/10 transition-colors duration-300 font-semibold">
                  Learn More →
                </button>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
