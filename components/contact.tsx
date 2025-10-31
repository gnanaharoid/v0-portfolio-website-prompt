"use client"

import type React from "react"
import { useState } from "react"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError("")

    try {
      const response = await fetch("/api/contacts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      if (!response.ok) {
        throw new Error("Failed to send message")
      }

      setSubmitted(true)
      setFormData({ name: "", email: "", message: "" })
      setTimeout(() => setSubmitted(false), 5000)
    } catch (err) {
      setError("Failed to send message. Please try again.")
      console.error(err)
    } finally {
      setLoading(false)
    }
  }

  return (
    <section className="relative py-20 px-4 md:px-8 max-w-6xl mx-auto">
      <div className="space-y-12">
        <div className="text-center mb-16">
          <div className="text-sm font-mono text-cyan-400 tracking-widest mb-4 flex items-center justify-center gap-3">
            <span className="text-green-400">// </span>CONNECTION PROTOCOL
          </div>
          <h2
            className="text-6xl md:text-7xl font-black mb-4 text-transparent bg-clip-text"
            style={{
              backgroundImage: "linear-gradient(to right, #00d9ff, #00ff88, #00d9ff)",
            }}
          >
            GET IN TOUCH
          </h2>
          <p className="text-green-400 text-lg font-mono">$ connect --secure</p>
        </div>

        {/* Contact Grid */}
        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-6">
            <div className="relative border border-green-500/30 bg-slate-950/40 backdrop-blur-md rounded-lg p-6 overflow-hidden hover:scale-105 transition-transform duration-300">
              <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-transparent pointer-events-none"></div>
              <div className="relative z-10">
                <div className="text-sm font-mono text-green-400 mb-3">$ echo $EMAIL</div>
                <h3 className="text-xl font-black text-green-400 mb-3">Email</h3>
                <a
                  href="mailto:harishgnana2021@gmail.com"
                  className="text-cyan-400 hover:text-green-400 transition-colors duration-300 text-lg font-mono"
                >
                  harishgnana2021@gmail.com
                </a>
              </div>
            </div>

            <div className="relative border border-green-500/30 bg-slate-950/40 backdrop-blur-md rounded-lg p-6 overflow-hidden hover:scale-105 transition-transform duration-300">
              <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-transparent pointer-events-none"></div>
              <div className="relative z-10">
                <div className="text-sm font-mono text-cyan-400 mb-3">$ git clone</div>
                <h3 className="text-xl font-black text-cyan-400 mb-3">GitHub</h3>
                <a
                  href="https://github.com/gnanaharoid"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-400 hover:text-cyan-400 transition-colors duration-300 text-lg font-mono"
                >
                  github.com/gnanaharoid
                </a>
              </div>
            </div>

            <div className="relative border border-green-500/30 bg-slate-950/40 backdrop-blur-md rounded-lg p-6 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-transparent pointer-events-none"></div>
              <div className="relative z-10">
                <div className="text-sm font-mono text-green-400 mb-3">$ location</div>
                <h3 className="text-xl font-black text-green-400 mb-3">Location</h3>
                <p className="text-cyan-400 font-mono">VIT Chennai, India</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form
            onSubmit={handleSubmit}
            className="relative border border-green-500/30 bg-slate-950/40 backdrop-blur-md rounded-lg p-8 space-y-6 overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-transparent pointer-events-none"></div>
            <div className="relative z-10">
              <div className="text-sm font-mono text-cyan-400 mb-4">$ send_message.sh</div>

              <div>
                <label className="block text-green-400 font-black mb-3 text-sm uppercase tracking-wider">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded bg-slate-800/70 border-2 border-green-500/50 text-slate-100 placeholder-slate-500 focus:outline-none focus:border-green-400 focus:shadow-lg focus:shadow-green-500/20 transition-all duration-300 font-mono"
                  placeholder="your_name"
                />
              </div>

              <div>
                <label className="block text-cyan-400 font-black mb-3 text-sm uppercase tracking-wider">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded bg-slate-800/70 border-2 border-green-500/50 text-slate-100 placeholder-slate-500 focus:outline-none focus:border-green-400 focus:shadow-lg focus:shadow-green-500/20 transition-all duration-300 font-mono"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label className="block text-green-400 font-black mb-3 text-sm uppercase tracking-wider">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-4 py-3 rounded bg-slate-800/70 border-2 border-green-500/50 text-slate-100 placeholder-slate-500 focus:outline-none focus:border-green-400 focus:shadow-lg focus:shadow-green-500/20 transition-all duration-300 resize-none font-mono"
                  placeholder="your_message_here..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full py-3 rounded-lg font-bold transition-all duration-300 uppercase tracking-wider text-slate-950 justify-center flex items-center"
                style={{
                  background: loading
                    ? "#00cc77"
                    : submitted
                      ? "#00ff88"
                      : "linear-gradient(to right, #00ff88, #00d9ff)",
                  boxShadow: "0 0 20px rgba(0, 255, 136, 0.5), inset 0 0 20px rgba(255, 255, 255, 0.1)",
                }}
              >
                {loading ? "[ SENDING... ]" : submitted ? "✓ SENT!" : "[ SEND MESSAGE ]"}
              </button>

              {error && <p className="text-center text-red-400 text-sm mt-2 font-mono">{error}</p>}

              {submitted && (
                <p className="text-center text-green-400 text-sm font-mono animate-data-pulse">
                  &gt; Message received! Connecting...
                </p>
              )}
            </div>
          </form>
        </div>

        <div className="relative border-2 border-green-500/60 bg-slate-950/40 backdrop-blur-md rounded-lg p-8 text-center mt-12 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-transparent pointer-events-none"></div>
          <div className="relative z-10">
            <div className="text-sm font-mono text-cyan-400 mb-4">$ cat opportunities.txt</div>
            <p className="text-slate-300 leading-relaxed text-lg font-mono">
              <span className="text-green-400 font-black">SEEKING: </span>
              <span className="text-cyan-400">Internships &amp; Collaborations</span>
            </p>
            <p className="text-slate-400 mt-4 font-mono text-sm">
              I'm actively looking for opportunities to apply my AI/ML expertise in real-world projects. Let's build
              something amazing together!
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
