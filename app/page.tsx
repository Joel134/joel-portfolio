'use client'

import Home from '@/components/pages/Home'
import Work from '@/components/pages/Work'
import Skills from '@/components/pages/Skills'
import Experience from '@/components/pages/Experience'
import Contact from '@/components/pages/Contact'
import Footer from '@/components/Footer'

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      {/* Sticky header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a0a]/80 backdrop-blur-sm border-b border-white/5">
        <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
          <a href="#" className="text-lg font-semibold text-white">Joel</a>
          <nav className="flex gap-6">
            <a href="#work" className="text-sm text-white/50 hover:text-white transition-colors">Work</a>
            <a href="#skills" className="text-sm text-white/50 hover:text-white transition-colors">Skills</a>
            <a href="#experience" className="text-sm text-white/50 hover:text-white transition-colors">Experience</a>
            <a href="#contact" className="text-sm text-white/50 hover:text-white transition-colors">Contact</a>
          </nav>
        </div>
      </header>

      {/* Main content - scrollable single page */}
      <main className="pt-20">
        <Home />
        <Work />
        <Skills />
        <Experience />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  )
}