// components/ui/BentoCard.tsx
import React from "react";

interface BentoCardProps {
  title: string;
  desc: string;
  footer?: string;
  href?: string;
}

export default function BentoCard({ title, desc, footer, href }: BentoCardProps) {
  return (
    <a
      href={href || "#"}
      target={href && href !== "#" ? "_blank" : undefined}
      rel={href && href !== "#" ? "noopener noreferrer" : undefined}
      className="group rounded-2xl bg-white dark:bg-neutral-900/60 border border-zinc-200 dark:border-white/10 p-5 relative overflow-hidden transition-all hover:shadow-lg hover:shadow-pink-500/10 hover:border-pink-300 dark:hover:border-pink-500/30"
    >
      {/* Glow effect */}
      <div className="absolute -right-16 -top-16 w-48 h-48 rounded-full bg-pink-500/10 dark:bg-pink-500/10 blur-3xl group-hover:bg-pink-500/20 dark:group-hover:bg-pink-500/15 transition" />
      
      {/* Content */}
      <div className="relative z-10">
        <h3 className="text-lg font-semibold text-zinc-900 dark:text-white group-hover:text-pink-600 dark:group-hover:text-pink-400 transition-colors">
          {title}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-zinc-600 dark:text-neutral-300">
          {desc}
        </p>
        {footer && (
          <div className="mt-4 text-xs text-zinc-500 dark:text-neutral-400">
            {footer}
          </div>
        )}
      </div>
    </a>
  );
}