export default function Timeline() {
  const timelineEvents = [
    {
      year: "2021",
      title: "Began B.Tech Journey",
      description: "Started Computer Science Engineering at VIT Chennai",
      icon: "📚",
    },
    {
      year: "2022-2023",
      title: "Explored AI & ML",
      description: "Deep dive into machine learning and AI fundamentals",
      icon: "🧠",
    },
    {
      year: "2024",
      title: "Built Projects",
      description: "Developed Noise Detection system and other innovative solutions",
      icon: "🚀",
    },
    {
      year: "2025-2029",
      title: "Specialization",
      description: "Focused AI & ML coursework and advanced projects",
      icon: "🎯",
    },
  ]

  return (
    <div className="space-y-8">
      {timelineEvents.map((event, index) => (
        <div key={index} className="flex gap-6 items-start">
          {/* Timeline dot and line */}
          <div className="flex flex-col items-center">
            <div className="w-4 h-4 rounded-full bg-gradient-to-r from-cyan-500 to-purple-500 shadow-lg shadow-cyan-500/50"></div>
            {index < timelineEvents.length - 1 && (
              <div className="w-1 h-20 bg-gradient-to-b from-cyan-500/50 to-purple-500/50 mt-2"></div>
            )}
          </div>

          {/* Content */}
          <div className="pt-1 pb-8">
            <div className="text-cyan-400 font-bold text-lg">{event.year}</div>
            <h4 className="text-xl font-bold text-white mt-1">{event.title}</h4>
            <p className="text-slate-400 mt-2">{event.description}</p>
          </div>

          {/* Icon */}
          <div className="text-4xl mt-1">{event.icon}</div>
        </div>
      ))}
    </div>
  )
}
