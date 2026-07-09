"use client"

import { useLanguage } from "@/contexts/LanguageContext"
import { t } from "@/data/translations"
import { portfolio } from "@/data/portfolio"

export default function Projects() {
  const { lang } = useLanguage()
  const tx = t[lang].projectsSection
  const projectTranslations = t[lang].projects
  const { projects } = portfolio

  return (
    <section id="proyectos" className="py-16 sm:py-24 border-t border-gray-100">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-10 sm:mb-16">
          <p className="text-xs tracking-widest text-gray-400 uppercase mb-3">{tx.label}</p>
          <h2 className="text-3xl sm:text-4xl font-medium text-gray-900 leading-tight">
            {tx.heading}
          </h2>
          <p className="text-sm text-gray-400 mt-3">
            {tx.subtitle[0]} {tx.subtitle[1]}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => {
            const px = projectTranslations[i] ?? project
            return (
              <a
                key={project.title}
                href={project.url || undefined}
                target={project.url ? "_blank" : undefined}
                rel={project.url ? "noopener noreferrer" : undefined}
                className={`group block${project.url ? "" : " pointer-events-none"}`}
              >
                <div
                  className="rounded-lg mb-4 flex items-center justify-center overflow-hidden transition-transform duration-300 group-hover:-translate-y-1"
                  style={{ background: project.color, aspectRatio: "4 / 3" }}
                >
                  <span className="text-xs tracking-widest uppercase" style={{ color: "rgba(0,0,0,0.25)" }}>
                    {px.title}
                  </span>
                </div>
                <div className="flex items-center justify-between mb-1">
                  <h3 className="text-sm font-medium text-gray-900">{px.title}</h3>
                  <span className="text-xs text-gray-300">{project.year}</span>
                </div>
                <p className="text-xs text-gray-400 leading-relaxed mb-1.5">{px.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-300">{px.category}</span>
                  {project.url && (
                    <span className="text-xs text-gray-400 group-hover:text-amber-500 transition-colors">
                      {tx.viewBtn}
                    </span>
                  )}
                </div>
              </a>
            )
          })}
        </div>
      </div>
    </section>
  )
}
