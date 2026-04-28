import { useEffect, useRef, useState } from 'react'
import React from "react";

const contactItems = [
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
      </svg>
    ),
    label: 'Email',
    value: 'punthisiharshana@gmail.com',
    href: 'mailto:punthisiharshana@gmail.com',
    action: 'Send Email',
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
      </svg>
    ),
    label: 'Phone',
    value: '+94 76 0877 304',
    href: 'tel:+94760877304',
    action: 'Call Now',
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
    label: 'LinkedIn',
    value: 'Harshana Adhikari',
    href: 'https://www.linkedin.com/in/harshana-adhikari-76b3aa33a/',
    action: 'Connect',
  },

  {
    icon: (
      <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
    label: 'GitHub',
    value: 'Harshana Adhikari',
    href: 'https://github.com/HarshanaAdhikari',
    action: 'Connect',
  },
]

export default function Contact() {
  const sectionRef = useRef(null)
  const [copied, setCopied] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.querySelectorAll('.reveal').forEach((el, i) => {
            setTimeout(() => {
              el.style.opacity = '1'
              el.style.transform = 'translateY(0)'
            }, i * 100)
          })
        }
      },
      { threshold: 0.1 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('punthisiharshana@gmail.com')
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <section ref={sectionRef} className="py-32 px-6 relative overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-orange-500/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <p
            className="reveal text-orange-500 text-xs tracking-[0.4em] uppercase font-medium mb-3"
            style={{ opacity: 0, transform: 'translateY(24px)', transition: 'all 0.7s ease' }}
          >
            03 — Contact
          </p>
          <h2
            className="reveal font-['Syne'] text-4xl sm:text-5xl font-bold text-white mb-4"
            style={{ opacity: 0, transform: 'translateY(24px)', transition: 'all 0.7s ease' }}
          >
            Let's Work{' '}
            <span className="text-orange-400">Together</span>
          </h2>
          <p
            className="reveal text-[#6B7280] text-lg max-w-md mx-auto"
            style={{ opacity: 0, transform: 'translateY(24px)', transition: 'all 0.7s ease' }}
          >
            I'm currently open to new opportunities and collaborations. Drop a message and let's build something great.
          </p>
        </div>

        {/* Main CTA card */}
        <div
          className="reveal relative rounded-3xl border border-[#1A1A1A] bg-[#0D0D0D] overflow-hidden mb-8"
          style={{ opacity: 0, transform: 'translateY(24px)', transition: 'all 0.7s ease' }}
        >
          {/* Top gradient */}
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-orange-500/40 to-transparent" />

          <div className="p-8 sm:p-12 text-center">
            <div className="w-16 h-16 rounded-2xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8 text-orange-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
              </svg>
            </div>
            <h3 className="font-['Syne'] text-2xl font-bold text-white mb-2">
              punthisiharshana@gmail.com
            </h3>
            <p className="text-[#6B7280] mb-8 text-sm">The fastest way to reach me</p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href="mailto:punthisiharshana@gmail.com"
                className="px-8 py-3.5 bg-orange-500 hover:bg-orange-400 text-black font-semibold rounded-full transition-all duration-200 hover:scale-105 active:scale-95 text-sm"
              >
                Send Email
              </a>
              <button
                onClick={handleCopyEmail}
                className="px-8 py-3.5 border border-[#2A2A2A] hover:border-orange-500/40 text-[#9CA3AF] hover:text-white font-medium rounded-full transition-all duration-200 text-sm flex items-center justify-center gap-2"
              >
                {copied ? (
                  <>
                    <svg className="w-4 h-4 text-orange-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-orange-400">Copied!</span>
                  </>
                ) : (
                  <>
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                    </svg>
                    Copy Email
                  </>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Contact cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {contactItems.map((item, i) => (
            <a
              key={item.label}
              href={item.href}
              className="reveal group p-6 rounded-2xl border border-[#1A1A1A] bg-[#0D0D0D] hover:border-orange-500/25 hover:bg-[#111] transition-all duration-300 flex flex-col gap-4"
              style={{ opacity: 0, transform: 'translateY(24px)', transition: `opacity 0.7s ease ${(i + 4) * 0.1}s, transform 0.7s ease ${(i + 4) * 0.1}s, border-color 0.3s, background-color 0.3s` }}
            >
              <div className="w-10 h-10 rounded-xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center text-orange-400 group-hover:bg-orange-500/15 transition-colors">
                {item.icon}
              </div>
              <div>
                <p className="text-xs text-[#4B5563] tracking-widest uppercase mb-1">{item.label}</p>
                <p className="text-[#9CA3AF] text-sm font-medium group-hover:text-white transition-colors">{item.value}</p>
              </div>
              <div className="mt-auto flex items-center gap-1.5 text-xs text-orange-500 opacity-0 group-hover:opacity-100 transition-opacity">
                {item.action}
                <svg className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </a>
          ))}
        </div>

        {/* Bottom tagline */}
        <div
          className="reveal text-center mt-16"
          style={{ opacity: 0, transform: 'translateY(24px)', transition: 'all 0.7s ease 0.7s' }}
        >
          <p className="text-[#2A2A2A] text-sm tracking-widest uppercase">
            Based in Sri Lanka · Open to Remote Work Worldwide
          </p>
        </div>
      </div>
    </section>
  )
}