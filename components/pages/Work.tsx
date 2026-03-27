'use client'

import { ExternalLink } from 'lucide-react'
import { useEffect, useState } from 'react'

interface Project {
  id: string
  name: string
  platform: string
  description: string
  featured?: boolean
  tags: string[]
  link?: string
}

export default function Work() {
  const [projects, setProjects] = useState<Project[]>([])

  useEffect(() => {
    fetch('/content.json')
      .then((res) => res.json())
      .then((data) => setProjects(data.projects))
  }, [])

  if (!projects.length) return null

  const featuredProject = projects.find((p) => p.featured)
  const otherProjects = projects.filter((p) => !p.featured)

  return (
    <section id="work" className="py-24 px-6 border-t border-white/5">
      <div className="max-w-5xl w-full">
        <h2 className="text-3xl font-semibold mb-12 text-white/90">Work</h2>

        {/* Project cards with hover effects */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <a
              key={project.id}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group block rounded-xl border border-white/10 hover:border-white/30 bg-white/5 hover:bg-white/[0.08] transition-all duration-300 overflow-hidden"
            >
              {/* Screenshot placeholder */}
              <div className="aspect-video bg-gradient-to-br from-white/10 to-white/5 flex items-center justify-center text-white/20 group-hover:scale-105 transition-transform duration-500">
                {project.name} Preview
              </div>
              
              {/* Content */}
              <div className="p-6">
                <div className="mb-3">
                  <h3 className="text-xl font-semibold text-white group-hover:text-white/90">
                    {project.name}
                  </h3>
                  <span className="text-xs text-white/40 mt-1 block">{project.platform}</span>
                </div>

                <p className="text-sm text-white/50 mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 rounded text-xs text-white/40 bg-white/5"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
