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
    <section id="proyectos" className="py-16 sm:py-28 border-t border-gray-100">
      <div className="max-w-6xl mx-auto px-6">

        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-16 sm:mb-20">
          <div>
            <p className="text-xs tracking-widest text-gray-400 uppercase mb-3">{tx.label}</p>
            <h2 className="text-3xl sm:text-5xl font-medium text-gray-900 leading-tight">
              {tx.heading}
            </h2>
          </div>
          <p className="text-sm text-gray-400 sm:text-right max-w-xs leading-relaxed">
            {tx.subtitle[0]}<br className="hidden sm:block" /> {tx.subtitle[1]}
          </p>
        </div>

        {/* Project list */}
        <div className="border-t border-gray-100">
          {projects.map((project, i) => {
            const px = projectTranslations[i] ?? project
            const isClickable = !!project.url

            return (
              <a
                key={project.title}
                href={project.url || undefined}
                target={project.url ? "_blank" : undefined}
                rel={project.url ? "noopener noreferrer" : undefined}
                className={[
                  "group grid grid-cols-[2rem_1fr_auto] sm:grid-cols-[2rem_1fr_auto_3.5rem_1rem]",
                  "items-start gap-x-4 sm:gap-x-6 py-5 sm:py-6 border-b border-gray-100 transition-all",
                  isClickable
                    ? "cursor-pointer hover:bg-gray-50/80 -mx-6 px-6 rounded-none hover:rounded-xl"
                    : "pointer-events-none",
                ].join(" ")}
              >
                {/* Index */}
                <span className="text-xs font-mono text-gray-300 tabular-nums pt-0.5">
                  {String(i + 1).padStart(2, "0")}
                </span>

                {/* Title + description */}
                <div className="min-w-0">
                  <h3 className="text-sm sm:text-base font-medium text-gray-900 group-hover:text-amber-600 transition-colors leading-snug">
                    {px.title}
                  </h3>
                  <p className="text-xs text-gray-400 mt-1 leading-relaxed">
                    {px.description}
                  </p>
                  <span className="sm:hidden text-xs text-gray-300 mt-1.5 block">
                    {px.category} · {project.year}
                  </span>
                </div>

                {/* Category pill — desktop */}
                <span className="hidden sm:block text-xs text-gray-400 border border-gray-200 rounded-full px-2.5 py-0.5 self-center group-hover:border-amber-200 group-hover:text-amber-600 transition-colors whitespace-nowrap shrink-0">
                  {px.category}
                </span>

                {/* Year — desktop */}
                <span className="hidden sm:block text-xs text-gray-300 self-center text-right shrink-0">
                  {project.year}
                </span>

                {/* Arrow */}
                <span className={[
                  "text-sm self-center text-right shrink-0 transition-all",
                  isClickable
                    ? "text-gray-300 group-hover:text-amber-500 group-hover:translate-x-0.5"
                    : "opacity-0",
                ].join(" ")}>
                  →
                </span>
              </a>
            )
          })}
        </div>

      </div>
    </section>
  )
}
