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
        <h2 className="text-3xl font-semibold mb-12 text-white/90">Experience</h2>

        {/* Simple list - minimal */}
        <div className="space-y-8">
          {experiences.map((exp) => (
            <div key={exp.id} className="border-l-2 border-white/10 pl-6">
              <div className="text-sm text-white/40 mb-1">{exp.years}</div>
              <h3 className="text-lg font-medium text-white">{exp.role}</h3>
              <p className="text-white/60 mb-3">{exp.company}</p>
              <p className="text-sm text-white/40 mb-3">{exp.description}</p>
              <div className="flex flex-wrap gap-2">
                {exp.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-2 py-1 rounded text-xs text-white/50 bg-white/5"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
