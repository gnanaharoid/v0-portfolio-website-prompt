"use client"

export default function Hero() {
  return (
    <div className="relative w-full h-screen flex items-center justify-center pt-16 bg-gradient-to-b from-slate-950 to-slate-900 overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(0deg, transparent 24%, rgba(0, 255, 136, 0.1) 25%, rgba(0, 255, 136, 0.1) 26%, transparent 27%, transparent 74%, rgba(0, 255, 136, 0.1) 75%, rgba(0, 255, 136, 0.1) 76%, transparent 77%, transparent), linear-gradient(90deg, transparent 24%, rgba(0, 255, 136, 0.1) 25%, rgba(0, 255, 136, 0.1) 26%, transparent 27%, transparent 74%, rgba(0, 255, 136, 0.1) 75%, rgba(0, 255, 136, 0.1) 76%, transparent 77%, transparent)",
            backgroundSize: "100px 100px",
          }}
        ></div>
      </div>

      <div className="relative z-10 text-center max-w-4xl px-4">
        {/* Terminal-style header */}
        <div className="mb-8 inline-block">
          <div className="text-sm font-mono text-green-400 tracking-widest mb-4 flex items-center justify-center gap-3">
            <span className="text-cyan-400">// </span>INITIALIZING PORTFOLIO v2.0
          </div>
          <div className="h-1 w-16 bg-gradient-to-r from-green-400 via-cyan-400 to-green-400 mx-auto"></div>
        </div>

        {/* Profile section */}
        <div className="mb-10 inline-block relative">
          <div className="absolute -inset-4 bg-gradient-to-r from-green-500 via-cyan-500 to-green-500 rounded-full blur-2xl opacity-60 animate-pulse"></div>
          <div className="relative w-40 h-40 rounded-full bg-gradient-to-br from-slate-800 to-slate-900 border-2 border-green-400/60 flex items-center justify-center text-6xl overflow-hidden">
            <span className="animate-pulse">👨‍💻</span>
          </div>
        </div>

        {/* Main heading */}
        <h1 className="text-7xl md:text-8xl font-black mb-6 leading-tight">
          <span
            className="block text-transparent bg-clip-text"
            style={{
              backgroundImage: "linear-gradient(to right, #00d9ff, #00ff88, #00d9ff)",
              textShadow: "0 0 20px rgba(0, 255, 136, 0.5), 0 0 40px rgba(0, 255, 136, 0.3)",
            }}
          >
            GNANA HARISH
          </span>
          <span className="text-2xl md:text-3xl mt-4 text-cyan-400 font-mono tracking-wider">
            &lt; AI/ML Developer /&gt;
          </span>
        </h1>

        {/* Tagline */}
        <p className="text-lg md:text-xl text-green-400 mb-10 max-w-3xl mx-auto leading-relaxed font-mono">
          {"> "} Building intelligent systems. Solving complex problems. Pushing boundaries.
        </p>

        {/* CTA Buttons */}
        <div className="flex gap-6 justify-center flex-wrap mb-12">
          <button
            onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
            className="px-6 py-3 rounded-lg font-bold transition-all duration-300 uppercase tracking-wider text-slate-950"
            style={{
              background: "linear-gradient(to right, #00ff88, #00d9ff)",
              boxShadow: "0 0 20px rgba(0, 255, 136, 0.5), inset 0 0 20px rgba(255, 255, 255, 0.1)",
            }}
          >
            [Explore]
          </button>
          <a
            href="https://github.com/gnanaharoid"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-lg font-bold border-2 border-green-500 text-green-400 hover:bg-green-500/10 transition-all duration-300 uppercase tracking-wider"
          >
            &lt; GitHub /&gt;
          </a>
        </div>

        {/* Tech stats */}
        <div className="mt-16 grid grid-cols-3 gap-6 max-w-2xl mx-auto">
          <div className="relative border border-green-500/30 bg-slate-950/40 backdrop-blur-md rounded-lg p-6 text-center overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-transparent pointer-events-none rounded-lg"></div>
            <div className="relative z-10">
              <div className="text-3xl font-bold text-green-400">AI/ML</div>
              <div className="text-xs text-cyan-400 mt-1 font-mono">ACTIVE</div>
            </div>
          </div>
          <div className="relative border border-green-500/30 bg-slate-950/40 backdrop-blur-md rounded-lg p-6 text-center overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-transparent pointer-events-none rounded-lg"></div>
            <div className="relative z-10">
              <div className="text-3xl font-bold text-green-400">100%</div>
              <div className="text-xs text-cyan-400 mt-1 font-mono">COMMITMENT</div>
            </div>
          </div>
          <div className="relative border border-green-500/30 bg-slate-950/40 backdrop-blur-md rounded-lg p-6 text-center overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-transparent pointer-events-none rounded-lg"></div>
            <div className="relative z-10">
              <div className="text-3xl font-bold text-green-400">∞</div>
              <div className="text-xs text-cyan-400 mt-1 font-mono">LEARNING</div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-green-500/5 to-transparent animate-scan"></div>
      </div>
    </div>
  )
}
