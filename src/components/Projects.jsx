import { useEffect, useRef } from 'react'
import React from "react";

const projects = [
  {
    id: '01',
    title: 'Vehicle Service Center Management System',
    category: 'Full Stack Application',
    description:
      'A comprehensive management platform for vehicle service centers, streamlining operations from customer booking to technician assignment and job tracking. Built with a focus on efficiency, real-time updates, and actionable dashboards.',
    tech: ['React', 'Node.js', 'REST APIs', 'MySQL', 'Tailwind CSS'],
    features: [
      'Online appointment booking system',
      'Real-time job tracking & status updates',
      'Admin & technician dashboards',
      'Push notifications for customers',
      'Service history & invoice management',
    ],
    color: 'from-orange-500 to-amber-400',
    accent: '#F97316',
    
  },
  {
    id: '02',
    title: 'Faculty Website',
    category: 'UI/UX & Frontend',
    description:
      'A fully responsive, UI/UX-focused website for a university faculty. Designed with accessibility and information architecture as core principles, delivering a clean and modern experience for students, staff, and visitors.',
    tech: ['HTML', 'CSS', 'JavaScript', 'Figma', 'Responsive Design'],
    features: [
      'Mobile-first responsive layout',
      'Clear information hierarchy',
      'Accessibility-focused design(WCAG)',
      'Interactive announcements section',
      'Staff directory & course listings',
    ],
    color: 'from-orange-600 to-orange-400',
    accent: '#EA580C',
   
  },
  {
    id: '03',
    title: 'Mosquito Larva Detection',
    category: 'AI Research Project',
    description:
      'An academic AI research project leveraging deep learning models to automatically detect and classify mosquito larvae in water samples. Contributes to public health surveillance by enabling faster, more accurate detection without manual inspection.',
    tech: ['Python', 'TensorFlow', 'CNN', 'OpenCV', 'Deep Learning'],
    features: [
      'Automated larvae detection via CNN',
      'Real-time image classification',
      'High-accuracy deep learning model',
      'Dataset collection & annotation pipeline',
      'Public health reporting integration',
    ],
    color: 'from-amber-500 to-orange-500',
    accent: '#D97706',
    
  },
  {
    id: '04',
    title: 'Smart Automatic Trash Bin',
    category: 'IoT / Arduino',
    description:
      'An IoT-powered automatic trash bin using Arduino and ultrasonic sensors to detect approaching users and open the lid automatically. Includes a fill-level sensor that triggers alerts when the bin needs emptying, promoting smart waste management.',
    tech: ['Arduino', 'C++', 'Ultrasonic Sensors', 'Servo Motor', 'IoT'],
    features: [
      'Touchless lid via proximity sensor',
      'Fill-level monitoring & alerts',
      'Low-power operation',
      'Modular sensor architecture',
      'Real-world prototype tested',
    ],
    color: 'from-orange-400 to-red-400',
    accent: '#FB923C',
    
  },
]

function ProjectCard({ project, index }) {
  const cardRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1'
          entry.target.style.transform = 'translateY(0)'
        }
      },
      { threshold: 0.1 }
    )
    if (cardRef.current) observer.observe(cardRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={cardRef}
      className="group relative rounded-2xl border border-[#1A1A1A] bg-[#0D0D0D] overflow-hidden hover:border-orange-500/20 transition-all duration-500"
      style={{
        opacity: 0,
        transform: 'translateY(30px)',
        transition: `opacity 0.7s ease ${index * 0.1}s, transform 0.7s ease ${index * 0.1}s`,
      }}
    >
      {/* Top accent bar */}
      <div className={`h-0.5 w-full bg-gradient-to-r ${project.color} opacity-60 group-hover:opacity-100 transition-opacity duration-300`} />

      {/* Hover background glow */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{ background: `radial-gradient(circle at 50% 0%, ${project.accent}08 0%, transparent 60%)` }}
      />

      <div className="relative p-6 sm:p-8">
        {/* Header row */}
        <div className="flex items-start justify-between gap-4 mb-5">
          <div>
            <p className="text-xs text-[#4B5563] tracking-widest uppercase mb-1.5">{project.category}</p>
            <h3 className="font-['Syne'] text-xl font-bold text-white leading-tight group-hover:text-orange-50 transition-colors">
              {project.title}
            </h3>
          </div>
          <span
            className="font-['Syne'] text-4xl font-extrabold opacity-10 group-hover:opacity-20 transition-opacity shrink-0"
            style={{ color: project.accent }}
          >
            {project.id}
          </span>
        </div>

        {/* Description */}
        <p className="text-[#6B7280] text-sm leading-relaxed mb-6">{project.description}</p>

        {/* Features */}
        <div className="mb-6">
          <p className="text-xs text-[#4B5563] uppercase tracking-widest mb-3">Key Features</p>
          <ul className="space-y-1.5">
            {project.features.map(f => (
              <li key={f} className="flex items-start gap-2 text-sm text-[#9CA3AF]">
                <span style={{ color: project.accent }} className="mt-0.5 text-xs shrink-0">▸</span>
                {f}
              </li>
            ))}
          </ul>
        </div>

        {/* Tech stack */}
        <div className="flex flex-wrap gap-2 mb-7">
          {project.tech.map(t => (
            <span
              key={t}
              className="px-3 py-1 text-xs font-medium rounded-full border border-[#222] text-[#9CA3AF] bg-[#111]"
            >
              {t}
            </span>
          ))}
        </div>

        
        
      </div>
    </div>
  )
}

export default function Projects() {
  return (
    <section className="py-32 px-6 relative">
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-orange-500/4 rounded-full blur-[80px] pointer-events-none" />

      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-16">
          <p className="text-orange-500 text-xs tracking-[0.4em] uppercase font-medium mb-3">
            02 — Projects
          </p>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6">
            <h2 className="font-['Syne'] text-4xl sm:text-5xl font-bold text-white">
              Things I've{' '}
              <span className="text-orange-400">Built</span>
            </h2>
            <p className="text-[#6B7280] text-sm max-w-xs sm:text-right leading-relaxed">
              A selection of projects spanning full-stack development, design, AI research, and IoT.
            </p>
          </div>
        </div>

        {/* Projects grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
