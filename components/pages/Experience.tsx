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
    <section id="experience" className="py-24 px-6 border-t border-white/5">
      <div className="max-w-3xl w-full">
        <h2 className="text-3xl font-semibold mb-12 text-white/90">Experience</h2>

        {/* Clean experience list */}
        <div className="space-y-10">
          {experiences.map((exp) => (
            <div key={exp.id} className="relative pl-8 border-l border-white/10">
              <div className="absolute -left-1.5 top-0 w-3 h-3 rounded-full bg-white/20"></div>
              
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
