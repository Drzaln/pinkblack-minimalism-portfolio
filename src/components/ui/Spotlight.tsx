// components/ui/Spotlight.tsx
"use client"

import React, { useEffect, useRef } from "react";

export default function Spotlight() {
  const ref = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    
    const handler = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      el.style.setProperty("--x", `${x}px`);
      el.style.setProperty("--y", `${y}px`);
    };
    
    window.addEventListener("mousemove", handler);
    return () => window.removeEventListener("mousemove", handler);
  }, []);

  return (
    <div
      ref={ref}
      className="pointer-events-none absolute inset-0 [mask-image:radial-gradient(400px_circle_at_var(--x)_var(--y),white,transparent)]"
    >
      <div className="absolute -inset-24 bg-gradient-to-br from-pink-300/12 via-fuchsia-400/10 to-pink-500/12 blur-3xl" />
    </div>
  );
}