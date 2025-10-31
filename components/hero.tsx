"use client"

export default function Hero() {
  return (
    <div className="relative w-full h-screen flex items-center justify-center pt-16 bg-gradient-to-b from-slate-950 to-slate-900">
      <div className="relative z-10 text-center max-w-3xl px-4">
        <div className="mb-8 inline-block">
          <div className="text-sm font-semibold text-cyan-400 tracking-widest mb-2">WELCOME TO MY PORTFOLIO</div>
          <div className="h-1 w-12 bg-gradient-to-r from-cyan-500 to-purple-600 mx-auto"></div>
        </div>

        <h1 className="text-6xl md:text-7xl font-bold mb-6 leading-tight">
          <span className="glow-text">Gnana Harish</span>
          <div className="text-4xl md:text-5xl mt-4 text-slate-300">Tech-driven. Team-minded. Future-focused.</div>
        </h1>

        <p className="text-lg md:text-xl text-slate-300 mb-8 max-w-2xl mx-auto leading-relaxed">
          B.Tech Computer Science Engineering (AI & ML) student at VIT Chennai, graduating 2029. Passionate about
          innovation, sports, and building intelligent solutions.
        </p>

        <div className="flex gap-4 justify-center flex-wrap">
          <button
            onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
            className="glow-button"
          >
            Explore My Work
          </button>
          <a
            href="https://github.com/gnanaharoid"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-lg font-semibold border-2 border-cyan-500 text-cyan-400 hover:bg-cyan-500/10 transition-all duration-300"
          >
            GitHub Profile
          </a>
        </div>

        <div className="mt-16 flex justify-center gap-8 text-sm text-slate-400">
          <div>AI/ML Enthusiast</div>
          <div>•</div>
          <div>Problem Solver</div>
          <div>•</div>
          <div>Sports Lover</div>
        </div>
      </div>
    </div>
  )
}
