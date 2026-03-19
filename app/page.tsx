'use client'

import { useState, useEffect } from 'react'
import Navigation from '@/components/Navigation'
import Home from '@/components/pages/Home'
import Work from '@/components/pages/Work'
import Skills from '@/components/pages/Skills'
import Experience from '@/components/pages/Experience'
import Contact from '@/components/pages/Contact'
import Footer from '@/components/Footer'
import ThemeToggle from '@/components/ThemeToggle'

type Page = 'home' | 'work' | 'skills' | 'experience' | 'contact'

export default function Portfolio() {
  const [currentPage, setCurrentPage] = useState<Page>('home')
  const [isLoading, setIsLoading] = useState(false)

  const handlePageChange = (page: Page) => {
    setIsLoading(true)
    setTimeout(() => {
      setCurrentPage(page)
      setIsLoading(false)
    }, 200)
  }

  return (
    <div className="min-h-screen bg-[#080810] text-white overflow-x-hidden">
      {/* Theme toggle in top right */}
      <div className="fixed top-6 right-6 z-50">
        <ThemeToggle />
      </div>

      {/* Navigation */}
      <Navigation currentPage={currentPage} onPageChange={handlePageChange} />

      {/* Main content */}
      <main className="pt-32">
        <div className={`transition-opacity duration-300 ${isLoading ? 'opacity-0' : 'opacity-100'}`}>
          {currentPage === 'home' && <Home />}
          {currentPage === 'work' && <Work />}
          {currentPage === 'skills' && <Skills />}
          {currentPage === 'experience' && <Experience />}
          {currentPage === 'contact' && <Contact />}
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  )
}
