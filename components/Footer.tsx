'use client'

import { useEffect, useState } from 'react'

interface FooterData {
  location: string
  credit: string
}

export default function Footer() {
  const [footer, setFooter] = useState<FooterData | null>(null)

  useEffect(() => {
    fetch('/content.json')
      .then((res) => res.json())
      .then((data) => setFooter(data.footer))
  }, [])

  if (!footer) return null

  return (
    <footer className="border-t border-white/10 bg-black/30 py-8">
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="text-white/60 text-sm">{footer.location}</div>
        <div className="text-white/60 text-sm">
          {footer.credit} with{' '}
          <a
            href="https://nextjs.org"
            target="_blank"
            rel="noopener noreferrer"
            className="text-purple-accent hover:text-purple-light transition-colors"
          >
            Next.js
          </a>
        </div>
      </div>
    </footer>
  )
}
