// components/ui/Marquee.tsx
import React from "react";

interface MarqueeProps {
  items: string[];
}

export default function Marquee({ items }: MarqueeProps) {
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
        .animate-marquee { animation: marquee 20s linear infinite; }
      `}</style>
    </div>
  );
}