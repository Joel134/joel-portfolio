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
    <section className="min-h-screen flex items-center justify-center px-6 py-20">
      <div className="max-w-4xl w-full">
        <h2 className="text-5xl font-bold mb-16">Skills & Expertise</h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {skillGroups.map((group) => (
            <div key={group.category} className="space-y-10">
              <h3 className="text-2xl font-bold bg-gradient-purple-teal bg-clip-text text-transparent">
                {group.category}
              </h3>

              <div className="space-y-8">
                {group.skills.map((skill) => (
                  <SkillRow key={skill.name} skill={skill} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function SkillRow({ skill }: { skill: Skill }) {
  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between">
        <span className="text-white font-semibold">{skill.name}</span>
        <span className="text-white/60 text-sm font-medium">{skill.percentage}%</span>
      </div>

      {/* Progress bar with gradient */}
      <div className="h-1.5 rounded-full bg-white/10 overflow-hidden">
        <div
          className="h-full bg-gradient-purple-teal rounded-full transition-all duration-700 ease-out"
          style={{ width: `${skill.percentage}%` }}
        ></div>
      </div>
    </div>
  )
}
