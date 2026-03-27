'use client'

import { ArrowRight, Download } from 'lucide-react'
import { useEffect, useState } from 'react'

interface HeroData {
  name: string
  title: string
  description: string
  status: string
  stats: Array<{ label: string; value: string }>
  cta: { primary: string; secondary: string }
  videoUrl: string
}

export default function Home() {
  const [content, setContent] = useState<HeroData | null>(null)

  useEffect(() => {
    fetch('/content.json')
      .then((res) => res.json())
      .then((data) => setContent(data.hero))
  }, [])

  if (!content) return null

  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-6 py-20">
      <div className="max-w-6xl w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="space-y-6 max-w-xl">
            {/* Status pill - minimal */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10">
              <div className="w-1.5 h-1.5 rounded-full bg-white"></div>
              <span className="text-sm text-white/60">{content.status}</span>
            </div>

            {/* Name */}
            <h1 className="text-5xl lg:text-6xl font-bold text-white tracking-tight">{content.name}</h1>

            {/* Title */}
            <h2 className="text-2xl lg:text-3xl font-medium text-white/60">{content.title}</h2>

            {/* Description */}
            <p className="text-base text-white/50 leading-relaxed">{content.description}</p>

            {/* Stats */}
            <div className="flex gap-6 pt-2">
              {content.stats.map((stat) => (
                <div key={stat.label} className="p-3 rounded-md bg-white/5 border border-white/5">
                  <div className="font-semibold text-lg text-white">{stat.label}</div>
                  <div className="text-xs text-white/40">{stat.value}</div>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="flex gap-3 pt-2">
              <a href="#work" className="px-5 py-2.5 rounded-md bg-white text-black font-medium text-sm hover:bg-white/90 transition-all inline-flex items-center gap-2">
                {content.cta.primary} <ArrowRight size={16} />
              </a>
              <button className="px-5 py-2.5 rounded-md border border-white/20 text-white/80 font-medium text-sm hover:border-white/40 transition-all inline-flex items-center gap-2">
                {content.cta.secondary} <Download size={16} />
              </button>
            </div>
          </div>

          {/* Right - Project screenshots grid */}
          <div className="grid grid-cols-2 gap-4 max-w-md">
            <div className="aspect-[3/4] rounded-lg bg-white/5 border border-white/10 overflow-hidden group">
              <div className="w-full h-full bg-gradient-to-br from-white/10 to-white/5 flex items-center justify-center text-white/20 text-sm group-hover:scale-105 transition-transform duration-500">
                CheckoutX
              </div>
            </div>
            <div className="aspect-[3/4] rounded-lg bg-white/5 border border-white/10 overflow-hidden group mt-8">
              <div className="w-full h-full bg-gradient-to-br from-white/10 to-white/5 flex items-center justify-center text-white/20 text-sm group-hover:scale-105 transition-transform duration-500">
                LendHOPE
              </div>
            </div>
            <div className="aspect-[3/4] rounded-lg bg-white/5 border border-white/10 overflow-hidden group -mt-4">
              <div className="w-full h-full bg-gradient-to-br from-white/10 to-white/5 flex items-center justify-center text-white/20 text-sm group-hover:scale-105 transition-transform duration-500">
                Roadmap
              </div>
            </div>
            <div className="aspect-[3/4] rounded-lg bg-white/5 border border-white/10 overflow-hidden group">
              <div className="w-full h-full bg-gradient-to-br from-white/10 to-white/5 flex items-center justify-center text-white/20 text-sm group-hover:scale-105 transition-transform duration-500">
                More
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}