import FloatingIcons from "./floating-icons"
import Timeline from "./timeline"
import ResumeDownload from "./resume-download"

export default function About() {
  return (
    <section className="relative py-20 px-4 md:px-8 max-w-6xl mx-auto">
      <FloatingIcons />

      <div className="space-y-12 relative z-10">
        <div className="text-center mb-16">
          <div className="text-sm font-mono text-cyan-400 tracking-widest mb-4 flex items-center justify-center gap-3">
            <span className="text-green-400">// </span>DEVELOPER PROFILE
          </div>
          <h2
            className="text-6xl md:text-7xl font-black mb-4 text-transparent bg-clip-text"
            style={{
              backgroundImage: "linear-gradient(to right, #00d9ff, #00ff88, #00d9ff)",
            }}
          >
            ABOUT ME
          </h2>
          <p className="text-green-400 text-lg font-mono">$ whoami</p>
        </div>

        {/* Main Content */}
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="relative border border-green-500/30 bg-slate-950/40 backdrop-blur-md rounded-lg p-8 h-full overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-transparent pointer-events-none"></div>
            <div className="relative z-10">
              <p className="text-lg text-slate-300 leading-relaxed mb-6 font-mono">
                I'm <span className="text-green-400 font-bold">Gnana Harish</span>, an AI/ML developer passionate about
                building <span className="text-cyan-400 font-bold">intelligent systems</span> that solve real-world
                problems.
              </p>
              <p className="text-lg text-slate-300 leading-relaxed font-mono">
                Currently pursuing B.Tech in CS with AI & ML specialization at VIT Chennai. I combine technical
                expertise with innovation and teamwork to create impactful solutions.
              </p>
            </div>
          </div>

          <div className="space-y-6">
            {/* Education Card */}
            <div className="relative border-l-4 border-green-500 border border-green-500/30 bg-slate-950/40 backdrop-blur-md rounded-lg p-6 overflow-hidden hover:scale-105 transition-transform duration-300">
              <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-transparent pointer-events-none rounded-lg"></div>
              <div className="relative z-10">
                <div className="text-sm font-mono text-cyan-400 mb-2">$ cat education.txt</div>
                <h3 className="text-2xl font-black text-green-400 mb-3">B.Tech CSE (AI & ML)</h3>
                <p className="text-slate-300 font-semibold mb-1">VIT Chennai</p>
                <p className="text-sm text-cyan-400 font-mono">Graduation: 2029</p>
              </div>
            </div>

            {/* Focus Areas */}
            <div className="relative border-l-4 border-cyan-500 border border-green-500/30 bg-slate-950/40 backdrop-blur-md rounded-lg p-6 overflow-hidden hover:scale-105 transition-transform duration-300">
              <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-transparent pointer-events-none rounded-lg"></div>
              <div className="relative z-10">
                <div className="text-sm font-mono text-green-400 mb-2">$ cat focus_areas.txt</div>
                <h3 className="text-2xl font-black text-cyan-400 mb-3">Core Interests</h3>
                <ul className="text-slate-300 space-y-2 font-mono text-sm">
                  <li>• Machine Learning & Deep Learning</li>
                  <li>• Data Analysis & Processing</li>
                  <li>• Problem Solving & Innovation</li>
                  <li>• Team Leadership</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Timeline */}
        <div className="mt-16 pt-12 border-t border-green-500/20">
          <div className="text-sm font-mono text-cyan-400 tracking-widest mb-6 flex items-center gap-3">
            <span className="text-green-400">// </span>TIMELINE
          </div>
          <h3 className="text-4xl font-black text-green-400 mb-8">EDUCATION JOURNEY</h3>
          <Timeline />
        </div>

        {/* Resume */}
        <div className="flex justify-center mt-12">
          <ResumeDownload />
        </div>
      </div>
    </section>
  )
}
