import { useState, useEffect } from 'react'
import React from "react";

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40)

      const sections = ['home', 'about', 'projects', 'contact']
      const current = sections.find(id => {
        const el = document.getElementById(id)
        if (!el) return false
        const rect = el.getBoundingClientRect()
        return rect.top <= 100 && rect.bottom >= 100
      })
      if (current) setActiveSection(current)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (e, href) => {
    e.preventDefault()
    const id = href.replace('#', '')
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    setMenuOpen(false)
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-[#0A0A0A]/90 backdrop-blur-xl border-b border-[#1A1A1A]'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-5 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#home"
          onClick={e => handleNavClick(e, '#home')}
          className="font-['Syne'] font-bold text-xl tracking-tight group"
        >
          <span className="text-white">harshana</span>
          <span className="text-orange-500">.</span>
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-1">
          {navLinks.map(link => {
            const isActive = activeSection === link.href.replace('#', '')
            return (
              <li key={link.label}>
                <a
                  href={link.href}
                  onClick={e => handleNavClick(e, link.href)}
                  className={`relative px-4 py-2 text-sm font-medium tracking-wide transition-colors duration-200 rounded-md
                    ${isActive ? 'text-orange-400' : 'text-[#9CA3AF] hover:text-white'}`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-orange-500" />
                  )}
                </a>
              </li>
            )
          })}
          <li>
            <a
              href="#contact"
              onClick={e => handleNavClick(e, '#contact')}
              className="ml-4 px-5 py-2 text-sm font-semibold bg-orange-500 hover:bg-orange-400 text-black rounded-full transition-all duration-200 hover:scale-105 active:scale-95"
            >
              Hire Me
            </a>
          </li>
        </ul>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2 group"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden transition-all duration-400 overflow-hidden ${
          menuOpen ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'
        } bg-[#0D0D0D] border-b border-[#1A1A1A]`}
      >
        <ul className="flex flex-col px-6 py-4 gap-1">
          {navLinks.map(link => (
            <li key={link.label}>
              <a
                href={link.href}
                onClick={e => handleNavClick(e, link.href)}
                className="block py-3 text-[#9CA3AF] hover:text-orange-400 text-sm font-medium border-b border-[#1A1A1A] transition-colors"
              >
                {link.label}
              </a>
            </li>
          ))}
          <li className="pt-3">
            <a
              href="#contact"
              onClick={e => handleNavClick(e, '#contact')}
              className="inline-block px-6 py-2.5 text-sm font-semibold bg-orange-500 text-black rounded-full"
            >
              Hire Me
            </a>
          </li>
        </ul>
      </div>
    </nav>
  )
}