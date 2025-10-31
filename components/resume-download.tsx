"use client"

export default function ResumeDownload() {
  const handleDownload = () => {
    const resumeContent = `GNANA HARISH G P
B.Tech Computer Science Engineering (AI & ML)
VIT Chennai | Graduating 2029

EMAIL: harishgnana2021@gmail.com
GITHUB: github.com/gnanaharoid
LOCATION: VIT Chennai, India

ABOUT
Tech-driven and team-minded Computer Science student with a passion for AI/ML innovation, problem-solving, and sports. Committed to building intelligent solutions that make a real-world impact.

EDUCATION
B.Tech Computer Science Engineering (AI & ML Specialization)
VIT Chennai | Class of 2029
Focus: Artificial Intelligence, Machine Learning, Data Analysis

SKILLS
Programming Languages: Python, C++, JavaScript
AI/ML: TensorFlow, Scikit-learn, Pandas, NumPy
Data Analysis: SQL, Data Visualization, Statistical Analysis
Web Development: HTML, CSS, React
Problem Solving: Algorithm Design, System Design
Soft Skills: Team Collaboration, Leadership, Communication

PROJECTS
1. Noise Detection in Places
   - Intelligent system for detecting and analyzing noise pollution
   - Technologies: Python, Machine Learning, IoT Sensors
   - Highlights: Real-time analysis, Environmental monitoring

PASSION AREAS
• Artificial Intelligence & Machine Learning
• Problem Solving & Innovation
• Team Collaboration & Leadership
• Sports & Physical Fitness

INTERESTS
Innovation, Technology Trends, Team Leadership, Sports, Continuous Learning`

    const blob = new Blob([resumeContent], { type: "text/plain" })
    const url = window.URL.createObjectURL(blob)
    const a = document.createElement("a")
    a.href = url
    a.download = "Gnana_Harish_Resume.txt"
    document.body.appendChild(a)
    a.click()
    window.URL.revokeObjectURL(url)
    document.body.removeChild(a)
  }

  return (
    <button
      onClick={handleDownload}
      className="px-8 py-3 rounded-lg font-semibold bg-gradient-to-r from-orange-500 to-pink-500 text-white hover:shadow-lg hover:shadow-orange-500/50 transition-all duration-300 transform hover:scale-105"
    >
      Download Resume
    </button>
  )
}
