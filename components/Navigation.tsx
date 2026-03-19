'use client'

import { useEffect, useState } from 'react'

type Page = 'home' | 'work' | 'skills' | 'experience' | 'contact'

interface NavigationProps {
  currentPage: Page
  onPageChange: (page: Page) => void
}

const navItems: { label: string; page: Page }[] = [
  { label: 'Home', page: 'home' },
  { label: 'Work', page: 'work' },
  { label: 'Skills', page: 'skills' },
  { label: 'Experience', page: 'experience' },
  { label: 'Contact', page: 'contact' },
]

export default function Navigation({ currentPage, onPageChange }: NavigationProps) {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className="fixed top-0 left-0 right-0 z-40 flex justify-center pt-6">
      <div
        className={`
          flex items-center gap-1 px-6 py-3 rounded-full border border-purple-primary
          transition-all duration-300
          ${isScrolled ? 'bg-black/50 backdrop-blur-md' : 'bg-black/40'}
        `}
      >
        {navItems.map((item) => (
          <button
            key={item.page}
            onClick={() => onPageChange(item.page)}
            className={`
              px-4 py-2 rounded-full font-medium text-sm transition-all duration-300
              ${
                currentPage === item.page
                  ? 'bg-purple-primary/30 text-purple-accent'
                  : 'text-white/70 hover:text-white'
              }
            `}
          >
            {item.label}
          </button>
        ))}
      </div>
    </nav>
  )
}
