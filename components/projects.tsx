import WaveformVisualizer from "./waveform-visualizer"

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: "Noise Detection System",
      category: "AI/ML Project",
      description:
        "Advanced noise detection using ML algorithms and sensor data analysis. Real-time processing with high accuracy for environmental monitoring.",
      tags: ["Python", "ML", "IoT", "Data Analysis"],
      icon: "📊",
      hasVisualization: true,
      status: "COMPLETED",
    },
    {
      id: 2,
      title: "Future Innovation",
      category: "Coming Soon",
      description: "Next-generation AI project in development. Combining deep learning with real-world applications.",
      tags: ["AI", "ML", "Research"],
      icon: "🚀",
      disabled: true,
      status: "IN PROGRESS",
    },
    {
      id: 3,
      title: "Advanced Tech",
      category: "Research",
      description: "Exploring cutting-edge technology integration and innovative solutions for complex problems.",
      tags: ["Innovation", "Research", "Development"],
      icon: "⚡",
      disabled: true,
      status: "PLANNED",
    },
  ]

  return (
    <section className="relative py-20 px-4 md:px-8 max-w-6xl mx-auto">
      <div className="space-y-12">
        <div className="text-center mb-16">
          <div className="text-sm font-mono text-cyan-400 tracking-widest mb-4 flex items-center justify-center gap-3">
            <span className="text-green-400">// </span>PROJECT PORTFOLIO
          </div>
          <h2
            className="text-6xl md:text-7xl font-black mb-4 text-transparent bg-clip-text"
            style={{
              backgroundImage: "linear-gradient(to right, #00d9ff, #00ff88, #00d9ff)",
            }}
          >
            PROJECTS
          </h2>
          <p className="text-green-400 text-lg font-mono">$ ls -la projects/</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div
              key={project.id}
              className={`group relative border border-green-500/30 bg-slate-950/40 backdrop-blur-md rounded-lg p-6 transition-all duration-300 hover:border-green-400/80 hover:shadow-lg hover:shadow-green-500/20 cursor-pointer overflow-hidden ${
                project.disabled ? "opacity-60" : ""
              } ${project.hasVisualization ? "md:col-span-2" : ""}`}
              style={{
                boxShadow: "0 0 20px rgba(0, 255, 136, 0.15), inset 0 0 20px rgba(0, 255, 136, 0.05)",
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-transparent pointer-events-none rounded-lg"></div>

              {/* Status badge */}
              <div className="absolute -top-3 -right-3 px-3 py-1 bg-green-500/20 border border-green-500 rounded text-xs font-mono font-bold text-green-400">
                {project.status}
              </div>

              <div className="relative z-10">
                {project.hasVisualization && (
                  <div className="mb-4 h-48 rounded-lg overflow-hidden border border-green-500/30 bg-slate-900/80 transform group-hover:scale-105 transition-transform duration-300">
                    <WaveformVisualizer />
                  </div>
                )}

                <div className="text-5xl mb-4">{project.icon}</div>

                <h3 className="text-2xl font-black text-green-400 mb-2 font-mono">{project.title}</h3>
                <p className="text-sm text-cyan-400 mb-3 font-mono uppercase tracking-wider">{project.category}</p>
                <p className="text-slate-300 mb-6 leading-relaxed text-sm">{project.description}</p>

                {/* Tech tags */}
                <div className="flex flex-wrap gap-2 mt-4 mb-4">
                  {project.tags.map((tag) => (
                    <code
                      key={tag}
                      className="font-mono text-green-400 bg-slate-950/80 px-3 py-1 rounded border border-green-500/30 text-xs"
                    >
                      {tag}
                    </code>
                  ))}
                </div>

                {!project.disabled && (
                  <button className="w-full py-2 rounded border-2 border-green-500 text-green-400 hover:bg-green-500/20 transition-all duration-300 font-black text-sm uppercase tracking-wider">
                    View Details →
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
