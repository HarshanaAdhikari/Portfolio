import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'
import React from "react";

export default function App() {
  return (
    <div className="relative min-h-screen bg-[#0A0A0A] text-white overflow-x-hidden">
      {/* Grain overlay for texture */}
      <div className="grain-overlay" />

      {/* Background ambient glow */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-[-200px] left-[-200px] w-[600px] h-[600px] rounded-full bg-orange-500/5 blur-[120px]" />
        <div className="absolute bottom-[-200px] right-[-200px] w-[500px] h-[500px] rounded-full bg-orange-600/5 blur-[120px]" />
      </div>

      <div className="relative z-10">
        <Navbar />
        <main>
          <section id="home"><Hero /></section>
          <section id="about"><About /></section>
          <section id="projects"><Projects /></section>
          <section id="contact"><Contact /></section>
        </main>

        <footer className="border-t border-[#1A1A1A] py-8 text-center">
          <p className="text-[#4B5563] text-sm font-light tracking-widest uppercase">
            © 2025 Harshana Adhikari — Built with React & Tailwind
          </p>
        </footer>
      </div>
    </div>
  )
}