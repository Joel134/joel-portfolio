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
    <section id="skills" className="py-24 px-6 border-t border-white/5">
      <div className="max-w-4xl w-full">
        <h2 className="text-3xl font-semibold mb-8 text-white/90">Skills</h2>

        {/* Simple clean skill tags */}
        <div className="flex flex-wrap gap-2">
          {skillGroups.flatMap(group => group.skills).map((skill) => (
            <span
              key={skill.name}
              className="px-3 py-1.5 rounded-md bg-white/5 text-white/60 text-sm border border-white/10 hover:border-white/20 transition-all"
            >
              {skill.name}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
