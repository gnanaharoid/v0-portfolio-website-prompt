import FloatingIcons from "./floating-icons"
import Timeline from "./timeline"
import ResumeDownload from "./resume-download"

export default function About() {
  return (
    <section className="relative py-20 px-4 md:px-8 max-w-6xl mx-auto bg-gradient-to-b from-slate-900 to-slate-950">
      <FloatingIcons />

      <div className="space-y-12 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-4">
            <span className="glow-text">About Me</span>
          </h2>
          <div className="flex justify-center gap-2 mt-4">
            <div className="w-2 h-2 rounded-full bg-cyan-500 animate-bounce" style={{ animationDelay: "0s" }}></div>
            <div className="w-2 h-2 rounded-full bg-cyan-500 animate-bounce" style={{ animationDelay: "0.2s" }}></div>
            <div className="w-2 h-2 rounded-full bg-cyan-500 animate-bounce" style={{ animationDelay: "0.4s" }}></div>
          </div>
        </div>

        {/* Main Content */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="glow-box p-8 rounded-lg">
            <p className="text-lg text-slate-300 leading-relaxed mb-6">
              I'm <span className="text-cyan-400 font-semibold">Gnana Harish</span>, a passionate technology enthusiast
              with a deep interest in <span className="text-purple-400 font-semibold">AI and Machine Learning</span>.
              Currently pursuing my B.Tech in Computer Science Engineering with specialization in AI & ML at VIT
              Chennai.
            </p>
            <p className="text-lg text-slate-300 leading-relaxed">
              When I'm not exploring cutting-edge tech trends or building intelligent solutions, you'll find me engaged
              in sports that keep me active, focused, and energized. I believe in the power of technology to solve
              real-world problems and am committed to continuous learning and innovation.
            </p>
          </div>

          <div className="space-y-6">
            {/* Education Card */}
            <div className="glow-box p-6 rounded-lg hover:scale-105 transition-transform duration-300">
              <h3 className="text-2xl font-bold text-cyan-400 mb-2">Education</h3>
              <p className="text-slate-300 font-semibold">B.Tech Computer Science Engineering</p>
              <p className="text-sm text-slate-400">AI & ML Specialization</p>
              <p className="text-sm text-slate-400 mt-2">VIT Chennai • Class of 2029</p>
            </div>

            {/* Passion Card */}
            <div className="glow-box p-6 rounded-lg hover:scale-105 transition-transform duration-300">
              <h3 className="text-2xl font-bold text-purple-400 mb-2">Passion Areas</h3>
              <ul className="text-slate-300 space-y-2">
                <li>• Artificial Intelligence & Machine Learning</li>
                <li>• Problem Solving & Innovation</li>
                <li>• Team Collaboration & Leadership</li>
                <li>• Sports & Physical Fitness</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-12 border-t border-cyan-500/20">
          <h3 className="text-4xl font-bold text-cyan-400 mb-8">Education Journey</h3>
          <Timeline />
        </div>

        <div className="flex justify-center mt-12">
          <ResumeDownload />
        </div>
      </div>
    </section>
  )
}
