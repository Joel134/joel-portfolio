'use client'

import { useEffect, useState } from 'react'

interface Skill {
  name: string
  percentage: number
}

interface SkillGroup {
  category: string
  skills: Skill[]
}

export default function Skills() {
  const [skillGroups, setSkillGroups] = useState<SkillGroup[]>([])

  useEffect(() => {
    fetch('/content.json')
      .then((res) => res.json())
      .then((data) => setSkillGroups(data.skills))
  }, [])

  if (!skillGroups.length) return null

  return (
    <section id="skills" className="min-h-screen flex items-center justify-center px-6 py-20">
      <div className="max-w-4xl w-full">
        <h2 className="text-3xl font-semibold mb-12 text-white/90">Skills</h2>

        {/* Simple list - no progress bars */}
        <div className="flex flex-wrap gap-3">
          {skillGroups.flatMap(group => group.skills).map((skill) => (
            <span
              key={skill.name}
              className="px-4 py-2 rounded-md bg-white/5 text-white/70 text-sm border border-white/10"
            >
              {skill.name}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
