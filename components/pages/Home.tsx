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
    <section className="min-h-screen flex items-center justify-center px-6 py-20">
      <div className="max-w-6xl w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="space-y-8">
            {/* Status pill */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-teal-primary/20 border border-teal-primary/40 animate-pulse-gentle">
              <div className="w-2 h-2 rounded-full bg-teal-primary"></div>
              <span className="text-sm text-teal-primary">{content.status}</span>
            </div>

            {/* Name */}
            <div>
              <h2 className="text-6xl lg:text-7xl font-bold text-white mb-2">{content.name}</h2>
            </div>

            {/* Gradient title */}
            <div>
              <h1 className="text-5xl lg:text-6xl font-bold bg-gradient-purple-teal bg-clip-text text-transparent">
                {content.title}
              </h1>
            </div>

            {/* Description */}
            <p className="text-lg text-white/70 leading-relaxed max-w-lg">{content.description}</p>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-4">
              {content.stats.map((stat) => (
                <StatCard key={stat.label} label={stat.label} value={stat.value} />
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button className="px-6 py-3 rounded-lg bg-purple-primary hover:bg-purple-accent text-white font-semibold transition-colors inline-flex items-center gap-2 w-full sm:w-auto justify-center">
                {content.cta.primary} <ArrowRight size={18} />
              </button>
              <button className="px-6 py-3 rounded-lg border border-purple-primary/40 hover:border-purple-primary text-white font-semibold transition-colors inline-flex items-center gap-2 w-full sm:w-auto justify-center">
                {content.cta.secondary} <Download size={18} />
              </button>
            </div>
          </div>

          {/* Right - iPhone mockup */}
          <div className="hidden lg:flex justify-center items-center">
            <IPhoneMockup videoUrl={content.videoUrl} />
          </div>
        </div>
      </div>
    </section>
  )
}

function StatCard({ label, value }: { label: string; value: string }) {
  return (
    <div className="p-4 rounded-lg bg-white/5 border border-white/10 hover:border-purple-primary/40 transition-colors">
      <div className="font-bold text-2xl bg-gradient-purple-teal bg-clip-text text-transparent">{label}</div>
      <div className="text-sm text-white/60">{value}</div>
    </div>
  )
}

function IPhoneMockup({ videoUrl }: { videoUrl: string }) {
  const [isVideoAvailable, setIsVideoAvailable] = useState(false)

  useEffect(() => {
    // Check if video URL is valid
    if (videoUrl && videoUrl !== 'https://example.com/softpos-demo.mp4') {
      setIsVideoAvailable(true)
    }
  }, [videoUrl])

  return (
    <div className="relative w-64 h-96">
      {/* iPhone 14 Pro frame - stainless steel bezel */}
      <div className="absolute inset-0 rounded-3xl bg-gray-900 shadow-2xl glow-purple" style={{ padding: '12px' }}>
        {/* Dynamic Island */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-40 h-7 bg-black rounded-b-3xl z-20"></div>

        {/* Screen */}
        <div className="relative w-full h-full rounded-3xl bg-gradient-to-b from-slate-900 to-slate-950 overflow-hidden">
          {/* Status bar */}
          <div className="flex items-center justify-between px-4 pt-2 pb-4">
            <div className="text-xs text-white/60">9:41</div>
            <div className="flex gap-1">
              <div className="w-1 h-1 rounded-full bg-white/40"></div>
              <div className="w-1 h-1 rounded-full bg-white/40"></div>
              <div className="w-1 h-1 rounded-full bg-white/40"></div>
            </div>
          </div>

          {/* Video or fallback UI */}
          {isVideoAvailable ? (
            <video
              src={videoUrl}
              autoPlay
              muted
              loop
              className="w-full h-full object-cover"
            />
          ) : (
            <DefaultPhoneUI />
          )}
        </div>
      </div>
    </div>
  )
}

function DefaultPhoneUI() {
  return (
    <div className="w-full h-full flex flex-col px-4 py-4">
      {/* Tap to Pay badge */}
      <div className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-teal-primary/20 border border-teal-primary/40 mb-6 w-fit">
        <div className="w-1.5 h-1.5 rounded-full bg-teal-primary animate-pulse-gentle"></div>
        <span className="text-xs text-teal-primary font-semibold">Tap to Pay</span>
      </div>

      {/* Transactions list */}
      <div className="space-y-3 flex-1 overflow-y-auto">
        <Transaction amount="€45.99" name="Coffee Shop" time="2 min ago" />
        <Transaction amount="€120.50" name="Dinner" time="1 hour ago" />
        <Transaction amount="€89.00" name="Shopping" time="3 hours ago" />
        <Transaction amount="€32.45" name="Transport" time="Today" />
      </div>

      {/* Footer */}
      <div className="pt-4 border-t border-white/10 text-center text-xs text-white/40">
        4 transactions today
      </div>
    </div>
  )
}

function Transaction({ amount, name, time }: { amount: string; name: string; time: string }) {
  return (
    <div className="flex items-center justify-between text-xs px-2 py-2 rounded-lg hover:bg-white/5 transition-colors">
      <div className="flex-1">
        <div className="text-white/80 font-medium">{name}</div>
        <div className="text-white/40 text-xs">{time}</div>
      </div>
      <div className="text-teal-primary font-semibold">{amount}</div>
    </div>
  )
}
