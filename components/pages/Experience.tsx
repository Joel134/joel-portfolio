'use client'

import { useEffect, useState } from 'react'

interface ExperienceItem {
  id: string
  years: string
  role: string
  company: string
  description: string
  skills: string[]
}

export default function Experience() {
  const [experiences, setExperiences] = useState<ExperienceItem[]>([])

  useEffect(() => {
    fetch('/content.json')
      .then((res) => res.json())
      .then((data) => setExperiences(data.experience))
  }, [])

  if (!experiences.length) return null

  return (
    <section className="min-h-screen flex items-center justify-center px-6 py-20">
      <div className="max-w-3xl w-full">
        <h2 className="text-5xl font-bold mb-16">Experience</h2>

        <div className="relative pl-12">
          {/* Animated timeline line with meteor effect */}
          <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-primary via-teal-primary to-transparent animate-meteor-line"></div>

          {/* Timeline items */}
          <div className="space-y-12">
            {experiences.map((exp, idx) => (
              <TimelineItem key={exp.id} experience={exp} index={idx} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

interface TimelineItemProps {
  experience: ExperienceItem
  index: number
}

function TimelineItem({ experience, index }: TimelineItemProps) {
  return (
    <div className="relative">
      {/* Timeline dot - perfectly aligned */}
      <div className="absolute -left-9 top-0 w-5 h-5 rounded-full bg-purple-primary border-4 border-[#080810] shadow-lg shadow-purple-primary/50 z-10"></div>

      {/* Content card */}
      <div className="bg-gradient-to-br from-white/8 to-white/5 border border-white/10 rounded-lg p-6 hover:border-purple-primary/40 hover:bg-white/10 transition-all duration-300 ml-2">
        {/* Year range */}
        <div className="text-sm font-semibold text-teal-primary mb-2">{experience.years}</div>

        {/* Role */}
        <h3 className="text-2xl font-bold text-white mb-1">{experience.role}</h3>

        {/* Company */}
        <p className="text-purple-accent font-semibold mb-4">{experience.company}</p>

        {/* Description */}
        <p className="text-white/70 mb-4 leading-relaxed">{experience.description}</p>

        {/* Skills tags */}
        <div className="flex flex-wrap gap-2">
          {experience.skills.map((skill) => (
            <span
              key={skill}
              className="px-3 py-1 rounded-full text-xs font-medium bg-teal-primary/20 text-teal-primary border border-teal-primary/40 hover:border-teal-primary/60 transition-colors"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}
