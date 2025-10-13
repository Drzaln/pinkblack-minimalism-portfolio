import { Experience } from "@/lib/types/experience.types";
import React from "react";

interface ExperienceProps {
  experiences: Experience[];
}

const cardClass =
  "rounded-2xl border bg-white/60 dark:bg-zinc-900/60 border-zinc-200 dark:border-zinc-800 backdrop-blur p-5 md:p-6";

export default function Experiences({ experiences }: ExperienceProps) {
  return (
    <section id="experience" className="scroll-mt-24 mx-auto max-w-6xl px-4 py-12 md:py-16">
      <h2 className="text-xl md:text-2xl font-semibold mb-6">Experiences</h2>
      <div className="relative">
        <div className="absolute left-4 top-0 bottom-0 w-px bg-zinc-200 dark:bg-zinc-800" />
        <ul className="space-y-6">
          {experiences.map((exp) => (
            <li key={exp._id} className="pl-10">
              <div className={`${cardClass} relative`}>
                <span className="absolute -left-6 top-5 h-3 w-3 rounded-full bg-pink-500 ring-4 ring-pink-500/20" />
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2">
                  <div>
                    <h3 className="font-semibold">{exp.title}</h3>
                    <p className="text-sm text-zinc-500">{exp.org}</p>
                  </div>
                  <span className="text-sm text-zinc-500">{exp.period}</span>
                </div>
                <ul className="mt-3 list-disc pl-5 text-sm text-zinc-700 dark:text-zinc-300 space-y-1">
                  {exp.bullets.map((bullet, idx) => (
                    <li key={idx}>{bullet}</li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
