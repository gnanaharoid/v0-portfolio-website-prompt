export default function Skills() {
  const skills = [
    { name: "Python", level: 90, category: "Core Language", icon: "🐍" },
    { name: "Machine Learning", level: 88, category: "Specialization", icon: "🤖" },
    { name: "Deep Learning", level: 85, category: "Advanced", icon: "🧠" },
    { name: "Data Analysis", level: 87, category: "Analytics", icon: "📊" },
    { name: "Problem Solving", level: 92, category: "Core Skill", icon: "🎯" },
    { name: "Teamwork", level: 94, category: "Collaboration", icon: "👥" },
  ]

  return (
    <section className="relative py-20 px-4 md:px-8 max-w-6xl mx-auto">
      <div className="space-y-12">
        <div className="text-center mb-16">
          <div className="text-sm font-mono text-cyan-400 tracking-widest mb-4 flex items-center justify-center gap-3">
            <span className="text-green-400">// </span>TECHNICAL ARSENAL
          </div>
          <h2
            className="text-6xl md:text-7xl font-black mb-4 text-transparent bg-clip-text"
            style={{
              backgroundImage: "linear-gradient(to right, #00d9ff, #00ff88, #00d9ff)",
            }}
          >
            SKILLS
          </h2>
          <p className="text-green-400 text-lg font-mono">$ cat expertise.txt</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="relative border border-green-500/30 bg-slate-950/40 backdrop-blur-md rounded-lg p-6 group hover:scale-105 transition-transform duration-300 overflow-hidden"
              style={{
                boxShadow: "0 0 20px rgba(0, 255, 136, 0.15), inset 0 0 20px rgba(0, 255, 136, 0.05)",
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-transparent pointer-events-none rounded-lg"></div>
              <div className="relative z-10">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <div className="text-3xl mb-2">{skill.icon}</div>
                    <h3 className="text-2xl font-black text-green-400">{skill.name}</h3>
                    <p className="text-xs text-cyan-400 font-mono mt-1">{skill.category}</p>
                  </div>
                  <div className="text-right">
                    <div className="text-3xl font-black text-green-400">{skill.level}%</div>
                    <div className="text-xs text-green-400/60 font-mono">PROFICIENCY</div>
                  </div>
                </div>

                {/* Tech bar */}
                <div className="h-2 bg-slate-800 rounded-full overflow-hidden mt-4 relative">
                  <div
                    className="h-full bg-gradient-to-r from-green-500 via-cyan-400 to-green-500 transition-all duration-1000 ease-out"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                  <div className="absolute inset-0 animate-scan opacity-30"></div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="relative border-2 border-green-500/50 bg-slate-950/40 backdrop-blur-md rounded-lg p-8 text-center mt-12 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-transparent pointer-events-none rounded-lg"></div>
          <div className="relative z-10">
            <div className="font-mono text-green-400 mb-4 text-sm">
              <span className="text-cyan-400">{">"} </span>./compile_expertise.sh
            </div>
            <h3 className="text-3xl font-black text-green-400 mb-4">TECHNICAL FOCUS</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-left">
              <div className="border-l-2 border-green-500 pl-4">
                <p className="text-green-400 font-mono text-sm font-bold">AI/ML Systems</p>
                <p className="text-cyan-400 text-xs mt-1">Building intelligent algorithms</p>
              </div>
              <div className="border-l-2 border-cyan-500 pl-4">
                <p className="text-cyan-400 font-mono text-sm font-bold">Data Processing</p>
                <p className="text-green-400 text-xs mt-1">Efficient data manipulation</p>
              </div>
              <div className="border-l-2 border-green-500 pl-4">
                <p className="text-green-400 font-mono text-sm font-bold">Innovation</p>
                <p className="text-cyan-400 text-xs mt-1">Cutting-edge solutions</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
