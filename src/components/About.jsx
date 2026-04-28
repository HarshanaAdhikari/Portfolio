import { useEffect, useRef } from 'react'
import React from "react";

const skillGroups = [
  {
    category: 'Frontend Development',
    icon: '⬡',
    color: 'from-orange-600 to-orange-400',
    skills: [
      'HTML5',
      'CSS3',
      'JavaScript',
      'React.js',
      'Tailwind CSS',
      'Responsive Design'
    ],
  },

  {
    category: 'UI/UX Design',
    icon: '✦',
    color: 'from-orange-500 to-amber-400',
    skills: [
      'Figma',
      'Canva',
      'Wireframing',
      'Prototyping',
      'User Research',
      'Design Systems'
    ],
  },

  {
    category: 'AI Productivity Tools',
    icon: '◎',
    color: 'from-orange-400 to-red-400',
    skills: [
      'ChatGPT',
      'Gemini',
      'Claude',
      'AI Content',
      'AI-Assisted Design'
    ],
  },
];


const stats = [
  { value: '4+', label: 'Projects Built' },
  { value: '3+', label: 'Years Learning' },
  { value: '10+', label: 'Technologies' },
  { value: '∞', label: 'Curiosity' },
]

export default function About() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.reveal').forEach((el, i) => {
              el.style.transitionDelay = `${i * 0.1}s`
              el.classList.add('opacity-100', 'translate-y-0')
              el.classList.remove('opacity-0', 'translate-y-6')
            })
          }
        })
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="py-32 px-6 relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-orange-500/4 rounded-full blur-[80px] pointer-events-none" />

      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="mb-20">
          <p className="reveal opacity-0 translate-y-6 transition-all duration-700 text-orange-500 text-xs tracking-[0.4em] uppercase font-medium mb-3">
            01 — About
          </p>
          <h2 className="reveal opacity-0 translate-y-6 transition-all duration-700 font-['Syne'] text-4xl sm:text-5xl font-bold text-white">
            The Person Behind<br />
            <span className="text-orange-400">the Pixels</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start mb-24">
          {/* Text content */}
          <div className="space-y-6">
            <p className="reveal opacity-0 translate-y-6 transition-all duration-700 text-[#9CA3AF] text-lg leading-relaxed">
              I'm <span className="text-white font-medium">Harshana Adhikari</span>, a final-year BICT undergraduate 
              at Rajarata University of Sri Lanka with a deep passion for crafting 
              digital experiences that are both beautiful and functional.
            </p>
            <p className="reveal opacity-0 translate-y-6 transition-all duration-700 text-[#6B7280] leading-relaxed">
              My focus sits at the intersection of <span className="text-orange-400">UI/UX design</span> and 
              <span className="text-orange-400"> frontend development</span>  understanding not just how 
              things look, but how they feel to use. I believe the best interfaces are invisible; 
              they guide users intuitively without friction.
            </p>
            <p className="reveal opacity-0 translate-y-6 transition-all duration-700 text-[#6B7280] leading-relaxed">
              I embrace a <span className="text-[#9CA3AF]">continuous learning mindset</span>, staying current 
              with modern tools, frameworks, and AI-powered workflows. I actively use 
              ChatGPT, Gemini, and Claude to supercharge my design and development process 
              treating AI as a collaborator, not a replacement for creativity.
            </p>
            
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-4">
            {stats.map((stat, i) => (
              <div
                key={stat.label}
                className="reveal opacity-0 translate-y-6 transition-all duration-700 group p-6 rounded-2xl border border-[#1A1A1A] bg-[#111111] hover:border-orange-500/30 hover:bg-[#141414] transition-colors cursor-default"
              >
                <div className="font-['Syne'] text-4xl font-extrabold text-orange-500 mb-2 group-hover:scale-110 transition-transform origin-left">
                  {stat.value}
                </div>
                <div className="text-[#6B7280] text-sm tracking-wide">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Skills section */}
        <div>
          <p className="reveal opacity-0 translate-y-6 transition-all duration-700 text-orange-500 text-xs tracking-[0.4em] uppercase font-medium mb-3">
            Skills & Tools
          </p>
          <h3 className="reveal opacity-0 translate-y-6 transition-all duration-700 font-['Syne'] text-2xl font-bold text-white mb-10">
            What I Work With
          </h3>

          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillGroups.map((group, gi) => (
              <div
                key={group.category}
                className="reveal opacity-0 translate-y-6 transition-all duration-700 group p-12 rounded-2xl border border-[#1A1A1A] bg-[#0D0D0D] hover:border-orange-500/20 hover:bg-[#111111] transition-all duration-100"
              >
                {/* Header */}
                <div className="flex items-center gap-3 mb-4">
                  <span
                    className={`text-xl bg-gradient-to-br ${group.color} bg-clip-text`}
                    style={{ WebkitTextFillColor: 'transparent' }}
                  >
                    {group.icon}
                  </span>
                  <h4 className="font-['Syne'] text-lg font-semibold text-white">{group.category}</h4>
                </div>

                {/* Skills list */}
                <div className="flex flex-wrap gap-2">
                  {group.skills.map(skill => (
                    <span
                      key={skill}
                      className="px-2.5 py-1 text-xs text-[#9CA3AF] border border-[#222] rounded-md bg-[#151515] hover:text-orange-400 hover:border-orange-500/30 transition-colors cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}