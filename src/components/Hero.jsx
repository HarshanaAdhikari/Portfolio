import { useEffect, useRef } from 'react'
import React from "react";
import profile from "../assets/profile.jpg";

export default function Hero() {

 return (
    <section className="hero">
      <div className="hero-left">
        <img src={profile} alt="Profile" className="hero-img" />
      </div>

      <div className="hero-right">
        <h1>Harshana Adhikari</h1>
        <h2>UI/UX Designer & Frontend Developer</h2>
        <p>
          I create modern websites, intuitive interfaces, and engaging digital
          experiences.
        </p>
     <div className="mt-8 flex justify-center gap-4"></div>
                <a 
          href="#contact" 
          className="ml-1 px-6 py-3 border border-orange-500 text-orange-500 rounded-lg hover:bg-orange-500 hover:text-white transition"
        >
          Hire Me
        </a>

        <a 
          href="#projects" 
          className="ml-4 px-6 py-3 border border-orange-500 text-orange-500 rounded-lg hover:bg-orange-500 hover:text-white transition"
        >
          View Projects
        </a>
      </div>
    </section>
  );

  const containerRef = useRef(null)

  useEffect(() => {
    const el = containerRef.current
    if (!el) return
    el.style.opacity = '0'
    el.style.transform = 'translateY(20px)'
    requestAnimationFrame(() => {
      el.style.transition = 'opacity 0.8s ease, transform 0.8s ease'
      el.style.opacity = '1'
      el.style.transform = 'translateY(0)'
    })
  }, [])

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="relative min-h-screen flex items-center justify-center px-6 pt-20 overflow-hidden">
      {/* Grid background */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }}
      />

      {/* Center glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-orange-500/6 blur-[100px] rounded-full pointer-events-none" />

      <div ref={containerRef} className="max-w-4xl mx-auto text-center relative z-10">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-orange-500/30 bg-orange-500/8 mb-8">
          <span className="w-2 h-2 rounded-full bg-orange-400 animate-pulse" />
          <span className="text-orange-400 text-xs font-medium tracking-widest uppercase">Available for Work</span>
        </div>

        {/* Name */}
        <h1 className="font-['Syne'] text-5xl sm:text-7xl md:text-8xl font-extrabold leading-[0.95] mb-6 tracking-tight">
          <span className="text-white block">Harshana</span>
          <span
            className="block"
            style={{
              background: 'linear-gradient(135deg, #F97316 0%, #FB923C 50%, #FDBA74 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            Adhikari
          </span>
        </h1>

        {/* Role */}
        <div className="flex items-center justify-center gap-3 mb-6">
          <div className="h-px w-12 bg-gradient-to-r from-transparent to-orange-500" />
          <p className="text-[#9CA3AF] text-sm tracking-[0.3em] uppercase font-medium">
            UI/UX Designer & Frontend Developer
          </p>
          <div className="h-px w-12 bg-gradient-to-l from-transparent to-orange-500" />
        </div>

        {/* Bio */}
        <p className="text-[#6B7280] text-lg sm:text-xl max-w-2xl mx-auto mb-12 leading-relaxed font-light">
          Final-year BICT undergraduate at{' '}
          <span className="text-[#9CA3AF]">Rajarata University of Sri Lanka</span>,
          crafting beautiful, user-centric digital experiences with a passion for
          clean design and modern web technologies.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button
            onClick={() => scrollTo('projects')}
            className="group relative px-8 py-4 bg-orange-500 hover:bg-orange-400 text-black font-semibold rounded-full transition-all duration-200 hover:scale-105 active:scale-95 overflow-hidden"
          >
            <span className="relative z-10 flex items-center gap-2">
              View Projects
              <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </span>
          </button>

          <button
            onClick={() => scrollTo('contact')}
            className="px-8 py-4 border border-[#2A2A2A] hover:border-orange-500/50 text-[#9CA3AF] hover:text-white font-medium rounded-full transition-all duration-200 hover:scale-105 active:scale-95"
          >
            Get in Touch
          </button>
        </div>

        {/* Scroll indicator */}
        <div className="mt-20 flex flex-col items-center gap-2 opacity-40">
          <span className="text-xs tracking-widest uppercase text-[#6B7280]">Scroll</span>
          <div className="w-px h-12 bg-gradient-to-b from-orange-500 to-transparent animate-bounce" />
        </div>
      </div>

      {/* Floating elements */}
      <div className="hidden lg:block absolute top-1/3 left-12 w-1 h-24 bg-gradient-to-b from-orange-500/40 to-transparent rounded-full" />
      <div className="hidden lg:block absolute top-1/2 right-12 w-1 h-16 bg-gradient-to-b from-orange-500/20 to-transparent rounded-full" />
      <div className="hidden lg:block absolute bottom-1/3 left-20 w-2 h-2 rounded-full bg-orange-500/40" />
      <div className="hidden lg:block absolute top-1/3 right-24 w-1.5 h-1.5 rounded-full bg-orange-400/30" />
    </div>
  )
}