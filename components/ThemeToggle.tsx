'use client'

import { useEffect, useState } from 'react'
import { Sun, Moon } from 'lucide-react'

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(true)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    // Check localStorage or system preference
    const stored = localStorage.getItem('theme')
    if (stored) {
      setIsDark(stored === 'dark')
      applyTheme(stored === 'dark')
    } else {
      // Check system preference
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
      setIsDark(prefersDark)
      applyTheme(prefersDark)
    }
  }, [])

  const applyTheme = (dark: boolean) => {
    const root = document.documentElement
    if (dark) {
      root.style.colorScheme = 'dark'
      root.style.backgroundColor = '#080810'
    } else {
      root.style.colorScheme = 'light'
      root.style.backgroundColor = '#ffffff'
    }
  }

  const toggleTheme = () => {
    const newIsDark = !isDark
    setIsDark(newIsDark)
    localStorage.setItem('theme', newIsDark ? 'dark' : 'light')
    applyTheme(newIsDark)
    
    // Update body background
    const body = document.body
    if (newIsDark) {
      body.classList.remove('bg-white', 'text-black')
      body.classList.add('bg-[#080810]', 'text-white')
    } else {
      body.classList.remove('bg-[#080810]', 'text-white')
      body.classList.add('bg-white', 'text-black')
    }
  }

  if (!mounted) return null

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-full bg-purple-primary/20 hover:bg-purple-primary/40 text-purple-accent transition-colors"
      aria-label="Toggle theme"
    >
      {isDark ? <Sun size={20} /> : <Moon size={20} />}
    </button>
  )
}
