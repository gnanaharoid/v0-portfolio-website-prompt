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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 5000)
    setFormData({ name: "", email: "", message: "" })
  }

  return (
    <section className="relative py-20 px-4 md:px-8 max-w-6xl mx-auto">
      <div className="space-y-12">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-4">
            <span className="glow-text">Get in Touch</span>
          </h2>
          <p className="text-slate-400 text-lg">Let's connect and create something amazing</p>
        </div>

        {/* Contact Grid */}
        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="glow-box p-6 rounded-lg hover:scale-105 transition-transform duration-300">
              <h3 className="text-2xl font-bold text-cyan-400 mb-3">Email</h3>
              <a
                href="mailto:harishgnana2021@gmail.com"
                className="text-slate-300 hover:text-cyan-400 transition-colors duration-300 text-lg"
              >
                harishgnana2021@gmail.com
              </a>
            </div>

            <div className="glow-box p-6 rounded-lg hover:scale-105 transition-transform duration-300">
              <h3 className="text-2xl font-bold text-purple-400 mb-3">GitHub</h3>
              <a
                href="https://github.com/gnanaharoid"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-300 hover:text-purple-400 transition-colors duration-300 text-lg"
              >
                github.com/gnanaharoid
              </a>
            </div>

            <div className="glow-box p-6 rounded-lg">
              <h3 className="text-2xl font-bold text-orange-400 mb-3">Location</h3>
              <p className="text-slate-300">VIT Chennai, India</p>
            </div>
          </div>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="glow-box p-8 rounded-lg space-y-6">
            <div>
              <label className="block text-slate-300 font-semibold mb-2">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded bg-slate-800/50 border border-cyan-500/30 text-slate-100 placeholder-slate-500 focus:outline-none focus:border-cyan-400 focus:glow-pulse transition-all duration-300"
                placeholder="Your name"
              />
            </div>

            <div>
              <label className="block text-slate-300 font-semibold mb-2">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded bg-slate-800/50 border border-cyan-500/30 text-slate-100 placeholder-slate-500 focus:outline-none focus:border-cyan-400 focus:glow-pulse transition-all duration-300"
                placeholder="your@email.com"
              />
            </div>

            <div>
              <label className="block text-slate-300 font-semibold mb-2">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={4}
                className="w-full px-4 py-3 rounded bg-slate-800/50 border border-cyan-500/30 text-slate-100 placeholder-slate-500 focus:outline-none focus:border-cyan-400 focus:glow-pulse transition-all duration-300 resize-none"
                placeholder="Your message..."
              ></textarea>
            </div>

            <button type="submit" className="w-full glow-button justify-center">
              {submitted ? "✓ Message Sent!" : "Send Message"}
            </button>

            {submitted && (
              <p className="text-center text-cyan-400 text-sm">Thanks for reaching out! I'll get back to you soon.</p>
            )}
          </form>
        </div>
      </div>
    </section>
  )
}
