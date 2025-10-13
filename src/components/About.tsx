import React from "react";

const cardClass =
  "rounded-2xl border bg-white/60 dark:bg-zinc-900/60 border-zinc-200 dark:border-zinc-800 backdrop-blur p-5 md:p-6";

export default function About() {
  return (
    <section id="about" className="scroll-mt-24 mx-auto max-w-6xl px-4 py-12">
      <div className={cardClass}>
        <dl className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="rounded-xl bg-zinc-50 dark:bg-zinc-900 p-4 border border-zinc-200 dark:border-zinc-800">
            <dt className="text-sm text-zinc-500">Experience</dt>
            <dd className="text-lg font-semibold">5+ years</dd>
          </div>
          <div className="rounded-xl bg-zinc-50 dark:bg-zinc-900 p-4 border border-zinc-200 dark:border-zinc-800">
            <dt className="text-sm text-zinc-500">Focus</dt>
            <dd className="text-lg font-semibold">Backend · AI/ML</dd>
          </div>
          <div className="rounded-xl bg-zinc-50 dark:bg-zinc-900 p-4 border border-zinc-200 dark:border-zinc-800">
            <dt className="text-sm text-zinc-500">Domains</dt>
            <dd className="text-lg font-semibold">E‑Com · Fintech · HRIS · Gov</dd>
          </div>
        </dl>
      </div>
    </section>
  );
}