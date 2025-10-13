import { Education } from "@/lib/types/education.types";
import React from "react";

interface EducationProps {
  educations: Education[];
}

const cardClass =
  "rounded-2xl border bg-white/60 dark:bg-zinc-900/60 border-zinc-200 dark:border-zinc-800 backdrop-blur p-5 md:p-6";

export default function Educations({ educations }: EducationProps) {
  return (
    <section id="education" className="scroll-mt-24 mx-auto max-w-6xl px-4 py-12 md:py-16">
      <h2 className="text-xl md:text-2xl font-semibold mb-6">Educations</h2>
      <div className="grid gap-4 sm:grid-cols-2">
        {educations.map((ed) => (
          <div key={ed._id} className={cardClass}>
            <div className="flex items-start justify-between">
              <div>
                <h3 className="font-semibold">{ed.title}</h3>
                <p className="text-sm text-zinc-500">{ed.org}</p>
              </div>
              <span className="text-sm text-zinc-500 whitespace-nowrap ml-4">{ed.period}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}