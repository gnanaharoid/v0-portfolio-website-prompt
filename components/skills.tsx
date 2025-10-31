export default function Skills() {
  const skills = [
    { name: "Python", level: 90, color: "from-cyan-500 to-blue-600" },
    { name: "HTML & CSS", level: 85, color: "from-blue-500 to-purple-600" },
    { name: "Problem Solving", level: 88, color: "from-purple-500 to-pink-600" },
    { name: "Teamwork", level: 92, color: "from-pink-500 to-orange-600" },
  ]

  return (
    <section className="relative py-20 px-4 md:px-8 max-w-6xl mx-auto">
      <div className="space-y-12">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-4">
            <span className="glow-text">Skills & Expertise</span>
          </h2>
          <p className="text-slate-400 text-lg">Technical abilities and core competencies</p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {skills.map((skill) => (
            <div key={skill.name} className="space-y-3">
              <div className="flex justify-between items-center">
                <h3 className="text-xl font-bold text-slate-100">{skill.name}</h3>
                <span className="text-cyan-400 font-bold">{skill.level}%</span>
              </div>
              <div className="h-3 bg-slate-800 rounded-full overflow-hidden glow-box">
                <div
                  className={`h-full bg-gradient-to-r ${skill.color} transition-all duration-1000 ease-out`}
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>

        {/* Passion Section */}
        <div className="mt-16 glow-box p-8 rounded-lg text-center">
          <h3 className="text-2xl font-bold text-cyan-400 mb-4">My Focus</h3>
          <p className="text-slate-300 leading-relaxed">
            I'm passionate about applying AI and ML in real-world scenarios. My journey involves continuous learning,
            innovation, and collaboration with teammates to solve complex problems. I believe in combining technical
            expertise with strong teamwork to create impactful solutions.
          </p>
        </div>
      </div>
    </section>
  )
}
