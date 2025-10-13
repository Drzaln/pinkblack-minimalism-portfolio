"use client"

import React from "react";

interface SkillsProps {
  skills: string[];
}

function Marquee({ items }: { items: string[] }) {
  const list = [...items, ...items];
  
  return (
    <div className="overflow-hidden whitespace-nowrap [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
      <div className="inline-flex gap-6 animate-marquee will-change-transform">
        {list.map((t, i) => (
          <span
            key={i}
            className="px-3 py-1 rounded-full border border-white/10 bg-white/5 text-sm text-neutral-200"
          >
            {t}
          </span>
        ))}
      </div>
      <style jsx>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        .animate-marquee { 
          animation: marquee 20s linear infinite; 
        }
      `}</style>
    </div>
  );
}

export default function Skills({ skills }: SkillsProps) {
  return (
    <section className="border-y border-pink-100 dark:border-white/5 bg-gradient-to-r from-pink-700 to-pink-300 dark:from-neutral-950/40 dark:to-neutral-950/40">
      <div className="mx-auto max-w-6xl px-4 py-4">
        <Marquee items={skills} />
      </div>
    </section>
  );
}